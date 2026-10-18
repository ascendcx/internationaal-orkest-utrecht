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
      img: 'iou-school-concert.jpg',
      alt: t('School concert', 'Schoolconcert'),
      title: t('A child hears music', 'Een kind hoort muziek'),
      body: t(
        'A free concert comes to their own school.',
        'Een gratis concert komt naar hun eigen school.'
      ),
    },
    {
      img: 'iou-conductor.jpg',
      alt: t('Conductor leading musicians', 'Dirigent met musici'),
      title: t('The moment it clicks', 'Het moment dat het klikt'),
      body: t(
        'They see and hear real musicians. And they want to try.',
        'Ze zien en horen echte musici. En ze willen het zelf proberen.'
      ),
    },
    {
      img: 'iou-youth-ensemble.jpg',
      alt: t('Youth ensemble rehearsal', 'Repetitie jeugdensemble'),
      title: t('They keep it', 'Ze houden het vast'),
      body: t(
        'A free local ensemble, Nederland in Harmonie, where they learn to play, sing, and belong.',
        'Een gratis lokaal ensemble, Nederland in Harmonie, waar ze leren spelen, zingen en erbij horen.'
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
              <p className="text-xs font-light tracking-wide text-white/70 mb-3 md:mb-6 first-letter:uppercase">
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
                  {t('Bring Music to Your School', 'Breng Muziek naar Uw School')}
                  <ArrowRight size={16} />
                </Link>
                <Link href="/youth-ensembles" className="btn-secondary border-2 border-white/50 text-white hover:bg-white/10">
                  {t('Find an Ensemble Near You', 'Vind een Ensemble bij Jou in de Buurt')}
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
              {t('One Path. Every Child.', 'Eén Pad. Elk Kind.')}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {journeySteps.map((step, i) => (
              <div key={step.img} className="contents">
                <div
                  className="fade-up flex-1 overflow-hidden rounded-xl bg-white shadow-sm border border-[oklch(0.92_0.01_195)]"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="h-52 overflow-hidden">
                    <img src={IMG + step.img} alt={step.alt} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 lg:p-7">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[oklch(0.72_0.12_75)] text-[oklch(0.22_0.01_60)] text-sm font-bold mb-3">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{step.title}</h3>
                    <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">{step.body}</p>
                  </div>
                </div>
                {i < journeySteps.length - 1 && (
                  <>
                    {/* Mobile: vertical gold line */}
                    <div className="lg:hidden mx-auto w-px h-10 bg-[oklch(0.72_0.12_75)]" aria-hidden="true" />
                    {/* Desktop: horizontal gold line with arrow */}
                    <div className="hidden lg:flex items-center self-center w-12 shrink-0 text-[oklch(0.72_0.12_75)]" aria-hidden="true">
                      <div className="flex-1 h-px bg-[oklch(0.72_0.12_75)]" />
                      <ArrowRight size={16} className="-ml-1" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it is funded */}
      <section className="py-12 bg-[oklch(0.95_0.02_195)]" ref={fundedRef}>
        <div className="container">
          <div className="fade-up max-w-3xl mx-auto text-center">
            <p className="text-lg text-[oklch(0.32_0.02_60)] leading-relaxed mb-4">
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
              {t('For Schools', 'Voor Scholen')}
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t('Bring the Concert to Your School', 'Breng het Concert naar Uw School')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t('Choose what fits your school. Both options are free.', 'Kies wat bij uw school past. Beide opties zijn gratis.')}
            </p>
          </div>
          <div className="fade-up grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" style={{ transitionDelay: '80ms' }}>
            <Link
              href="/contact?interest=concert"
              className="group rounded-xl bg-white border border-[oklch(0.92_0.01_195)] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
                {t('Book a concert', 'Boek een concert')}
              </h3>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'A concert only. Good for schools that already have a music program, such as MuziekRoute.',
                  'Alleen een concert. Fijn voor scholen die al een muziekprogramma hebben, zoals MuziekRoute.'
                )}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.38_0.09_195)] group-hover:underline">
                {t('Get in touch', 'Neem contact op')}
                <ArrowRight size={14} />
              </span>
            </Link>
            <Link
              href="/contact?interest=concert-ensemble"
              className="group rounded-xl bg-white border border-[oklch(0.92_0.01_195)] p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
                {t('Concert and ensemble', 'Concert en ensemble')}
              </h3>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'A concert, plus a local Nederland in Harmonie (The Netherlands in Harmony) ensemble for your students to join.',
                  'Een concert, plus een lokaal Nederland in Harmonie (The Netherlands in Harmony) ensemble waar uw leerlingen aan kunnen deelnemen.'
                )}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.38_0.09_195)] group-hover:underline">
                {t('Get in touch', 'Neem contact op')}
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* For Parents */}
      <section className="py-14 bg-[oklch(0.95_0.02_195)]" ref={parentsRef}>
        <div className="container">
          <div className="fade-up max-w-2xl">
            <span className="block text-xs font-semibold uppercase tracking-widest text-[oklch(0.52_0.09_195)] mb-3">
              {t('For Parents', 'Voor Ouders')}
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
              {t('Want your child to join?', 'Wilt u dat uw kind meedoet?')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
              {t(
                'Find a free ensemble near you. Free for every child, made possible by donations, grants, and other funds.',
                'Vind een gratis ensemble bij u in de buurt. Gratis voor elk kind, mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
              )}
            </p>
            <Link href="/youth-ensembles" className="btn-primary text-sm">
              {t('Find an Ensemble Near You', 'Vind een Ensemble bij Jou in de Buurt')}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Magical Moment Pull Quote */}
      <section className="bg-[oklch(0.95_0.02_195)] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="pull-quote text-center border-none pl-0 mb-6">
              {t(
                '"More than 600 children, laughing, clapping, and having the time of their lives while our orchestra played."',
                '"Meer dan 600 kinderen, lachend, klappend en de tijd van hun leven hebbend terwijl ons orkest speelde."'
              )}
            </blockquote>
            <cite className="text-sm text-[oklch(0.52_0.015_60)] not-italic font-medium">
              Jennifer Diepman, {t('Founder & Artistic Director', 'Oprichter & Artistiek Directeur')}
            </cite>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[oklch(0.38_0.09_195)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '50', label: t('International Musicians', 'Internationale Muzikanten') },
              { num: '600+', label: t('Children Reached', 'Kinderen Bereikt') },
              { num: '0€', label: t('Cost to Youth Participants', 'Kosten voor Jongeren') },
              { num: '50+', label: t('Nationalities Connected Through Music', 'Nationaliteiten Verbonden Door Muziek') },
            ].map((stat) => (
              <div key={stat.label} className="py-4">
                <div className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.72_0.12_75)] mb-2">{stat.num}</div>
                <div className="text-sm text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-support.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.22_0.05_195)]/85" />
        </div>
        <div className="relative container text-center text-white">
          <span className="section-rule mx-auto" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            {t('You Could Be the Reason They Clap.', 'U Kunt de Reden Zijn Dat Zij Klappen.')}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            {t(
              'Donations fund our free program. Every donation pays for the next concert, the next ensemble, and the next child who discovers that music is for them. No fees, ever, for the children. That is only possible because of people like you.',
              'Donaties financieren ons gratis programma. Elke donatie betaalt het volgende concert, het volgende ensemble en het volgende kind dat ontdekt dat muziek er ook voor hen is. Nooit kosten voor de kinderen. Dat is alleen mogelijk dankzij mensen als u.'
            )}
          </p>
          <Link href="/support" className="btn-gold">
            {t('Make It Happen', 'Maak Het Mogelijk')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
