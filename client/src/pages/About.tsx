import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSEO } from '@/hooks/useSEO';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { mediaUrl } from '@/lib/media';
import { WELCOME_MESSAGE } from '@/lib/welcome';
import { MeetTheMusicians } from '@/components/MeetTheMusicians';

const musicians = {
  'Violin': ['Anastasia Obsieger (Germany)', 'Dámian Cabedo (Spain)', 'Tina Draadjer (Netherlands)', 'Emese Jeszenöi (Hungary)', 'Magdalena Karas (Poland)', 'Tanja Kim (Uzbekistan/Korea)', 'Camille Rabot (France)', 'Julia Raggers (Netherlands)', 'Noa Staal (China)', 'Elisa van Aalst (Netherlands)', 'Myrthe van der Mullen (Netherlands)', 'Naomi van Hessen (Netherlands)', 'Hanna van Hoye (Belgium)', 'Fran Wilhelm (United States)'],
  'Viola': ['Georgios Andreadis (Greece/Germany)', 'Hannah Elgas (Luxembourg)', 'María García Sánchez (Spain)', 'Ronja Ihle (Netherlands/Norway)', 'Phaedra Kalogerakou (Greece)', 'Gabriel Torner Alsina (Spain)'],
  'Cello': ['Birgit Kooiker (Netherlands)', 'Ayla Losada (Spain)', 'Duarte Matos (Portugal)', 'Emma Warmelink (Netherlands/UK)'],
  'Double Bass': ['Teun Godschalk (Netherlands)', 'Miguel Moreno Traba (Spain)'],
  'Flute/Piccolo': ['Marianna Siamisii (Cyprus)', 'Marloes van Stormbroek (Netherlands)', 'Rivka van Vliet (Netherlands)', 'Elena Zonnenberg-Vyaznikova (Russia)'],
  'Oboe/English Horn': ['Elsa Aspioti (Greece)', 'Peter Lacković (Slovenia)'],
  'Clarinet': ['Kep de Groot (Netherlands)', 'Jarred Mattes (Australia)', 'Elisa Sgorbini (Italy)'],
  'Saxophone': ['Dimos Palamidas (Greece)'],
  'Bassoon': ['Julia Hulst (Netherlands)'],
  'Horn': ['Christian Fisalli (Australia)', 'Elisabeth Oltra (Spain)'],
  'Trumpet': ['Richard Ranvier (France)'],
  'Trombone': ['Ignacio Navarro Valero (Spain)'],
  'Tuba': ['Rens Clijnk (Netherlands)'],
  'Percussion/Timpani': ['Ivan Gianakis (Argentina)', 'Matías Munín Giadáns (Spain)', 'Bram van Helvoort (Netherlands)'],
  'Harp': ['Sander Bos (Netherlands)', 'Athanasia Manou (Greece)'],
  'Piano': ['Daisuke Kanamaru (Japan)', 'Sofia Skopou (Greece)'],
};

/** Dutch display labels. The roster records above stay in English. */
const instrumentNl: Record<string, string> = {
  'Violin': 'Viool',
  'Viola': 'Altviool',
  'Cello': 'Cello',
  'Double Bass': 'Contrabas',
  'Flute/Piccolo': 'Fluit/piccolo',
  'Oboe/English Horn': 'Hobo/althobo',
  'Clarinet': 'Klarinet',
  'Saxophone': 'Saxofoon',
  'Bassoon': 'Fagot',
  'Horn': 'Hoorn',
  'Trumpet': 'Trompet',
  'Trombone': 'Trombone',
  'Tuba': 'Tuba',
  'Percussion/Timpani': 'Slagwerk/pauken',
  'Harp': 'Harp',
  'Piano': 'Piano',
};

const countryNl: Record<string, string> = {
  'Argentina': 'Argentinië',
  'Australia': 'Australië',
  'Belgium': 'België',
  'China': 'China',
  'Cyprus': 'Cyprus',
  'France': 'Frankrijk',
  'Germany': 'Duitsland',
  'Greece': 'Griekenland',
  'Hungary': 'Hongarije',
  'Italy': 'Italië',
  'Japan': 'Japan',
  'Korea': 'Korea',
  'Luxembourg': 'Luxemburg',
  'Netherlands': 'Nederland',
  'Norway': 'Noorwegen',
  'Poland': 'Polen',
  'Portugal': 'Portugal',
  'Russia': 'Rusland',
  'Slovenia': 'Slovenië',
  'Spain': 'Spanje',
  'UK': 'Verenigd Koninkrijk',
  'United States': 'Verenigde Staten',
  'Uzbekistan': 'Oezbekistan',
};

