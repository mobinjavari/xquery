import { useHead } from '#imports'

export function useSeo({title = '', rawTitle = '', description = '', keywords = '', path = '', image = ''}) {
  const website = 'https://xquery.ir'
  const { t, locale, locales } = useI18n()
  const currentLocale = locales.value.find(l => l.code === locale.value)
  const url = `${website}/${currentLocale.code}/${path}`
  const schema = {
    type: 'application/ld+json', 
    innerHTML: JSON.stringify([
      {
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        'name': 'xQuery',
        'alternateName': t('name'),
        'url': url,
        'logo': `${website}/favicons/1080.png`,
        'sameAs': [
          'https://t.me/username'
        ]
      },
      {
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        'name': t('name'),
        'url': url
      }
    ]),
    tagPosition: 'head'
  }

  title = (rawTitle ? rawTitle : title) + ' | xQuery Team'
  keywords = keywords ? keywords : 'xQuery Team'
  image = image ? image : `${website}/images/thumbnail/thumbnail.jpg`

  useHead({
    title,
    meta: [
      { charset: 'UTF-8' },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:site_name', content: t('name') },
      { property: 'og:locale', content: currentLocale.iso },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'mobile-web-app-capable', content: 'yes' }
    ],
    script: [ path ? {} : schema ],
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
        { rel: 'alternate', hreflang: l.code, href: url.replace(currentLocale.code, l.code) }
      ))
    ]
  })
}
