import type { NuxtI18nOptions } from '@nuxtjs/i18n'

function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key} (see .env.example)`)
  }
  return value
}

const SITE_URL = requireEnv('NUXT_PUBLIC_SITE_URL')
const TELEGRAM_USERNAME = requireEnv('NUXT_PUBLIC_TELEGRAM_USERNAME')
const BALE_USERNAME = requireEnv('NUXT_PUBLIC_BALE_USERNAME')
const SUPPORT_EMAIL = requireEnv('NUXT_PUBLIC_SUPPORT_EMAIL')
const WHM_HOST = requireEnv('NUXT_PUBLIC_WHM_HOST')
const CPANEL_HOST = requireEnv('NUXT_PUBLIC_CPANEL_HOST')

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
      telegramUsername: TELEGRAM_USERNAME,
      baleUsername: BALE_USERNAME,
      supportEmail: SUPPORT_EMAIL,
      whmHost: WHM_HOST,
      cpanelHost: CPANEL_HOST,
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
