import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'wouter';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { mediaUrl } from '@/lib/media';
import { ENSEMBLES } from '@/lib/ensembles';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Honeypot, FormError } from '@/components/FormParts';
import { SHOW_SAFEGUARDING, SHOW_SISTEMA_NOTE, SAFEGUARDING_TEXT } from '@/lib/siteFlags';

/** The ?city= value from a Locations link. An unknown value is ignored. */
function cityFromUrl(): string {
  const value = new URLSearchParams(window.location.search).get('city') ?? '';
  return ENSEMBLES.some((e) => e.slug === value) ? value : '';
}

export default function YouthEnsembles() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ parentName: '', childName: '', childAge: '', school: '', email: '', phone: '', interest: '', city: cityFromUrl(), cityOther: '', newsletter: false });
  const { sending, failed, submitted, submit } = useFormSubmit('youth-ensemble');
  useSEO({
    title: 'Nederland in Harmonie | Free Youth Ensembles',
    titleNl: 'Nederland in Harmonie | Gratis jeugdensembles',
    description: 'Free local youth music groups for children in the Netherlands. No audition or previous experience needed. Register your interest in Nederland in Harmonie.',
    descriptionNl: 'Gratis lokale muziekgroepen voor kinderen in Nederland. Geen auditie of eerdere ervaring nodig. Meld uw belangstelling voor Nederland in Harmonie.',
    path: '/youth-ensembles',
  });

  const formHeadingRef = useRef<HTMLHeadingElement>(null);
  const goToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heading = formHeadingRef.current;
    if (!heading) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    heading.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    heading.focus({ preventScroll: true });
    history.replaceState(null, '', '#register');
  };

  // A Locations link (/youth-ensembles?city=rotterdam#register) lands on the form. The short delay lets ScrollToTop run first.
  useEffect(() => {
    if (window.location.hash !== '#register') return;
    const timer = window.setTimeout(() => {
      const heading = formHeadingRef.current;
      if (!heading) return;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      heading.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      heading.focus({ preventScroll: true });
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => submit(e, { ...form });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mediaUrl('images/iou-youth-ensemble.jpg')} alt={t('Youth ensemble', 'Jeugdensemble')} className="w-full h-full object-cover md:object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Grow together through music', 'Groei samen door muziek')}
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed mb-4">
            {t('Nederland in Harmonie (The Netherlands in Harmony) brings children together to play and sing in free local music groups. No audition or previous experience is needed. Children make friends, share music and belong to something bigger than themselves.', 'Bij Nederland in Harmonie spelen en zingen kinderen samen in gratis lokale muziekgroepen. Een auditie of eerdere ervaring is niet nodig. Kinderen maken vrienden, delen muziek en horen bij iets groters dan zichzelf.')}
          </p>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t('We are preparing our first ensembles. Register your interest to hear about the options for your child\'s school and area.', 'We bereiden de eerste ensembles voor. Meld uw belangstelling om te horen wat er mogelijk is voor de school en omgeving van uw kind.')}
          </p>
          <a href="#register" onClick={goToForm} className="btn-gold">
            {t('Register your interest', 'Meld uw belangstelling')}
          </a>
        </div>
      </section>

      {/* What families need to know */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] overflow-hidden">
        <div className="container">
          <div className="mb-10">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)]">
              {t('What families need to know', 'Goed om te weten')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1px_1fr] gap-0 items-stretch">
            <div className="py-10 lg:pr-12">
              <div className="text-[var(--gold-on-light)] font-display text-6xl font-bold mb-3 leading-none">€0</div>
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                {t('Free to take part', 'Gratis meedoen')}
              </h3>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed text-base">
                {t('Free for every child. Made possible by donations, grants, and other funds. Sessions and use of instruments are free.', 'Gratis voor elk kind. Mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen. Sessies en het gebruik van instrumenten zijn gratis.')}
              </p>
            </div>
            <div className="hidden lg:block bg-[oklch(0.88_0.015_195)]" />
            <div className="py-10 lg:px-12 border-t lg:border-t-0 border-[oklch(0.88_0.015_195)]">
              <div className="w-8 h-0.5 bg-[oklch(0.38_0.09_195)] mb-6" />
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                {t('Every background welcome', 'Iedere achtergrond is welkom')}
              </h3>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed text-base">
                {t('Children can start without an audition or previous experience. A place to make music, make friends and feel they belong. Children from every background make music side by side.', 'Kinderen kunnen beginnen zonder auditie of eerdere ervaring. Een plek om muziek te maken, vrienden te maken en erbij te horen. Kinderen van alle achtergronden maken samen muziek.')}
              </p>
            </div>
            <div className="hidden lg:block bg-[oklch(0.88_0.015_195)]" />
            <div className="py-10 lg:pl-12 border-t lg:border-t-0 border-[oklch(0.88_0.015_195)]">
              <div className="w-8 h-0.5 bg-[oklch(0.38_0.09_195)] mb-6" />
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                {t('Before an ensemble starts', 'Voordat een ensemble begint')}
              </h3>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed text-base">
                {t('We will share confirmed locations and rehearsal times before an ensemble starts.', 'Voordat een ensemble begint, laten we u weten waar en wanneer de repetities plaatsvinden.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it starts */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="mb-12">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] max-w-xl">
              {t('From a first concert to making music together', 'Van een eerste concert naar samen muziek maken')}
            </h2>
          </div>
          <div className="space-y-0">
            {[
              {
                title: t('Hear live music', 'Live muziek beleven'),
                desc: t('Children experience a school concert with our orchestra, together with local choirs.', 'Kinderen beleven een schoolconcert met ons orkest, samen met lokale koren.'),
              },
              {
                title: t('Try it themselves', 'Zelf proberen'),
                desc: t('Children try instruments or sing together at school, guided by our musicians and singers.', 'Kinderen proberen op school instrumenten uit of zingen samen, begeleid door onze musici en zangers.'),
              },
              {
                title: t('Keep making music', 'Samen muziek blijven maken'),
                desc: t('IOU works with participating schools to set up free local Nederland in Harmonie ensembles, where children can continue playing or singing together.', 'IOU werkt met deelnemende scholen aan het opzetten van gratis lokale ensembles van Nederland in Harmonie. Daar kunnen kinderen samen blijven spelen of zingen.'),
              },
            ].map((step, i) => (
              <div key={i} className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-x-6 gap-y-2 py-8 border-t border-[oklch(0.88_0.015_195)] items-start">
                <div className="font-display text-3xl font-bold text-[var(--gold-on-light)] leading-none pt-1">{i + 1}</div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-[oklch(0.22_0.01_60)] mb-1">{step.title}</h3>
                  <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[oklch(0.88_0.015_195)]" />
          </div>
          <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed max-w-2xl mt-8">
            {t('At this stage, the ensemble programme starts through a school concert. Register your interest so we can discuss the options for your child\'s school and area.', 'In deze fase begint het ensembleprogramma met een schoolconcert. Meld uw belangstelling, zodat we kunnen bespreken wat er mogelijk is voor de school en omgeving van uw kind.')}
          </p>
          <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed max-w-2xl mt-4">
            {t('Choirs, symphonic bands, marching bands, percussion ensembles, and orchestras.', 'Koren, harmonieorkesten, fanfares, slagwerkensembles en orkesten.')}{' '}
            {t('The options for each area will be confirmed before an ensemble starts.', 'Wat er in elk gebied mogelijk is, wordt bevestigd voordat een ensemble begint.')}
          </p>
          <div className="mt-10 max-w-2xl border-t border-[oklch(0.88_0.015_195)] pt-8">
            <h3 className="font-display font-semibold text-xl text-[oklch(0.22_0.01_60)] mb-2">
              {t('Where we are building ensembles', 'Waar wij ensembles opbouwen')}
            </h3>
            <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'We are building ensembles in Utrecht, Leeuwarden, Rotterdam, Arnhem, Almelo, Enschede and Roosendaal. All youth choirs and orchestras meet after school.',
                'Wij bouwen ensembles op in Utrecht, Leeuwarden, Rotterdam, Arnhem, Almelo, Enschede en Roosendaal. Alle jeugdkoren en jeugdorkesten komen na schooltijd bij elkaar.'
              )}
            </p>
          </div>
          <p className="mt-8">
            <Link href="/locations" className="text-sm font-medium text-[oklch(0.38_0.09_195)] hover:underline">
              {t('See the cities on a map', 'Bekijk de steden op de kaart')}
            </Link>
          </p>
          <p className="mt-4">
            <Link href="/school-concerts" className="text-sm font-medium text-[oklch(0.38_0.09_195)] hover:underline">
              {t('Information for schools', 'Informatie voor scholen')}
            </Link>
          </p>
        </div>
      </section>

      {/* How an ensemble works */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] border-t border-[oklch(0.88_0.015_195)]">
        <div className="container">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-8 max-w-xl">
            {t('How an ensemble works', 'Hoe een ensemble werkt')}
          </h2>
          <ul className="max-w-2xl">
            {[
              t('Children come together after school for inclusion and teamwork.', 'Kinderen komen na school samen voor inclusie en teamwork.'),
              t('We aim for regular sessions, with several hours of activity each week.', 'Wij streven naar regelmatige sessies, met meerdere uren activiteit per week.'),
              t('Sessions are immersive and joyful. As the group grows, children inspire each other.', 'De sessies zijn meeslepend en vreugdevol. Naarmate de groep groeit, inspireren kinderen elkaar.'),
              t('Children perform regularly.', 'Kinderen treden regelmatig op.'),
              t('Parents and caregivers meet other families.', 'Ouders en verzorgers ontmoeten andere gezinnen.'),
            ].map((point, i) => (
              <li key={i} className="py-4 border-t border-[oklch(0.88_0.015_195)] text-base text-[oklch(0.35_0.01_60)] leading-relaxed">
                {point}
              </li>
            ))}
            <li aria-hidden="true" className="border-t border-[oklch(0.88_0.015_195)]" />
          </ul>
        </div>
      </section>

      {/* How free music is made possible */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] border-t border-[oklch(0.88_0.015_195)]">
        <div className="container">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4 max-w-xl">
            {t('How free music is made possible', 'Zo maken we gratis muziek mogelijk')}
          </h2>
          <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed max-w-2xl">
            {t('Anyone can join for free. Families who are able are warmly welcome to support us during our fundraising campaigns. It is never required.', 'Iedereen mag gratis meedoen. Gezinnen die dat kunnen, zijn tijdens onze fondsenwervende acties van harte welkom om ons te steunen. Het is nooit verplicht.')}
          </p>
        </div>
      </section>

      {/* Sistema Europe note */}
      {SHOW_SISTEMA_NOTE && (
        <section className="py-16 bg-[oklch(0.95_0.02_195)]">
          <div className="container max-w-3xl">
            <span className="section-rule" />
            <p className="text-lg text-[oklch(0.22_0.01_60)] leading-relaxed">
              {t(
                'Children in Nederland in Harmonie become part of the Sistema Europe network, with opportunities to play and sing together with peers from other European countries.',
                'Kinderen in Nederland in Harmonie worden onderdeel van het Sistema Europe netwerk, met mogelijkheden om samen te spelen en te zingen met leeftijdsgenoten uit andere Europese landen.'
              )}
            </p>
          </div>
        </section>
      )}

      {/* Safeguarding (hidden until Jen approves the wording, see siteFlags.ts) */}
      {SHOW_SAFEGUARDING && (
        <section className="py-16 bg-[oklch(0.98_0.008_80)] border-t border-[oklch(0.88_0.015_195)]">
          <div className="container max-w-3xl">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t(SAFEGUARDING_TEXT.title.en, SAFEGUARDING_TEXT.title.nl)}
            </h2>
            <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(SAFEGUARDING_TEXT.body.en, SAFEGUARDING_TEXT.body.nl)}
            </p>
          </div>
        </section>
      )}

      {/* Enrolment Form */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2 id="register" ref={formHeadingRef} tabIndex={-1} className="scroll-mt-24 font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2 focus:outline-2 focus:outline-offset-4 focus:outline-[oklch(0.72_0.12_75)]">
            {t('Register your interest', 'Meld uw belangstelling')}
          </h2>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-8">
            {t('Tell us about your child and what they would like to try. This is an expression of interest, not a confirmed place. We will contact you when there is news about an ensemble for your child\'s school or area. Registering does not commit you to join.', 'Vertel ons over uw kind en wat het graag wil proberen. U meldt hiermee uw belangstelling; dit is nog geen bevestigde plek. We nemen contact met u op zodra er nieuws is over een ensemble voor de school of omgeving van uw kind. Uw aanmelding verplicht u tot niets.')}
          </p>
          {submitted ? (
            <div role="status" className="bg-white rounded-xl p-8 text-center border border-[oklch(0.88_0.015_195)]">
              <CheckCircle size={40} className="text-[oklch(0.38_0.09_195)] mx-auto mb-4" />
              <p className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)]">{t('Thank you. We have received your interest. We will contact you when there is news about an ensemble for your child\'s school or area.', 'Dank u wel. We hebben uw belangstelling ontvangen. We nemen contact met u op zodra er nieuws is over een ensemble voor de school of omgeving van uw kind.')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm space-y-5">
              {[
                { key: 'parentName', label: t('Parent or guardian name', 'Naam ouder of voogd'), type: 'text', required: true },
                { key: 'childName', label: t("Child's name", 'Naam van het kind'), type: 'text', required: true },
                { key: 'childAge', label: t("Child's age", 'Leeftijd van het kind'), type: 'number', required: true },
                { key: 'school', label: t("Child's school", 'School van het kind'), type: 'text', required: false },
                { key: 'email', label: t('Email address', 'E-mailadres'), type: 'email', required: true },
                { key: 'phone', label: t('Phone number', 'Telefoonnummer'), type: 'tel', required: false },
              ].map(({ key, label, type, required }) => (
                <div key={key}>
                  <label htmlFor={`ye-${key}`} className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{label}{required && ' *'}</label>
                  <input
                    id={`ye-${key}`}
                    type={type}
                    required={required}
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="ye-interest" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('What would your child like to try?', 'Wat wil uw kind graag proberen?')}</label>
                <select
                  id="ye-interest"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                >
                  <option value="undecided">{t('Not sure yet', 'Nog niet zeker')}</option>
                  <option value="choir">{t('Choir / Singing', 'Koor / zingen')}</option>
                  <option value="strings">{t('Strings (Violin, Viola, Cello)', 'Strijkers (viool, altviool, cello)')}</option>
                  <option value="woodwinds">{t('Woodwinds (Flute, Clarinet, Oboe)', 'Houtblazers (fluit, klarinet, hobo)')}</option>
                  <option value="brass">{t('Brass (Trumpet, Horn, Trombone)', 'Koperblazers (trompet, hoorn, trombone)')}</option>
                  <option value="percussion">{t('Percussion', 'Percussie')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="ye-city" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Which city is closest to you?', 'Welke stad ligt het dichtst bij u?')}</label>
                <select
                  id="ye-city"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value, cityOther: e.target.value === 'other' ? form.cityOther : '' })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                >
                  <option value="">{t('Choose a city', 'Kies een stad')}</option>
                  {ENSEMBLES.map((e) => (
                    <option key={e.slug} value={e.slug}>{e.name}</option>
                  ))}
                  <option value="other">{t('Another city', 'Een andere stad')}</option>
                </select>
              </div>
              {form.city === 'other' && (
                <div>
                  <label htmlFor="ye-cityOther" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Your city', 'Uw stad')}</label>
                  <input
                    id="ye-cityOther"
                    type="text"
                    maxLength={80}
                    value={form.cityOther}
                    onChange={(e) => setForm({ ...form, cityOther: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                  />
                </div>
              )}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like email updates about IOU concerts and music programmes.', 'Ik ontvang graag per e-mail nieuws over IOU-concerten en muziekprogramma\'s.')}</span>
              </label>
              <FormError show={failed} />
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                {t('Register my interest', 'Meld mijn belangstelling')}
                <ArrowRight size={16} />
              </button>
              <p className="text-center text-sm text-[oklch(0.52_0.015_60)] mt-3">
                <Link href="/privacy" className="underline hover:no-underline">
                  {t('Read how we handle your information in our Privacy Policy.', 'Lees in ons privacybeleid hoe we met uw gegevens omgaan.')}
                </Link>
              </p>
              <Honeypot />
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
