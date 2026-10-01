import { useHead, useSeoMeta, useRuntimeConfig } from '#imports'
import { formatTelegramUrl } from '@/utils/formatChannelUrl'

interface SeoOptions {
  title?: string
  rawTitle?: string
  description?: string
  keywords?: string
  image?: string
}

export function useSeo({ title = '', rawTitle = '', description = '', keywords = '', image = '' }: SeoOptions) {
  const config = useRuntimeConfig()
  const website = config.public.siteUrl
  const { t, locale, locales } = useI18n()
  const { $i18n } = useNuxtApp()
  const currentLocale = locales.value.find(l => l.code === locale.value)
  if (!currentLocale) {
    throw new Error(`Unknown locale: ${locale.value}`)
  }
  const route = useRoute()
  const url = `${website}${route.path}`

  const fullTitle = (rawTitle ? rawTitle : title) + ' | xQuery Team'
  const metaKeywords = keywords ? keywords : 'xQuery Team'
  const metaImage = image ? image : `${website}/images/thumbnail.jpg`

  useSeoMeta({
    title: fullTitle,
    description,
    ogType: 'website',
    ogUrl: url,
    ogTitle: fullTitle,
    ogDescription: description,
    ogSiteName: t('name'),
    ogLocale: currentLocale.language?.replace('-', '_'),
    ogImage: metaImage,
    twitterCard: 'summary_large_image',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: metaImage,
  })

  useHead({
    meta: [
      { charset: 'UTF-8' },
    ],
  })

  useHead({
    meta: [
      { name: 'keywords', content: metaKeywords },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' },
    ],
  })

  useHead({
    script: route.path === '/' + currentLocale.code ? [{
      type: 'application/ld+json' as const,
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          'name': 'xQuery',
          'alternateName': t('name'),
          'url': url,
          'logo': `${website}/favicons/1080.png`,
          'sameAs': [
            formatTelegramUrl(config.public.telegramUsername)
          ]
        },
        {
          '@context': 'https://schema.org/',
          '@type': 'WebSite',
          'name': t('name'),
          'url': url
        }
      ]),
      tagPosition: 'head' as const
    }] : [],
    link: [
      { rel: 'canonical', href: url },
      { rel: 'manifest', href: '/manifest.json', crossorigin: 'use-credentials'},
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/114.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/180.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/black.ico', media: "(prefers-color-scheme: light)"},
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/white.ico', media: "(prefers-color-scheme: dark)"},
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/16.png' },
      ...locales.value.map(l => (
        { rel: 'alternate' as const, hreflang: l.code, href: url.replace(currentLocale.code, l.code) }
      )),
      { rel: 'alternate' as const, hreflang: 'x-default', href: url.replace(currentLocale.code, $i18n.defaultLocale) }
    ]
  })
}
