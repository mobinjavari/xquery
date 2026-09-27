import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window === 'undefined') return

  const updateDirection = (lang: string) => {
    const { locales } = useI18n()
    const locale = locales.value.find(l => l.code === lang)

    document.documentElement.setAttribute('dir', locale?.dir ?? 'ltr')
    document.documentElement.setAttribute('lang', lang)
  }

  nuxtApp.vueApp.mixin({
    mounted() {
      const { locale } = useI18n()
      
      updateDirection(locale.value)

      watch(() => locale.value, (newLocale) => {
        updateDirection(newLocale)
      })
    }
  })
})
