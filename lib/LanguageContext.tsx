"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pa';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isPunjabi: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Hydration safety for localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding-lang') as Language;
      if ((saved === 'en' || saved === 'pa') && saved !== 'en') {
        // Schedule update asynchronously to prevent cascading render in effect
        requestAnimationFrame(() => {
          setLanguage(saved);
        });
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'en' ? 'pa' : 'en';
      try {
        localStorage.setItem('wedding-lang', next);
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isPunjabi: language === 'pa' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
