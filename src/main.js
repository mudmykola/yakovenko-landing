import './assets/tailwindCSS/main.css'
import enMessages from './locales/en-US.json'
import uaMessages from './locales/ua-UKR.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

const messages = {
  en: enMessages,
  ua: uaMessages
}

const i18n = createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages
})

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')