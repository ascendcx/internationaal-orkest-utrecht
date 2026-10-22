import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import handler from './submit';

const KEY = 'test-secret-key-123';
let ipCounter = 0;

function makeRes() {
  const res = {
    code: 0,
    payload: undefined as unknown,
    status(c: number) {
      res.code = c;
      return res;
    },
    json(b: unknown) {
      res.payload = b;
    },
    setHeader() {},
  };
  return res;
}

async function post(body: unknown, ip = `10.0.0.${++ipCounter}`) {
  const res = makeRes();
  await handler({ method: 'POST', headers: { 'x-forwarded-for': ip }, body }, res);
  return res;
}

const VALID: Record<string, Record<string, unknown>> = {
  'school-concert': { name: 'A', school: 'Test School', email: 'a@example.com', interest: 'concert', newsletter: true, lang: 'nl' },
  contact: { name: 'A', email: 'a@example.com', subject: 'Hi', interest: 'other', message: 'Hello' },
  'youth-ensemble': { parentName: 'P', childName: 'C', childAge: '9', email: 'a@example.com', interest: 'choir' },
  sponsor: { name: 'A', company: 'Co', email: 'a@example.com' },
  'conductor-workshop': { name: 'A', email: 'a@example.com', message: '' },
  newsletter: { email: 'a@example.com', newsletter: true, source: 'footer' },
};

let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  process.env.RESEND_API_KEY = KEY;
  process.env.FORM_TO_EMAIL = 'one@example.com, two@example.com';
  process.env.FORM_FROM_EMAIL = 'IOU <forms@example.com>';
  fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200 });
  vi.stubGlobal('fetch', fetchMock);
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
  delete process.env.RESEND_API_KEY;
  delete process.env.FORM_TO_EMAIL;
  delete process.env.FORM_FROM_EMAIL;
});

describe('submit handler', () => {
  for (const [formType, fields] of Object.entries(VALID)) {
    it(`sends exactly one email for a valid ${formType}`, async () => {
      const res = await post({ formType, ...fields });
      expect(res.code).toBe(200);
      expect(fetchMock).toHaveBeenCalledTimes(1);
      const [url, init] = fetchMock.mock.calls[0];
      expect(url).toBe('https://api.resend.com/emails');
      const sent = JSON.parse(init.body);
      expect(sent.to).toEqual(['one@example.com', 'two@example.com']);
      expect(sent.reply_to).toBe('a@example.com');
      expect(sent.subject.startsWith('[IOU website]')).toBe(true);
      expect(sent.text).toMatch(/Email updates: (yes|no)/);
      expect(JSON.stringify(res.payload)).not.toContain(KEY);
    });
  }

  it('uses the school name in the subject and reports opt-in and language', async () => {
    await post({ formType: 'school-concert', ...VALID['school-concert'] });
    const sent = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(sent.subject).toBe('[IOU website] School concert inquiry: Test School');
    expect(sent.text).toContain('Page language: NL');
    expect(sent.text).toContain('Email updates: yes');
  });

  it('counts only a ticked box as email updates yes', async () => {
    await post({ formType: 'sponsor', ...VALID.sponsor, newsletter: false });
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).text).toContain('Email updates: no');
  });

  it('returns 400 for missing required fields, bad email, unknown fields and unknown type', async () => {
    const bad = [
      { formType: 'contact', name: 'A', email: 'a@example.com' },
      { formType: 'sponsor', ...VALID.sponsor, email: 'not-an-email' },
      { formType: 'sponsor', ...VALID.sponsor, extra: 'x' },
      { formType: 'nope', ...VALID.sponsor },
      { formType: 'contact', ...VALID.contact, message: 'x'.repeat(5001) },
      { formType: 'newsletter', email: 'a@example.com', newsletter: false },
    ];
    for (const body of bad) {
      const res = await post(body);
      expect(res.code).toBe(400);
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns 200 and sends nothing when the honeypot is filled', async () => {
    const res = await post({ formType: 'sponsor', ...VALID.sponsor, website: 'http://spam.example' });
    expect(res.code).toBe(200);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns 500 and logs only the variable name when env vars are missing', async () => {
    delete process.env.RESEND_API_KEY;
    const res = await post({ formType: 'sponsor', ...VALID.sponsor });
    expect(res.code).toBe(500);
    expect(fetchMock).not.toHaveBeenCalled();
    const logged = JSON.stringify((console.error as unknown as ReturnType<typeof vi.fn>).mock.calls);
    expect(logged).toContain('RESEND_API_KEY');
    expect(logged).not.toContain(KEY);
    expect(JSON.stringify(res.payload)).not.toContain('RESEND');
  });

  it('returns 502 without leaking details when the email provider fails', async () => {
    fetchMock.mockResolvedValue({ ok: false, status: 422 });
    const res = await post({ formType: 'sponsor', ...VALID.sponsor });
    expect(res.code).toBe(502);
    expect(JSON.stringify(res.payload)).not.toContain(KEY);
  });

  it('throttles repeated requests from one IP', async () => {
    const codes: number[] = [];
    for (let i = 0; i < 7; i++) codes.push((await post({ formType: 'sponsor', ...VALID.sponsor }, '9.9.9.9')).code);
    expect(codes.slice(0, 5).every((c) => c === 200)).toBe(true);
    expect(codes[6]).toBe(429);
  });

  it('rejects non-POST requests', async () => {
    const res = makeRes();
    await handler({ method: 'GET', headers: {} }, res);
    expect(res.code).toBe(405);
  });
});
