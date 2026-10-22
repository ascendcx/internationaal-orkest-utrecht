import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useSearch } from 'wouter';

export type Language = 'en' | 'nl';

/** When true, and nothing is stored and no ?lang= is given, Dutch browsers get Dutch. Keep false until the Dutch copy is approved. */
export const AUTO_DETECT_LANGUAGE = false;

const STORAGE_KEY = 'iou-language';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (en: string, nl: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
});

function isLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'nl';
}

function readStored(): Language | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLanguage(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStored(lang: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Storage blocked. The choice still applies for this visit.
  }
}

/** Reads a valid ?lang= value from a query string, otherwise null. */
function langFromSearch(search: string): Language | null {
  try {
    const value = new URLSearchParams(search).get('lang');
    return isLanguage(value) ? value : null;
  } catch {
    return null;
  }
}

function initialLanguage(): Language {
  const fromUrl = typeof window !== 'undefined' ? langFromSearch(window.location.search) : null;
  if (fromUrl) {
    writeStored(fromUrl);
    return fromUrl;
  }
  const stored = readStored();
  if (stored) return stored;
  if (AUTO_DETECT_LANGUAGE && typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('nl')) {
    return 'nl';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(initialLanguage);
  const search = useSearch();

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    writeStored(next);
  }, []);

  // A ?lang= value on in-app navigation (for example the /scholen redirect) wins and is saved.
  useEffect(() => {
    const fromUrl = langFromSearch(search);
    if (fromUrl) setLang(fromUrl);
  }, [search, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (en: string, nl: string) => (lang === 'en' ? en : nl);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
