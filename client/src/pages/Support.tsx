import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ExternalLink, QrCode, CreditCard, Building2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { mediaUrl } from '@/lib/media';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Honeypot, FormError } from '@/components/FormParts';

export default function Support() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const { sending, failed, submitted, submit } = useFormSubmit('newsletter');
  useSEO({
    title: 'Donate | Internationaal Orkest Utrecht',
    titleNl: 'Doneren | Internationaal Orkest Utrecht',
    description: 'Support free youth music ensembles and school concerts across the Netherlands. Every donation helps a child play, sing, and belong.',
    descriptionNl: 'Steun gratis jeugdmuziekensembles en schoolconcerten in heel Nederland. Elke donatie helpt een kind spelen, zingen en erbij horen.',
    path: '/support',
    image: mediaUrl('images/iou-support.jpg'),
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mediaUrl('images/iou-support.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.22_0.05_195)]/85" />
        </div>
        <div className="relative container text-center text-white">
          <span className="section-rule mx-auto" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            {t('Be the Reason They Play.', 'Wees de reden dat zij spelen.')}
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
            {t(
              'Every contribution puts an instrument in a child\'s hands, a teacher by their side, and a place in an ensemble where they belong. No fees, ever, for the children. Only because of people like you.',
              'Elke bijdrage legt een instrument in de handen van een kind, zet een docent aan hun zijde en geeft hen een plek in een ensemble waar ze erbij horen. Nooit kosten voor de kinderen. Alleen dankzij mensen als u.'
            )}
          </p>
          <p className="text-white/85 max-w-xl mx-auto text-base leading-relaxed mt-4">
            {t(
              'Anyone can join for free. Families who are able are warmly welcome to support us during our fundraising campaigns. It is never required.',
              'Iedereen mag gratis meedoen. Gezinnen die dat kunnen, zijn tijdens onze fondsenwervende acties van harte welkom om ons te steunen. Het is nooit verplicht.'
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
              {t('Where Your Money Goes', 'Waar uw geld naartoe gaat')}
            </h2>
            <p className="text-[oklch(0.52_0.015_60)] leading-relaxed">
              {t(
                'Donations help cover teaching, instruments and the running of our youth ensembles. We will publish the annual cost per child once our school partnerships and costs are confirmed.',
                'Donaties helpen om lessen, instrumenten en de organisatie van onze jeugdensembles te betalen. We publiceren de jaarlijkse kosten per kind zodra onze samenwerkingen met scholen en de kosten vaststaan.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Primary: Zeffy */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <div className="bg-[oklch(0.38_0.09_195)] rounded-xl p-8 text-white">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-[oklch(0.85_0.1_75)] mb-2 block">{t('Primary Campaign', 'Primaire campagne')}</span>
                <h2 className="font-display text-2xl font-bold">{t('Our next fundraising campaign is coming soon.', 'Onze volgende inzamelingsactie komt binnenkort.')}</h2>
              </div>
              <span className="text-sm bg-[oklch(0.72_0.12_75)] text-[oklch(0.22_0.01_60)] font-bold px-3 py-1 rounded-full">{t('Zero Fees', 'Nul kosten')}</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t(
                '100% of your donation goes directly to the orchestra through Zeffy, a zero-fee platform for nonprofits. Every euro reaches the children.',
                '100% van uw donatie gaat rechtstreeks naar het orkest via Zeffy, een platform zonder kosten voor non-profitorganisaties. Elke euro bereikt de kinderen.'
              )}
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-6 text-base text-white/85">
              {t('Our Zeffy campaign is being set up now. Once live, every euro donated here goes directly to the children with zero platform fees. Check back soon or join the newsletter below to be notified the moment it launches.', 'Onze Zeffy-campagne wordt nu opgezet. Zodra deze live is, gaat elke euro die hier wordt gedoneerd rechtstreeks naar de kinderen, zonder platformkosten. Kom snel terug of meld u aan voor de nieuwsbrief hieronder om op de hoogte te worden gebracht zodra de campagne van start gaat.')}
            </div>
            {submitted ? (
              <p role="status" className="text-base font-medium text-white">
                {t('Thank you. You are on our list.', 'Dank u wel. U staat op onze lijst.')}
              </p>
            ) : (
              <form onSubmit={(e) => submit(e, { email, newsletter, source: 'support' })} className="space-y-3">
                <div>
                  <label htmlFor="support-newsletter-email" className="block text-sm font-medium text-white mb-1">{t('Email address', 'E-mailadres')} *</label>
                  <input
                    id="support-newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-white/30 text-sm bg-white text-[oklch(0.22_0.01_60)]"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-0.5 rounded" />
                  <span className="text-sm text-white/80">{t('I would like to receive periodic updates about the orchestra.', 'Ik wil periodieke updates over het orkest ontvangen.')}</span>
                </label>
                <FormError show={failed} light />
                <button type="submit" disabled={sending} className="btn-gold disabled:opacity-60 disabled:cursor-not-allowed">
                  {t('Keep me updated', 'Houd mij op de hoogte')}
                </button>
                <Honeypot />
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Alternative Methods */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <div className="mb-8">
            <span className="section-rule" />
            <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)]">
              {t('Other Ways to Give', 'Andere manieren om te geven')}
            </h2>
          </div>
          <div className="space-y-0">
            <div className="grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-2 py-6 border-t border-[oklch(0.88_0.015_195)] items-start">
              <div>
                <div className="flex items-center gap-2 mb-0.5"><QrCode size={14} className="text-[oklch(0.38_0.09_195)]" /><span className="font-display font-bold text-sm text-[oklch(0.22_0.01_60)]">WERO</span></div>
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('Dutch donors', 'NL donateurs')}</span>
              </div>
              <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">{t('Fast and secure payments directly from your Dutch bank.', 'Snelle en veilige betalingen rechtstreeks van uw Nederlandse bank.')}</p>
              <div className="bg-[oklch(0.95_0.02_195)] rounded px-3 py-1.5 text-sm text-[oklch(0.52_0.015_60)] whitespace-nowrap">{t('QR code coming soon', 'Binnenkort')}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-2 py-6 border-t border-[oklch(0.88_0.015_195)] items-start">
              <div>
                <div className="flex items-center gap-2 mb-0.5"><CreditCard size={14} className="text-[oklch(0.38_0.09_195)]" /><span className="font-display font-bold text-sm text-[oklch(0.22_0.01_60)]">Mollie</span></div>
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('Card / international', 'Kaart / internationaal')}</span>
              </div>
              <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">{t('Secure international and credit card payments. Available for donors worldwide.', 'Veilige internationale betalingen en creditcardbetalingen.')}</p>
              <a href="https://payment-links.mollie.com/en/payment/nHXpkaYBF7uaFt2kIpYJR/details" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4 inline-flex items-center gap-1 whitespace-nowrap">{t('Donate', 'Doneren')} <ExternalLink size={12} /></a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[6rem_1fr_auto] gap-x-6 gap-y-2 py-6 border-t border-b border-[oklch(0.88_0.015_195)] items-start">
              <div>
                <div className="flex items-center gap-2 mb-0.5"><Building2 size={14} className="text-[oklch(0.38_0.09_195)]" /><span className="font-display font-bold text-sm text-[oklch(0.22_0.01_60)]">{t('Bank Transfer', 'Overboeking')}</span></div>
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('Wire transfer', 'Internationale overboeking')}</span>
              </div>
              <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">{t('Direct international bank transfers welcome.', 'Directe internationale bankoverschrijvingen welkom.')}</p>
              <div className="bg-[oklch(0.95_0.02_195)] rounded px-3 py-1.5 text-sm text-[oklch(0.42_0.01_60)] whitespace-nowrap">{t('Coming soon', 'Binnenkort')}</div>
            </div>
          </div>
          <p className="text-center text-sm text-[oklch(0.52_0.015_60)] mt-6">
            {t('All donation methods include an automatic digital receipt and optional newsletter opt-in.', 'Alle donatiewijzen omvatten een automatisch digitaal ontvangstbewijs en optionele nieuwsbriefinschrijving.')}
          </p>
        </div>
      </section>
    </div>
  );
}
