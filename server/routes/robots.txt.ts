export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig().public
  const isProduction = process.env.NODE_ENV === 'production'

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  if (!isProduction) {
    return 'User-agent: *\nDisallow: /'
  }

  return `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml`
})
