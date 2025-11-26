<template>
    <ContentSection :offset="13">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-5xl sm:text-6xl font-bold tracking-tight">
                {{ t(`landing.${id}.title`) }}
            </h1>
            <p class="mt-8 text-lg sm:text-xl leading-8 md:leading-9 text-theme-800 dark:text-theme-100">
                {{ t(`landing.${id}.desc`) }}
            </p>
            <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button v-for="btn in tm('landing.hero.buttons')" :to="rt(btn.to)" :key="rt(btn.text)"
                    :shaild="btn.isPrimary" :icon="cs(rt(btn.icon))"
                    :class="btn.isPrimary ? 'bg-theme-900' : 'bg-theme-700'" class="text-theme-50">
                    {{ rt(btn.text) }}
                </Button>
            </div>
        </div>
    </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'
import Button from '@/components/ui/Button.vue'

const id = 'hero'
const { cs } = useIcons()
const { t, tm, rt } = useI18n()
</script>