import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE_URL = 'https://internationaalorkest.nl';

interface SEOConfig {
  title: string;
  titleNl: string;
  description: string;
  descriptionNl: string;
  path: string;
  image: string;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSEO({ title, titleNl, description, descriptionNl, path, image }: SEOConfig) {
  const { lang } = useLanguage();

  useEffect(() => {
    const finalTitle = lang === 'en' ? title : titleNl;
    const finalDescription = lang === 'en' ? description : descriptionNl;
    const url = `${SITE_URL}${path}`;

    document.title = finalTitle;
    setMetaTag('name', 'description', finalDescription);

    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:image', image);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', url);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', image);
  }, [lang, title, titleNl, description, descriptionNl, path, image]);
}
