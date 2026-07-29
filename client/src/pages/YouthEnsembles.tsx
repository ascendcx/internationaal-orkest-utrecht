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
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/manus-storage/iou-youth-ensemble_7cbeb415.jpg" alt="Youth ensemble" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/50" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Learn, Play, and Grow Together', 'Leren, Spelen en Samen Groeien')}
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            {t(
              'The Internationale Jeugdensembles Nederland (IJEN) provides free group music lessons, choirs, and orchestras for children and youth. No prior experience required.',
              'De Internationale Jeugdensembles Nederland (IJEN) biedt gratis groepsmuziekles, koren en orkesten voor kinderen en jongeren. Geen voorkennis vereist.'
            )}
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-rule mx-auto" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)]">
              {t('What You Need to Know', 'Wat U Moet Weten')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Heart size={28} />, title: t('100% Free', '100% Gratis'), desc: t('Thanks to our donors and subsidies, there are no fees for instruction or instrument access. Ever.', 'Dankzij onze donateurs en subsidies zijn er geen kosten voor les of toegang tot instrumenten. Nooit.') },
              { icon: <Music size={28} />, title: t('All Backgrounds Welcome', 'Alle Achtergronden Welkom'), desc: t('Children and youth of all backgrounds who want to learn an instrument or sing in a choir are welcome.', 'Kinderen en jongeren van alle achtergronden die een instrument willen leren of in een koor willen zingen zijn welkom.') },
              { icon: <Star size={28} />, title: t('After School', 'Na School'), desc: t('Rehearsals take place after school at local school locations. Specific schedules provided upon registration.', 'Repetities vinden na school plaats op lokale schoollocaties. Specifieke schema\'s worden verstrekt bij inschrijving.') },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-[oklch(0.92_0.01_195)] shadow-sm text-center">
                <div className="w-14 h-14 rounded-full bg-[oklch(0.95_0.02_195)] flex items-center justify-center text-[oklch(0.38_0.09_195)] mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[oklch(0.22_0.01_60)] mb-2">{item.title}</h3>
                <p className="text-sm text-[oklch(0.52_0.015_60)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Sign Your Child Up Today', 'Schrijf Uw Kind Vandaag In')}
          </h2>
          <p className="text-[oklch(0.52_0.015_60)] mb-8">
            {t('Complete the form below and we will be in touch with details about the nearest ensemble program.', 'Vul het onderstaande formulier in en we nemen contact met u op met details over het dichtstbijzijnde ensembleprogramma.')}
          </p>
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
                {t('Register for Ensembles', 'Inschrijven voor Ensembles')}
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
