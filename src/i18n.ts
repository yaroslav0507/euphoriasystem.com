import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translationEN from './app/locales/en';
import translationUA from './app/locales/uk';

export const displayUkrainian = (lang: string) => /uk|ru\b/.test(lang.toLowerCase());
export const fallbackLng = displayUkrainian(navigator.language) ? 'uk' : 'en';

const resources = {
    en: {
        translation: translationEN
    },
    uk: {
        translation: translationUA
    }
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        keySeparator: '.',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
