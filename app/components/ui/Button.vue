<template>
    <component
:is="to ? 'a' : 'button'" :href="to.toString().startsWith('/') ? $localePath(to) : to"
        :target="`_${target}`"
        class="group relative inline-flex items-center gap-x-2 px-6 py-2.5 rounded-2xl text-base font-medium leading-7 overflow-hidden border border-transparent transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">

        <span v-if="shine" class="absolute inset-0 pointer-events-none overflow-hidden">
            <span
                class="absolute ltr:-left-[100%] rtl:-right-[100%] top-0 w-1/2 h-full bg-white opacity-20 transform -skew-x-12 ltr:group-hover:translate-x-[600%] rtl:group-hover:-translate-x-[600%] transition-transform duration-700 ease-in-out"/>
        </span>

        <span class="relative flex items-center gap-x-2 z-10">
            <component :is="icon" v-if="icon" class="size-5" />
            <slot />
        </span>
    </component>
</template>

<script setup>
defineProps({
    icon: {
        type: [Object, String],
        default: null
    },
    to: {
        type: String,
        default: ''
    },
    shine: Boolean,
    target: {
        type: String,
        default: 'self'
    }
})
</script>