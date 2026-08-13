import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, QrCode, CreditCard, Building2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const { t } = useLanguage();
  const [newsletter, setNewsletter] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://pub-a951c77d806041b192717a4428bf1a9b.r2.dev/images/iou-support.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.22_0.05_195)]/85" />
        </div>
        <div className="relative container text-center text-white">
          <span className="section-rule mx-auto" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            {t('You Could Be the Reason a Child Picks Up an Instrument.', 'U Kunt de Reden Zijn Dat een Kind een Instrument Opneemt.')}
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
            {t(
              'Every contribution puts an instrument in a child\'s hands, a teacher by their side, and a place in an ensemble where they belong. No fees, ever, for the children. Only because of people like you.',
              'Elke bijdrage legt een instrument in de handen van een kind, zet een docent aan hun zijde en geeft hen een plek in een ensemble waar ze erbij horen. Nooit kosten voor de kinderen. Alleen dankzij mensen als u.'
            )}
          </p>
        </div>
      </section>

      {/* Per-Student Impact */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm">
            <span className="section-rule" />
            <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t('Where Your Money Goes', 'Waar Uw Geld Naartoe Gaat')}
            </h2>
            <p className="text-[oklch(0.52_0.015_60)] mb-6 leading-relaxed">
              {t(
                'We believe in full transparency. Here is how the annual cost per student breaks down. Exact figures will be published once school relationships are established.',
                'Wij geloven in volledige transparantie. Zo worden de jaarlijkse kosten per leerling opgebouwd. Exacte cijfers worden gepubliceerd zodra schoolrelaties zijn vastgesteld.'
              )}
            </p>
            <div className="bg-[oklch(0.95_0.02_195)] rounded-lg p-6 font-mono text-sm text-[oklch(0.38_0.09_195)]">
              <div className="flex justify-between mb-2"><span>{t('Teacher hourly rate × lesson hours per year', 'Uurtarief docent × lesuren per jaar')}</span><span className="text-[oklch(0.52_0.015_60)]">[TBD]</span></div>
              <div className="flex justify-between mb-2"><span>+ {t('Instrument access cost per year', 'Kosten instrumenttoegang per jaar')}</span><span className="text-[oklch(0.52_0.015_60)]">[TBD]</span></div>
              <div className="flex justify-between mb-3"><span>+ {t('Program administration per student', 'Programmaadministratie per leerling')}</span><span className="text-[oklch(0.52_0.015_60)]">[TBD]</span></div>
              <div className="flex justify-between border-t border-[oklch(0.88_0.015_195)] pt-3 font-bold text-[oklch(0.22_0.01_60)]">
                <span>= {t('Annual cost per student', 'Jaarlijkse kosten per leerling')}</span>
                <span className="text-[oklch(0.72_0.12_75)]">{t('Coming soon', 'Binnenkort')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary: Zeffy */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <div className="bg-[oklch(0.38_0.09_195)] rounded-xl p-8 text-white">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[oklch(0.72_0.12_75)] mb-2 block">{t('Primary Campaign', 'Primaire Campagne')}</span>
                <h2 className="font-display text-2xl font-bold">{t('Support Our Current Campaign', 'Steun Onze Huidige Campagne')}</h2>
              </div>
              <span className="text-xs bg-[oklch(0.72_0.12_75)] text-[oklch(0.22_0.01_60)] font-bold px-3 py-1 rounded-full">{t('Zero Fees', 'Nul Kosten')}</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t(
                '100% of your donation goes directly to the orchestra through Zeffy, a zero-fee platform for nonprofits. Every euro reaches the children.',
                '100% van uw donatie gaat rechtstreeks naar het orkest via Zeffy, een platform zonder kosten voor non-profitorganisaties. Elke euro bereikt de kinderen.'
              )}
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-6 text-sm text-white/70">
              {t('Our Zeffy campaign is being set up now. Once live, every euro donated here goes directly to the children with zero platform fees. Check back soon or join the newsletter below to be notified the moment it launches.', 'Onze Zeffy-campagne wordt nu opgezet. Zodra deze live is, gaat elke euro die hier wordt gedoneerd rechtstreeks naar de kinderen, zonder platformkosten. Kom snel terug of meld u aan voor de nieuwsbrief hieronder om op de hoogte te worden gebracht zodra de campagne van start gaat.')}
            </div>
            <label className="flex items-start gap-3 cursor-pointer mb-4">
              <input type="checkbox" checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-0.5 rounded" />
              <span className="text-sm text-white/80">{t('I would like to receive periodic updates about the orchestra.', 'Ik wil periodieke updates over het orkest ontvangen.')}</span>
            </label>
            <a href="#zeffy-placeholder" className="btn-gold inline-flex items-center gap-2">
              {t('Donate via Zeffy', 'Doneren via Zeffy')} <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Alternative Methods */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <span className="section-rule" />
            <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)]">
              {t('Other Ways to Give', 'Andere Manieren om te Geven')}
            </h2>
          </div>
          <div className="space-y-0">
            <div className="grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-2 py-6 border-t border-[oklch(0.88_0.015_195)] items-start">
              <div>
                <div className="flex items-center gap-2 mb-0.5"><QrCode size={14} className="text-[oklch(0.38_0.09_195)]" /><span className="font-display font-bold text-sm text-[oklch(0.22_0.01_60)]">WERO</span></div>
                <span className="text-xs text-[oklch(0.52_0.015_60)]">{t('Dutch donors', 'NL donateurs')}</span>
              </div>
              <p className="text-sm text-[oklch(0.52_0.015_60)] leading-relaxed">{t('Fast and secure payments directly from your Dutch bank.', 'Snelle en veilige betalingen rechtstreeks van uw Nederlandse bank.')}</p>
              <div className="bg-[oklch(0.95_0.02_195)] rounded px-3 py-1.5 text-xs text-[oklch(0.52_0.015_60)] whitespace-nowrap">{t('QR code coming soon', 'Binnenkort')}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-2 py-6 border-t border-[oklch(0.88_0.015_195)] items-start">
              <div>
                <div className="flex items-center gap-2 mb-0.5"><CreditCard size={14} className="text-[oklch(0.38_0.09_195)]" /><span className="font-display font-bold text-sm text-[oklch(0.22_0.01_60)]">Mollie</span></div>
                <span className="text-xs text-[oklch(0.52_0.015_60)]">{t('Card / international', 'Kaart / internationaal')}</span>
              </div>
              <p className="text-sm text-[oklch(0.52_0.015_60)] leading-relaxed">{t('Secure international and credit card payments. Available for donors worldwide.', 'Veilige internationale betalingen en creditcardbetalingen.')}</p>
              <a href="https://payment-links.mollie.com/en/payment/nHXpkaYBF7uaFt2kIpYJR/details" target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1 whitespace-nowrap">{t('Donate', 'Doneren')} <ExternalLink size={12} /></a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-2 py-6 border-t border-b border-[oklch(0.88_0.015_195)] items-start">
              <div>
                <div className="flex items-center gap-2 mb-0.5"><Building2 size={14} className="text-[oklch(0.38_0.09_195)]" /><span className="font-display font-bold text-sm text-[oklch(0.22_0.01_60)]">{t('Bank Transfer', 'Overboeking')}</span></div>
                <span className="text-xs text-[oklch(0.52_0.015_60)]">{t('Wire transfer', 'Internationale overboeking')}</span>
              </div>
              <p className="text-sm text-[oklch(0.52_0.015_60)] leading-relaxed">{t('Direct international bank transfers welcome.', 'Directe internationale bankoverschrijvingen welkom.')}</p>
              <div className="text-xs space-y-1 bg-[oklch(0.95_0.02_195)] rounded p-3">
                <div><span className="font-medium text-[oklch(0.22_0.01_60)]">IBAN:</span> <span className="text-[oklch(0.52_0.015_60)]">[Pending]</span></div>
                <div><span className="font-medium text-[oklch(0.22_0.01_60)]">SWIFT:</span> <span className="text-[oklch(0.52_0.015_60)]">[Pending]</span></div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-[oklch(0.52_0.015_60)] mt-6">
            {t('All donation methods include an automatic digital receipt and optional newsletter opt-in.', 'Alle donatiewijzen omvatten een automatisch digitaal ontvangstbewijs en optionele nieuwsbriefinschrijving.')}
          </p>
        </div>
      </section>
    </div>
  );
}
