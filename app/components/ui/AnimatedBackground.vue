<template>
    <div v-for="(shape, i) in shapes" :key="i" v-if="i < count"
        class="absolute inset-x-0 top-0 transform-gpu overflow-hidden blur-3xl -z-10 pointer-events-none"
        :style="{ top: shape.top }" aria-hidden="true">
        <div class="relative -translate-x-1/2 aspect-[1155/678] opacity-50 dark:opacity-30"
            :class="[shape.sideClass, shape.widthClass, shape.backgroundClass, shape.animate]"
            :style="{ clipPath: shape.clipPath }"></div>
    </div>
</template>

<style lang="scss" scoped>
@keyframes float {
    0% {
        transform: translateY(0) translateX(-50%) scale(1);
    }

    50% {
        transform: translateY(-200px) translateX(-50%) scale(1.25);
    }

    100% {
        transform: translateY(0) translateX(-50%) scale(1);
    }
}

@keyframes float-reverse {
    0% {
        transform: translateY(0) translateX(-50%) scale(1);
    }

    50% {
        transform: translateY(200px) translateX(-50%) scale(1.25);
    }

    100% {
        transform: translateY(0) translateX(-50%) scale(1);
    }
}

.animate-float {
    animation: float 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;

    &-reverse {
        animation: float-reverse 18s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
}
</style>

<script setup>
defineProps({
    count: {
        type: Number,
        default: 4
    }
})

const defaultClipPath = `polygon(
  74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,
  72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,
  27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%
)`;

const shapes = [
    {
        top: '0',
        sideClass: 'right-[calc(50%-11rem)] sm:right-[calc(50%-30rem)]',
        widthClass: 'w-[36.125rem] sm:w-[72.1875rem]',
        backgroundClass: 'bg-theme-900 dark:bg-theme-400',
        animate: 'animate-float',
        clipPath: defaultClipPath
    },
    {
        top: '33%',
        sideClass: 'left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]',
        widthClass: 'w-[36.125rem] sm:w-[72.1875rem]',
        backgroundClass: 'bg-theme-900 dark:bg-theme-300',
        animate: 'animate-float-reverse',
        clipPath: defaultClipPath
    },
    {
        top: '66%',
        sideClass: 'right-[calc(50%-3rem)]',
        widthClass: 'w-[36.125rem] sm:w-[72.1875rem]',
        backgroundClass: 'bg-theme-900 dark:bg-theme-300',
        animate: 'animate-float-reverse',
        clipPath: defaultClipPath
    },
    {
        top: '88%',
        sideClass: 'left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]',
        widthClass: 'w-[36.125rem] sm:w-[72.1875rem]',
        backgroundClass: 'bg-theme-900 dark:bg-theme-300',
        animate: 'animate-float-reverse',
        clipPath: defaultClipPath
    }
]
</script>
