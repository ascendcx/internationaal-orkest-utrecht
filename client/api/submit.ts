/*
 * Form submission endpoint (Vercel serverless function).
 * Validates the payload and emails it through the Resend REST API.
 *
 * Environment variables (never hardcoded, never logged):
 *   RESEND_API_KEY   Resend API key
 *   FORM_TO_EMAIL    Recipient address(es), comma separated
 *   FORM_FROM_EMAIL  Verified sender address, e.g. "IOU Website <forms@yourdomain>"
 *
 * Nothing the visitor typed is ever logged or echoed back in a response.
 */

type Req = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
  socket?: { remoteAddress?: string };
};
type Res = {
  status(code: number): Res;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
};

type FieldKind = 'text' | 'email' | 'long' | 'age' | { oneOf: readonly string[] };
type Spec = { required: Record<string, FieldKind>; optional: Record<string, FieldKind>; label: string };

const CONTACT_INTERESTS = ['concert', 'concert-ensemble', 'parent', 'sponsor', 'workshops', 'other'] as const;
const YOUTH_INTERESTS = ['undecided', 'choir', 'strings', 'woodwinds', 'brass', 'percussion'] as const;

const SPECS: Record<string, Spec> = {
  'school-concert': {
    label: 'School concert inquiry',
    required: { name: 'text', school: 'text', email: 'email', interest: { oneOf: ['concert', 'concert-ensemble'] } },
    optional: { role: 'text', phone: 'text', dates: 'text', message: 'long' },
  },
  contact: {
    label: 'Contact message',
    required: { name: 'text', email: 'email', subject: 'text', interest: { oneOf: CONTACT_INTERESTS }, message: 'long' },
    optional: {},
  },
  'youth-ensemble': {
    label: 'Youth ensemble interest',
    required: { parentName: 'text', childName: 'text', childAge: 'age', email: 'email' },
    optional: { school: 'text', phone: 'text', interest: { oneOf: YOUTH_INTERESTS } },
  },
  sponsor: {
    label: 'Sponsor inquiry',
    required: { name: 'text', company: 'text', email: 'email' },
    optional: { phone: 'text', message: 'long' },
  },
  'conductor-workshop': {
    label: 'Conductor workshop waitlist',
    required: { name: 'text', email: 'email' },
    optional: { role: 'text', message: 'long' },
  },
  newsletter: {
    label: 'Newsletter signup',
    required: { email: 'email' },
    optional: { source: { oneOf: ['footer', 'support'] } },
  },
};

// Fields every form type may send besides its own.
const COMMON_FIELDS = ['formType', 'lang', 'website', 'newsletter'];

const MAX_TEXT = 200;
const MAX_LONG = 5000;
const MAX_EMAIL = 254;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]+$/;

// In-memory throttle. Limits: state is per serverless instance and is lost on cold
// start, so it only slows casual abuse. It is not a substitute for Vercel Firewall rate limits.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

function throttled(ip: string, now: number): boolean {
  if (hits.size > 5000) {
    hits.forEach((v, k) => {
      if (v.resetAt <= now) hits.delete(k);
    });
  }
  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

function clientIp(req: Req): string {
  const forwarded = req.headers['x-forwarded-for'];
  const first = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0]?.trim();
  return first || req.socket?.remoteAddress || 'unknown';
}

function parseBody(body: unknown): Record<string, unknown> | null {
  let value = body;
  if (typeof value === 'string') {
    try {
      value = JSON.parse(value);
    } catch {
      return null;
    }
  }
  return value && typeof value === 'object' && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
}

function checkValue(kind: FieldKind, raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const value = raw.trim();
  if (kind === 'email') return value.length <= MAX_EMAIL && EMAIL_RE.test(value) ? value : null;
  if (kind === 'age') return /^\d{1,2}$/.test(value) ? value : null;
  if (kind === 'long') return value.length <= MAX_LONG ? value : null;
  if (kind === 'text') return value.length <= MAX_TEXT ? value : null;
  return kind.oneOf.includes(value) ? value : null;
}

// Strip line breaks so a field can never inject extra header lines into the subject.
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim().slice(0, 100);

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  school: 'School',
  role: 'Role',
  email: 'Email',
  phone: 'Phone',
  dates: 'Preferred dates',
  interest: 'Interest',
  subject: 'Subject',
  message: 'Message',
  parentName: 'Parent / guardian name',
  childName: 'Child name',
  childAge: 'Child age',
  company: 'Company',
  source: 'Signup location',
};

