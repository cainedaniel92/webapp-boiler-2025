import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './en/common.json';
import esCommon from './es/common.json';

const i18n = i18next.createInstance();

export const resources = {
  en: {
    common: enCommon
  },
  es: {
    common: esCommon
  }
} as const;

export const initTranslations = async () => {
  if (i18n.isInitialized) {
    return i18n;
  }

  await i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

  return i18n;
};

export type AppLanguage = keyof typeof resources;

export default i18n;
