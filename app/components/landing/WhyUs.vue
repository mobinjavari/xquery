<template>
    <ContentSection :translation="`landing.${id}`" pattern>
        <dl class="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-3">
            <div v-for="feature in tm(`landing.${id}.items`)" :key="rt(feature.title)" class="flex flex-col group">
                <dt class="text-lg font-semibold leading-7 text-theme-900 dark:text-theme-100">
                    <div
                        class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 bg-theme-700 text-theme-50 dark:bg-theme-500 dark:text-theme-50">
                        <component :is="cs(rt(feature.icon))" class="size-7" />
                    </div>
                    {{ rt(feature.title) }}
                </dt>
                <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-theme-700 dark:text-theme-200">
                    <p class="flex-auto">{{ rt(feature.desc) }}</p>
                </dd>
            </div>
        </dl>
    </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'
import useIcons from '@/composables/useIcons'

const id = 'whyus'
const { tm, rt } = useI18n()
const { cs } = useIcons()
</script>