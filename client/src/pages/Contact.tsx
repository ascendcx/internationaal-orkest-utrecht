import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { CheckCircle, Mail, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', newsletter: false });
  const [submitted, setSubmitted] = useState(false);

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
            {t("We'd Love to Hear From You", 'We Horen Graag van U')}
          </h1>
          <p className="text-[oklch(0.52_0.015_60)] max-w-xl leading-relaxed">
            {t(
              'Whether you have a question about a concert, want to join an ensemble, or are interested in supporting our work, please reach out.',
              'Of u nu een vraag heeft over een concert, wilt deelnemen aan een ensemble of geïnteresseerd bent in het ondersteunen van ons werk, neem gerust contact op.'
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
                  <h3 className="font-display text-xl font-bold text-[oklch(0.22_0.01_60)] mb-2">{t('Message Sent!', 'Bericht Verzonden!')}</h3>
                  <p className="text-[oklch(0.52_0.015_60)]">{t("We'll respond within 2 business days.", 'We reageren binnen 2 werkdagen.')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: 'name', label: t('Your Name', 'Uw Naam'), type: 'text', required: true },
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
                        className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_195)] transition-colors bg-white"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-[oklch(0.22_0.01_60)] mb-1">{t('Message', 'Bericht')} *</label>
                    <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.015_195)] text-sm focus:outline-none focus:border-[oklch(0.38_0.09_195)] transition-colors bg-white resize-none" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={form.newsletter} onChange={(e) => setForm({ ...form, newsletter: e.target.checked })} className="mt-0.5 rounded" />
                    <span className="text-sm text-[oklch(0.52_0.015_60)]">{t('I would like to receive periodic updates about the orchestra.', 'Ik wil periodieke updates over het orkest ontvangen.')}</span>
                  </label>
                  <button type="submit" className="btn-primary w-full justify-center">
                    {t('Send Message', 'Bericht Verzenden')} <ArrowRight size={16} />
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
                <h3 className="font-display font-bold text-[oklch(0.22_0.01_60)] mb-4">{t('Follow Us', 'Volg Ons')}</h3>
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
                <p className="text-sm text-[oklch(0.52_0.015_60)]">{t('Founder & Artistic Director', 'Oprichter & Artistiek Directeur')}</p>
                <p className="text-sm text-[oklch(0.52_0.015_60)] mt-1">Stichting Internationaal Orkest Utrecht</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
