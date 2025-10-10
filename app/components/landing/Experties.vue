<template>
    <ContentSection :translation="`landing.${id}`">
        <dl class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="item in tm(`landing.${id}.items`)" :key="rt(item.title)"
                class="group relative overflow-hidden rounded-3xl bg-theme-50/40 dark:bg-theme-900 border border-theme-200/50 dark:border-theme-800 p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div class="relative z-10">
                    <dt class="flex items-center gap-x-4 mb-6">
                        <div
                            class="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-theme-200 dark:bg-theme-500/50">
                            <component :is="cs(rt(item.icon))" class="size-7 text-theme-950 dark:text-theme-50" />
                        </div>
                        <h3 class="text-lg font-semibold text-theme-950 dark:text-theme-50">
                            {{ rt(item.title) }}
                        </h3>
                    </dt>
                    <dd class="space-y-6">
                        <div class="flex flex-wrap items-center gap-2">
                            <span v-for="skill in item.skills" :key="rt(skill)"
                                class="inline-flex items-center justify-center rounded-md px-2.5 py-1 text-sm font-medium bg-theme-100 dark:bg-theme-800 text-theme-800 dark:text-theme-200 transition-colors duration-300">
                                {{ rt(skill) }}
                            </span>
                        </div>
                        <p class="text-sm text-theme-700 dark:text-theme-300">{{ rt(item.desc) }}</p>
                    </dd>
                </div>
            </div>
        </dl>
    </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'

const id = 'experties'
const { cs } = useIcons()
const { tm, rt } = useI18n()
</script>