import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationUa from "./locales/ua/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    whitelist: ["ua", "en"],
    resources: {
      en: {
        translation: translationEn,
      },
      ua: {
        translation: translationUa,
      },
    },
    debug: false,
    detection: {
      order: ["localStorage", "cookie"],
      cache: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
