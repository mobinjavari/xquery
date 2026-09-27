import type { NuxtI18nOptions } from '@nuxtjs/i18n'

const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL ?? 'https://xquery.ir'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@nuxtjs/sitemap'
  ],
  site: {
    url: SITE_URL,
  },
  runtimeConfig: {
    public: {
      siteUrl: SITE_URL,
    },
  },
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
      { code: 'fa', language: 'fa-IR', name: 'فارسی', file: 'fa.ts', dir: 'rtl'},
      { code: 'tr', language: 'tr-TR', name: 'Türkçe', file: 'tr.ts'},
      { code: 'en', language: 'en-US', name: 'English', file: 'en.ts' }
    ],
    lazy: true,
  }
})
