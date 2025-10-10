<template>
    <div>
        <button @click="open = true"
            class="px-3 py-1 rounded-xl text-theme-50 bg-theme-500 dark:text-theme-950 dark:bg-theme-50">
            {{ currentLang.toUpperCase() }}
        </button>

        <div v-if="open" class="fixed inset-0 z-[9999] flex items-center justify-center" @click="open = false">
            <div class="absolute inset-0 bg-theme-950/20 dark:bg-theme-50/20 backdrop-blur-md"></div>
            <div class="relative rounded-2xl border border-transparent backdrop-blur-md bg-theme-50/80 dark:bg-theme-950/80 shadow-xl w-56 text-center"
                @click.stop>
                <a v-for="l in availableLocales" :key="l.code" :href="replaceLang(l.code)" @click="open = false" :class="[
                    'block px-3 py-3 m-3 rounded-xl transition-colors select-none',
                    currentLang === l.code
                        ? 'bg-theme-500 text-theme-50 font-semibold'
                        : 'hover:bg-theme-500 hover:text-theme-50'
                ]">
                    {{ l.name }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const route = useRoute()

function replaceLang(newLang: string) {
    const currentPath = route.fullPath
    return currentPath.replace(/^\/[a-z]{2}(?=\/|$)/, `/${newLang}`)
}

const { locale, locales } = useI18n()
const open = ref(false)

const currentLang = computed(() => locale.value as string)

const availableLocales = computed(() => {
    return locales.value.map((l: any) => ({
        code: typeof l === 'string' ? l : l.code,
        name:
            typeof l === 'string'
                ? l.toUpperCase()
                : l.name || l.code.toUpperCase(),
    }))
})

function handleEsc(e: KeyboardEvent) {
    if (e.key === 'Escape') open.value = false
}
onMounted(() => document.addEventListener('keydown', handleEsc))
onUnmounted(() => document.removeEventListener('keydown', handleEsc))
</script>