/** "Name (Country/Country)" with the country part translated for the Dutch page. */
function memberLabel(member: string, lang: string): string {
  if (lang !== 'nl') return member;
  const match = member.match(/^(.*) \((.*)\)$/);
  if (!match) return member;
  const countries = match[2].split('/').map((c) => countryNl[c] ?? c).join('/');
  return `${match[1]} (${countries})`;
}

export default function About() {
  const { t, lang } = useLanguage();
  const revealRef = useScrollReveal();
  const missionHeading = useRef<HTMLHeadingElement>(null);

  const goToMission = () => {
    const el = missionHeading.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  };

  const coreValues = [
    { title: t('Everyone belongs.', 'Iedereen hoort erbij.'), body: t('We bring children together through making music as a group.', 'Wij brengen kinderen samen door in groep muziek te maken.') },
    { title: t('A safe place.', 'Een veilige plek.'), body: t('Children should feel safe taking part in a group.', 'Kinderen moeten zich veilig voelen als ze meedoen in een groep.') },
    { title: t('Access for all.', 'Toegang voor iedereen.'), body: t('We welcome all young people, especially those with the least resources and the greatest need.', 'Wij verwelkomen alle jongeren, vooral degenen met de minste middelen en de grootste behoefte.') },
    { title: t('Joyful, high-quality teaching.', 'Vreugdevol, kwalitatief onderwijs.'), body: t('Immersive, energetic music making with regular performances.', 'Meeslepend, energiek muziek maken met regelmatige optredens.') },
    { title: t('Community.', 'Gemeenschap.'), body: t('A place where children, families, schools and local businesses connect.', 'Een plek waar kinderen, gezinnen, scholen en lokale bedrijven elkaar ontmoeten.') },
  ];

  useSEO({
    title: 'Who We Are | Internationaal Orkest Utrecht',
    titleNl: 'Wie we zijn | Internationaal Orkest Utrecht',
    description: 'Who we are: the mission, values and musicians of Internationaal Orkest Utrecht, which brings free music to children across the Netherlands.',
    descriptionNl: 'Wie we zijn: de missie, waarden en musici van Internationaal Orkest Utrecht, dat gratis muziek naar kinderen in heel Nederland brengt.',
    path: '/about',
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero, full-bleed image */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={mediaUrl('images/iou-chamber-orchestra.webp')}
            alt={t('An orchestra seen from above, with the conductor in the foreground.', 'Een orkest van bovenaf gezien, met de dirigent op de voorgrond.')}
            width={1440}
            height={714}
            className="w-full h-full object-cover"
            style={{ objectPosition: '52% 75%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/85 via-[oklch(0.22_0.05_195)]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/70 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.72_0.12_75)] mb-3">
            {t('Our story', 'Ons verhaal')}
          </p>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white mb-4 max-w-2xl leading-tight">
            {t('Who We Are', 'Wie we zijn')}
          </h1>
          <p className="text-sm font-light tracking-wide text-white/85 mb-4 first-letter:uppercase">
            {t('in partnership with local choirs', 'in samenwerking met lokale koren')}
          </p>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t(
              'Internationaal Orkest Utrecht brings together musicians from different countries to help children discover and make music. Our work connects free school concerts with the development of free local youth ensembles.',
              'Internationaal Orkest Utrecht brengt musici uit verschillende landen samen om kinderen muziek te laten ontdekken en zelf muziek te laten maken. We verbinden gratis schoolconcerten met het opzetten van gratis lokale jeugdensembles.'
            )}
          </p>
          <button
            type="button"
            onClick={goToMission}
            className="btn-gold mt-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {t('Discover our work', 'Ontdek wat we doen')} <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Why we exist. Uses only wording already on the site.
          TODO: Jen's personal "why" story is still needed for this section (see LAUNCH_CHECKLIST.md). Do not invent one. */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]" ref={revealRef}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <span className="section-rule" />
              <h2
                ref={missionHeading}
                id="mission"
                tabIndex={-1}
                className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-6 scroll-mt-28 rounded focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[oklch(0.38_0.09_195)]"
              >
                {t('Why we exist', 'Waarom wij bestaan')}
              </h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'Every child should have the chance to hear live music and try making it themselves. Our orchestra brings concerts to schools, together with local choirs. Children can then try instruments or sing, guided by musicians and singers.',
                  'Elk kind moet de kans krijgen om live muziek te beleven en zelf muziek te proberen. Ons orkest brengt concerten naar scholen, samen met lokale koren. Daarna kunnen kinderen instrumenten uitproberen of zingen, begeleid door musici en zangers.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'We work with participating schools to develop Nederland in Harmonie (The Netherlands in Harmony), free local youth ensembles where children can keep playing or singing together. The aim is a place to learn, make friends and feel they belong.',
                  'Samen met deelnemende scholen werken we aan Nederland in Harmonie: gratis lokale jeugdensembles waar kinderen samen blijven spelen of zingen. Een plek om te leren, vrienden te maken en erbij te horen.'
                )}
              </p>
              <p className="text-[oklch(0.22_0.01_60)] font-medium leading-relaxed mb-6">
                {t(
                  'Free for every child. Made possible by donations, grants, and other funds.',
                  'Gratis voor elk kind. Mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
                )}
              </p>
              <Link href="/school-concerts" className="btn-primary">
                {t('Explore our school concerts', 'Bekijk onze schoolconcerten')}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="fade-up" style={{ transitionDelay: '80ms' }}>
              <img
                src={mediaUrl('images/iou-violin-child.webp')}
                alt={t('A small boy holds a violin while an adult leans in to talk with him.', 'Een jongetje houdt een viool vast terwijl een volwassene voorover buigt om met hem te praten.')}
                width={1440}
                height={959}
                loading="lazy"
                style={{ objectPosition: '60% 50%' }}
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jennifer Bio */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <img
                src={mediaUrl('images/iou-jennifer-diepman.webp')}
                alt={t('Jennifer Diepman, Artistic Director and Chief Conductor', 'Jennifer Diepman, artistiek directeur en chef-dirigent')}
                width={1362}
                height={2046}
                loading="lazy"
                style={{ objectPosition: '50% 30%' }}
                className="rounded-xl shadow-lg w-full object-cover aspect-[3/4] max-w-sm mx-auto lg:mx-0"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-rule" />
              <p className="text-sm font-semibold uppercase tracking-widest text-[oklch(0.52_0.09_195)] mb-2">
                {t('Founder, Artistic Director and Chief Conductor', 'Oprichter, artistiek directeur en chef-dirigent')}
              </p>
              <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-6">Jennifer Diepman</h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'Jennifer Diepman grew up surrounded by music, beginning piano at age 3 and quickly expanding to violin, flute, oboe, and percussion.',
                  'Jennifer Diepman groeide op omringd door muziek, begon op 3-jarige leeftijd met piano en breidde al snel uit naar viool, fluit, hobo en percussie.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'She holds a Master of Music in Conducting from Messiah University and has studied at the Juilliard School of Music and the Cascais Music Conservatory in Portugal. She received the Fred J. Miller 1st Prize Outstanding Achievement Award in Conducting and the John Philip Sousa Award in Oboe Performance.',
                  'Ze heeft een Master of Music in Directie van de Messiah University en heeft gestudeerd aan de Juilliard School of Music en het Cascais Muziekconservatorium in Portugal. Ze ontving de Fred J. Miller 1st Prize Outstanding Achievement Award in Conducting en de John Philip Sousa Award in Oboe Performance.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
                {t(
                  'Jennifer founded Internationaal Orkest Utrecht because she believes every child should have the chance to make music. Through school concerts and local ensembles, she wants children to have a place to learn, play, sing and feel they belong.',
                  'Jennifer richtte Internationaal Orkest Utrecht op omdat zij vindt dat elk kind de kans moet krijgen om muziek te maken. Met schoolconcerten en lokale ensembles wil zij kinderen een plek geven om te leren, te spelen, te zingen en erbij te horen.'
                )}
              </p>
              <blockquote className="pull-quote mt-8 mb-3">
                {t(
                  '"More than 600 children, laughing, clapping, and having the time of their lives while our orchestra played."',
                  '"Meer dan 600 kinderen, lachend, klappend en de tijd van hun leven hebbend terwijl ons orkest speelde."'
                )}
              </blockquote>
              <cite className="block pl-[calc(1.5rem+3px)] text-sm text-[oklch(0.35_0.01_60)] not-italic font-medium">
                Jennifer Diepman, {t('Founder & Artistic Director', 'Oprichter & artistiek directeur')}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-6">
            {t('Our mission', 'Onze missie')}
          </h2>
          <p className="font-display text-2xl lg:text-3xl italic leading-snug text-[oklch(0.38_0.09_195)]">
            {t(
              'Internationaal Orkest Utrecht makes music accessible to children, so that they may be inspired to express themselves through music.',
              'Internationaal Orkest Utrecht maakt muziek toegankelijk voor kinderen, zodat zij geïnspireerd raken om zich door muziek uit te drukken.'
            )}
          </p>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] border-t border-[oklch(0.88_0.015_195)]">
        <div className="container">
          <div className="mb-10">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)]">
              {t('Our core values', 'Onze kernwaarden')}
            </h2>
          </div>
          <ol className="max-w-3xl">
            {coreValues.map((v, i) => (
              <li key={i} className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-x-6 py-6 border-t border-[oklch(0.88_0.015_195)] items-start">
                <span aria-hidden="true" className="font-display text-3xl font-bold text-[var(--gold-on-light)] leading-none pt-1">{i + 1}</span>
                <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">
                  <strong className="font-display font-semibold text-lg text-[oklch(0.22_0.01_60)]">{v.title}</strong> {v.body}
                </p>
              </li>
            ))}
            <li aria-hidden="true" className="border-t border-[oklch(0.88_0.015_195)]" />
          </ol>
        </div>
      </section>

      {/* Welcome message, written by Jen */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            {t('Welcome', 'Welkom')}
          </h2>
          <p className="text-lg text-[oklch(0.22_0.01_60)] leading-relaxed">{t(WELCOME_MESSAGE.en, WELCOME_MESSAGE.nl)}</p>
        </div>
      </section>

      {/* Meet the musicians (renders nothing until musicians are added in lib/musicians.ts) */}
      <MeetTheMusicians />

      {/* Orchestra Roster */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] overflow-hidden">
        <div className="container">
          <div className="mb-10">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
              {t('Our orchestra', 'Ons orkest')}
            </h2>
            <p className="text-[oklch(0.52_0.015_60)] max-w-xl">
              {t(
                'Our musicians come from many countries and bring different musical backgrounds to every performance.',
                'Onze musici komen uit verschillende landen en brengen hun eigen muzikale achtergrond mee naar elk optreden.'
              )}
            </p>
          </div>
          <img
            src={mediaUrl('images/iou-teachers.webp')}
            alt={t('Three smiling musicians stand together holding a flute, a clarinet and a saxophone.', 'Drie lachende musici staan samen en houden een dwarsfluit, een klarinet en een saxofoon vast.')}
            width={1440}
            height={1164}
            loading="lazy"
            className="rounded-xl w-full max-w-[720px] h-auto mx-auto mb-12"
          />
          {/* Annual-report style roster: sections as typographic groups, not cards */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-8 space-y-0">
            {Object.entries(musicians).map(([section, members]) => (
              <div key={section} className="break-inside-avoid mb-8">
                <div className="border-t-2 border-[oklch(0.38_0.09_195)] pt-3 mb-2">
                  <h3 className="font-sans text-sm font-semibold text-[oklch(0.38_0.09_195)] uppercase tracking-widest">
                    {lang === 'nl' ? instrumentNl[section] ?? section : section}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {members.map((m) => (
                    <li key={m} className="text-sm text-[oklch(0.42_0.01_60)] leading-relaxed">{memberLabel(m, lang)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing invitation */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
            {t('Explore our work', 'Ontdek wat we doen')}
          </h2>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed max-w-xl mb-6">
            {t(
              'Find out about our school concerts and youth ensembles, or help make free music possible for more children.',
              'Lees meer over onze schoolconcerten en jeugdensembles, of help gratis muziek mogelijk te maken voor meer kinderen.'
            )}
          </p>
          <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3">
            {[
              { href: '/school-concerts', label: t('School concerts', 'Schoolconcerten') },
              { href: '/youth-ensembles', label: t('Youth ensembles', 'Jeugdensembles') },
              { href: '/support', label: t('Support the children', 'Steun de kinderen') },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-1.5 font-medium text-[oklch(0.38_0.09_195)] underline underline-offset-4 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.38_0.09_195)]"
                >
                  {l.label}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
