<template>
    <ContentSection :translation="`landing.${id}`" pattern>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
v-for="tool in tm(`landing.${id}.items`)" :key="rt(tool.title)"
                :href="tool.to ? $localePath(rt(tool.to)) : null"
                class="group relative overflow-hidden rounded-3xl transition-all duration-500 p-8 hover:backdrop-blur-md hover:bg-theme-200/50 dark:hover:bg-theme-700/10">
                <div class="relative flex flex-col items-center gap-4">
                    <div
                        class="rounded-2xl p-4 duration-500 group-hover:scale-110 group-hover:-rotate-12 bg-gradient-to-tl from-theme-700 to-theme-500 dark:from-theme-950 dark:to-theme-800">
                        <component :is="resolveIcon(rt(tool.icon))" class="size-8 text-theme-50" />
                    </div>
                    <h3 class="text-lg font-bold">
                        {{ rt(tool.title) }}
                    </h3>
                    <p class="text-sm text-center text-theme-600 dark:text-theme-100">
                        {{ rt(tool.desc) }}
                    </p>
                    <span
                        class="absolute top-0 rtl:left-1 ltr:right-1 text-xs text-primary-500 group-hover:opacity-0 duration-300">
                        <template v-if="tool.to">{{ t(`landing.${id}.status.active`) }}</template>
                        <template v-else>{{ t(`landing.${id}.status.development`) }}</template>
                    </span>
                </div>
            </a>
        </div>
    </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'
import useIcons from '@/composables/useIcons'

const id = 'tools'
const { resolveIcon } = useIcons()
const { t, tm, rt } = useI18n()
</script>