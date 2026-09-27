export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig().public

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')

  return `# xQuery Team

> xQuery is a software development team providing custom programming, web design, application development, system development, automation, and maintenance services.

xQuery builds AI-driven automation and full-stack software solutions for businesses, covering web, mobile, desktop, blockchain, IoT, and Telegram bot development, along with DevOps and hosting management panels.

## Site

- [Home (Persian)](${siteUrl}/fa): Default landing page covering all services, pricing, and FAQ
- [Home (English)](${siteUrl}/en): English landing page
- [Home (Turkce)](${siteUrl}/tr): Turkish landing page
- [Pricing](${siteUrl}/fa/s/pricing): Hosting plans and pricing tiers
- [Services](${siteUrl}/fa/s/services): Overview of offered services
- [Expertise](${siteUrl}/fa/s/experties): Technical expertise areas
- [FAQ](${siteUrl}/fa/s/faq): Frequently asked questions
`
})
