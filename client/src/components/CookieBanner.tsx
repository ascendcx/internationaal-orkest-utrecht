import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'wouter';

function saveConsent(value: string) {
  try {
    localStorage.setItem('iou-cookie-consent', value);
  } catch {
    // Storage blocked. The choice only applies to this visit.
  }
}

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem('iou-cookie-consent');
    } catch {
      // Storage blocked. Show the banner on every visit.
    }
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    saveConsent('all');
    setVisible(false);
  };
  const essentialOnly = () => {
    saveConsent('essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[oklch(0.22_0.05_195)] text-white shadow-2xl">
      <div className="container py-2.5 sm:py-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4">
        <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
          <span className="sm:hidden">{t('We use cookies. ', 'Wij gebruiken cookies. ')}</span>
          <span className="hidden sm:inline">
            {t(
              'We use cookies to improve your experience. Essential cookies are always on. You can choose whether to allow analytics cookies. ',
              'Wij gebruiken cookies om uw ervaring te verbeteren. Essentiële cookies staan altijd aan. U kunt zelf kiezen of u analytische cookies toestaat. '
            )}
          </span>
          <Link href="/privacy" className="text-[oklch(0.72_0.12_75)] underline">{t('Privacy & Cookie Policy', 'Privacy- en cookiebeleid')}</Link>.
        </p>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3 sm:shrink-0">
          <button onClick={essentialOnly} className="btn-secondary text-xs sm:text-sm min-h-9 sm:min-h-11 py-1.5 sm:py-2 px-3 sm:px-4 justify-center border-white/30 text-white hover:bg-white/10">
            {t('Essential Only', 'Alleen essentieel')}
          </button>
          <button onClick={acceptAll} className="btn-gold text-xs sm:text-sm min-h-9 sm:min-h-11 py-1.5 sm:py-2 px-3 sm:px-4 justify-center">
            {t('Accept All', 'Alles accepteren')}
          </button>
        </div>
      </div>
    </div>
  );
}
