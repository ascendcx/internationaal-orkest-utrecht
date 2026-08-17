import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useEffect } from 'react';

export default function Privacy() {
  const { t } = useLanguage();
  useSEO({
    title: 'Privacy & Cookie Policy | Internationaal Orkest Utrecht',
    titleNl: 'Privacy- en Cookiebeleid | Internationaal Orkest Utrecht',
    description: 'Read the Privacy & Cookie Policy for Internationaal Orkest Utrecht.',
    descriptionNl: 'Lees het Privacy- en Cookiebeleid van Internationaal Orkest Utrecht.',
    path: '/privacy',
    image: 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-hero.jpg',
  });

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      // "privacy-policy" is the top hero section, already positioned to clear
      // the fixed nav via the page's pt-20 wrapper — treat it as "scroll to top"
      // rather than scrollIntoView, which would overshoot by the nav's height.
      const el = hash && hash !== 'privacy-policy' ? document.getElementById(hash) : null;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: hash ? 'smooth' : 'auto' });
      }
    };
    scrollToHash();
    window.addEventListener('pushState', scrollToHash);
    window.addEventListener('popstate', scrollToHash);
    return () => {
      window.removeEventListener('pushState', scrollToHash);
      window.removeEventListener('popstate', scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section id="privacy-policy" className="bg-[oklch(0.95_0.02_195)] py-16">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h1 className="font-display text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            {t('Privacy & Cookie Policy', 'Privacy- en Cookiebeleid')}
          </h1>
          <p className="text-[oklch(0.52_0.015_60)]">{t('Last updated: July 2026', 'Laatst bijgewerkt: Juli 2026')}</p>
        </div>
      </section>
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl prose prose-slate">
          <div className="space-y-8 text-[oklch(0.42_0.01_60)] leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">{t('1. Who We Are', '1. Wie Wij Zijn')}</h2>
              <p>{t('Stichting Internationaal Orkest Utrecht is a nonprofit foundation registered at the Dutch Chamber of Commerce. We are responsible for the personal data you share with us through this website.', 'Stichting Internationaal Orkest Utrecht is een non-profitstichting geregistreerd bij de Kamer van Koophandel. Wij zijn verantwoordelijk voor de persoonsgegevens die u via deze website met ons deelt.')}</p>
              <p className="mt-2">{t('Contact: info@internationaalorkest.nl', 'Contact: info@internationaalorkest.nl')}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">{t('2. What Data We Collect', '2. Welke Gegevens Wij Verzamelen')}</h2>
              <p>{t('We collect personal data only when you voluntarily provide it through our contact forms, enrollment forms, or newsletter sign-up. This may include your name, email address, phone number, and the name of your school or organization.', 'Wij verzamelen persoonsgegevens alleen wanneer u deze vrijwillig verstrekt via onze contactformulieren, inschrijvingsformulieren of nieuwsbriefaanmelding. Dit kan uw naam, e-mailadres, telefoonnummer en de naam van uw school of organisatie omvatten.')}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">{t('3. How We Use Your Data', '3. Hoe Wij Uw Gegevens Gebruiken')}</h2>
              <p>{t('Your data is used solely to respond to your inquiry, process your registration, or send you updates you have opted into. We do not sell, rent, or share your personal data with third parties for marketing purposes.', 'Uw gegevens worden uitsluitend gebruikt om te reageren op uw vraag, uw inschrijving te verwerken of u updates te sturen waarvoor u zich heeft aangemeld. Wij verkopen, verhuren of delen uw persoonsgegevens niet met derden voor marketingdoeleinden.')}</p>
            </div>
            <div id="cookie-policy" className="scroll-mt-20">
              <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">{t('4. Cookies', '4. Cookies')}</h2>
              <p>{t('This website uses functional cookies to ensure proper operation and analytical cookies to understand how visitors use our site. We do not use advertising or tracking cookies. You can manage your cookie preferences at any time through your browser settings.', 'Deze website gebruikt functionele cookies om een goede werking te garanderen en analytische cookies om te begrijpen hoe bezoekers onze site gebruiken. Wij gebruiken geen advertentie- of trackingcookies. U kunt uw cookievoorkeuren op elk moment beheren via uw browserinstellingen.')}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">{t('5. Your Rights (GDPR)', '5. Uw Rechten (AVG)')}</h2>
              <p>{t('Under the General Data Protection Regulation (GDPR), you have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at info@internationaalorkest.nl.', 'Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u het recht om uw persoonsgegevens op elk moment in te zien, te corrigeren of te verwijderen. Om deze rechten uit te oefenen, neem contact met ons op via info@internationaalorkest.nl.')}</p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">{t('6. Data Retention', '6. Bewaartermijn')}</h2>
              <p>{t('We retain your personal data only for as long as necessary to fulfill the purpose for which it was collected, or as required by law. Newsletter subscribers can unsubscribe at any time.', 'Wij bewaren uw persoonsgegevens alleen zo lang als nodig is om het doel waarvoor ze zijn verzameld te vervullen, of zoals wettelijk vereist. Nieuwsbriefabonnees kunnen zich op elk moment uitschrijven.')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

