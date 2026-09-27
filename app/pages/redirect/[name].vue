<template>
    <div
        class="min-h-screen flex items-center justify-center bg-gradient-to-br from-theme-100 via-theme-200 to-theme-300 dark:from-theme-950 dark:via-theme-900 dark:to-theme-950 text-theme-900 dark:text-theme-100 transition-colors duration-500 p-4 sm:p-6 md:p-8">

        <div
v-if="redirect"
            class="relative w-full max-w-md sm:max-w-lg md:max-w-xl p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-theme-200/40 dark:border-theme-800/60 bg-white/40 dark:bg-theme-900/60 shadow-2xl transition-colors duration-500">

            <div
                class="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 bg-theme-600 dark:bg-theme-500 text-theme-50 w-20 h-20 flex items-center justify-center rounded-full shadow-lg">
                <component :is="resolveIcon(rt(redirect.icon))" class="w-12 h-12" />
            </div>

            <h1
                class="text-2xl sm:text-3xl text-center font-extrabold mb-4 sm:mb-6 mt-8 sm:mt-4 break-words leading-tight">
                {{ rt(redirect.title) }}
            </h1>

            <p
                class="text-center text-theme-700 dark:text-theme-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg px-2 sm:px-0">
                {{ rt(redirect.desc) }}
            </p>

            <ul
v-if="redirect.items"
                class="mb-6 sm:mb-8 space-y-1 sm:space-y-2 text-theme-800/80 dark:text-theme-200 px-4 sm:px-0">
                <li
v-for="(item, index) in redirect.items" :key="index"
                    class="flex items-start gap-2 text-sm sm:text-base">
                    <span class="text-theme-600 dark:text-theme-400 mt-[2px]">•</span>
                    <span class="flex-1 break-words">{{ rt(item) }}</span>
                </li>
            </ul>

            <div class="text-center">
                <Button
class="rounded-2xl bg-theme-600 text-theme-50 font-semibold hover:bg-theme-700 dark:bg-theme-500 dark:hover:bg-theme-400 shadow-md hover:shadow-lg transition-colors duration-300"
                    @click="openUrl()">
                    {{ rt(redirect.open) }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Button from '@/components/ui/Button.vue'

definePageMeta({ layout: false })

const { tm, rt } = useI18n()
const redirects = tm('redirects.items')
const redirect = ref(null)
const { resolveIcon } = useIcons()

const openUrl = () => {
    const url = rt(redirect.value.url).replace('[.]', '@')
    const newWindow = window.open(url, '_blank')
    if (newWindow) {
        setTimeout(() => {
            window.history.back()
        }, 100)
    } else {
        alert('Popup blocked! Please allow popups for this site.')
    }
}

onMounted(() => {
    const route = useRoute()
    const id = route.params.name
    redirect.value = redirects.find(r => rt(r.id) === id)

    if (!redirect.value) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page Not Found'
        })
    }

    useSeo({
        title: rt(redirect.value.title),
        description: rt(redirect.value.desc),
    })
})
</script>
