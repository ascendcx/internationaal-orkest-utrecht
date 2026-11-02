import { Component, Suspense, lazy, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ENSEMBLES, type Ensemble } from '@/lib/ensembles';
import { WELCOME_MESSAGE } from '@/lib/welcome';
import type { MapPin } from '@/components/EnsembleMap';

// The map module pulls in leaflet and its CSS. It is imported only when the map area is about to scroll into view.
const EnsembleMap = lazy(() => import('@/components/EnsembleMap'));

const linkClass = 'underline underline-offset-4 text-teal hover:text-teal-dark rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal';

/** If the map chunk or its tiles are blocked, the rest of the page keeps working and the map area stays empty. */
class MapBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** True once the element is within about 200px of the viewport. Without IntersectionObserver it is true straight away. */
function useNearViewport(ref: React.RefObject<HTMLElement | null>) {
  const [near, setNear] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;
    if (typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, near]);
  return near;
}

export default function Locations() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState(ENSEMBLES[0].name);
  const mapAreaRef = useRef<HTMLDivElement>(null);
  const mapNear = useNearViewport(mapAreaRef);
  useSEO({
    title: 'Locations | Internationaal Orkest Utrecht',
    titleNl: 'Locaties | Internationaal Orkest Utrecht',
    description: 'Nederland in Harmonie is taking shape in seven cities across the Netherlands. See where we are building free youth orchestras and choirs.',
    descriptionNl: 'Nederland in Harmonie krijgt vorm in zeven steden in Nederland. Bekijk waar wij gratis jeugdorkesten en jeugdkoren opbouwen.',
    path: '/locations',
  });

  const statusWord = (e: Ensemble) => (e.status === 'active' ? t('Active', 'Actief') : t('Emerging', 'In opbouw'));
  const cityText = (e: Ensemble) => {
    if (e.status === 'emerging') {
      return t(
        'We are building this ensemble. Register your interest and we will let you know when it starts.',
        'Wij bouwen deze groep op. Meld uw interesse en wij laten het u weten zodra deze begint.'
      );
    }
    const parts = [
      t('This ensemble is meeting after school.', 'Deze groep komt na schooltijd bij elkaar.'),
      e.scheduleText ? t(e.scheduleText.en, e.scheduleText.nl) : '',
      e.note ? t(e.note.en, e.note.nl) : '',
    ];
    return parts.filter(Boolean).join(' ');
  };
  const registerHref = (e: Ensemble) => `/youth-ensembles?city=${e.slug}#register`;
  const dotClass = (e: Ensemble) => (e.status === 'active' ? 'bg-gold' : 'bg-teal');

  // Rebuilt only when the language changes, so the map keeps its view.
  const pins: MapPin[] = useMemo(
    () => ENSEMBLES.map((e) => ({ name: e.name, lat: e.lat, lng: e.lng, active: e.status === 'active', label: `${e.name}: ${statusWord(e)}` })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  const current = ENSEMBLES.find((e) => e.name === selected) ?? ENSEMBLES[0];

  return (
    <div className="min-h-screen pt-20">
      {/* Intro */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.01_60)] mb-6">
            {t('Locations', 'Locaties')}
          </h1>
          <p className="text-lg text-[oklch(0.35_0.01_60)] leading-relaxed mb-4">
            {t(
              'Nederland in Harmonie is taking shape across the Netherlands. Each city below is a place where we are building a free youth orchestra and choir. When a group is ready, its badge changes and you will see the details here.',
              'Nederland in Harmonie krijgt vorm in heel Nederland. Elke stad hieronder is een plek waar wij een gratis jeugdorkest en jeugdkoor opbouwen. Zodra een groep klaar is, verandert de badge en ziet u hier de details.'
            )}
          </p>
          <p className="text-lg text-[oklch(0.35_0.01_60)] leading-relaxed mb-4">
            {t(
              'Each ensemble is rooted in its community: after school, close to home, with local families, schools and businesses.',
              'Elk ensemble is geworteld in de eigen gemeenschap: na schooltijd, dichtbij huis, met lokale gezinnen, scholen en bedrijven.'
            )}
          </p>
          <p className="text-lg text-[oklch(0.35_0.01_60)] leading-relaxed font-medium">
            {t('All youth choirs and orchestras meet after school.', 'Alle jeugdkoren en jeugdorkesten komen na schooltijd bij elkaar.')}
          </p>
        </div>
      </section>

      {/* Map and selected city. The map loads on its own as it nears the viewport; the list below works without it. */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 lg:gap-14 items-start">
            <div ref={mapAreaRef} className="bg-teal-wash p-3 h-[360px] sm:h-[420px] lg:h-[480px]">
              {mapNear && (
                <MapBoundary>
                  <Suspense fallback={<p role="status" className="text-muted-foreground p-3">{t('Loading the map…', 'De kaart wordt geladen…')}</p>}>
                    <EnsembleMap
                      pins={pins}
                      selected={current.name}
                      onSelect={setSelected}
                      label={t('Map of the cities where we are building ensembles', 'Kaart van de steden waar wij ensembles opbouwen')}
                    />
                  </Suspense>
                </MapBoundary>
              )}
            </div>

            <div aria-live="polite" className="border-t-2 border-teal pt-5">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                <h2 className="font-display text-3xl font-bold text-foreground">{current.name}</h2>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span aria-hidden="true" className={`inline-block size-2.5 rounded-full ${dotClass(current)}`} />
                  {statusWord(current)}
                </span>
              </div>
              <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">{cityText(current)}</p>
              <p className="mb-5">
                <Link href={registerHref(current)} className={linkClass}>
                  {t(`Register interest in ${current.name}`, `Meld uw interesse in ${current.name}`)}
                </Link>
              </p>
              <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
                {t(
                  'Each ensemble is rooted in its community: after school, close to home, with local families, schools and businesses.',
                  'Elk ensemble is geworteld in de eigen gemeenschap: na schooltijd, dichtbij huis, met lokale gezinnen, scholen en bedrijven.'
                )}
              </p>
              <ul className="space-y-2 text-sm text-[oklch(0.42_0.01_60)]">
                <li className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-teal shrink-0" />
                  {t('Emerging: we are building this ensemble.', 'In opbouw: wij bouwen dit ensemble op.')}
                </li>
                <li className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-gold shrink-0" />
                  {t('Active: this ensemble is meeting after school.', 'Actief: dit ensemble komt na schooltijd bij elkaar.')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* City list: always shown, works without the map */}
      <section className="pb-16 bg-background">
        <div className="container">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-3">
            {t('Our cities', 'Onze steden')}
          </h2>
          <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed max-w-[820px] mb-8">
            {t(
              'All seven ensembles are being built. Register your interest in your city and we will let you know when it starts.',
              'Alle zeven ensembles zijn in opbouw. Meld uw interesse in uw stad en wij laten het u weten zodra deze begint.'
            )}
          </p>
          <ul className="max-w-[820px] border-t border-border">
            {ENSEMBLES.map((e) => (
              <li key={e.name} className="border-b border-border py-4" onMouseEnter={() => setSelected(e.name)} onFocus={() => setSelected(e.name)}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 min-[521px]:flex-nowrap">
                  <h3 className={`font-display text-[28px] leading-tight font-bold ${e.name === current.name ? 'text-teal' : 'text-foreground'}`}>{e.name}</h3>
                  <span aria-hidden="true" className="hidden min-[521px]:block h-0 flex-1 border-b-2 border-dotted border-border" />
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground whitespace-nowrap">
                    <span aria-hidden="true" className={`inline-block size-2.5 rounded-full ${dotClass(e)}`} />
                    {statusWord(e)}
                  </span>
                  <Link href={registerHref(e)} className={`${linkClass} text-sm whitespace-nowrap max-[520px]:basis-full min-[521px]:ml-3`}>
                    {t('Register interest', 'Meld uw interesse')}
                    <span className="sr-only">{t(` in ${e.name}`, ` in ${e.name}`)}</span>
                  </Link>
                </div>
                {e.status === 'active' && (e.note || e.scheduleText) && (
                  <p className="mt-2 text-sm text-[oklch(0.42_0.01_60)] leading-relaxed">
                    {[e.scheduleText && t(e.scheduleText.en, e.scheduleText.nl), e.note && t(e.note.en, e.note.nl)].filter(Boolean).join(' ')}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Welcome and register */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <p className="font-display text-2xl italic leading-snug text-[oklch(0.38_0.09_195)] mb-8">{t(WELCOME_MESSAGE.en, WELCOME_MESSAGE.nl)}</p>
          <Link href="/youth-ensembles" className="btn-gold">
            {t('Register your interest', 'Meld uw belangstelling')}
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
