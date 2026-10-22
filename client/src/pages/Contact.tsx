import { useLanguage } from '@/contexts/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { useState } from 'react';
import { CheckCircle, Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import { mediaUrl } from '@/lib/media';

const INTEREST_KEYS = ['concert', 'concert-ensemble', 'parent', 'sponsor', 'workshops', 'other'] as const;

function interestFromUrl() {
  const value = new URLSearchParams(window.location.search).get('interest') ?? '';
  return (INTEREST_KEYS as readonly string[]).includes(value) ? value : '';
}

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', interest: interestFromUrl(), subject: '', message: '', newsletter: false });
  const interestOptions = [
    { value: 'concert', label: t('A school concert', 'Een schoolconcert') },
    { value: 'concert-ensemble', label: t('A school concert and local ensemble', 'Een schoolconcert en lokaal ensemble') },
    { value: 'parent', label: t('A free youth ensemble for my child (register interest)', 'Een gratis jeugdensemble voor mijn kind (belangstelling melden)') },
    { value: 'sponsor', label: t('Sponsoring or donating', 'Sponsoring of doneren') },
    { value: 'workshops', label: t('Conductor workshops', 'Dirigentenworkshops') },
    { value: 'other', label: t('Something else', 'Iets anders') },
  ];
  const [submitted, setSubmitted] = useState(false);
  useSEO({
    title: 'Contact Us | Internationaal Orkest Utrecht',
    titleNl: 'Neem Contact Op | Internationaal Orkest Utrecht',
    description: 'Get in touch about school concerts, youth ensembles, or supporting our mission.',
    descriptionNl: 'Neem contact met ons op over schoolconcerten, jeugdensembles of het steunen van onze missie.',
    path: '/contact',
    image: mediaUrl('images/iou-hero.jpg'),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-[oklch(0.95_0.02_195)] py-20">
        <div className="container">
          <span className="section-rule" />
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.01_60)] mb-4">
            {t('Questions about concerts, youth ensembles or supporting IOU?', 'Vragen over concerten, jeugdensembles of het steunen van IOU?')}
          </h1>
          <p className="text-[oklch(0.52_0.015_60)] max-w-xl leading-relaxed">
            {t(
              'Whether you have a question about a concert, want to join an ensemble, or are interested in supporting our work, please reach out. We respond within 2 business days.',
              'Of u nu een vraag heeft over een concert, wilt deelnemen aan een ensemble of geïnteresseerd bent in het ondersteunen van ons werk, neem gerust contact op. Wij reageren binnen 2 werkdagen.'
            )}
          </p>
        </div>
      </section>
      <section className="py-16 bg-[oklch(0.98_0.008_80)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              {submitted ? (
                <div className="bg-white rounded-xl p-8 text-center border border-[oklch(0.88_0.015_195)]">
                  <CheckCircle size={40} className="text-[oklch(0.38_0.09_195)] mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{t('Message Sent!', 'Bericht verzonden!')}</h3>
                  <p className="text-[oklch(0.52_0.015_60)]">{t("We'll respond within 2 business days.", 'We reageren binnen 2 werkdagen.')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: 'name', label: t('Your Name', 'Uw naam'), type: 'text', required: true },
                    { key: 'email', label: t('Email Address', 'E-mailadres'), type: 'email', required: true },
                    { key: 'subject', label: t('Subject', 'Onderwerp'), type: 'text', required: true },
                  ].map(({ key, label, type, required }) => (
                    <div key={key}>
                      <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{label} *</label>
                      <input
                        type={type}
                        required={required}
                        value={(form as any)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-white"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('I am interested in', 'Ik ben geïnteresseerd in')} *</label>
                    <select
                      id="interest"
                      required
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-white"
                    >
                      <option value="" disabled>{t('Choose an option', 'Kies een optie')}</option>
                      {interestOptions.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    {(form.interest === 'concert' || form.interest === 'concert-ensemble') && (
                      <p className="text-sm text-[oklch(0.42_0.01_60)] mt-2">
                        {t('Please tell us whether you are interested in a concert only or a concert and local ensemble.', 'Laat ons weten of u alleen interesse heeft in een concert of in een concert en lokaal ensemble.')}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Message', 'Bericht')} *</label>
                    <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:border-[oklch(0.38_0.09_195)] transition-colors bg-white resize-none" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                    <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like to receive periodic updates about the orchestra.', 'Ik wil periodieke updates over het orkest ontvangen.')}</span>
                  </label>
                  <button type="submit" className="btn-primary w-full justify-center">
                    {t('Send Message', 'Bericht verzenden')} <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-[oklch(0.22_0.01_60)] mb-4">{t('Direct Contact', 'Direct Contact')}</h3>
                <div className="space-y-3">
                  <a href="mailto:info@internationaalorkest.nl" className="flex items-center gap-3 text-[oklch(0.38_0.09_195)] hover:underline">
                    <Mail size={18} /> info@internationaalorkest.nl
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-[oklch(0.22_0.01_60)] mb-4">{t('Follow Us', 'Volg ons')}</h3>
                <div className="flex gap-3">
                  {[
                    { href: 'https://www.instagram.com/internationaalorkestutrecht/', icon: <Instagram size={20} />, label: 'Instagram' },
                    { href: 'https://www.facebook.com/InternationaalOrkestUtrecht', icon: <Facebook size={20} />, label: 'Facebook' },
                    { href: 'https://www.linkedin.com/in/internationaalorkestutrecht', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                  ].map(({ href, icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm text-[oklch(0.38_0.09_195)] hover:bg-[oklch(0.95_0.02_195)] transition-colors">
                      {icon} {label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-[oklch(0.95_0.02_195)] rounded-xl p-6">
                <h3 className="font-display font-bold text-[oklch(0.22_0.01_60)] mb-2">{t('Jennifer Diepman', 'Jennifer Diepman')}</h3>
                <p className="text-sm text-[oklch(0.52_0.015_60)]">{t('Founder & Artistic Director', 'Oprichter & artistiek directeur')}</p>
                <p className="text-sm text-[oklch(0.52_0.015_60)] mt-1">Stichting Internationaal Orkest Utrecht</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
