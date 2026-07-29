import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export default function ConductorWorkshops() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '', newsletter: false });
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
          <img src="/manus-storage/iou-conductor_60492725.jpg" alt="Conductor workshop" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/60" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Professional Development for Conductors', 'Professionele Ontwikkeling voor Dirigenten')}
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed">
            {t(
              'Led by Artistic Director Jennifer Diepman, our conductor workshops offer rigorous training while directly supporting the International Orchestra of Utrecht.',
              'Geleid door Artistiek Directeur Jennifer Diepman bieden onze dirigeerworkshops rigoureuze training terwijl ze het Internationaal Orkest Utrecht direct ondersteunen.'
            )}
          </p>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-rule" />
              <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-6">
                {t('Elevate Your Craft', 'Verbeter Uw Vak')}
              </h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'Designed for aspiring and working conductors, these workshops provide hands-on podium time, score study, and rehearsal preparation techniques. Participants work directly with our professional orchestra.',
                  'Ontworpen voor aspirant- en werkende dirigenten bieden deze workshops praktische podiumtijd, partituurstudie en repetitievoorbereidingstechnieken. Deelnemers werken rechtstreeks met ons professionele orkest.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
                {t(
                  'The workshops serve two purposes simultaneously: they generate funding for the orchestra and count toward rehearsal preparation for our next concert. This is smart programming that benefits everyone involved.',
                  'De workshops dienen twee doelen tegelijkertijd: ze genereren financiering voor het orkest en tellen mee voor de repetitievoorbereidingen voor ons volgende concert. Dit is slim programmeren dat iedereen ten goede komt.'
                )}
              </p>
              <div className="bg-[oklch(0.95_0.02_195)] rounded-xl p-6 mb-6">
                <h3 className="font-display font-semibold text-[oklch(0.22_0.01_60)] mb-3">{t('Workshop Leader', 'Workshop Leider')}</h3>
                <p className="text-sm text-[oklch(0.42_0.01_60)] leading-relaxed">
                  {t(
                    'Jennifer Diepman holds a Master of Music in Conducting from Messiah University and has studied at the Juilliard School of Music. She is a recipient of the Fred J. Miller 1st Prize Outstanding Achievement Award in Conducting.',
                    'Jennifer Diepman heeft een Master of Music in Directie van de Messiah University en heeft gestudeerd aan de Juilliard School of Music. Ze is ontvanger van de Fred J. Miller 1e Prijs voor Uitstekende Prestatie in Directie.'
                  )}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-[oklch(0.22_0.01_60)]">{t('External Resources', 'Externe Bronnen')}</p>
                <a href="https://musicalchairs.info" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[oklch(0.38_0.09_195)] hover:underline">
                  Musical Chairs <ExternalLink size={14} />
                </a>
                <a href="https://www.conductorsguild.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[oklch(0.38_0.09_195)] hover:underline">
                  International Conductors Guild <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div>
              <div className="bg-[oklch(0.38_0.09_195)] rounded-xl p-8 text-white mb-6">
                <h3 className="font-display text-xl font-bold mb-4">{t('2026/2027 Season', 'Seizoen 2026/2027')}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {t(
                    'Dates and locations for the upcoming workshop season are being confirmed. Join the waitlist to be notified as soon as registration opens.',
                    'Data en locaties voor het aankomende workshopseizoen worden bevestigd. Meld u aan voor de wachtlijst om als eerste te worden geïnformeerd wanneer de inschrijving opent.'
                  )}
                </p>
                <div className="text-sm text-[oklch(0.72_0.12_75)] font-medium">{t('Dates: To be announced', 'Data: Wordt aangekondigd')}</div>
              </div>
              {/* Waitlist Form */}
              {submitted ? (
                <div className="bg-white rounded-xl p-8 text-center border border-[oklch(0.88_0.015_195)]">
                  <CheckCircle size={40} className="text-[oklch(0.38_0.09_195)] mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{t("You're on the list!", 'U staat op de lijst!')}</h3>
                  <p className="text-[oklch(0.52_0.015_60)]">{t("We'll notify you when registration opens.", 'We informeren u wanneer de inschrijving opent.')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm space-y-4">
                  <h3 className="font-display font-bold text-[oklch(0.22_0.01_60)]">{t('Join the Waitlist', 'Aanmelden voor de Wachtlijst')}</h3>
                  {[
                    { key: 'name', label: t('Full Name', 'Volledige Naam'), type: 'text', required: true },
                    { key: 'email', label: t('Email Address', 'E-mailadres'), type: 'email', required: true },
                    { key: 'role', label: t('Current Role / Experience Level', 'Huidige Rol / Ervaringsniveau'), type: 'text', required: false },
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
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                    <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like to receive periodic updates about the orchestra.', 'Ik wil periodieke updates over het orkest ontvangen.')}</span>
                  </label>
                  <button type="submit" className="btn-primary w-full justify-center">
                    {t('Join the Waitlist', 'Aanmelden voor de Wachtlijst')}
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
