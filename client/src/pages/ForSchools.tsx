import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ArrowRight } from 'lucide-react';

export default function ForSchools() {
  const { t } = useLanguage();
  useSEO({
    title: 'For Schools | Internationaal Orkest Utrecht',
    titleNl: 'Voor Scholen | Internationaal Orkest Utrecht',
    description: 'Free live concerts, classroom introductions, and youth ensembles for Utrecht schools, funded through your existing cultuureducatie budget.',
    descriptionNl: 'Gratis live concerten, klasintroducties en jeugdensembles voor Utrechtse scholen, gefinancierd via uw bestaande cultuureducatiebudget.',
    path: '/scholen',
    image: 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-school-concert.jpg',
  });

  const steps = [
    {
      title: t('Introduction', 'Introductie'),
      desc: t(
        'IOU musicians visit one class for 20 to 30 minutes. Students hear live instruments up close and get a first taste of what’s possible.',
        'Muzikanten van IOU bezoeken één klas voor 20 tot 30 minuten. Leerlingen horen live instrumenten van dichtbij en krijgen een eerste indruk van wat mogelijk is.'
      ),
      tag: t('No cost. No obligation.', 'Geen kosten. Geen verplichting.'),
    },
    {
      title: t('Full school concert', 'Volledig schoolconcert'),
      desc: t(
        'A complete IOU performance brought into your school, for as many classes as you choose to include.',
        'Een volledige IOU-uitvoering, gebracht naar uw school, voor zoveel klassen als u wilt betrekken.'
      ),
    },
    {
      title: t('Try-out', 'Try-out'),
      desc: t(
        'Students who loved the concert get a hands-on chance to try an instrument themselves, the bridge between watching and joining.',
        'Leerlingen die het concert geweldig vonden krijgen de kans om zelf een instrument te proberen, de brug tussen kijken en meedoen.'
      ),
    },
    {
      title: t('Nederland in Harmonie', 'Nederland in Harmonie'),
      desc: t(
        'A free, ongoing youth ensemble that students can join after school. This is where a single concert turns into a lasting relationship with music.',
        'Een gratis, doorlopend jeugdensemble waar leerlingen na school aan kunnen deelnemen. Hier verandert één concert in een blijvende band met muziek.'
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-school-concert.jpg" alt="School concert" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Give your students a concert they will never forget', 'Geef uw leerlingen een concert dat ze nooit vergeten.')}
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t(
              'Live musicians in the classroom. A full school concert. A free ensemble your students can join afterward. All at no cost to your school.',
              'Live muzikanten in de klas. Een volledig schoolconcert. Een gratis ensemble waar uw leerlingen zich daarna bij kunnen aansluiten. Allemaal zonder kosten voor uw school.'
            )}
          </p>
          <a href="#cta" className="btn-gold">
            {t('Book your introduction', 'Boek uw introductie')}
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-rule mx-auto" />
            <p className="text-lg lg:text-xl text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'Internationaal Orkest Utrecht (IOU) brings professional, live orchestral and vocal music directly into schools. We are now introducing this program to a small number of schools around Utrecht, starting with a free classroom visit and building toward an ongoing youth ensemble.',
                'Internationaal Orkest Utrecht (IOU) brengt professionele, live orkestrale en vocale muziek rechtstreeks naar scholen. We introduceren dit programma nu bij een klein aantal scholen rond Utrecht, beginnend met een gratis klasbezoek en toewerkend naar een doorlopend jeugdensemble.'
              )}
            </p>
            {/*
              TODO: Re-enable this trust badge once Jennifer confirms IOU has an active
              listing as a recognized partner with Cultuur & School Utrecht.
              <div className="inline-block mt-4 text-xs font-medium text-[oklch(0.22_0.01_60)] bg-[oklch(0.95_0.02_195)] border border-[oklch(0.88_0.015_195)] px-3 py-1.5 rounded-full">
                {t('Recognized partner · Cultuur & School Utrecht', 'Erkend partner · Cultuur & School Utrecht')}
              </div>
            */}
          </div>
        </div>
      </section>

      {/* Four-Step Process */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)] overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={i} className="grid grid-cols-[3rem_1fr] gap-x-6 gap-y-2 py-8 border-t border-[oklch(0.88_0.015_195)] items-start">
                  <div className="font-display text-3xl font-bold text-[oklch(0.88_0.015_195)] leading-none pt-1">0{i + 1}</div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-[oklch(0.22_0.01_60)] mb-1">{step.title}</h3>
                    <p className="text-sm text-[oklch(0.52_0.015_60)] leading-relaxed max-w-xl">{step.desc}</p>
                    {step.tag && (
                      <span className="inline-block mt-2 text-xs font-medium text-[oklch(0.38_0.09_195)] bg-[oklch(0.95_0.02_195)] px-3 py-1 rounded-full">
                        {step.tag}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t border-[oklch(0.88_0.015_195)]" />
            </div>
            <img
              src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-violin-child.webp"
              alt={t('A small boy holds a violin while an adult leans in to talk with him.', 'Een jongetje houdt een viool vast terwijl een volwassene voorover buigt om met hem te praten.')}
              width={1440}
              height={959}
              loading="lazy"
              style={{ objectPosition: '80% 50%' }}
              className="hidden lg:block rounded-xl shadow-lg w-full object-cover aspect-[3/4] sticky top-24"
            />
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-20 bg-[oklch(0.22_0.05_195)] text-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-9 items-start max-w-2xl">
            <div className="font-display text-6xl font-bold text-[oklch(0.72_0.12_75)] leading-none flex-shrink-0">
              &euro;
            </div>
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">
                {t('Already in your budget', 'Al in uw budget')}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t(
                  'Utrecht schools receive a yearly cultuureducatie subsidy from the municipality, about €30.66 per student for 2026, managed through your school board. This program is built to fit that budget as a ready activiteitenplan, so there is nothing new to request.',
                  'Utrechtse scholen ontvangen jaarlijks een cultuureducatie-subsidie van de gemeente, ongeveer €30,66 per leerling voor 2026, beheerd via uw schoolbestuur. Dit programma is zo opgezet dat het past binnen dat budget als kant-en-klaar activiteitenplan, zodat er niets nieuws aangevraagd hoeft te worden.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl text-center">
          <span className="section-rule mx-auto" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-8">
            {t('Book your introduction', 'Boek uw introductie')}
          </h2>
          <a
            href="mailto:info@internationaalorkest.nl?subject=School%20introduction%20request"
            className="btn-primary"
          >
            {t('Book your introduction', 'Boek uw introductie')}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
