import type { NuxtI18nOptions } from '@nuxtjs/i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  css: [
    '@/assets/scss/main.scss',
  ],
  plugins: [
    'plugins/langDir.client.ts'
  ],
  i18n: <NuxtI18nOptions> {
    strategy: 'prefix',
    defaultLocale: 'fa',
    detectBrowserLanguage: false,
    locales: [
      { code: 'fa', iso: 'fa_IR', name: 'فارسی', file: 'fa.ts', dir: 'rtl'},
      { code: 'tr', iso: 'tr_TR', name: 'Türkçe', file: 'tr.ts'},
      { code: 'en', iso: 'en_US', name: 'English', file: 'en.ts' }
    ],
    lazy: true,
  }
})
