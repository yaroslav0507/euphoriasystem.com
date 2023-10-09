import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './app/locales/en';
import translationUA from './app/locales/uk';

const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    }
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
