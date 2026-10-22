import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSEO } from '@/hooks/useSEO';
import { useRef, useState } from 'react';
import { CheckCircle, ArrowRight, Play } from 'lucide-react';
import { mediaUrl } from '@/lib/media';

// Set to false until music licensing for online use is confirmed.
const SHOW_ORCHESTRA_VIDEO = true;

function interestFromUrl() {
  const value = new URLSearchParams(window.location.search).get('interest') ?? '';
  return value === 'concert' || value === 'concert-ensemble' ? value : '';
}

function ConcertVideo({ t }: { t: (en: string, nl: string) => string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    // If play() is rejected the button stays, so the visitor can try again or use the native controls.
    videoRef.current?.play().catch(() => {});
  };

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={mediaUrl('videos/iou-video.mp4')}
        poster={mediaUrl('images/iou-video-poster.jpg')}
        controls
        playsInline
        preload="metadata"
        width={854}
        height={480}
        onPlay={() => setStarted(true)}
        aria-label={t('Video: the orchestra performing in concert', 'Video: het orkest tijdens een concert')}
        className="absolute inset-0 w-full h-full max-w-full"
      />
      {!started && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button
            type="button"
            onClick={handlePlay}
            aria-label={t('Play concert video', 'Speel de concertvideo af')}
            className="pointer-events-auto flex h-20 w-20 items-center justify-center rounded-full bg-[oklch(0.98_0.008_80)] text-[oklch(0.38_0.09_195)] shadow-lg ring-4 ring-white/40 transition-transform duration-150 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100 focus-visible:outline-none focus-visible:ring-[oklch(0.72_0.12_75)]"
          >
            <Play size={32} fill="currentColor" aria-hidden="true" className="ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function SchoolConcerts() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [form, setForm] = useState({ name: '', school: '', role: '', email: '', phone: '', dates: '', interest: interestFromUrl(), message: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);
  useSEO({
    title: 'Bring a Symphony to Your School | Internationaal Orkest Utrecht',
    titleNl: 'Breng een Symfonie naar Uw School | Internationaal Orkest Utrecht',
    description: 'Free, interactive instrumental and vocal concerts for schools across the Netherlands, funded through donations, grants, and other funds.',
    descriptionNl: 'Gratis, interactieve instrumentale en vocale concerten voor scholen in heel Nederland, gefinancierd door donaties, bijdragen van fondsen en andere middelen.',
    path: '/school-concerts',
    image: mediaUrl('images/iou-school-concert.jpg'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { title: t('Hear live music', 'Live muziek beleven'), desc: t('Our orchestra, together with local choirs, performs for your students. Children experience live instrumental and vocal music.', 'Ons orkest treedt op voor uw leerlingen, samen met lokale koren. Kinderen beleven live instrumentale muziek en zang.') },
    { title: t('Try it themselves', 'Zelf proberen'), desc: t('After the concert, children try instruments or sing together at their school, guided by our musicians and singers.', 'Na het concert proberen kinderen op hun school instrumenten uit of zingen ze samen, begeleid door onze musici en zangers.') },
    { title: t('Keep making music', 'Samen muziek blijven maken'), desc: t('With the concert and ensemble option, we work with your school to set up a local Nederland in Harmonie (The Netherlands in Harmony) ensemble. Children can continue playing or singing together, free of charge.', 'Kiest u voor een concert en ensemble? Dan werken we samen met uw school aan het opzetten van een lokaal ensemble van Nederland in Harmonie (The Netherlands in Harmony). Kinderen kunnen daar gratis blijven spelen of zingen.') },
  ];

  const options = [
    { title: t('School concert', 'Schoolconcert'), desc: t('A concert on its own. A good fit if your school already has a music program, such as MuziekRoute.', 'Een concert zonder vervolgensemble. Geschikt voor scholen die al een muziekprogramma hebben, zoals MuziekRoute.') },
    { title: t('School concert and local ensemble', 'Schoolconcert en lokaal ensemble'), desc: t('A concert followed by working with IOU to set up a free local ensemble where interested students can keep making music.', 'Een concert, gevolgd door het samen met IOU opzetten van een gratis lokaal ensemble. Zo kunnen geïnteresseerde leerlingen samen muziek blijven maken.') },
  ];

  const interestOptions = [
    { value: 'concert', label: t('A school concert', 'Een schoolconcert') },
    { value: 'concert-ensemble', label: t('A school concert and local ensemble', 'Een schoolconcert en lokaal ensemble') },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-8 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mediaUrl('images/iou-school-concert.jpg')} alt="School concert" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Bring Music to Your School', 'Breng muziek naar uw school')}
          </h1>
          <p className="text-sm font-light tracking-wide text-white/85 mb-4 first-letter:uppercase">
            {t('in partnership with local choirs', 'in samenwerking met lokale koren')}
          </p>
          <p className="hidden md:block text-white/85 text-lg max-w-xl leading-relaxed mb-4">
            {t(
              'Free, interactive concerts bring live orchestral music and singing to your school. Children hear the musicians perform, then try instruments or sing together.',
              'Gratis, interactieve concerten brengen orkestmuziek en zang naar uw school. Kinderen luisteren naar de musici en proberen daarna zelf instrumenten uit of zingen samen.'
            )}
          </p>
          <p className="md:hidden text-white/85 text-lg max-w-xl leading-relaxed mb-4">
            {t(
              'Free school concerts where children hear live music, try instruments and sing together.',
              'Gratis schoolconcerten waarbij kinderen live muziek beleven, instrumenten uitproberen en samen zingen.'
            )}
          </p>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed font-medium mb-8">
            {t(
              'Free for every child. Made possible by donations, grants, and other funds.',
              'Gratis voor elk kind. Mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
            )}
          </p>
          <a href="#booking" className="btn-gold">
            {t('Ask about a school concert', 'Vraag een schoolconcert aan')}
          </a>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] overflow-hidden" ref={revealRef}>
        <div className="container">
          {/* Same 720px column as the video section below, so the two read as one sequence. */}
          <div className="max-w-[720px] mx-auto">
          <div className="mb-12 fade-up">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] max-w-lg">
              {t('From Hearing Music to Making It', 'Van luisteren naar zelf muziek maken')}
            </h2>
          </div>
          {/* Annual-report style process: numbered steps with thin rules, no icon boxes */}
          <div className="space-y-0 fade-up" style={{ transitionDelay: '80ms' }}>
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-x-6 gap-y-2 py-6 border-t border-[oklch(0.88_0.015_195)] items-start">
                <div className="font-display text-3xl font-bold text-[oklch(0.38_0.09_195)] leading-none pt-1">0{i + 1}</div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[oklch(0.22_0.01_60)] mb-2">{step.title}</h3>
                  <p className="text-base text-[oklch(0.35_0.01_60)] leading-relaxed max-w-prose">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[oklch(0.88_0.015_195)]" />
          </div>
          </div>
        </div>
      </section>

      {/* Concert video */}
      {SHOW_ORCHESTRA_VIDEO && (
        <section className="pb-16 bg-[oklch(0.98_0.008_80)] overflow-hidden">
          <div className="container">
            <div className="max-w-[720px] mx-auto">
              <span className="section-rule" />
              <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
                {t('Where the Journey Begins', 'Hier begint de muzikale reis')}
              </h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
                {t(
                  'A live concert can spark a child\'s curiosity. Our school concerts turn that first experience into a chance to try an instrument or sing together.',
                  'Een live concert kan kinderen nieuwsgierig maken naar muziek. Bij onze schoolconcerten blijft het niet bij luisteren: kinderen proberen zelf instrumenten uit of zingen samen.'
                )}
              </p>
              <ConcertVideo t={t} />
            </div>
          </div>
        </section>
      )}

      {/* Two school options */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] overflow-hidden">
        <div className="container">
          <div className="mb-10">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] max-w-lg mb-2">
              {t('Choose What Fits Your School', 'Kies wat bij uw school past')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t('Both options are free.', 'Beide opties zijn gratis.')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">
            {options.map((option, i) => (
              <div
                key={i}
                className={i === 0 ? 'md:pr-10 lg:pr-16' : 'border-t border-[oklch(0.88_0.015_195)] pt-10 md:border-t-0 md:border-l md:pt-0 md:pl-10 lg:pl-16'}
              >
                <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{option.title}</h3>
                <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed max-w-prose">{option.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed max-w-2xl mt-10">
            {t(
              'At this stage, the youth ensemble program starts through a school concert. Contact us to discuss what is possible for your school.',
              'In deze fase begint het jeugdensembleprogramma met een schoolconcert. Neem contact met ons op om te bespreken wat er mogelijk is voor uw school.'
            )}
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="booking" className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Tell Us About Your School', 'Vertel ons over uw school')}
          </h2>
          <p className="text-[oklch(0.52_0.015_60)] mb-8">
            {t(
              'Share your school\'s details, preferred dates and the option you are interested in. We will contact you to discuss the next steps. Sending an inquiry does not commit you to a booking.',
              'Laat ons weten om welke school het gaat, wanneer u een concert zou willen en welke optie uw belangstelling heeft. We nemen contact met u op om de mogelijkheden te bespreken. Een aanvraag verplicht u tot niets.'
            )}
          </p>
          {submitted ? (
            <div className="bg-white rounded-xl p-8 text-center border border-[oklch(0.88_0.015_195)]">
              <CheckCircle size={40} className="text-[oklch(0.38_0.09_195)] mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{t('Thank you!', 'Bedankt!')}</h3>
              <p className="text-[oklch(0.52_0.015_60)]">{t("We'll be in touch within 2 business days.", 'We nemen binnen 2 werkdagen contact met u op.')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm space-y-5">
              {[
                { key: 'name', label: t('Your name', 'Uw naam'), type: 'text', required: true },
                { key: 'school', label: t('School name', 'Naam van de school'), type: 'text', required: true },
                { key: 'role', label: t('Your role', 'Uw functie'), type: 'text', required: false },
                { key: 'email', label: t('Email address', 'E-mailadres'), type: 'email', required: true },
                { key: 'phone', label: t('Phone number', 'Telefoonnummer'), type: 'tel', required: false },
                { key: 'dates', label: t('Preferred dates or term', 'Gewenste datum of periode'), type: 'text', required: false },
              ].map(({ key, label, type, required }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{label}{required && ' *'}</label>
                  <input
                    type={type}
                    required={required}
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('I am interested in', 'Ik ben geïnteresseerd in')} *</label>
                <select
                  id="interest"
                  required
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                >
                  <option value="" disabled>{t('Choose an option', 'Kies een optie')}</option>
                  {interestOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Message', 'Bericht')}</label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)] resize-none"
                />
                <p className="text-sm text-[oklch(0.52_0.015_60)] mt-1">
                  {t('Include your school\'s town or city and any questions.', 'Vermeld ook de plaats van uw school en eventuele vragen.')}
                </p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like email updates about IOU concerts and music programs.', 'Ik ontvang graag per e-mail nieuws over IOU-concerten en muziekprogramma\'s.')}</span>
              </label>
              <button type="submit" className="btn-primary w-full justify-center">
                {t('Send inquiry', 'Verstuur aanvraag')}
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
