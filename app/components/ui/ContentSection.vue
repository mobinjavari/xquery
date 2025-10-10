<template>
    <section :style="{ minHeight: offset ? `calc(100vh - ${offset}vh)` : '100vh' }" :class="pattern ? 'pattern-x' : ''"
        class="w-full grid place-items-center py-20 px-5">
        <div class="w-full mx-auto max-w-7xl">
            <template v-if="translation">
                <div class="w-full mx-auto max-w-2xl text-center">
                    <span v-if="te(`${translation}.subject`)"
                        class="text-sm sm:text-md m-6 px-4 py-2 inline-block rounded-2xl duration-500 hover:scale-95 text-theme-50 bg-theme-600 dark:bg-theme-700">
                        {{ t(`${translation}.subject`) }}
                    </span>
                    <h2
                        class="text-2xl sm:text-3xl md:text-4xl leading-normal font-bold tracking-tight text-theme-950 dark:text-theme-50">
                        {{ t(`${translation}.title`) }}
                    </h2>
                    <p class="mt-6 text-lg leading-8 text-theme-800 dark:text-theme-100">
                        {{ t(`${translation}.desc`) }}
                    </p>
                </div>
                <div class="w-full px-6 mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-6xl">
                    <slot />
                </div>
            </template>
            <template v-else>
                <slot />
            </template>
        </div>
    </section>
    <AnimatedDivider />
</template>

<script setup>
import AnimatedDivider from './AnimatedDivider.vue';

const { t, te } = useI18n()
const props = defineProps({
    translation: String,
    offset: {
        type: Number,
        default: 0,
    },
    pattern: Boolean
})
</script>
