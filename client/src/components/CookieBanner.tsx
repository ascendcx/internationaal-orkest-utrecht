import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('iou-cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('iou-cookie-consent', 'accepted');
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem('iou-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[oklch(0.22_0.05_195)] text-white shadow-2xl">
      <div className="container py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-white/80 max-w-2xl">
          {t(
            'We use cookies to improve your experience on our site. By continuing, you agree to our ',
            'Wij gebruiken cookies om uw ervaring op onze site te verbeteren. Door verder te gaan, gaat u akkoord met ons '
          )}
          <Link href="/privacy" className="text-[oklch(0.72_0.12_75)] underline">{t('Privacy Policy', 'Privacybeleid')}</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={decline} className="btn-secondary text-sm py-2 px-4 border-white/30 text-white hover:bg-white/10">
            {t('Decline', 'Weigeren')}
          </button>
          <button onClick={accept} className="btn-gold text-sm py-2 px-4">
            {t('Accept', 'Accepteren')}
          </button>
        </div>
      </div>
    </div>
  );
}
