import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useSEO } from '@/hooks/useSEO';
import { useState } from 'react';
import { CheckCircle, Music2, Users, ArrowRight } from 'lucide-react';

export default function SchoolConcerts() {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [form, setForm] = useState({ name: '', school: '', role: '', email: '', phone: '', dates: '', message: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);
  useSEO({
    title: 'Bring a Symphony to Your School | Internationaal Orkest Utrecht',
    titleNl: 'Breng een Symfonie naar Uw School | Internationaal Orkest Utrecht',
    description: 'Free, interactive instrumental and vocal concerts for schools across the Netherlands, funded through donations, grants, and other funds.',
    descriptionNl: 'Gratis, interactieve instrumentale en vocale concerten voor scholen in heel Nederland, gefinancierd door donaties, bijdragen van fondsen en andere middelen.',
    path: '/school-concerts',
    image: 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-school-concert.jpg',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { icon: <Music2 size={24} />, title: t('Step 1: The Orchestra Performs', 'Stap 1: het orkest treedt op'), desc: t('Our orchestra, often joined by vocal ensembles from the area, performs a customized instrumental and vocal concert for your students, at your school or a local hall.', 'Ons orkest, vaak samen met vocale ensembles uit de regio, verzorgt een op maat gemaakt instrumentaal en vocaal concert voor uw leerlingen, op uw school of in een lokale zaal.') },
    { icon: <Users size={24} />, title: t('Step 2: Students Try It Themselves', 'Stap 2: leerlingen proberen het zelf'), desc: t('After the performance, children try out instruments or sing in a group at their own school, guided by our musicians and singers.', 'Na de uitvoering proberen kinderen zelf instrumenten uit of zingen ze in een groep op hun eigen school, begeleid door onze muzikanten en zangers.') },
    { icon: <CheckCircle size={24} />, title: t('Step 3: The Option to Join a Youth Ensemble', 'Stap 3: de mogelijkheid om deel te nemen aan een jeugdensemble'), desc: t('Interested students can join Nederland in Harmonie, our free after-school youth ensembles. Choirs, symphonic bands, marching bands, percussion ensembles, and orchestras.', 'Geïnteresseerde leerlingen kunnen deelnemen aan Nederland in Harmonie, onze gratis naschoolse jeugdensembles. Koren, harmonieorkesten, fanfares, slagwerkensembles en orkesten.') },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-8 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-school-concert.jpg" alt="School concert" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Bring Music to Your School', 'Breng muziek naar uw school')}
          </h1>
          <p className="text-xs font-light tracking-wide text-white/85 mb-4 first-letter:uppercase">
            {t('in partnership with local choirs', 'in samenwerking met lokale koren')}
          </p>
          <p className="hidden md:block text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t(
              'Funded through donations, grants, and other funds, our interactive symphonic and vocal concerts come to your school at no cost. From the first note to the hands-on instrument and singing sessions, we handle everything.',
              'Gefinancierd door donaties, bijdragen van fondsen en andere middelen komen onze interactieve symfonische en vocale concerten gratis naar uw school. Van de eerste noot tot de sessies waarin kinderen zelf een instrument proberen of zingen, wij regelen alles.'
            )}
          </p>
          <p className="md:hidden text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t(
              'Funded through donations, grants, and other funds, our interactive symphonic and vocal concerts come to your school at no cost.',
              'Gefinancierd door donaties, bijdragen van fondsen en andere middelen komen onze interactieve symfonische en vocale concerten gratis naar uw school.'
            )}
          </p>
          <a href="#booking" className="btn-gold">
            {t('Request a Concert', 'Concert aanvragen')}
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)] overflow-hidden" ref={revealRef}>
        <div className="container">
          <div className="mb-12 fade-up">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] max-w-lg">
              {t('We help you bring live music to your school.', 'Wij helpen u live muziek naar uw school te brengen.')}
            </h2>
          </div>
          {/* Annual-report style process: numbered steps with thin rules, no icon boxes */}
          <div className="space-y-0 fade-up" style={{ transitionDelay: '80ms' }}>
            {steps.map((step, i) => (
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
              'Schools can request a concert on its own or discuss a concert followed by a local youth ensemble. At this stage, the youth ensemble program starts through a school concert.',
              'Scholen kunnen alleen een concert aanvragen of een concert met een lokaal jeugdensemble bespreken. In deze fase start het jeugdensembleprogramma altijd met een schoolconcert.'
            )}
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-20 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Ready to Inspire Your Students?', 'Klaar om uw leerlingen te inspireren?')}
          </h2>
          <p className="text-[oklch(0.52_0.015_60)] mb-8">
            {t('Tell us about your school and we will take it from there. No cost, no commitment, just music.', 'Vertel ons over uw school en wij nemen het van daaruit over. Geen kosten, geen verplichting, alleen muziek.')}
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
                { key: 'name', label: t('Your Name', 'Uw naam'), type: 'text', required: true },
                { key: 'school', label: t('School Name', 'Naam van de school'), type: 'text', required: true },
                { key: 'role', label: t('Your Role', 'Uw functie'), type: 'text', required: false },
                { key: 'email', label: t('Email Address', 'E-mailadres'), type: 'email', required: true },
                { key: 'phone', label: t('Phone Number', 'Telefoonnummer'), type: 'tel', required: false },
                { key: 'dates', label: t('Preferred Dates / Season', 'Gewenste data / seizoen'), type: 'text', required: false },
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
                <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Message', 'Bericht')}</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)] resize-none"
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like to receive periodic updates about the orchestra.', 'Ik wil periodieke updates over het orkest ontvangen.')}</span>
              </label>
              <button type="submit" className="btn-primary w-full justify-center">
              {t('Request Concert Information', 'Concertinformatie aanvragen')}
              <ArrowRight size={16} />
            </button>
            <p className="text-center text-xs text-[oklch(0.52_0.015_60)] mt-3">
              {t('We respond within 2 business days. No commitment required.', 'We reageren binnen 2 werkdagen. Geen verplichting vereist.')}
            </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
