<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { createError } from '#app'
import AnimatedDivider from '@/components/ui/AnimatedDivider.vue'

definePageMeta({
    layout: 'default',
    animatedBackground: 1
})

const route = useRoute()
const param = (route.params.component || '').toString().toLocaleLowerCase()

const componentMap: Record<string, string> = {
    whyus: 'WhyUs',
    services: 'Services',
    technologies: 'Technologies',
    features: 'Features',
    stats: 'Stats',
    pricing: 'Pricing',
    steps: 'Steps',
    experties: 'Experties',
    tools: 'Tools',
    faq: 'FAQ',
}

const { t } = useI18n()
useSeo({
    title: t(`landing.${param}.title`),
    description: t(`landing.${param}.desc`)
})

function getComponent(name: string) {
    const component = componentMap[name.toLowerCase()]
    if (!component) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page Not Found'
        })
    }

    return defineAsyncComponent({
        loader: () => import(`@/components/landing/${component}.vue`),
        delay: 200,
    })
}

const DynamicComponent = getComponent(param)
</script>

<template>
    <AnimatedDivider />
    <component :is="DynamicComponent" />
</template>
