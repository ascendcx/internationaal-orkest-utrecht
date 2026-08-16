/*
 * IOU Home Page — Refined Civic Warmth
 * Hero: full-bleed image, left-anchored text, dual CTA
 * Sections: Magical Moment quote, Two Pillars, Impact Stats, Support CTA
 */
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Music, Users, School } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-hero.jpg"
            alt="Orchestra performing for children"
            className="w-full h-full object-cover"
          />
          {/* Mobile: transparent top fading to dark teal bottom */}
          <div className="absolute inset-0 md:hidden bg-gradient-to-t from-[oklch(0.22_0.05_195)]/90 from-0% via-[oklch(0.22_0.05_195)]/55 via-40% to-transparent to-70%" />
          {/* Desktop: transparent left fading to dark teal right */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent from-0% via-transparent via-45% to-[oklch(0.22_0.05_195)]/92 to-100%" />
        </div>
        <div className="relative h-full min-h-screen flex items-end pb-20 md:items-center md:pb-0">
          <div className="container">
            <div className="max-w-2xl md:max-w-xl md:ml-auto md:mr-4 lg:mr-8">
              <span className="section-rule" />
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t(
                  'All Children in the Netherlands United Through Music',
                  'Alle Kinderen in Nederland Verenigd door Muziek'
                )}
              </h1>
              <p className="hidden md:block text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                {t(
                  'Every child deserves the chance to discover that music can be part of their life. We bring symphonic and vocal music into schools, then invite children into free local ensembles where they can sing, play, and belong. Together, teachers, parents, musicians, and supporters make that possible.',
                  'Elk kind verdient de kans om te ontdekken dat muziek deel kan zijn van zijn of haar leven. Wij brengen symfonische en vocale muziek naar scholen, en nodigen kinderen daarna uit voor gratis lokale ensembles waar ze kunnen zingen, spelen en erbij horen. Samen maken leraren, ouders, muzikanten en supporters dat mogelijk.'
                )}
              </p>
              <p className="md:hidden text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
                {t(
                  'Live music in schools. Free ensembles for every child.',
                  'Live muziek op school. Gratis ensembles voor elk kind.'
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/school-concerts" className="btn-gold">
                  {t('Bring Music to Your School', 'Breng Muziek naar Uw School')}
                  <ArrowRight size={16} />
                </Link>
                <Link href="/youth-ensembles" className="hidden md:inline-flex btn-secondary border-white/50 text-white hover:bg-white/10">
                  {t('Find an Ensemble Near You', 'Vind een Ensemble bij Jou in de Buurt')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magical Moment Pull Quote */}
      <section className="bg-[oklch(0.95_0.02_195)] py-16 lg:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="pull-quote text-center border-none pl-0 mb-6">
              {t(
                '"Almost 900 children, laughing, clapping, and having the time of their lives while our orchestra played."',
                '"Bijna 900 kinderen, lachend, klappend en de tijd van hun leven hebbend terwijl ons orkest speelde."'
              )}
            </blockquote>
            <cite className="text-sm text-[oklch(0.52_0.015_60)] not-italic font-medium">
              Jennifer Diepman, {t('Founder & Artistic Director', 'Oprichter & Artistiek Directeur')}
            </cite>
          </div>
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-20 lg:py-28 bg-[oklch(0.98_0.008_80)] overflow-hidden" ref={revealRef}>
        <div className="container">
          <div className="mb-14 fade-up">
            <span className="section-rule" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[oklch(0.22_0.01_60)] max-w-xl">
              {t('Music That Moves.', 'Muziek Die Beweegt.')}
              <br />
              {t('Opportunities That Last.', 'Kansen Die Blijven.')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Schools */}
            <div className="fade-up group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[oklch(0.92_0.01_195)]">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-school-concert.jpg"
                  alt="School concert"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[oklch(0.95_0.02_195)]">
                    <School size={20} className="text-[oklch(0.38_0.09_195)]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.52_0.09_195)]">
                    {t('For Schools', 'Voor Scholen')}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                  {t('Interactive School Concerts', 'Interactieve Schoolconcerten')}
                </h3>
                <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
                  {t(
                    'Funded through grants and donations, our customizable instrumental and vocal concerts come to your school at no cost. Often joined by vocal ensembles from the area, every performance is designed to do one thing: make your students fall in love with music.',
                    'Gefinancierd door subsidies en donaties komen onze aanpasbare instrumentale en vocale concerten gratis naar uw school. Vaak aangevuld met vocale ensembles uit de regio, is elk optreden ontworpen om één ding te doen: uw leerlingen verliefd laten worden op muziek.'
                  )}
                </p>
                <Link href="/school-concerts" className="btn-primary text-sm">
                  {t('Learn How It Works', 'Ontdek Hoe Het Werkt')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* For Parents */}
            <div className="fade-up group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[oklch(0.92_0.01_195)]" style={{ transitionDelay: '80ms' }}>
              <div className="h-56 overflow-hidden">
                <img
                  src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-youth-ensemble.jpg"
                  alt="Youth ensemble rehearsal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[oklch(0.95_0.02_195)]">
                    <Users size={20} className="text-[oklch(0.38_0.09_195)]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.52_0.09_195)]">
                    {t('For Parents & Youth', 'Voor Ouders & Jongeren')}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                  {t('Free Youth Ensembles', 'Gratis Jeugdensembles')}
                </h3>
                <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
                  {t(
                    'Whether your child heard us at school or you found us here, Nederland in Harmonie is ready for them. A choir, symphonic band, marching band, percussion ensemble, or orchestra, completely free, after school, at a local school near you. A place to play, sing, grow, and belong.',
                    'Of uw kind ons nu op school heeft gehoord of u ons hier heeft gevonden, Nederland in Harmonie staat voor hen klaar. Een koor, harmonieorkest, fanfare, slagwerkensemble of orkest, volledig gratis, naschools, op een school bij u in de buurt. Een plek om te spelen, te zingen, te groeien en erbij te horen.'
                  )}
                </p>
                <Link href="/youth-ensembles" className="btn-primary text-sm">
                  {t('Find an Ensemble Near You', 'Vind een Ensemble bij Jou in de Buurt')}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-[oklch(0.38_0.09_195)]">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: '40+', label: t('International Musicians', 'Internationale Muzikanten') },
              { num: '900+', label: t('Children Reached', 'Kinderen Bereikt') },
              { num: '0€', label: t('Cost to Youth Participants', 'Kosten voor Jongeren') },
              { num: '15+', label: t('Countries Represented', 'Vertegenwoordigde Landen') },
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
              'Every donation funds the next concert, the next ensemble, and the next child who discovers that music is for them. No fees, ever, for the children. That is only possible because of people like you.',
              'Elke donatie financiert het volgende concert, het volgende ensemble en het volgende kind dat ontdekt dat muziek er ook voor hen is. Nooit kosten voor de kinderen. Dat is alleen mogelijk dankzij mensen als u.'
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
