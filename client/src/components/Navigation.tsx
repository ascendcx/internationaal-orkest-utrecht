/*
 * IOU Navigation — Refined Civic Warmth
 * Scroll-aware header: transparent over hero → solid white/90 backdrop-blur on scroll
 * Language toggle EN/NL in top-right utility area
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', en: 'Home', nl: 'Home' },
  { href: '/about', en: 'About', nl: 'Over Ons' },
  { href: '/school-concerts', en: 'School Concerts', nl: 'Schoolconcerten' },
  { href: '/youth-ensembles', en: 'Youth Ensembles', nl: 'Jeugdensembles' },
  { href: '/conductor-workshops', en: 'Conductor Workshops', nl: 'Dirigeerworkshops' },
  { href: '/sponsors', en: 'Sponsors', nl: 'Sponsors' },
  { href: '/contact', en: 'Contact', nl: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const [location] = useLocation();
  const isHome = location === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const headerBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md shadow-sm';
  const textColor = isHome && !scrolled ? 'text-white' : 'text-[oklch(0.22_0.01_60)]';
  const logoColor = isHome && !scrolled ? 'text-white' : 'text-[oklch(0.38_0.09_195)]';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 no-underline">
              <img
                src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-logo.png"
                alt="IOU Logo"
                className="h-9 w-9 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className={`font-display font-semibold text-sm tracking-wide ${logoColor} transition-colors duration-300`}>
                  Internationaal Orkest
                </span>
                <span className={`font-display font-semibold text-sm tracking-widest uppercase ${logoColor} transition-colors duration-300`}>
                  Utrecht
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.slice(1, -1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 no-underline
                    ${location === item.href
                      ? 'text-[oklch(0.38_0.09_195)] bg-[oklch(0.95_0.02_195)]'
                      : `${textColor} hover:text-[oklch(0.38_0.09_195)] hover:bg-[oklch(0.95_0.02_195)]`
                    }`}
                >
                  {t(item.en, item.nl)}
                </Link>
              ))}
            </nav>

            {/* Right: Lang Toggle + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Toggle */}
              <div className={`flex items-center text-xs font-medium rounded-full border overflow-hidden ${isHome && !scrolled ? 'border-white/40' : 'border-[oklch(0.88_0.015_195)]'}`}>
                <button
                  onClick={() => setLang('nl')}
                  className={`px-3 py-1.5 transition-colors duration-150 ${lang === 'nl' ? 'bg-[oklch(0.38_0.09_195)] text-white' : `${textColor} hover:bg-[oklch(0.95_0.02_195)]`}`}
                >
                  NL
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 transition-colors duration-150 ${lang === 'en' ? 'bg-[oklch(0.38_0.09_195)] text-white' : `${textColor} hover:bg-[oklch(0.95_0.02_195)]`}`}
                >
                  EN
                </button>
              </div>
              <Link href="/support" className="btn-gold text-sm py-2 px-4">
                {t('Support Us', 'Steun Ons')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-md ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16">
          <div className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-base font-medium rounded-lg no-underline transition-colors
                  ${location === item.href
                    ? 'bg-[oklch(0.95_0.02_195)] text-[oklch(0.38_0.09_195)]'
                    : 'text-[oklch(0.22_0.01_60)] hover:bg-[oklch(0.95_0.02_195)]'
                  }`}
              >
                {t(item.en, item.nl)}
              </Link>
            ))}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center text-xs font-medium rounded-full border border-[oklch(0.88_0.015_195)] overflow-hidden">
                <button
                  onClick={() => setLang('nl')}
                  className={`px-4 py-2 transition-colors ${lang === 'nl' ? 'bg-[oklch(0.38_0.09_195)] text-white' : 'text-[oklch(0.22_0.01_60)]'}`}
                >
                  NL
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-4 py-2 transition-colors ${lang === 'en' ? 'bg-[oklch(0.38_0.09_195)] text-white' : 'text-[oklch(0.22_0.01_60)]'}`}
                >
                  EN
                </button>
              </div>
              <Link href="/support" className="btn-gold text-sm">
                {t('Support Us', 'Steun Ons')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
