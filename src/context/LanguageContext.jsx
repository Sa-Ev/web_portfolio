import React, { createContext, useState, useContext } from "react";
import enTranslations from "@/i18n/en";
import deTranslations from "@/i18n/de";
import ruTranslations from "@/i18n/ru";

const translations = {
  en: enTranslations,
  de: deTranslations,
  ru: ruTranslations,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ru"); // По умолчанию русский

  const t = (key) => {
    const keys = key.split(".");
    let translation = translations[language];

    for (const k of keys) {
      if (!translation[k]) return key;
      translation = translation[k];
    }

    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
