/*
 * IOU Footer — Refined Civic Warmth
 * Deep teal background, newsletter opt-in, social links, GDPR links
 */
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { mediaUrl } from '@/lib/media';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Honeypot, FormError } from '@/components/FormParts';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const { sending, failed, submitted: subscribed, submit } = useFormSubmit('newsletter');
  const [consent, setConsent] = useState(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => submit(e, { email, newsletter: consent, source: 'footer' });

  return (
    <footer className="bg-[oklch(0.22_0.05_195)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={mediaUrl('images/iou-logo.png')} alt={t('IOU Logo', 'IOU-logo')} className="h-10 w-10 object-contain brightness-200" />
              <div className="leading-tight">
                <div className="font-display font-semibold text-sm text-white">Internationaal Orkest</div>
                <div className="font-display font-semibold text-sm tracking-widest uppercase text-[oklch(0.72_0.12_75)]">Utrecht</div>
                <div className="text-sm font-light tracking-wide text-white/60 mt-0.5">{t('in partnership with local choirs', 'in samenwerking met lokale koren')}</div>
              </div>
            </div>
            <p className="mb-6">
              <span className="block text-sm text-white/70 leading-relaxed">
                {t('All children in the Netherlands united through music.', 'Alle kinderen in Nederland verenigd door muziek.')}
              </span>
              <span className="block text-sm font-light text-white/60 leading-relaxed mt-1.5">
                {t('Free concerts, free ensembles, lasting bonds.', 'Gratis concerten, gratis ensembles, blijvende banden.')}
              </span>
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/internationaalorkestutrecht/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.12_75)] transition-colors duration-150" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/InternationaalOrkestUtrecht" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.12_75)] transition-colors duration-150" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.linkedin.com/in/internationaalorkestutrecht" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.12_75)] transition-colors duration-150" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:info@internationaalorkest.nl"
                className="p-2 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.12_75)] transition-colors duration-150" aria-label={t('Email', 'E-mail')}>
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.12_75)] mb-4">
              {t('Programs', 'Programma\'s')}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/school-concerts" className="hover:text-white transition-colors no-underline">{t('School Concerts', 'Schoolconcerten')}</Link></li>
              <li><Link href="/youth-ensembles" className="hover:text-white transition-colors no-underline">{t('Youth Ensembles', 'Jeugdensembles')}</Link></li>
              <li><Link href="/conductor-workshops" className="hover:text-white transition-colors no-underline">{t('Conductor Workshops', 'Dirigentenworkshops')}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors no-underline">{t('About the Orchestra', 'Over het orkest')}</Link></li>
              <li><Link href="/sponsors" className="hover:text-white transition-colors no-underline">{t('Sponsors', 'Sponsors')}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.12_75)] mb-4">
              {t('Support', 'Steun')}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/support" className="hover:text-white transition-colors no-underline">{t('Donate', 'Doneren')}</Link></li>
              <li><Link href="/sponsors" className="hover:text-white transition-colors no-underline">{t('Become a Sponsor', 'Word sponsor')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors no-underline">{t('Contact Us', 'Neem contact op')}</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-white/70 mb-1">{t('Registered at', 'Geregistreerd bij')}</p>
              <p className="text-sm text-white/70">{t('Dutch Chamber of Commerce', 'Kamer van Koophandel Nederland')}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.12_75)] mb-4">
              {t('Stay Updated', 'Blijf op de hoogte')}
            </h4>
            <p className="text-sm text-white/70 mb-4">
              {t(
                'Receive updates on our performances, youth programs, and community news.',
                'Ontvang updates over onze voorstellingen, jeugdprogramma\'s en nieuws.'
              )}
            </p>
            {subscribed ? (
              <p role="status" className="text-sm text-[oklch(0.72_0.12_75)] font-medium">
                {t('Thank you. You are on our list.', 'Dank u wel. U staat op onze lijst.')}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('Your email address', 'Uw e-mailadres')}
                  required
                  className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 text-sm focus:border-[oklch(0.72_0.12_75)] transition-colors"
                />
                <label className="flex items-start gap-2 text-sm text-white/70 cursor-pointer">
                  <input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 rounded" />
                  <span>{t('I agree to receive periodic updates', 'Ik ga akkoord met het ontvangen van periodieke updates')}</span>
                </label>
                <FormError show={failed} light />
                <button type="submit" disabled={sending} className="btn-gold text-sm py-2 mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
                  {t('Subscribe', 'Aanmelden')}
                </button>
                <Honeypot />
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Stichting Internationaal Orkest Utrecht. {t('All rights reserved.', 'Alle rechten voorbehouden.')}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="/privacy#privacy-policy" className="hover:text-white transition-colors no-underline whitespace-nowrap">{t('Privacy Policy', 'Privacybeleid')}</Link>
            <Link href="/privacy#cookie-policy" className="hover:text-white transition-colors no-underline whitespace-nowrap">{t('Cookie Policy', 'Cookiebeleid')}</Link>
            <a href="mailto:info@internationaalorkest.nl" className="hover:text-white transition-colors no-underline whitespace-nowrap">info@internationaalorkest.nl</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
