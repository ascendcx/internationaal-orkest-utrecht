import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { mediaUrl } from '@/lib/media';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Honeypot, FormError } from '@/components/FormParts';
import {
  MOLLIE_URL,
  MOLLIE_RECIPIENT,
  SHOW_ZEFFY,
  ZEFFY_CAMPAIGN_URL,
  ZEFFY_RECIPIENT_NAME,
  SUPPORT_EMAIL,
  BANK_ACCOUNT_HOLDER,
  BANK_IBAN,
  BANK_BIC,
  WERO_QR_IMAGE_URL,
  WERO_PAYEE_NAME,
  SHOW_WERO,
  SHOW_BANK_TRANSFER,
} from '@/lib/donationConfig';

const DONATE_BUTTON =
  'btn-secondary !bg-[oklch(0.38_0.09_195)] !text-white hover:!bg-[oklch(0.32_0.09_195)] w-full sm:w-auto justify-center';

const PLACEHOLDER = ['Details will be added here.', 'De gegevens worden hier toegevoegd.'] as const;

/** One labeled value with a small Copy button. Shows a plain placeholder line when the value is empty. */
function DetailRow({ label, value, copied, onCopy }: { label: string; value: string; copied: boolean; onCopy: () => void }) {
  const { t } = useLanguage();
  return (
    <div className="py-3 border-t border-[oklch(0.88_0.015_195)] first:border-t-0">
      <dt className="text-xs uppercase tracking-wider text-[oklch(0.52_0.015_60)] mb-0.5">{label}</dt>
      {value !== '' ? (
        <dd className="flex items-center justify-between gap-3">
          <span className="text-sm text-[oklch(0.22_0.01_60)] break-all">{value}</span>
          <button
            type="button"
            onClick={onCopy}
            className="shrink-0 text-xs font-medium text-[oklch(0.38_0.09_195)] underline underline-offset-2 rounded px-1 py-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.38_0.09_195)]"
          >
            {copied ? t('Copied', 'Gekopieerd') : t('Copy', 'Kopieer')}
          </button>
        </dd>
      ) : (
        <dd className="text-sm text-[oklch(0.52_0.015_60)]">{t(...PLACEHOLDER)}</dd>
      )}
    </div>
  );
}

/** Shown while SHOW_BANK_TRANSFER is true. */
function BankTransferBlock() {
  const { t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState('');
  const [announce, setAnnounce] = useState('');
  if (!SHOW_BANK_TRANSFER) return null;

  const copy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setAnnounce(t('Copied', 'Gekopieerd'));
      window.setTimeout(() => {
        setCopiedKey('');
        setAnnounce('');
      }, 2000);
    } catch {
      // Clipboard unavailable. The value stays visible so it can be selected by hand.
    }
  };

  const rows: [string, string, string][] = [
    ['holder', t('Account holder', 'Naam rekeninghouder'), BANK_ACCOUNT_HOLDER],
    ['iban', 'IBAN', BANK_IBAN],
    ['bic', 'BIC/SWIFT', BANK_BIC],
  ];

  return (
    <div className="border-t-2 border-[oklch(0.88_0.015_195)] pt-4">
      <h4 className="font-display text-base font-bold text-[oklch(0.22_0.01_60)] mb-2">{t('Bank transfer', 'Overschrijving')}</h4>
      <dl>
        {rows.map(([key, label, value]) => (
          <DetailRow key={key} label={label} value={value} copied={copiedKey === key} onCopy={() => copy(key, value)} />
        ))}
      </dl>
      <span className="sr-only" aria-live="polite">{announce}</span>
    </div>
  );
}

/** Shown while SHOW_WERO is true. */
function WeroBlock() {
  const { t } = useLanguage();
  if (!SHOW_WERO) return null;
  const payee = WERO_PAYEE_NAME !== '' ? WERO_PAYEE_NAME : '';
  const alt =
    payee !== ''
      ? t(`WERO QR code for donations to ${payee}`, `WERO-QR-code voor donaties aan ${payee}`)
      : t('WERO QR code for donations', 'WERO-QR-code voor donaties');
  return (
    <div className="border-t-2 border-[oklch(0.88_0.015_195)] pt-4">
      <h4 className="font-display text-base font-bold text-[oklch(0.22_0.01_60)] mb-2">{t('Pay with WERO', 'Betalen met WERO')}</h4>
      {WERO_QR_IMAGE_URL !== '' ? (
        <div>
          <img src={WERO_QR_IMAGE_URL} alt={alt} className="w-48 h-48 object-contain bg-white border border-[oklch(0.88_0.015_195)] rounded p-2" />
          <p className="text-sm text-[oklch(0.42_0.01_60)] mt-2">{t('Scan with your banking app.', 'Scan met uw bank-app.')}</p>
        </div>
      ) : (
        <p className="text-sm text-[oklch(0.52_0.015_60)]">{t(...PLACEHOLDER)}</p>
      )}
    </div>
  );
}

