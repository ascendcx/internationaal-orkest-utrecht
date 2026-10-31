import { Suspense, lazy, useMemo, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, MapPin as MapPinIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ENSEMBLES, type Ensemble } from '@/lib/ensembles';
import { WELCOME_MESSAGE } from '@/lib/welcome';
import type { MapPin } from '@/components/EnsembleMap';

// The map module pulls in leaflet and its CSS. It is only imported after the visitor clicks "Show map".
const EnsembleMap = lazy(() => import('@/components/EnsembleMap'));

export default function Locations() {
  const { t, lang } = useLanguage();
  const [showMap, setShowMap] = useState(false);
  useSEO({
    title: 'Locations | Internationaal Orkest Utrecht',
    titleNl: 'Locaties | Internationaal Orkest Utrecht',
    description: 'Nederland in Harmonie is taking shape in seven cities across the Netherlands. See where we are building free youth orchestras and choirs.',
    descriptionNl: 'Nederland in Harmonie krijgt vorm in zeven steden in Nederland. Bekijk waar wij gratis jeugdorkesten en jeugdkoren opbouwen.',
    path: '/locations',
  });

  const badgeLabel = (e: Ensemble) => (e.status === 'active' ? t('Active', 'Actief') : t('Emerging', 'In opbouw'));
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

  // Rebuilt only when the language changes, so the map keeps its view.
  const pins: MapPin[] = useMemo(
    () => ENSEMBLES.map((e) => ({ name: e.name, lat: e.lat, lng: e.lng, active: e.status === 'active', badge: badgeLabel(e), text: cityText(e) })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

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
          <p className="text-lg text-[oklch(0.35_0.01_60)] leading-relaxed font-medium">
            {t('All youth choirs and orchestras meet after school.', 'Alle jeugdkoren en jeugdorkesten komen na schooltijd bij elkaar.')}
          </p>
        </div>
      </section>

      {/* Map, loaded only on request */}
      <section className="py-12 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          {showMap ? (
            <Suspense
              fallback={
                <p role="status" className="text-[oklch(0.42_0.01_60)]">
                  {t('Loading the map…', 'De kaart wordt geladen…')}
                </p>
              }
            >
              <EnsembleMap pins={pins} label={t('Map of the cities where we are building ensembles', 'Kaart van de steden waar wij ensembles opbouwen')} />
            </Suspense>
          ) : (
            <div className="rounded-xl border border-[oklch(0.88_0.015_195)] bg-white p-8 text-center">
              <MapPinIcon size={32} className="mx-auto mb-3 text-[oklch(0.38_0.09_195)]" aria-hidden="true" />
              <button type="button" onClick={() => setShowMap(true)} className="btn-primary">
                {t('Show map', 'Toon kaart')}
              </button>
              <p className="text-sm text-[oklch(0.52_0.015_60)] mt-4 max-w-md mx-auto">
                {t(
                  'The map comes from OpenStreetMap and loads only when you click. The list of cities below works without it.',
                  'De kaart komt van OpenStreetMap en wordt pas geladen als u klikt. De lijst met steden hieronder werkt ook zonder kaart.'
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* City list: always shown, works without the map */}
      <section className="pb-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-8">
            {t('Our cities', 'Onze steden')}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENSEMBLES.map((e) => (
              <li key={e.name} className="rounded-xl border border-[oklch(0.88_0.015_195)] bg-white p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)]">{e.name}</h3>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-0.5 text-sm font-semibold ${
                      e.status === 'active'
                        ? 'border-[oklch(0.38_0.09_195)] bg-[oklch(0.38_0.09_195)] text-white'
                        : 'border-[oklch(0.38_0.09_195)] bg-white text-[oklch(0.38_0.09_195)]'
                    }`}
                  >
                    {badgeLabel(e)}
                  </span>
                </div>
                <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">{cityText(e)}</p>
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
