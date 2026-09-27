<template>
	<ContentSection :translation="`landing.${id}`" pattern>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<div v-for="(step, index) in steps" :key="index" class="relative flex flex-col items-center group">
				<div
					class="z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full shadow-md transition-all duration-500 hover:scale-110 bg-theme-800 dark:bg-theme-600 text-theme-200 dark:text-theme-50">
					<span class="text-2xl font-bold">{{ index + 1 }}</span>
				</div>
				<h3 class="text-lg font-semibold text-theme-900 dark:text-theme-50">
					{{ rt(step.title) }}
				</h3>
				<p class="mt-2 text-center text-sm text-theme-700 dark:text-theme-300">
					{{ rt(step.desc) }}
				</p>
				<div
v-if="index !== steps.length - 1"
					class="z-5 absolute top-8 rtl:right-1/2 ltr:left-1/2 hidden h-0.5 w-full lg:block rtl:bg-gradient-to-l ltr:bg-gradient-to-r from-theme-50/0 via-theme-400 to-theme-400 dark:from-theme-50/0 dark:via-theme-200/50 dark:to-theme-200"/>
			</div>
		</div>
	</ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'

const id = 'steps'
const { tm, rt } = useI18n()
const steps = tm(`landing.${id}.items`)
</script>