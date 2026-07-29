import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Sponsors() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    t('Recognition in printed concert programs', 'Erkenning in gedrukte concertprogramma\'s'),
    t('Signage at school rehearsals and public performances', 'Bewegwijzering bij schoolrepetities en openbare optredens'),
    t('Dedicated spotlight in our community newsletter', 'Speciale spotlight in onze gemeenschapsnieuwsbrief'),
    t('Mentions across our social media platforms', 'Vermeldingen op onze sociale mediaplatforms'),
    t('Logo and link on our dedicated Sponsors page', 'Logo en link op onze speciale Sponsorspagina'),
    t('School materials that carry sponsor acknowledgment', 'Schoolmaterialen met sponsorerkenning'),
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-[oklch(0.38_0.09_195)] py-24">
        <div className="container text-white">
          <span className="section-rule" style={{ backgroundColor: 'oklch(0.72 0.12 75)' }} />
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 max-w-2xl">
            {t('Partner With Us', 'Word Onze Partner')}
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            {t(
              'Align your business with a mission that brings music, education, and social cohesion to youth across the Netherlands.',
              'Verbind uw bedrijf met een missie die muziek, onderwijs en sociale cohesie brengt aan jongeren door heel Nederland.'
            )}
          </p>
        </div>
      </section>

      {/* Current Sponsors Placeholder */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="text-center mb-10">
            <span className="section-rule mx-auto" />
            <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)]">
              {t('Our Sponsors', 'Onze Sponsors')}
            </h2>
          </div>
          <div className="bg-[oklch(0.95_0.02_195)] rounded-xl p-12 text-center border border-dashed border-[oklch(0.88_0.015_195)]">
            <p className="text-[oklch(0.52_0.015_60)]">
              {t('Sponsor logos and profiles will appear here. Be the first to support the International Orchestra of Utrecht!', 'Sponsorlogo\'s en -profielen verschijnen hier. Wees de eerste die het Internationaal Orkest Utrecht steunt!')}
            </p>
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Visibility That Makes a Difference', 'Zichtbaarheid Die Verschil Maakt')}
          </h2>
          <p className="text-[oklch(0.52_0.015_60)] mb-8 leading-relaxed">
            {t(
              'The pitch to sponsors is not "come to our next concert." It is "be part of building something that matters to Utrecht\'s children." That story is more compelling than ad impressions.',
              'De pitch aan sponsors is niet "kom naar ons volgende concert." Het is "maak deel uit van het bouwen van iets dat belangrijk is voor de kinderen van Utrecht." Dat verhaal is overtuigender dan advertentie-impressies.'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-[oklch(0.92_0.01_195)]">
                <div className="w-5 h-5 rounded-full bg-[oklch(0.95_0.02_195)] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.38_0.09_195)]" />
                </div>
                <span className="text-sm text-[oklch(0.42_0.01_60)]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Inquiry Form */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Become a Sponsor', 'Word Sponsor')}
          </h2>
          <p className="text-[oklch(0.52_0.015_60)] mb-8">
            {t('Contact us to discuss a custom partnership package for your business.', 'Neem contact met ons op om een op maat gemaakt partnerschapspakket voor uw bedrijf te bespreken.')}
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
                { key: 'name', label: t('Contact Name', 'Contactpersoon'), type: 'text', required: true },
                { key: 'company', label: t('Company Name', 'Bedrijfsnaam'), type: 'text', required: true },
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
                <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Message', 'Bericht')}</label>
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)] resize-none" />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like to receive periodic updates about the orchestra.', 'Ik wil periodieke updates over het orkest ontvangen.')}</span>
              </label>
              <button type="submit" className="btn-primary w-full justify-center">
                {t('Request Sponsorship Details', 'Sponsordetails Aanvragen')}
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
