<template>
	<div
		class="font-vazirmatn min-h-screen flex flex-col bg-gradient-to-b from-primary-50/50 via-theme-50 to-theme-200/50 text-theme-950 dark:from-theme-950/20 dark:via-theme-800/50 dark:to-theme-950/20 dark:text-theme-50 transition-colors duration-500">
		<div class="mx-auto w-full flex flex-col">
			<Header v-if="header" />
			<main class="flex-grow flex flex-col relative z-10">
				<AnimatedBackground :count="animatedBackground" />
				<slot />
			</main>
			<Footer v-if="footer" />
		</div>
	</div>
</template>

<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import AnimatedBackground from '@/components/ui/AnimatedBackground.vue'

const props = defineProps({
	header: {
		type: Boolean,
		default: true
	},
	footer: {
		type: Boolean,
		default: true
	},
	animatedBackground: {
		type: Number,
		default: 4
	}
})

const route = useRoute()
const animatedBackground =
	computed(() => route.meta.animatedBackground ?? props.animatedBackground)
</script>
