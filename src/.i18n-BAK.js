import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'next-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  // .use(initReactI18next)
  .init({
    preload: ['en', 'kh'],
    lng: 'en',
    backend: {
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
    },
    fallbackLng: 'en',
    load: 'languageOnly',
    debug: false,
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
      useSuspense: false,
    }
  })

export default i18n