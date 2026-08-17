import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Music, Heart, Star, ExternalLink } from 'lucide-react';

export default function YouthEnsembles() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ parentName: '', childName: '', childAge: '', school: '', email: '', phone: '', interest: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);
  useSEO({
    title: 'Nederland in Harmonie | Free Youth Ensembles',
    titleNl: 'Nederland in Harmonie | Gratis Jeugdensembles',
    description: 'Free after-school music ensembles for every child in the Netherlands. No audition, no fees, ever.',
    descriptionNl: 'Gratis naschoolse muziekensembles voor elk kind in Nederland. Geen auditie, geen kosten, nooit.',
    path: '/youth-ensembles',
    image: 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-youth-ensemble.jpg',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-youth-ensemble.jpg" alt="Youth ensemble" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Learn, Play, and Grow Together', 'Leren, Spelen en Samen Groeien')}
          </h1>
          <p className="hidden md:block text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t(
              'Nederland in Harmonie (The Netherlands in Harmony) offers free ensemble programs for every child living in the Netherlands. Choirs, symphonic bands, marching bands, percussion ensembles, and orchestras. No audition, no experience, no fees. Ever.',
              'Nederland in Harmonie biedt gratis ensembleprogramma\'s voor ieder kind dat in Nederland woont. Koren, harmonieorkesten, fanfares, slagwerkensembles en orkesten. Geen auditie, geen ervaring, geen kosten. Nooit.'
            )}
          </p>
          <p className="md:hidden text-white/85 text-lg max-w-xl leading-relaxed">
            {t(
              'Every child in the Netherlands can join, for free.',
              'Elk kind in Nederland kan meedoen, gratis.'
            )}
          </p>
          <div className="hidden md:inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_75)]" />
            <span className="text-white text-sm font-medium">{t('No Fees. Ever.', 'Nooit Kosten.')}</span>
          </div>
        </div>
      </section>

      {/* Intro / About Nederland in Harmonie */}
      <section className="py-16 lg:py-20 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-rule mx-auto" />
            <p className="text-lg lg:text-xl text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'Nederland in Harmonie (The Netherlands in Harmony) offers free ensemble programs for every child living in the Netherlands. Choirs, symphonic bands, marching bands, percussion ensembles, and orchestras. No audition, no experience, no fees. Ever.',
                'Nederland in Harmonie biedt gratis ensembleprogramma\'s voor ieder kind dat in Nederland woont. Koren, harmonieorkesten, fanfares, slagwerkensembles en orkesten. Geen auditie, geen ervaring, geen kosten. Nooit.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)] overflow-hidden">
        <div className="container">
          <div className="mb-10">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)]">
              {t('What You Need to Know', 'Wat U Moet Weten')}
            </h2>
          </div>
          {/* Editorial horizontal facts — the "100% Free" fact gets dominant visual weight */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1px_1fr] gap-0 items-stretch">
            {/* Fact 1 — dominant */}
            <div className="py-10 lg:pr-12">
              <div className="text-[oklch(0.72_0.12_75)] font-display text-6xl font-bold mb-3 leading-none">€0</div>
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                {t('Always Free', 'Altijd Gratis')}
              </h3>
              <p className="text-[oklch(0.52_0.015_60)] leading-relaxed text-sm">
                {t(
                  'Thanks to our donors, grants, and supporters, there are no fees for instruction or instrument access. Ever. Every child participates on equal footing.',
                  'Dankzij onze donateurs, subsidies en supporters zijn er nooit kosten voor les of instrumenten. Elk kind doet mee op gelijke voet.'
                )}
              </p>
            </div>
            <div className="hidden lg:block bg-[oklch(0.88_0.015_195)]" />
            {/* Fact 2 */}
            <div className="py-10 lg:px-12 border-t lg:border-t-0 border-[oklch(0.88_0.015_195)]">
              <div className="w-8 h-0.5 bg-[oklch(0.38_0.09_195)] mb-6" />
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                {t('All Backgrounds Welcome', 'Alle Achtergronden Welkom')}
              </h3>
              <p className="text-[oklch(0.52_0.015_60)] leading-relaxed text-sm">
                {t(
                  'Integrated Dutch ensembles, welcoming every child living in the Netherlands regardless of background or experience level. No audition, no prior knowledge required. A place to make music, make friends, and belong.',
                  'Geïntegreerde Nederlandse ensembles, welkom voor ieder kind dat in Nederland woont, ongeacht achtergrond of ervaringsniveau. Geen auditie, geen voorkennis vereist. Een plek om muziek te maken, vrienden te maken en erbij te horen.'
                )}
              </p>
            </div>
            <div className="hidden lg:block bg-[oklch(0.88_0.015_195)]" />
            {/* Fact 3 */}
            <div className="py-10 lg:pl-12 border-t lg:border-t-0 border-[oklch(0.88_0.015_195)]">
              <div className="w-8 h-0.5 bg-[oklch(0.38_0.09_195)] mb-6" />
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-3">
                {t('After School, At Your School', 'Na School, Op Uw School')}
              </h3>
              <p className="text-[oklch(0.52_0.015_60)] leading-relaxed text-sm">
                {t(
                  'Rehearsals take place after school at local school locations, so no travel is required. Specific schedules and locations are confirmed upon registration.',
                  'Repetities vinden na school plaats op lokale schoollocaties, zodat reizen niet nodig is. Specifieke schema\'s en locaties worden bevestigd bij inschrijving.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Children Join — the three-step package */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="mb-12">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] max-w-lg">
              {t('How Children Join', 'Hoe Kinderen Meedoen')}
            </h2>
          </div>
          <div className="space-y-0">
            {[
              {
                title: t('The Orchestra Performs', 'Het Orkest Treedt Op'),
                desc: t(
                  'Our orchestra, often joined by vocal ensembles from the area, performs an instrumental and vocal concert for students at their school.',
                  'Ons orkest, vaak samen met vocale ensembles uit de regio, verzorgt een instrumentaal en vocaal concert voor leerlingen op hun school.'
                ),
              },
              {
                title: t('Students Try It Themselves', 'Leerlingen Proberen Het Zelf'),
                desc: t(
                  'Children try out instruments or sing in a group at their own school, guided by our musicians and singers.',
                  'Kinderen proberen instrumenten uit of zingen in een groep op hun eigen school, begeleid door onze muzikanten en zangers.'
                ),
              },
              {
                title: t('The Option to Join a Youth Ensemble', 'De Mogelijkheid om Deel te Nemen aan een Jeugdensemble'),
                desc: t(
                  'Children have the option to join Nederland in Harmonie. A choir, symphonic band, marching band, percussion ensemble, or orchestra, completely free.',
                  'Kinderen hebben de mogelijkheid om deel te nemen aan Nederland in Harmonie. Een koor, harmonieorkest, fanfare, slagwerkensemble of orkest, volledig gratis.'
                ),
              },
            ].map((step, i) => (
              <div key={i} className="grid grid-cols-[3rem_1fr] lg:grid-cols-[4rem_1fr_2fr] gap-x-6 gap-y-2 py-8 border-t border-[oklch(0.88_0.015_195)] items-start">
                <div className="font-display text-3xl font-bold text-[oklch(0.88_0.015_195)] leading-none pt-1">0{i + 1}</div>
                <div className="lg:col-span-2">
                  <h3 className="font-display font-semibold text-lg text-[oklch(0.22_0.01_60)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[oklch(0.52_0.015_60)] leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[oklch(0.88_0.015_195)]" />
          </div>
          <p className="text-sm text-[oklch(0.52_0.015_60)] leading-relaxed max-w-2xl mt-8">
            {t(
              'These three steps are always connected at this stage. The youth ensemble opportunity is only offered in combination with a school concert. Schools that would like a chamber concert on its own, without the youth ensemble pathway, can request one separately by contacting us.',
              'Deze drie stappen zijn in dit stadium altijd met elkaar verbonden. De mogelijkheid tot een jeugdensemble wordt alleen aangeboden in combinatie met een schoolconcert. Scholen die alleen een kamerconcert willen, zonder het jeugdensembletraject, kunnen dit apart aanvragen door contact met ons op te nemen.'
            )}
          </p>
        </div>
      </section>

      {/* Sistema Europe Recognition */}
      <section className="py-20 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            {t('Recognized Through Sistema Europe', 'Erkend via Sistema Europe')}
          </h2>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
            {t(
              'Sistema Europe has already welcomed Nederland in Harmonie into its network. Once our first ensemble launches, we will be listed among their member programs, a recognition that provides trusted status among funders and partners, and supports the financial backing that keeps every ensemble free for children.',
              'Sistema Europe heeft Nederland in Harmonie al verwelkomd in haar netwerk. Zodra ons eerste ensemble van start gaat, worden wij opgenomen in hun ledenprogramma\'s, een erkenning die zorgt voor een betrouwbare status bij financiers en partners en die de financiële ondersteuning versterkt waarmee elk ensemble gratis blijft voor kinderen.'
            )}
          </p>
          <a
            href="https://www.sistemaeurope.org/Network-Members/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[oklch(0.38_0.09_195)] hover:underline font-medium"
          >
            {t('View the Sistema Europe Network Members', 'Bekijk de Sistema Europe Netwerkleden')}
            <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Register Your Interest', 'Registreer Uw Interesse')}
          </h2>
          <p className="text-[oklch(0.52_0.015_60)] mb-3 leading-relaxed">
            {t(
              'We are currently building our interest list. Once our first ensemble launches in your area, we will reach out with everything you need: confirmed location, schedule, and what to bring on the first day. No commitment required.',
              'We stellen momenteel onze interesselijst samen. Zodra ons eerste ensemble van start gaat in uw regio, nemen we contact met u op met alles wat u moet weten: bevestigde locatie, schema en wat u mee moet nemen op de eerste dag. Geen verplichting.'
            )}
          </p>
          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              t('No fees, ever', 'Nooit kosten'),
              t('No audition required', 'Geen auditie vereist'),
              t('Response within 2 days', 'Reactie binnen 2 dagen'),
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-[oklch(0.38_0.09_195)] font-medium">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="oklch(0.38 0.09 195)" fillOpacity="0.12"/><path d="M4 7l2 2 4-4" stroke="oklch(0.38 0.09 195)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {item}
              </div>
            ))}
          </div>
          {submitted ? (
            <div className="bg-white rounded-xl p-8 text-center border border-[oklch(0.88_0.015_195)]">
              <CheckCircle size={40} className="text-[oklch(0.38_0.09_195)] mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{t('Registration Received!', 'Inschrijving Ontvangen!')}</h3>
              <p className="text-[oklch(0.52_0.015_60)]">{t("We'll contact you within 2 business days with next steps.", 'We nemen binnen 2 werkdagen contact met u op met de volgende stappen.')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm space-y-5">
              {[
                { key: 'parentName', label: t('Parent / Guardian Name', 'Naam Ouder / Voogd'), type: 'text', required: true },
                { key: 'childName', label: t("Child's Name", 'Naam van het Kind'), type: 'text', required: true },
                { key: 'childAge', label: t("Child's Age", 'Leeftijd van het Kind'), type: 'number', required: true },
                { key: 'school', label: t("Child's School", 'School van het Kind'), type: 'text', required: false },
                { key: 'email', label: t('Email Address', 'E-mailadres'), type: 'email', required: true },
                { key: 'phone', label: t('Phone Number', 'Telefoonnummer'), type: 'tel', required: false },
              ].map(({ key, label, type, required }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{label}{required && ' *'}</label>
                  <input
                    type={type}
                    required={required}
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Area of Interest', 'Interessegebied')}</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]"
                >
                  <option value="undecided">{t('Not sure yet', 'Nog niet zeker')}</option>
                  <option value="choir">{t('Choir / Singing', 'Koor / Zingen')}</option>
                  <option value="strings">{t('Strings (Violin, Viola, Cello)', 'Strijkers (Viool, Altviool, Cello)')}</option>
                  <option value="woodwinds">{t('Woodwinds (Flute, Clarinet, Oboe)', 'Houtblazers (Fluit, Klarinet, Hobo)')}</option>
                  <option value="brass">{t('Brass (Trumpet, Horn, Trombone)', 'Koperblazers (Trompet, Hoorn, Trombone)')}</option>
                  <option value="percussion">{t('Percussion', 'Percussie')}</option>
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like to receive periodic updates about the orchestra and ensemble programs.', 'Ik wil periodieke updates ontvangen over het orkest en de ensembleprogramma\'s.')}</span>
              </label>
              <button type="submit" className="btn-primary w-full justify-center">
                {t('Register My Interest', 'Registreer Mijn Interesse')}
                <ArrowRight size={16} />
              </button>
              <p className="text-center text-xs text-[oklch(0.52_0.015_60)] mt-3">
                {t('By submitting, you agree to our Privacy Policy. We never share your data.', 'Door in te dienen gaat u akkoord met ons Privacybeleid. We delen uw gegevens nooit.')}
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
