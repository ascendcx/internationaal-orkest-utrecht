import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useRef, useState } from 'react';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { mediaUrl } from '@/lib/media';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Honeypot, FormError } from '@/components/FormParts';

export default function ConductorWorkshops() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '', newsletter: false });
  const { sending, failed, submitted, submit } = useFormSubmit('conductor-workshop');
  const formHeadingRef = useRef<HTMLHeadingElement>(null);
  useSEO({
    title: 'Conductor Workshops | Internationaal Orkest Utrecht',
    titleNl: 'Dirigentenworkshops | Internationaal Orkest Utrecht',
    description: 'Professional development workshops for conductors, led by Artistic Director Jennifer Diepman.',
    descriptionNl: 'Professionele ontwikkelingsworkshops voor dirigenten, geleid door artistiek directeur Jennifer Diepman.',
    path: '/conductor-workshops',
    image: mediaUrl('images/iou-conductor.jpg'),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => submit(e, { ...form });

  const goToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heading = formHeadingRef.current;
    if (!heading) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    heading.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    heading.focus({ preventScroll: true });
    history.replaceState(null, '', '#updates');
  };

  const practice = [
    {
      title: t('Conduct the orchestra', 'Het orkest dirigeren'),
      desc: t('Gain practical experience working directly with the musicians.', 'Doe praktijkervaring op door rechtstreeks met de musici te werken.'),
    },
    {
      title: t('Study the score', 'De partituur bestuderen'),
      desc: t('Develop your approach to score study and preparing the music you will conduct.', 'Werk aan uw aanpak van partituurstudie en de voorbereiding van de muziek die u gaat dirigeren.'),
    },
    {
      title: t('Prepare the rehearsal', 'De repetitie voorbereiden'),
      desc: t('Work on preparing and leading a rehearsal with the orchestra.', 'Werk aan het voorbereiden en leiden van een repetitie met het orkest.'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mediaUrl('images/iou-conductor.jpg')} alt={t('Conductor workshop', 'Dirigentenworkshop')} className="w-full h-full object-cover object-top md:object-[center_25%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Develop your conducting with a professional orchestra', 'Ontwikkel uw dirigeervaardigheden met een professioneel orkest')}
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed mb-4">
            {t(
              'Work directly with Internationaal Orkest Utrecht under the guidance of Artistic Director and Chief Conductor Jennifer Diepman. Build practical experience on the podium, study scores and prepare rehearsals.',
              'Werk rechtstreeks met Internationaal Orkest Utrecht onder leiding van artistiek directeur en chef-dirigent Jennifer Diepman. Doe ervaring op voor het orkest, bestudeer partituren en bereid repetities voor.'
            )}
          </p>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t('Workshop dates and registration details are being planned.', 'De workshopdata en inschrijvingsinformatie worden nog voorbereid.')}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#updates" onClick={goToForm} className="btn-gold">
              {t('Get workshop updates', 'Houd mij op de hoogte')}
            </a>
            <div className="hidden md:inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)]" />
              {t('Practical conducting experience', 'Praktijkervaring als dirigent')}
            </div>
          </div>
        </div>
      </section>

      {/* What you will practice */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t('Practical work with the orchestra', 'In de praktijk werken met het orkest')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'For aspiring and working conductors, the workshops combine time on the podium with score study and rehearsal preparation.',
                'De workshops zijn bedoeld voor dirigenten in opleiding en dirigenten die al actief zijn. U combineert praktijkervaring voor het orkest met partituurstudie en repetitievoorbereiding.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {practice.map((item, i) => (
              <div
                key={i}
                className={`py-8 border-t border-[oklch(0.88_0.015_195)] md:pr-8 ${i > 0 ? 'md:pl-8 md:border-l' : ''}`}
              >
                <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{item.title}</h3>
                <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop leader */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-8 md:gap-12 items-start">
            <img
              src={mediaUrl('images/iou-jennifer-diepman-conductor.webp')}
              alt={t(
                'Jennifer Diepman, Founder, Artistic Director and Chief Conductor of Internationaal Orkest Utrecht, smiling.',
                'Jennifer Diepman, oprichter, artistiek directeur en chef-dirigent van Internationaal Orkest Utrecht, lacht naar de camera.'
              )}
              width={400}
              height={500}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full max-w-[16rem] rounded-xl object-cover object-[45%_30%]"
            />
            <div className="max-w-2xl">
              <span className="section-rule" />
              <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
                {t('Led by Jennifer Diepman', 'Onder leiding van Jennifer Diepman')}
              </h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'Jennifer Diepman is the founder, Artistic Director and Chief Conductor of Internationaal Orkest Utrecht. She holds a Master of Music in Conducting from Messiah University and has studied at the Juilliard School of Music. She leads IOU\'s conductor workshops.',
                  'Jennifer Diepman is oprichter, artistiek directeur en chef-dirigent van Internationaal Orkest Utrecht. Zij heeft een Master of Music in Conducting van Messiah University en studeerde aan de Juilliard School of Music. Zij leidt de dirigentenworkshops van IOU.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
                {t(
                  'She is a recipient of the Fred J. Miller 1st Prize Outstanding Achievement Award in Conducting and the John Philip Sousa Award in Oboe Performance.',
                  'Zij ontving de Fred J. Miller 1st Prize Outstanding Achievement Award in Conducting en de John Philip Sousa Award in Oboe Performance.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to children's music */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="max-w-2xl">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t('Your learning supports music for children', 'Uw ontwikkeling helpt kinderen muziek maken')}
            </h2>
            <p className="text-[oklch(0.22_0.01_60)] text-lg leading-relaxed font-medium mb-4">
              {t(
                'Every workshop supports our youth concerts and ensembles. You develop your artistry. The music continues.',
                'Elke workshop steunt onze concerten en jeugdensembles. U ontwikkelt uw artistieke vaardigheden. De muziek gaat verder.'
              )}
            </p>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'The workshops help support IOU\'s school concerts and youth ensembles, giving children the chance to hear live music and then make music together.',
                'De workshops helpen de schoolconcerten en jeugdensembles van IOU mogelijk te maken. Zo krijgen kinderen de kans om live muziek te beleven en zelf samen muziek te maken.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Dates and workshop updates */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2
            id="updates"
            ref={formHeadingRef}
            tabIndex={-1}
            className="scroll-mt-24 font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4 focus:outline-2 focus:outline-offset-4 focus:outline-[oklch(0.72_0.12_75)]"
          >
            {t('Hear when workshop details are ready', 'Blijf op de hoogte van de workshops')}
          </h2>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
            {t(
              'We are planning workshops alongside our 2026/2027 concert season. Dates, locations and registration details will be announced once the concert calendar is confirmed.',
              'We plannen de workshops naast ons concertseizoen 2026/2027. Zodra de concertkalender vaststaat, maken we de data, locaties en inschrijvingsinformatie bekend.'
            )}
          </p>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-8">
            {t(
              'Leave your details and we will email you when workshop registration opens. This does not reserve a place or register you for a workshop.',
              'Laat uw gegevens achter. We sturen u een e-mail zodra de inschrijving voor de workshops opent. Hiermee reserveert u geen plek en schrijft u zich nog niet in voor een workshop.'
            )}
          </p>
          {submitted ? (
            <div role="status" className="bg-white rounded-xl p-8 text-center border border-[oklch(0.88_0.015_195)]">
              <CheckCircle size={40} className="text-[oklch(0.38_0.09_195)] mx-auto mb-4" />
              <p className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)]">
                {t('Thank you. We will be in touch when workshop details are ready.', 'Dank u wel. We nemen contact met u op zodra de workshopgegevens bekend zijn.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm space-y-4">
              <div>
                <label htmlFor="cw-name" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Full name', 'Volledige naam')} *</label>
                <input
                  id="cw-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                />
              </div>
              <div>
                <label htmlFor="cw-email" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Email address', 'E-mailadres')} *</label>
                <input
                  id="cw-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                />
              </div>
              <div>
                <label htmlFor="cw-role" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Your conducting experience', 'Uw ervaring als dirigent')}</label>
                <input
                  id="cw-role"
                  type="text"
                  aria-describedby="cw-role-help"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                />
                <p id="cw-role-help" className="text-sm text-[oklch(0.52_0.015_60)] mt-1">
                  {t('Tell us briefly about your current role or conducting experience.', 'Vertel kort over uw huidige rol of ervaring als dirigent.')}
                </p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like email updates about IOU concerts and music programs.', 'Ik ontvang graag per e-mail nieuws over IOU-concerten en muziekprogramma\'s.')}</span>
              </label>
              <FormError show={failed} />
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                {t('Get workshop updates', 'Houd mij op de hoogte')}
                <ArrowRight size={16} />
              </button>
              <Honeypot />
            </form>
          )}
        </div>
      </section>

      {/* Useful links */}
      <section className="py-12 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <h2 className="text-sm font-medium text-[oklch(0.22_0.01_60)] mb-3">
            {t('Useful links for conductors', 'Handige links voor dirigenten')}
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
            <a href="https://musicalchairs.info" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[oklch(0.38_0.09_195)] hover:underline">
              Musical Chairs <ExternalLink size={14} />
            </a>
            <a href="https://www.conductorsguild.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[oklch(0.38_0.09_195)] hover:underline">
              International Conductors Guild <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
