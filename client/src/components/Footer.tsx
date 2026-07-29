/*
 * IOU Footer — Refined Civic Warmth
 * Deep teal background, newsletter opt-in, social links, GDPR links
 */
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[oklch(0.22_0.05_195)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://pub-2d471b7f52394f9fb5dcfa8dae1e815b.r2.dev/images/iou-logo.png" alt="IOU Logo" className="h-10 w-10 object-contain brightness-200" />
              <div className="leading-tight">
                <div className="font-display font-semibold text-sm text-white">Internationaal Orkest</div>
                <div className="font-display font-semibold text-sm tracking-widest uppercase text-[oklch(0.72_0.12_75)]">Utrecht</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {t(
                'Inspiring children through the power of symphonic music. Free youth ensembles and interactive school concerts across the Netherlands.',
                'Kinderen inspireren door de kracht van symfonische muziek. Gratis jeugdensembles en interactieve schoolconcerten door heel Nederland.'
              )}
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
                className="p-2 rounded-full bg-white/10 hover:bg-[oklch(0.72_0.12_75)] transition-colors duration-150" aria-label="Email">
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
              <li><Link href="/conductor-workshops" className="hover:text-white transition-colors no-underline">{t('Conductor Workshops', 'Dirigeerworkshops')}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors no-underline">{t('About the Orchestra', 'Over het Orkest')}</Link></li>
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
              <li><Link href="/sponsors" className="hover:text-white transition-colors no-underline">{t('Become a Sponsor', 'Word Sponsor')}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors no-underline">{t('Contact Us', 'Neem Contact Op')}</Link></li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-white/50 mb-1">{t('Registered at', 'Geregistreerd bij')}</p>
              <p className="text-xs text-white/70">{t('Dutch Chamber of Commerce', 'Kamer van Koophandel Nederland')}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-widest text-[oklch(0.72_0.12_75)] mb-4">
              {t('Stay Updated', 'Blijf Op De Hoogte')}
            </h4>
            <p className="text-sm text-white/70 mb-4">
              {t(
                'Receive updates on our performances, youth programs, and community news.',
                'Ontvang updates over onze voorstellingen, jeugdprogramma\'s en nieuws.'
              )}
            </p>
            {subscribed ? (
              <p className="text-sm text-[oklch(0.72_0.12_75)] font-medium">
                {t('Thank you for subscribing!', 'Bedankt voor uw aanmelding!')}
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('Your email address', 'Uw e-mailadres')}
                  required
                  className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
                />
                <label className="flex items-start gap-2 text-xs text-white/50 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 rounded" />
                  <span>{t('I agree to receive periodic updates (GDPR compliant)', 'Ik ga akkoord met het ontvangen van periodieke updates (AVG-conform)')}</span>
                </label>
                <button type="submit" className="btn-gold text-sm py-2 mt-1">
                  {t('Subscribe', 'Aanmelden')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Stichting Internationaal Orkest Utrecht. {t('All rights reserved.', 'Alle rechten voorbehouden.')}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors no-underline">{t('Privacy Policy', 'Privacybeleid')}</Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors no-underline">{t('Cookie Policy', 'Cookiebeleid')}</Link>
            <a href="mailto:info@internationaalorkest.nl" className="hover:text-white/70 transition-colors no-underline">info@internationaalorkest.nl</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
