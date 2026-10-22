import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export type FormType = 'school-concert' | 'contact' | 'youth-ensemble' | 'sponsor' | 'conductor-workshop' | 'newsletter';
export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

/**
 * Posts a form to /api/submit. Status becomes 'success' only after a 2xx response;
 * on any failure the caller keeps its field state so nothing the user typed is lost.
 */
export function useFormSubmit(formType: FormType) {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<FormStatus>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>, fields: Record<string, string | boolean>) => {
    e.preventDefault();
    if (status === 'sending') return;
    const website = String(new FormData(e.currentTarget).get('website') ?? '');
    setStatus('sending');
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, formType, lang, website }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return { status, sending: status === 'sending', failed: status === 'error', submitted: status === 'success', submit };
}
