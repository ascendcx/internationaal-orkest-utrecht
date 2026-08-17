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

  const acceptAll = () => {
    localStorage.setItem('iou-cookie-consent', 'all');
    setVisible(false);
  };
  const essentialOnly = () => {
    localStorage.setItem('iou-cookie-consent', 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[oklch(0.22_0.05_195)] text-white shadow-2xl">
      <div className="container py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-white/80 max-w-2xl">
          {t(
            'We use cookies to improve your experience. Essential cookies are always on. You can choose whether to allow analytics cookies. ',
            'Wij gebruiken cookies om uw ervaring te verbeteren. Essentiële cookies staan altijd aan. U kunt zelf kiezen of u analytische cookies toestaat. '
          )}
          <Link href="/privacy" className="text-[oklch(0.72_0.12_75)] underline">{t('Privacy & Cookie Policy', 'Privacy- en Cookiebeleid')}</Link>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={essentialOnly} className="btn-secondary text-sm py-2 px-4 border-white/30 text-white hover:bg-white/10">
            {t('Essential Only', 'Alleen Essentieel')}
          </button>
          <button onClick={acceptAll} className="btn-gold text-sm py-2 px-4">
            {t('Accept All', 'Alles Accepteren')}
          </button>
        </div>
      </div>
    </div>
  );
}
