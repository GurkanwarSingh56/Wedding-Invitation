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

  // Hydration safety for localStorage if we want to persist it
  useEffect(() => {
    const saved = localStorage.getItem('wedding-lang') as Language;
    if (saved === 'en' || saved === 'pa') {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'en' ? 'pa' : 'en';
      localStorage.setItem('wedding-lang', next);
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