export default function Support() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const { sending, failed, submitted, submit } = useFormSubmit('newsletter');
  const donateHeading = useRef<HTMLHeadingElement>(null);
  const zeffyLive = SHOW_ZEFFY && ZEFFY_CAMPAIGN_URL !== '';
  useSEO({
    title: 'Donate | Internationaal Orkest Utrecht',
    titleNl: 'Doneren | Internationaal Orkest Utrecht',
    description: 'Donate to help fund free school concerts and youth ensembles in the Netherlands.',
    descriptionNl: 'Doneer om gratis schoolconcerten en jeugdensembles in Nederland mogelijk te maken.',
    path: '/support',
    image: mediaUrl('images/iou-support.jpg'),
  });

  const blockClass = 'border-t border-[oklch(0.88_0.015_195)] pt-6 first:border-t-0 first:pt-0';
  const blockHeading = 'font-display text-lg font-bold text-[oklch(0.22_0.01_60)] mb-2';

  const mollieBlock = (
    <div className={blockClass}>
      <h3 className={blockHeading}>{t('Donate through Mollie', 'Doneren via Mollie')}</h3>
      <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-1">
        {t('Continue to our Mollie payment page to choose your donation amount.', 'Ga naar onze betaalpagina bij Mollie en kies het bedrag dat u wilt geven.')}
      </p>
      <p className="text-sm text-[oklch(0.52_0.015_60)] mb-4">
        {t(`Donations are made to ${MOLLIE_RECIPIENT}.`, `U doneert aan ${MOLLIE_RECIPIENT}.`)}
      </p>
      <a href={MOLLIE_URL} target="_blank" rel="noopener noreferrer" className={DONATE_BUTTON}>
        {t('Donate via Mollie', 'Doneer via Mollie')} <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
  );

  // Zeffy block: a plain placeholder line until a campaign link exists. Never a button, date, goal or progress bar without one.
  const zeffyBlock = SHOW_ZEFFY ? (
    <div className={blockClass}>
      <h3 className={blockHeading}>{t('Fundraising campaigns on Zeffy', 'Fundraisingacties via Zeffy')}</h3>
      <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-3">
        {t(
          'We plan to hold fundraising campaigns on Zeffy, an online platform for nonprofits.',
          'We willen fondsenwervende acties houden via Zeffy, een online platform voor non-profitorganisaties.'
        )}
      </p>
      {zeffyLive ? (
        <>
          {ZEFFY_RECIPIENT_NAME !== '' && (
            <p className="text-sm text-[oklch(0.52_0.015_60)] mb-4">
              {t(`Donations through Zeffy are made to ${ZEFFY_RECIPIENT_NAME}.`, `Donaties via Zeffy gaan naar ${ZEFFY_RECIPIENT_NAME}.`)}
            </p>
          )}
          <a href={ZEFFY_CAMPAIGN_URL} target="_blank" rel="noopener noreferrer" className={DONATE_BUTTON}>
            {t('Donate via Zeffy', 'Doneer via Zeffy')} <ExternalLink size={14} aria-hidden="true" />
          </a>
          <p className="text-sm text-[oklch(0.52_0.015_60)] mt-3">
            {t(
              'Zeffy may ask for an optional contribution to Zeffy. This is separate from your donation and can be changed or set to zero.',
              'Zeffy kan vragen om een optionele bijdrage aan Zeffy. Die staat los van uw donatie en kunt u aanpassen of op nul zetten.'
            )}
          </p>
        </>
      ) : (
        <p className="text-sm text-[oklch(0.52_0.015_60)]">
          {t('Campaign details will be added here.', 'De gegevens van de actie worden hier toegevoegd.')}
        </p>
      )}
    </div>
  ) : null;

  const goToDonate = () => {
    const el = donateHeading.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    el.focus({ preventScroll: true });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* 1 Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={mediaUrl('images/iou-support.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.22_0.05_195)]/85" />
        </div>
        <div className="relative container text-center text-white">
          <span className="section-rule mx-auto" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            {t('Be the Reason They Play', 'Geef kinderen de kans om muziek te maken')}
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
            {t(
              'Your donation helps fund free school concerts and develop local youth ensembles. Help children discover live music, try instruments or sing, and keep making music together.',
              'Uw donatie helpt gratis schoolconcerten en lokale jeugdensembles mogelijk te maken. Help kinderen live muziek te ontdekken, instrumenten uit te proberen of te zingen, en samen muziek te blijven maken.'
            )}
          </p>
          <p className="text-white/85 max-w-xl mx-auto text-lg leading-relaxed font-medium mt-4">
            {t(
              'Free for every child. Made possible by donations, grants, and other funds.',
              'Gratis voor elk kind. Mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
            )}
          </p>
          <button type="button" onClick={goToDonate} className="btn-gold mt-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {t('Donate', 'Doneren')} <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* 2 What donations support */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm">
            <span className="section-rule" />
            <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t('What your donation helps make possible', 'Wat uw donatie mogelijk maakt')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'Donations help cover school concerts, teaching, instruments and the running of our youth ensemble program, Nederland in Harmonie (The Netherlands in Harmony). Your support helps us give children a path from hearing music to making it together.',
                'Donaties helpen om schoolconcerten, lessen, instrumenten en de organisatie van Nederland in Harmonie, ons programma met lokale jeugdensembles, te betalen. Met uw steun geven we kinderen de kans om niet alleen naar muziek te luisteren, maar ook samen muziek te maken.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Make a donation */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h2
            ref={donateHeading}
            id="donate"
            tabIndex={-1}
            className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-6 scroll-mt-28 rounded focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[oklch(0.38_0.09_195)]"
          >
            {t('Make a donation', 'Doe een donatie')}
          </h2>

          <div className="space-y-6">
            {zeffyLive ? (
              <>
                {zeffyBlock}
                {mollieBlock}
              </>
            ) : (
              <>
                {mollieBlock}
                {zeffyBlock}
              </>
            )}

            {(SHOW_WERO || SHOW_BANK_TRANSFER) && (
              <div className="pt-4">
                <h3 className="font-display text-lg font-bold text-[oklch(0.22_0.01_60)] mb-4">
                  {t('Other ways to donate', 'Andere manieren om te doneren')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <BankTransferBlock />
                  <WeroBlock />
                </div>
              </div>
            )}

            <p className="text-sm text-[oklch(0.42_0.01_60)] pt-2">
              {t('Questions about donating? Contact ', 'Vragen over doneren? Neem contact op via ')}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="underline text-[oklch(0.38_0.09_195)]">{SUPPORT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Taking part is always free */}
      <section className="py-12 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <div className="border-l-4 border-[oklch(0.72_0.12_75)] pl-6">
            <h2 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
              {t('Taking part is always free', 'Meedoen is altijd gratis')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'Anyone can join for free. Families who are able are warmly welcome to support us during our fundraising campaigns. It is never required.',
                'Iedereen mag gratis meedoen. Gezinnen die dat kunnen, zijn tijdens onze fondsenwervende acties van harte welkom om ons te steunen. Het is nooit verplicht.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 5 Stay in touch */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h2 className="font-display text-2xl font-bold text-[oklch(0.22_0.01_60)] mb-2">
            {t('Stay in touch', 'Blijf op de hoogte')}
          </h2>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-6">
            {t(
              'Receive email news about our concerts, youth music programs and fundraising.',
              "Ontvang per e-mail nieuws over onze concerten, muziekprogramma's voor kinderen en fondsenwerving."
            )}
          </p>
          {submitted ? (
            <p role="status" className="text-base font-medium text-[oklch(0.38_0.09_195)]">
              {t('Thank you. You are on our list.', 'Dank u wel. U staat op onze lijst.')}
            </p>
          ) : (
            <form onSubmit={(e) => submit(e, { email, newsletter, source: 'support' })} className="space-y-4 max-w-md relative">
              <div>
                <label htmlFor="support-newsletter-email" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Email address', 'E-mailadres')} *</label>
                <input
                  id="support-newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm bg-white text-[oklch(0.22_0.01_60)]"
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.42_0.01_60)]">
                  {t(
                    'I would like email updates about IOU concerts, music programs and fundraising.',
                    "Ik ontvang graag per e-mail nieuws over IOU-concerten, muziekprogramma's en fondsenwerving."
                  )}
                </span>
              </label>
              <FormError show={failed} />
              <button type="submit" disabled={sending} className="btn-secondary disabled:opacity-60 disabled:cursor-not-allowed">
                {t('Subscribe', 'Aanmelden')}
              </button>
              <Honeypot />
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
