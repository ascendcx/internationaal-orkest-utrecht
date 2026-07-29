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
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/iou-hero_b13d29ce.jpg"
            alt="Orchestra performing for children"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <div className="max-w-2xl">
            <span className="section-rule" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t(
                'Inspiring Children Through the Power of Symphonic Music',
                'Kinderen Inspireren door de Kracht van Symfonische Muziek'
              )}
            </h1>
            <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
              {t(
                'We bring live orchestral experiences directly to schools and provide free youth ensembles to build community, connection, and a lifelong love of music.',
                'Wij brengen live orkestervaringen direct naar scholen en bieden gratis jeugdensembles aan om gemeenschap, verbinding en een levenslange liefde voor muziek op te bouwen.'
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/school-concerts" className="btn-gold">
                {t('Book a School Concert', 'Boek een Schoolconcert')}
                <ArrowRight size={16} />
              </Link>
              <Link href="/youth-ensembles" className="btn-secondary border-white/50 text-white hover:bg-white/10">
                {t('Enroll in a Youth Ensemble', 'Inschrijven voor een Jeugdensemble')}
              </Link>
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
                '"Almost 900 children — laughing, clapping, and having the time of their lives while our orchestra played."',
                '"Bijna 900 kinderen — lachend, klappend en de tijd van hun leven hebbend terwijl ons orkest speelde."'
              )}
            </blockquote>
            <cite className="text-sm text-[oklch(0.52_0.015_60)] not-italic font-medium">
              — Jennifer Diepman, {t('Founder & Artistic Director', 'Oprichter & Artistiek Directeur')}
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
              {t('Two Ways We Serve Our Community', 'Twee Manieren Waarop Wij Onze Gemeenschap Dienen')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Schools */}
            <div className="fade-up group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[oklch(0.92_0.01_195)]">
              <div className="h-56 overflow-hidden">
                <img
                  src="/manus-storage/iou-school-concert_ca783a6e.jpg"
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
                    'Subsidized, customizable orchestral performances brought directly to your school or venue. We handle the music; you watch your students light up.',
                    'Gesubsidieerde, aanpasbare orkestoptredens direct naar uw school of locatie gebracht. Wij zorgen voor de muziek; u kijkt hoe uw leerlingen oplichten.'
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
                  src="/manus-storage/iou-youth-ensemble_7cbeb415.jpg"
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
                    'Did your child discover a love for music at our concert? They can join our after-school ensembles to learn an instrument, sing in a choir, and build lasting friendships — completely free.',
                    'Heeft uw kind een liefde voor muziek ontdekt bij ons concert? Ze kunnen deelnemen aan onze naschoolse ensembles om een instrument te leren, in een koor te zingen en vriendschappen op te bouwen — volledig gratis.'
                  )}
                </p>
                <Link href="/youth-ensembles" className="btn-primary text-sm">
                  {t('Join an Ensemble', 'Doe Mee met een Ensemble')}
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
          <img src="/manus-storage/iou-support_7aaf6d96.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.22_0.05_195)]/85" />
        </div>
        <div className="relative container text-center text-white">
          <span className="section-rule mx-auto" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            {t('Music Connects Us All. You Make It Possible.', 'Muziek Verbindt Ons Allen. U Maakt Het Mogelijk.')}
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
            {t(
              'Our youth ensembles and school outreach are funded by the generosity of individuals, grants, and corporate sponsors. Help us ensure every child has access to high-quality music education.',
              'Onze jeugdensembles en schoolactiviteiten worden gefinancierd door de vrijgevigheid van particulieren, subsidies en bedrijfssponsors. Help ons ervoor te zorgen dat elk kind toegang heeft tot hoogwaardige muziekonderwijs.'
            )}
          </p>
          <Link href="/support" className="btn-gold">
            {t('Support the Orchestra', 'Steun het Orkest')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
