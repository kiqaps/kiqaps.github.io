import i18n from 'i18next'
import ptTranslation from './pt/translation.json'
import enTranslation from './en/translation.json'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'pt',
  resources: {
    en: { translation: enTranslation },
    pt: { translation: ptTranslation }
  }
})
