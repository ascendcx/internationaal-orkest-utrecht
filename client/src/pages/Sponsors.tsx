import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useRef, useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { mediaUrl } from '@/lib/media';
import { useFormSubmit } from '@/hooks/useFormSubmit';
import { Honeypot, FormError } from '@/components/FormParts';

// Only add a sponsor here once the organization has approved being listed.
// While this array is empty, the "Thank you to our sponsors" section renders nothing.
type ConfirmedSponsor = { name: string; logoUrl?: string; url?: string };
const CONFIRMED_SPONSORS: ConfirmedSponsor[] = [];

function ConfirmedSponsors({ sponsors }: { sponsors: ConfirmedSponsor[] }) {
  const { t } = useLanguage();
  if (sponsors.length === 0) return null;
  return (
    <section className="py-16 bg-[oklch(0.98_0.008_80)] border-t border-[oklch(0.88_0.015_195)]">
      <div className="container">
        <span className="section-rule" />
        <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
          {t('Thank you to our sponsors', 'Dank aan onze sponsors')}
        </h2>
        <p className="text-[oklch(0.42_0.01_60)] leading-relaxed max-w-2xl mb-8">
          {t(
            'We are grateful to the businesses and organizations helping make our music programs possible.',
            'We zijn de bedrijven en organisaties dankbaar die onze muziekprogramma\'s mogelijk helpen maken.'
          )}
        </p>
        <ul className="flex flex-wrap gap-x-10 gap-y-4">
          {sponsors.map((s) => (
            <li key={s.name} className="text-base font-medium text-[oklch(0.22_0.01_60)]">
              {s.url ? (
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {s.logoUrl ? <img src={s.logoUrl} alt={s.name} className="h-12 w-auto" loading="lazy" /> : s.name}
                </a>
              ) : s.logoUrl ? (
                <img src={s.logoUrl} alt={s.name} className="h-12 w-auto" loading="lazy" />
              ) : (
                s.name
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function Sponsors() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', newsletter: false });
  const { sending, failed, submitted, submit } = useFormSubmit('sponsor');
  const formHeadingRef = useRef<HTMLHeadingElement>(null);
  useSEO({
    title: 'Become a Sponsor | Internationaal Orkest Utrecht',
    titleNl: 'Word sponsor | Internationaal Orkest Utrecht',
    description: 'Sponsor free school concerts and local youth ensembles with Internationaal Orkest Utrecht. Tell us about your business to discuss the options.',
    descriptionNl: 'Sponsor de gratis schoolconcerten en lokale jeugdensembles van Internationaal Orkest Utrecht. Vertel ons over uw bedrijf om de mogelijkheden te bespreken.',
    path: '/sponsors',
    image: mediaUrl('images/iou-hero.jpg'),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => submit(e, { ...form });

  const goToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heading = formHeadingRef.current;
    if (!heading) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    heading.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    heading.focus({ preventScroll: true });
    history.replaceState(null, '', '#inquiry');
  };

  const possible = [
    {
      title: t('A first experience of live music', 'Een eerste kennismaking met live muziek'),
      desc: t('Help bring orchestral music and singing to children at school.', 'Help orkestmuziek en zang naar kinderen op school te brengen.'),
    },
    {
      title: t('A chance to try it themselves', 'Een kans om het zelf te proberen'),
      desc: t('Help children explore instruments or sing together, guided by musicians and singers.', 'Help kinderen instrumenten te ontdekken of samen te zingen, begeleid door musici en zangers.'),
    },
    {
      title: t('A place to keep making music', 'Een plek om samen muziek te blijven maken'),
      desc: t(
        'Support the development of Nederland in Harmonie (The Netherlands in Harmony), our free local youth ensemble program.',
        'Steun het opzetten van Nederland in Harmonie, ons gratis programma met lokale jeugdensembles.'
      ),
    },
  ];

  const recognition = [
    t('Your name or logo in concert programs.', 'Uw naam of logo in concertprogramma\'s.'),
    t('A mention on social media.', 'Een vermelding op sociale media.'),
    t('Your logo and a link on our Sponsors page.', 'Uw logo en een link op onze sponsorspagina.'),
  ];

  const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-[oklch(0.98_0.008_80)]';
  const labelClass = 'block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1';

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-[oklch(0.38_0.09_195)] py-24">
        <div className="container text-white">
          <span className="section-rule" style={{ backgroundColor: 'oklch(0.72 0.12 75)' }} />
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4 max-w-2xl">
            {t('Help children make music', 'Help kinderen muziek maken')}
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed mb-4">
            {t(
              'Your business can help fund free school concerts and local youth ensembles with Internationaal Orkest Utrecht. Help children move from hearing live music to playing or singing together.',
              'Uw bedrijf kan helpen de gratis schoolconcerten en lokale jeugdensembles van Internationaal Orkest Utrecht mogelijk te maken. Help kinderen om niet alleen naar muziek te luisteren, maar ook samen te spelen of te zingen.'
            )}
          </p>
          <p className="text-white/85 text-lg max-w-xl leading-relaxed font-medium mb-8">
            {t(
              'Free for every child. Made possible by donations, grants, and other funds.',
              'Gratis voor elk kind. Mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
            )}
          </p>
          <a href="#inquiry" onClick={goToForm} className="btn-gold">
            {t('Discuss sponsorship', 'Bespreek sponsoring')}
          </a>
        </div>
      </section>

      {/* What your support helps make possible */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <span className="section-rule" />
            <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
              {t('What your support helps make possible', 'Wat uw steun mogelijk maakt')}
            </h2>
            <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
              {t(
                'Sponsorship helps us bring music into schools and develop free local ensembles where children can keep making music together.',
                'Dankzij sponsoring kunnen we muziek naar scholen brengen en gratis lokale ensembles opzetten waar kinderen samen muziek blijven maken.'
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {possible.map((item, i) => (
              <div key={i} className={`py-8 border-t border-[oklch(0.88_0.015_195)] md:pr-8 ${i > 0 ? 'md:pl-8 md:border-l' : ''}`}>
                <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{item.title}</h3>
                <p className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition for your support */}
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h2 className="font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            {t('Recognition for your support', 'Aandacht voor uw steun')}
          </h2>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
            {t(
              'We will discuss how your business\'s support can be acknowledged. Recognition is agreed as part of the sponsorship arrangement and may include:',
              'We bespreken met u hoe we de steun van uw bedrijf kunnen vermelden. De afspraken maken deel uit van de sponsoring. Mogelijkheden zijn:'
            )}
          </p>
          <ul className="list-disc pl-6 space-y-1 text-[oklch(0.42_0.01_60)] leading-relaxed mb-4">
            {recognition.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed">
            {t(
              'Contact us to discuss the options and what we can offer.',
              'Neem contact op om de mogelijkheden te bespreken en te horen wat we kunnen bieden.'
            )}
          </p>
        </div>
      </section>

      {/* Confirmed sponsors (renders nothing until approved records exist) */}
      <ConfirmedSponsors sponsors={CONFIRMED_SPONSORS} />

      {/* Sponsorship inquiry */}
      <section className="py-16 bg-[oklch(0.98_0.008_80)] border-t border-[oklch(0.88_0.015_195)]">
        <div className="container max-w-2xl">
          <span className="section-rule" />
          <h2
            id="inquiry"
            ref={formHeadingRef}
            tabIndex={-1}
            className="scroll-mt-24 font-display text-3xl font-bold text-[oklch(0.22_0.01_60)] mb-4 focus:outline-2 focus:outline-offset-4 focus:outline-[oklch(0.72_0.12_75)]"
          >
            {t('Let\'s discuss sponsorship', 'Laten we sponsoring bespreken')}
          </h2>
          <p className="text-[oklch(0.42_0.01_60)] leading-relaxed mb-8">
            {t(
              'Tell us about your business and what you would like to support. We will contact you to discuss the sponsorship options. Sending an inquiry does not commit you to a sponsorship.',
              'Vertel ons over uw bedrijf en wat u wilt steunen. We nemen contact met u op om de sponsormogelijkheden te bespreken. Een aanvraag verplicht u tot niets.'
            )}
          </p>
          {submitted ? (
            <div role="status" className="bg-white rounded-xl p-8 text-center border border-[oklch(0.88_0.015_195)]">
              <CheckCircle size={40} className="text-[oklch(0.38_0.09_195)] mx-auto mb-4" />
              <p className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)]">
                {t('Thank you. We have received your message and will be in touch.', 'Dank u wel. We hebben uw bericht ontvangen en nemen contact met u op.')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-[oklch(0.88_0.015_195)] shadow-sm space-y-5">
              {[
                { key: 'name', label: t('Your name', 'Uw naam'), type: 'text', required: true },
                { key: 'company', label: t('Company name', 'Bedrijfsnaam'), type: 'text', required: true },
                { key: 'email', label: t('Email address', 'E-mailadres'), type: 'email', required: true },
                { key: 'phone', label: t('Phone number', 'Telefoonnummer'), type: 'tel', required: false },
              ].map(({ key, label, type, required }) => (
                <div key={key}>
                  <label htmlFor={`sp-${key}`} className={labelClass}>{label}{required && ' *'}</label>
                  <input
                    id={`sp-${key}`}
                    type={type}
                    required={required}
                    value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className={inputClass}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="sp-message" className={labelClass}>{t('Message', 'Bericht')}</label>
                <textarea
                  id="sp-message"
                  rows={4}
                  aria-describedby="sp-message-help"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
                <p id="sp-message-help" className="text-sm text-[oklch(0.52_0.015_60)] mt-1">
                  {t(
                    'Tell us what interests you and any questions you have about sponsoring IOU.',
                    'Vertel wat uw belangstelling heeft en welke vragen u heeft over het sponsoren van IOU.'
                  )}
                </p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like email updates about IOU concerts and music programs.', 'Ik ontvang graag per e-mail nieuws over IOU-concerten en muziekprogramma\'s.')}</span>
              </label>
              <FormError show={failed} />
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
                {t('Request sponsorship information', 'Informatie over sponsoring aanvragen')}
                <ArrowRight size={16} />
              </button>
              <Honeypot />
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
