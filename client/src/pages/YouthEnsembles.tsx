import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { CheckCircle, ArrowRight, Music, Heart, Star } from 'lucide-react';

export default function YouthEnsembles() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ parentName: '', childName: '', childAge: '', school: '', email: '', phone: '', interest: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
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
          <p className="text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t(
              'The Internationale Jeugdensembles Nederland (IJEN) provides free group music lessons, choirs, and orchestras for children and youth. No prior experience required.',
              'De Internationale Jeugdensembles Nederland (IJEN) biedt gratis groepsmuziekles, koren en orkesten voor kinderen en jongeren. Geen voorkennis vereist.'
            )}
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.12_75)]" />
            <span className="text-white text-sm font-medium">{t('100% Free — No fees, ever', '100% Gratis — Nooit kosten')}</span>
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
                  'Thanks to our donors and subsidies, there are no fees for instruction or instrument access. Ever. Every child participates on equal footing.',
                  'Dankzij onze donateurs en subsidies zijn er nooit kosten voor les of instrumenten. Elk kind doet mee op gelijke voet.'
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
                  'Children and youth of all backgrounds, nationalities, and experience levels are welcome. No audition, no prior knowledge required.',
                  'Kinderen en jongeren van alle achtergronden, nationaliteiten en ervaringsniveaus zijn welkom. Geen auditie, geen voorkennis vereist.'
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
                  'Rehearsals take place after school at local school locations — no travel required. Specific schedules and locations are confirmed upon registration.',
                  'Repetities vinden na school plaats op lokale schoollocaties — geen reizen nodig. Specifieke schema\'s en locaties worden bevestigd bij inschrijving.'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Reserve Your Child\'s Spot', 'Reserveer de Plek van Uw Kind')}
          </h2>
          <p className="text-[oklch(0.52_0.015_60)] mb-3 leading-relaxed">
            {t(
              'Fill in the form and we will reach out within 2 business days with everything you need to know — location, schedule, and what to bring on the first day.',
              'Vul het formulier in en we nemen binnen 2 werkdagen contact op met alles wat u moet weten — locatie, schema en wat u mee moet nemen op de eerste dag.'
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
                {t('Reserve Your Child\'s Spot', 'Reserveer de Plek van Uw Kind')}
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