function subjectFor(type: string, v: Record<string, string>): string {
  const prefix = '[IOU website]';
  switch (type) {
    case 'school-concert':
      return `${prefix} School concert inquiry: ${oneLine(v.school)}`;
    case 'contact':
      return `${prefix} Contact message: ${oneLine(v.subject)}`;
    case 'youth-ensemble':
      return `${prefix} Youth ensemble interest: ${oneLine(v.parentName)}`;
    case 'sponsor':
      return `${prefix} Sponsor inquiry: ${oneLine(v.company)}`;
    case 'conductor-workshop':
      return `${prefix} Conductor workshop waitlist: ${oneLine(v.name)}`;
    default:
      return `${prefix} Newsletter signup`;
  }
}

function bodyFor(spec: Spec, v: Record<string, string>, lang: string, optIn: boolean): string {
  const lines = [spec.label, ''];
  for (const key of [...Object.keys(spec.required), ...Object.keys(spec.optional)]) {
    if (v[key]) lines.push(`${FIELD_LABELS[key] ?? key}: ${v[key]}`);
  }
  lines.push('', `Page language: ${lang.toUpperCase()}`, `Email updates: ${optIn ? 'yes' : 'no'}`);
  return lines.join('\n');
}

export default async function handler(req: Req, res: Res): Promise<void> {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.FORM_TO_EMAIL ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  const from = process.env.FORM_FROM_EMAIL;
  const missing = [!apiKey && 'RESEND_API_KEY', !to.length && 'FORM_TO_EMAIL', !from && 'FORM_FROM_EMAIL'].filter(Boolean);
  if (missing.length) {
    console.error(`submit: missing environment variable(s): ${missing.join(', ')}`);
    res.status(500).json({ error: 'Server error' });
    return;
  }

  if (throttled(clientIp(req), Date.now())) {
    res.status(429).json({ error: 'Too many requests' });
    return;
  }

  const data = parseBody(req.body);
  if (!data) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  // Honeypot: real visitors never fill this. Pretend success, send nothing.
  if (typeof data.website === 'string' && data.website.length > 0) {
    res.status(200).json({ ok: true });
    return;
  }

  const type = typeof data.formType === 'string' ? data.formType : '';
  const spec = Object.prototype.hasOwnProperty.call(SPECS, type) ? SPECS[type] : undefined;
  if (!spec) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  const allowed = new Set([...COMMON_FIELDS, ...Object.keys(spec.required), ...Object.keys(spec.optional)]);
  if (Object.keys(data).some((k) => !allowed.has(k))) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  const values: Record<string, string> = {};
  for (const [key, kind] of Object.entries(spec.required)) {
    const checked = checkValue(kind, data[key]);
    if (!checked) {
      res.status(400).json({ error: 'Invalid request' });
      return;
    }
    values[key] = checked;
  }
  for (const [key, kind] of Object.entries(spec.optional)) {
    const raw = data[key];
    if (raw === undefined || raw === '') continue;
    const checked = checkValue(kind, raw);
    if (checked === null) {
      res.status(400).json({ error: 'Invalid request' });
      return;
    }
    if (checked) values[key] = checked;
  }

  if (data.lang !== undefined && data.lang !== 'en' && data.lang !== 'nl') {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }
  if (data.newsletter !== undefined && typeof data.newsletter !== 'boolean') {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }
  const optIn = data.newsletter === true;
  // A newsletter signup is only valid with the box explicitly ticked.
  if (type === 'newsletter' && !optIn) {
    res.status(400).json({ error: 'Invalid request' });
    return;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        reply_to: values.email,
        subject: subjectFor(type, values),
        text: bodyFor(spec, values, data.lang === 'nl' ? 'nl' : 'en', optIn),
      }),
    });
    if (!response.ok) {
      console.error(`submit: email provider returned status ${response.status}`);
      res.status(502).json({ error: 'Server error' });
      return;
    }
  } catch {
    console.error('submit: email provider request failed');
    res.status(502).json({ error: 'Server error' });
    return;
  }

  res.status(200).json({ ok: true });
}
