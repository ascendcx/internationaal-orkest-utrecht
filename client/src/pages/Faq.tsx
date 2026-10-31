import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SUPPORT_EMAIL } from '@/lib/donationConfig';
import { RECORDING_TEXT, SAFEGUARDING_TEXT, SHOW_RECORDING_NOTICE, SHOW_SAFEGUARDING } from '@/lib/siteFlags';

const linkClass = 'underline underline-offset-2 text-[oklch(0.38_0.09_195)]';

export default function Faq() {
  const { t } = useLanguage();
  useSEO({
    title: 'FAQ | Internationaal Orkest Utrecht',
    titleNl: 'Veelgestelde vragen | Internationaal Orkest Utrecht',
    description: 'Answers to common questions about Internationaal Orkest Utrecht, free school concerts and the free youth ensembles of Nederland in Harmonie.',
    descriptionNl: 'Antwoorden op veelgestelde vragen over Internationaal Orkest Utrecht, gratis schoolconcerten en de gratis jeugdensembles van Nederland in Harmonie.',
    path: '/faq',
  });

  const items: { id: string; q: string; a: ReactNode }[] = [
    {
      id: 'what',
      q: t('What is Internationaal Orkest Utrecht?', 'Wat is Internationaal Orkest Utrecht?'),
      a: t(
        'Internationaal Orkest Utrecht is a professional orchestra that brings free concerts to schools and runs free youth ensembles called Nederland in Harmonie.',
        'Internationaal Orkest Utrecht is een professioneel orkest dat gratis concerten naar scholen brengt en gratis jeugdensembles opzet onder de naam Nederland in Harmonie.'
      ),
    },
    {
      id: 'free',
      q: t('Is it really free?', 'Is het echt gratis?'),
      a: t(
        'Free for every child. Made possible by donations, grants, and other funds.',
        'Gratis voor elk kind. Mogelijk gemaakt door donaties, bijdragen van fondsen en andere middelen.'
      ),
    },
    {
      id: 'who',
      q: t('Who can join the youth ensembles?', 'Wie kan meedoen met de jeugdensembles?'),
      a: (
        <>
          {t(
            'Any child can register their interest. Details are shared with families as each ensemble opens.',
            'Elk kind kan belangstelling melden. We delen de details met gezinnen zodra een ensemble opent.'
          )}{' '}
          <Link href="/youth-ensembles" className={linkClass}>{t('Register your interest', 'Meld uw belangstelling')}</Link>
        </>
      ),
    },
    {
      id: 'where',
      q: t('Where and when do the ensembles meet?', 'Waar en wanneer komen de ensembles bij elkaar?'),
      a: (
        <>
          {t(
            'We are building ensembles in seven cities. All youth choirs and orchestras meet after school. Register your interest and we will share the details.',
            'Wij bouwen ensembles op in zeven steden. Alle jeugdkoren en jeugdorkesten komen na schooltijd bij elkaar. Meld uw belangstelling en wij delen de details.'
          )}{' '}
          <Link href="/locations" className={linkClass}>{t('See the locations', 'Bekijk de locaties')}</Link>
        </>
      ),
    },
    {
      id: 'book',
      q: t('How can a school book a concert?', 'Hoe kan een school een concert aanvragen?'),
      a: (
        <>
          {t(
            'Use the enquiry form on our School Concerts page. A full orchestra concert or a smaller group can visit your school.',
            'Gebruik het aanvraagformulier op onze pagina Schoolconcerten. Een concert met het hele orkest of een kleinere groep kan uw school bezoeken.'
          )}{' '}
          <Link href="/school-concerts#booking" className={linkClass}>{t('Ask about a school concert', 'Vraag een schoolconcert aan')}</Link>
        </>
      ),
    },
    {
      id: 'support',
      q: t('How can I support the orchestra?', 'Hoe kan ik het orkest steunen?'),
      a: (
        <>
          {t('You can make a donation to help keep music free for children.', 'U kunt een donatie doen om muziek gratis te houden voor kinderen.')}{' '}
          <Link href="/support" className={linkClass}>{t('See how to support us', 'Bekijk hoe u ons kunt steunen')}</Link>
        </>
      ),
    },
    {
      id: 'languages',
      q: t('Which languages is the site in?', 'In welke talen is de website?'),
      a: t('The site is in English and Dutch. Use the EN and NL switch at the top of the page.', 'De website is in het Nederlands en Engels. Gebruik de schakelaar NL en EN bovenaan de pagina.'),
    },
    {
      id: 'contact',
      q: t('How do I contact you?', 'Hoe neem ik contact met jullie op?'),
      a: (
        <>
          {t('You can email us at ', 'U kunt ons mailen op ')}
          <a href={`mailto:${SUPPORT_EMAIL}`} className={linkClass}>{SUPPORT_EMAIL}</a>
          {t(' or use our contact form.', ' of ons contactformulier gebruiken.')}{' '}
          <Link href="/contact" className={linkClass}>{t('Contact us', 'Neem contact op')}</Link>
        </>
      ),
    },
    ...(SHOW_SAFEGUARDING
      ? [{
          id: 'safe',
          q: t('Is it safe for my child?', 'Is het veilig voor mijn kind?'),
          a: t(SAFEGUARDING_TEXT.body.en, SAFEGUARDING_TEXT.body.nl),
        }]
      : []),
    ...(SHOW_RECORDING_NOTICE
      ? [{
          id: 'recorded',
          q: t('Are concerts recorded?', 'Worden concerten opgenomen?'),
          a: t(RECORDING_TEXT.en, RECORDING_TEXT.nl),
        }]
      : []),
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-[oklch(0.95_0.02_195)]">
        <div className="container max-w-3xl">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            {t('Frequently asked questions', 'Veelgestelde vragen')}
          </h1>
          <p className="text-lg text-[oklch(0.35_0.01_60)] leading-relaxed">
            {t('Quick answers about our concerts, ensembles and how to take part.', 'Snelle antwoorden over onze concerten, ensembles en hoe u kunt meedoen.')}
          </p>
        </div>
      </section>
      <section className="py-12 bg-[oklch(0.98_0.008_80)]">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible>
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-[oklch(0.22_0.01_60)]">{item.q}</AccordionTrigger>
                <AccordionContent className="text-base text-[oklch(0.42_0.01_60)] leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
