/*
 * IOU Home Page — Refined Civic Warmth
 * Hero: full-bleed image, left-anchored text, dual CTA
 * Sections: Journey, Funding, Schools, Parents, Quote, Impact Stats, Support CTA
 */
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const IMG = 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSEO } from '@/hooks/useSEO';

export default function Home() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const fundedRef = useScrollReveal();
  const schoolsRef = useScrollReveal();
  const parentsRef = useScrollReveal();
  const journeySteps = [
    {
      img: 'iou-hero.jpg',
      alt: t('Children watching an orchestra', 'Kinderen kijken naar een orkest'),
      imgStyle: { objectPosition: '0% 50%', transform: 'scale(1.6)', transformOrigin: '20% 50%' },
      title: t('A child hears music', 'Een kind hoort muziek'),
      body: t(
        'A free concert brings live music to their school.',
        'Kinderen beleven een gratis concert op hun eigen school.'
      ),
    },
    {
      img: 'iou-school-concert.jpg',
      alt: t('A musician shows a child a violin', 'Een musicus laat een kind een viool zien'),
      imgStyle: { objectPosition: '0% 50%', transform: 'scale(1.75)', transformOrigin: '36% 27%' },
      title: t('The moment it clicks', 'Het moment dat het klikt'),
      body: t(
        'Children try instruments or sing together, guided by musicians and singers.',
        'Kinderen proberen instrumenten uit of zingen samen, begeleid door musici en zangers.'
      ),
    },
    {
      img: 'iou-youth-ensemble.jpg',
      alt: t('Youth ensemble rehearsal', 'Repetitie jeugdensemble'),
      title: t('They keep making music', 'Samen muziek blijven maken'),
      body: t(
        'Through Nederland in Harmonie, children can continue playing or singing in a free local ensemble.',
        'Via Nederland in Harmonie kunnen kinderen gratis blijven spelen of zingen in een lokaal ensemble.'
      ),
    },
  ];
  useSEO({
    title: 'Internationaal Orkest Utrecht | Free Music Programs for Children in the Netherlands',
    titleNl: 'Internationaal Orkest Utrecht | Gratis Muziekprogramma\'s voor Kinderen in Nederland',
    description: 'Live orchestral concerts in schools and free youth ensembles for every child in the Netherlands. No fees, ever.',
    descriptionNl: 'Live orkestconcerten op scholen en gratis jeugdensembles voor elk kind in Nederland. Geen kosten, nooit.',
    path: '/',
    image: 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-hero.jpg',
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-hero.jpg"
            alt="Orchestra performing for children"
            className="w-full h-full object-cover object-[20%_center] md:object-center"
          />
          {/* Mobile: transparent top fading to dark teal bottom */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[oklch(0.22_0.05_195)]/90 from-0% via-[oklch(0.22_0.05_195)]/55 via-40% to-transparent to-70%" />
          {/* Desktop: transparent left fading to dark teal right, reaching strong opacity early so it stays consistent behind the text block */}
          <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,transparent_0%,transparent_58%,oklch(0.22_0.05_195/93%)_74%,oklch(0.22_0.05_195/96%)_100%)]" />
        </div>
        <div className="relative h-full min-h-screen flex items-end pb-8 md:h-auto md:min-h-0 md:absolute md:inset-0 md:flex md:items-end md:pb-20 lg:pb-24">
          <div className="container">
            <div className="max-w-2xl md:max-w-xl md:ml-auto md:mr-4 lg:mr-8">
              <span className="section-rule mb-2 md:mb-4" />
              <h1 className="font-display text-4xl sm:text-5xl md:text-4xl font-bold text-white leading-tight mb-1 md:mb-2">
                {t(
                  'Children United Through Music',
                  'Kinderen Verenigd door Muziek'
                )}
              </h1>
              <p className="text-xs font-light tracking-wide text-white/85 mb-3 md:mb-6 first-letter:uppercase">
                {t('in partnership with local choirs', 'in samenwerking met lokale koren')}
              </p>
              <p className="hidden md:block text-lg text-white/85 leading-relaxed mb-8 max-w-sm">
                {t(
                  'It starts with a concert, grows with an ensemble, and then lasts a lifetime.',
                  'Het begint met een concert, groeit met een ensemble en duurt daarna een leven lang.'
                )}
              </p>
              <p className="md:hidden text-lg text-white/85 leading-relaxed mb-4 max-w-xl">
                {t(
                  'It starts with a concert, grows with an ensemble, and then lasts a lifetime.',
                  'Het begint met een concert, groeit met een ensemble en duurt daarna een leven lang.'
                )}
              </p>
              <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
                <Link href="/school-concerts" className="btn-gold">
                  {t('Bring Music to Your School', 'Breng muziek naar uw school')}
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact?interest=parent" className="btn-secondary border-2 border-white/50 text-white hover:bg-white/10">
                  {t('Register your interest', 'Meld uw belangstelling')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-20 lg:py-28 bg-[oklch(0.98_0.008_80)] overflow-hidden" ref={revealRef}>
        <div className="container">
          <div className="mb-14 fade-up">
            <span className="section-rule" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] max-w-xl">
              {t('One Path. Every Child.', 'Eén pad. Elk kind.')}
            </h2>
          </div>
          <ol className="relative m-0 flex list-none flex-col gap-12 p-0 lg:grid lg:grid-cols-3 lg:gap-x-10">
            {journeySteps.map((step, i) => {
              const last = i === journeySteps.length - 1;
              return (
                <li
                  key={step.img}
                  className="fade-up relative flex flex-col pl-12 lg:pl-0"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Mobile: vertical gold line down to the next marker */}
                  {!last && (
                    <span
                      className="path-seg lg:hidden absolute left-[15px] top-4 w-0.5 h-[calc(100%+3rem)] bg-[oklch(0.72_0.12_75)]"
                      aria-hidden="true"
                    />
                  )}
                  <div className="overflow-hidden rounded-xl aspect-[3/2] lg:order-1">
                    <img src={IMG + step.img} alt={step.alt} className="w-full h-full object-cover" style={step.imgStyle} />
                  </div>
                  {/* Marker sits on the path */}
                  <div className="absolute left-0 top-0 lg:relative lg:order-2 lg:my-6 lg:h-8">
                    {/* Desktop: horizontal gold line runs behind the markers */}
                    <span
                      className={`path-seg hidden lg:block absolute left-4 top-[15px] h-0.5 bg-[oklch(0.72_0.12_75)] ${last ? 'w-[calc(100%-1rem)]' : 'w-[calc(100%+2.5rem)]'}`}
                      style={{ '--d': `${i * 500}ms` } as React.CSSProperties}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[oklch(0.72_0.12_75)] text-sm font-bold text-[oklch(0.22_0.01_60)]">
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-5 lg:mt-0 lg:order-3">
                    <h3 className="font-display text-2xl lg:text-3xl font-bold leading-tight text-[oklch(0.22_0.01_60)] mb-3">{step.title}</h3>
                    <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">{step.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* How it is funded */}
      <section className="py-16 lg:py-20 bg-[oklch(0.95_0.02_195)]" ref={fundedRef}>
        <div className="container">
          <div className="fade-up max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl lg:text-3xl font-semibold text-[oklch(0.22_0.01_60)] leading-snug mb-5">
              {t(
                'Free for every child. Made possible by donations, grants, and other funds.',
                'Gratis voor elk kind. Mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
              )}
            </p>
            <Link href="/support" className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.38_0.09_195)] hover:underline">
              {t('See how you can help', 'Zie hoe u kunt helpen')}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* For Schools */}
      <section className="py-20 lg:py-24 bg-[oklch(0.98_0.008_80)]" ref={schoolsRef}>
        <div className="container">
          <div className="fade-up max-w-2xl mb-10">
            <span className="section-rule" />
            <span className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.52_0.09_195)] mb-3">
              {t('For Schools', 'Voor scholen')}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t('Bring the Concert to Your School', 'Breng het concert naar uw school')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t('Choose what fits your school. Both options are free.', 'Kies wat bij uw school past. Beide opties zijn gratis.')}
            </p>
          </div>
          <div className="fade-up grid grid-cols-1 md:grid-cols-2" style={{ transitionDelay: '80ms' }}>
            <div className="flex flex-col items-start pb-10 md:pb-0 md:pr-10 lg:pr-16">
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
                {t('School concert', 'Schoolconcert')}
              </h3>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-5">
                {t(
                  'A free concert for your students. A good fit if your school already has a music program, such as MuziekRoute.',
                  'Een gratis concert voor uw leerlingen. Een goede keuze als uw school al een muziekprogramma heeft, zoals MuziekRoute.'
                )}
              </p>
              <Link href="/contact?interest=concert" className="btn-primary mt-auto min-h-11 text-sm">
                {t('Book a concert', 'Boek een concert')}
              </Link>
            </div>
            <div className="flex flex-col items-start border-t border-[oklch(0.88_0.015_195)] pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-10 lg:pl-16">
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
                {t('School concert and local ensemble', 'Schoolconcert en lokaal ensemble')}
              </h3>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-5">
                {t(
                  'A free concert, followed by working with IOU to set up a local Nederland in Harmonie (The Netherlands in Harmony) ensemble where your students can keep playing or singing.',
                  'Een gratis concert, gevolgd door samenwerking met IOU om een lokaal ensemble van Nederland in Harmonie (The Netherlands in Harmony) op te zetten, waar uw leerlingen kunnen blijven spelen of zingen.'
                )}
              </p>
              <Link href="/contact?interest=concert-ensemble" className="btn-primary mt-auto min-h-11 text-sm">
                {t('Discuss a concert and ensemble', 'Bespreek een concert en ensemble')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="py-14 lg:py-20 bg-[oklch(0.95_0.02_195)]" ref={parentsRef}>
        <div className="container">
          <div>
          <div className="fade-up max-w-xl">
            <span className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.52_0.09_195)] mb-3">
              {t('For Parents', 'Voor ouders')}
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
              {t('Want your child to join?', 'Wilt u dat uw kind meedoet?')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
              {t(
                'Register your interest in a free local ensemble. We will contact you when launch details, locations and rehearsal times are confirmed. Free for every child, made possible by donations, grants, and other funds.',
                'Meld uw belangstelling voor een gratis ensemble. We nemen contact met u op zodra er meer bekend is over de start, locatie en repetities. Gratis voor elk kind, mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
              )}
            </p>
            <Link href="/contact?interest=parent" className="btn-primary text-sm">
              {t('Register your interest', 'Meld uw belangstelling')}
              <ArrowRight size={14} />
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Magical Moment Pull Quote */}
      <section className="bg-[oklch(0.98_0.008_80)] py-14 lg:py-16">
        <div className="container">
          <div className="max-w-2xl bg-white border border-[oklch(0.88_0.015_195)] rounded-lg p-6 md:p-8">
            <blockquote className="pull-quote mb-4">
              {t(
                '"More than 600 children, laughing, clapping, and having the time of their lives while our orchestra played."',
                '"Meer dan 600 kinderen, lachend, klappend en de tijd van hun leven hebbend terwijl ons orkest speelde."'
              )}
            </blockquote>
            <cite className="block pl-[calc(1.5rem+3px)] text-sm text-[var(--gold-on-light)] not-italic font-medium">
              Jennifer Diepman, {t('Founder & Artistic Director', 'Oprichter & artistiek directeur')}
            </cite>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-8 lg:py-10 bg-[oklch(0.38_0.09_195)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 text-center text-white">
            {[
              { num: '50', label: t('International Musicians', 'Internationale muzikanten') },
              { num: '600+', label: t('Children Reached', 'Kinderen bereikt') },
              { num: '€0', label: t('Cost to Youth Participants', 'Kosten voor jongeren') },
              { num: '50+', label: t('Nationalities Connected Through Music', 'Nationaliteiten verbonden door muziek') },
            ].map((stat) => (
              <div key={stat.label} className="py-1">
                <div className="font-display text-3xl lg:text-4xl font-bold lining-nums text-[oklch(0.72_0.12_75)] mb-1">{stat.num}</div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 lg:py-24 bg-[oklch(0.3_0.07_195)]">
        <div className="container text-center text-white">
          <span className="section-rule mx-auto" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            {t('You Could Be the Reason They Clap.', 'U kunt de reden zijn dat zij klappen.')}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            {t(
              'Donations fund our free program. Your gift helps bring free school concerts and youth ensembles to more children, so they can hear live music, try an instrument or sing, and keep making music together. That is only possible because of people like you.',
              'Donaties financieren ons gratis programma. Uw gift helpt gratis schoolconcerten en jeugdensembles naar meer kinderen te brengen, zodat zij live muziek horen, een instrument proberen of zingen en samen muziek blijven maken. Dat is alleen mogelijk dankzij mensen als u.'
            )}
          </p>
          <Link href="/support" className="btn-gold">
            {t('Support the Children', 'Steun de kinderen')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
