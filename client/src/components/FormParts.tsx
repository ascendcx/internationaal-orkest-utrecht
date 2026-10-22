import { useLanguage } from '@/contexts/LanguageContext';

/** Hidden spam trap. Off screen, skipped by keyboard and screen readers. Real users never fill it. */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}

export function FormError({ show, light = false }: { show: boolean; light?: boolean }) {
  const { t } = useLanguage();
  if (!show) return null;
  return (
    <p role="alert" className={`text-sm font-medium ${light ? 'text-white' : 'text-[oklch(0.45_0.18_27)]'}`}>
      {t('Something went wrong. Please try again, or email us directly.', 'Er ging iets mis. Probeer het opnieuw of stuur ons rechtstreeks een e-mail.')}{' '}
      <a href="mailto:info@internationaalorkest.nl" className="underline">info@internationaalorkest.nl</a>
    </p>
  );
}
