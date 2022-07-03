import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    backend: {
      /* translation file path */
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    fallbackNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    returnEmptyString: false,
    react: {
      useSuspense: true,
    }
  })

export default i18n