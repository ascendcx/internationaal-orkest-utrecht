import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { mediaUrl } from '@/lib/media';
import { MUSICIANS } from '@/lib/musicians';
import VideoPlayer from '@/components/VideoPlayer';

const INTRO = {
  en: 'Say hello to the people behind the music. Hear them play and meet the musicians who will visit your school.',
  nl: 'Zeg hallo tegen de mensen achter de muziek. Luister naar hun spel en maak kennis met de muzikanten die uw school bezoeken.',
};

/** Who We Are section. Renders nothing while MUSICIANS is empty. */
export function MeetTheMusicians() {
  const { t, lang } = useLanguage();
  if (MUSICIANS.length === 0) return null;

  return (
    <section id="musicians" className="py-16 bg-[oklch(0.95_0.02_195)] scroll-mt-20">
      <div className="container">
        <span className="section-rule" />
        <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
          {t('Meet the musicians', 'Maak kennis met de muzikanten')}
        </h2>
        <p className="text-[oklch(0.42_0.01_60)] leading-relaxed max-w-xl mb-10">{t(INTRO.en, INTRO.nl)}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MUSICIANS.map((m) => {
            const instrument = lang === 'nl' ? m.instrumentNl : m.instrumentEn;
            return (
              <li key={m.slug}>
                <VideoPlayer
                  src={mediaUrl(m.videoKey)}
                  poster={mediaUrl(m.posterKey)}
                  label={t(`Video: ${m.name}, ${instrument}`, `Video: ${m.name}, ${instrument}`)}
                  playLabel={t(`Play video of ${m.name}`, `Speel de video van ${m.name} af`)}
                  captionsSrc={m.captionsKey ? mediaUrl(m.captionsKey) : undefined}
                  captionsLang={lang}
                  captionsLabel={t('Captions', 'Ondertiteling')}
                  preload="none"
                  buttonClass="h-14 w-14"
                  iconSize={24}
                />
                <p className="font-display font-semibold text-lg text-[oklch(0.22_0.01_60)] mt-3">{m.name}</p>
                <p className="text-sm text-[oklch(0.52_0.015_60)]">{instrument}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Small teaser for Home. Renders nothing while MUSICIANS is empty. */
export function MusiciansTeaser() {
  const { t } = useLanguage();
  if (MUSICIANS.length === 0) return null;

  return (
    <section className="py-12 bg-[oklch(0.95_0.02_195)]">
      <div className="container">
        <span className="section-rule" />
        <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
          {t('Meet the musicians', 'Maak kennis met de muzikanten')}
        </h2>
        <p className="text-[oklch(0.42_0.01_60)] leading-relaxed max-w-xl mb-5">{t(INTRO.en, INTRO.nl)}</p>
        <Link href="/about#musicians" className="inline-flex items-center gap-1.5 font-medium text-[oklch(0.38_0.09_195)] underline underline-offset-4">
          {t('See the musicians', 'Bekijk de muzikanten')}
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
