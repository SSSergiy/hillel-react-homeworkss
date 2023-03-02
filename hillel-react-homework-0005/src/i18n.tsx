import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEn from './public/locales/en/translationsEn.json';
import translationsUk from './public/locales/uk/translationsUk.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      uk: { translation: translationsUk }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });
export default i18n;
