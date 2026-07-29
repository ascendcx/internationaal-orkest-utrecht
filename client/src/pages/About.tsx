import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

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

export default function About() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen pt-20">
      {/* Page Hero */}
      <section className="bg-[oklch(0.95_0.02_195)] py-20 lg:py-28">
        <div className="container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.01_60)] mb-4 max-w-2xl">
            {t('About the Orchestra', 'Over het Orkest')}
          </h1>
          <p className="text-lg text-[oklch(0.42_0.01_60)] max-w-xl leading-relaxed">
            {t(
              'Founded by professional and conservatory musicians, the IOU brings live symphonic music to schools and communities across the Netherlands.',
              'Opgericht door professionele en conservatoriummusici brengt het IOU live symfonische muziek naar scholen en gemeenschappen door heel Nederland.'
            )}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)]" ref={revealRef}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <span className="section-rule" />
              <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-6">
                {t('Building Social Bonds Through Symphonic Music', 'Sociale Banden Opbouwen door Symfonische Muziek')}
              </h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'The International Orchestra of Utrecht was founded on a simple belief: making music together builds better citizens. We plan, collaborate, and perform customized concerts for schools, using those performances as the spark to build free youth ensembles.',
                  'Het Internationaal Orkest Utrecht is opgericht op een eenvoudige overtuiging: samen muziek maken bouwt betere burgers. Wij plannen, werken samen en voeren op maat gemaakte concerten uit voor scholen, waarbij we die optredens gebruiken als vonk om gratis jeugdensembles op te bouwen.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
                {t(
                  'Our ultimate goal is social cohesion — creating spaces where children of all backgrounds feel welcome, understood, and connected through the universal language of music.',
                  'Ons uiteindelijke doel is sociale cohesie — het creëren van ruimtes waar kinderen van alle achtergronden zich welkom, begrepen en verbonden voelen door de universele taal van muziek.'
                )}
              </p>
              <Link href="/school-concerts" className="btn-primary">
                {t('See Our School Programs', 'Bekijk Onze Schoolprogramma\'s')}
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="fade-up" style={{ transitionDelay: '80ms' }}>
              <img
                src="/manus-storage/iou-school-concert_ca783a6e.jpg"
                alt="Orchestra with children"
                className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jennifer Bio */}
      <section className="py-20 bg-[oklch(0.95_0.02_195)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <img
                src="/manus-storage/iou-conductor_60492725.jpg"
                alt="Jennifer Diepman, Conductor"
                className="rounded-xl shadow-lg w-full object-cover aspect-[3/4] max-w-sm mx-auto lg:mx-0"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-rule" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.52_0.09_195)] mb-2">
                {t('Artistic Director & Chief Conductor', 'Artistiek Directeur & Chef-dirigent')}
              </p>
              <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-6">Jennifer Diepman</h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'Jennifer Diepman grew up surrounded by music, beginning piano at age 3 and quickly expanding to violin, flute, oboe, and percussion. She holds a Master of Music in Conducting from Messiah University and has studied at the Juilliard School of Music and the Cascais Music Conservatory in Portugal.',
                  'Jennifer Diepman groeide op omringd door muziek, begon op 3-jarige leeftijd met piano en breidde al snel uit naar viool, fluit, hobo en percussie. Ze heeft een Master of Music in Directie van de Messiah University en heeft gestudeerd aan de Juilliard School of Music en het Cascais Muziekconservatorium in Portugal.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'An award-winning oboist and conductor, Jennifer has led ensembles across the globe. She received the Fred J. Miller 1st Prize Outstanding Achievement Award in Conducting and the John Philip Sousa Award in Oboe Performance.',
                  'Als bekroond hoboïst en dirigent heeft Jennifer ensembles over de hele wereld geleid. Ze ontving de Fred J. Miller 1e Prijs voor Uitstekende Prestatie in Directie en de John Philip Sousa Award in Hobo-uitvoering.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
                {t(
                  'Jennifer founded the International Orchestra of Utrecht to pass the joy of music to the next generation and to build social bonds through the power of collective music-making.',
                  'Jennifer richtte het Internationaal Orkest Utrecht op om de vreugde van muziek door te geven aan de volgende generatie en om sociale banden op te bouwen door de kracht van collectief musiceren.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orchestra Roster */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)] overflow-hidden">
        <div className="container">
          <div className="mb-10">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
              {t('An International Ensemble', 'Een Internationaal Ensemble')}
            </h2>
            <p className="text-[oklch(0.52_0.015_60)] max-w-xl">
              {t(
                'Our musicians hail from across the globe, bringing world-class talent and diverse perspectives to every performance.',
                'Onze muzikanten komen van over de hele wereld en brengen toptalent en diverse perspectieven naar elke uitvoering.'
              )}
            </p>
          </div>
          {/* Annual-report style roster: sections as typographic groups, not cards */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-8 space-y-0">
            {Object.entries(musicians).map(([section, members]) => (
              <div key={section} className="break-inside-avoid mb-8">
                <div className="border-t-2 border-[oklch(0.38_0.09_195)] pt-3 mb-2">
                  <h3 className="font-sans text-xs font-semibold text-[oklch(0.38_0.09_195)] uppercase tracking-widest">
                    {section}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {members.map((m) => (
                    <li key={m} className="text-xs text-[oklch(0.42_0.01_60)] leading-relaxed">{m}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
