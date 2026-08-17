import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useState } from 'react';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

export default function ConductorWorkshops() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);
  useSEO({
    title: 'Conductor Workshops | Internationaal Orkest Utrecht',
    titleNl: 'Dirigentenworkshops | Internationaal Orkest Utrecht',
    description: 'Professional development workshops for conductors, led by Artistic Director Jennifer Diepman.',
    descriptionNl: 'Professionele ontwikkelingsworkshops voor dirigenten, geleid door Artistiek Directeur Jennifer Diepman.',
    path: '/conductor-workshops',
    image: 'https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-conductor.jpg',
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
          <img src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-conductor.jpg" alt="Conductor workshop" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.05_195)]/90 to-[oklch(0.22_0.05_195)]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.05_195)]/60 via-transparent to-transparent" />
        </div>
        <div className="relative container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4 max-w-2xl">
            {t('Professional Development for Conductors', 'Professionele Ontwikkeling voor Dirigenten')}
          </h1>
          <p className="hidden md:block text-white/85 text-lg max-w-xl leading-relaxed mb-8">
            {t(
              'Led by Artistic Director Jennifer Diepman, our conductor workshops offer rigorous training while directly supporting Internationaal Orkest Utrecht.',
              'Geleid door Artistiek Directeur Jennifer Diepman bieden onze dirigeerworkshops rigoureuze training terwijl ze het Internationaal Orkest Utrecht direct ondersteunen.'
            )}
          </p>
          <p className="md:hidden text-white/85 text-lg max-w-xl leading-relaxed">
            {t(
              'Rigorous training that directly funds the orchestra.',
              'Rigoureuze training die het orkest direct financiert.'
            )}
          </p>
          <div className="hidden md:flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)]" />
              {t('Hands-on podium time', 'Praktische podiumtijd')}
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)]" />
              {t('Funds the orchestra', 'Financiert het orkest')}
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About the Workshops */}
      <section className="py-16 lg:py-20 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-rule mx-auto" />
            <p className="text-lg lg:text-xl text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'Led by Artistic Director Jennifer Diepman, our conductor workshops offer rigorous training while directly supporting Internationaal Orkest Utrecht.',
                'Geleid door Artistiek Directeur Jennifer Diepman bieden onze dirigeerworkshops rigoureuze training terwijl ze het Internationaal Orkest Utrecht direct ondersteunen.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section className="py-20 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-rule" />
              <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-6">
                {t('Train With a Professional Orchestra. Fund the Music.', 'Train Met een Professioneel Orkest. Financier de Muziek.')}
              </h2>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
                {t(
                  'Designed for aspiring and working conductors, these workshops provide hands-on podium time, score study, and rehearsal preparation techniques. Participants work directly with our professional orchestra.',
                  'Ontworpen voor aspirant- en werkende dirigenten bieden deze workshops praktische podiumtijd, partituurstudie en repetitievoorbereidingstechnieken. Deelnemers werken rechtstreeks met ons professionele orkest.'
                )}
              </p>
              <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
                {t(
                  'Every workshop generates funding for the orchestra and counts toward rehearsal preparation for our next concert. You develop your craft. The music continues.',
                  'Elke workshop genereert financiering voor het orkest en telt mee voor de repetitievoorbereidingen voor ons volgende concert. U ontwikkelt uw vak. De muziek gaat door.'
                )}
              </p>
              <div className="bg-[oklch(0.95_0.02_195)] rounded-xl p-6 mb-6">
                <h3 className="font-display font-semibold text-[oklch(0.22_0.01_60)] mb-3">{t('Workshop Leader', 'Workshop Leider')}</h3>
                <p className="text-sm text-[oklch(0.42_0.01_60)] leading-relaxed">
                  {t(
                    'Jennifer Diepman holds a Master of Music in Conducting from Messiah University and has studied at the Juilliard School of Music. She is a recipient of the Fred J. Miller 1st Prize Outstanding Achievement Award in Conducting and the John Philip Sousa Award in Oboe Performance. She has led ensembles across the globe and founded the Internationaal Orkest Utrecht to bring that experience directly into the next generation of conductors.',
                    'Jennifer Diepman heeft een Master of Music in Directie van de Messiah University en heeft gestudeerd aan de Juilliard School of Music. Ze is ontvanger van de Fred J. Miller 1e Prijs voor Uitstekende Prestatie in Directie en de John Philip Sousa Award in Hobo-uitvoering. Ze heeft ensembles over de hele wereld geleid en richtte het Internationaal Orkest Utrecht op om die ervaring rechtstreeks door te geven aan de volgende generatie dirigenten.'
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
                <h3 className="font-display text-xl font-bold mb-4">{t('2026 / 2027 Season — Dates Coming Soon', 'Seizoen 2026 / 2027 — Data Volgen Binnenkort')}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {t(
                    'Our conductor workshops are scheduled around rehearsal preparation for upcoming concerts. This means workshop dates follow directly from our concert calendar. Once the concert season is confirmed, workshop registration opens shortly after.',
                    'Onze dirigeerworkshops worden gepland rond de repetitievoorbereiding voor aankomende concerten. Dit betekent dat workshopdata rechtstreeks volgen uit onze concertkalender. Zodra het concertseizoen is vastgesteld, opent de workshopinschrijving kort daarna.'
                  )}
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {t(
                    'We are currently planning our 2026/2027 concert season. Workshop dates, locations, and registration details will be announced here as soon as the calendar is set. Join the waitlist below to be notified the moment registration opens.',
                    'We plannen momenteel ons concertseizoen 2026/2027. Workshopdata, locaties en inschrijvingsdetails worden hier aangekondigd zodra de kalender is vastgesteld. Meld u aan voor de wachtlijst hieronder om als eerste te worden geïnformeerd wanneer de inschrijving opent.'
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
