<template>
	<Layout :header="false" :footer="false" :animatedBackground="1">
		<ContentSection pattern :divider="false">
			<div class=" flex-grow flex items-center justify-center">
				<div
					class="relative w-full max-w-2xl bg-theme-900/10 dark:bg-theme-500/5 rounded-3xl p-8 backdrop-blur-md border border-theme-900/5 dark:border-theme-400/10 shadow-2xl shadow-black/10 dark:shadow-white/5 overflow-hidden">
					<div class="flex flex-col items-center text-center">
						<div class="relative mb-8 group">
							<LogoIcon
								class="h-20 w-auto text-theme-800 dark:text-theme-200 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:text-theme-600 dark:hover:text-theme-300" />
						</div>
						<h1 class="text-5xl font-black mb-3">
							{{ error?.statusCode }}</h1>

						<h2 class="text-2xl font-semibold mb-10 text-theme-900 dark:text-theme-300"
							x-text="error.title">
							{{ error?.statusMessage }}
						</h2>
						<div class="flex flex-col sm:flex-row gap-4">
							<Button to="/" :icon="HomeIcon" shaild
								class="text-theme-50 bg-theme-900 dark:bg-theme-500/50">
								Back to home
							</Button>
						</div>
					</div>
				</div>
			</div>
		</ContentSection>
	</Layout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'
import ContentSection from '@/components/ui/ContentSection.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import HomeIcon from '@/components/icons/HomeIcon.vue'
import Button from '@/components/ui/Button.vue'
import Layout from '@/layouts/default.vue'

const props = defineProps({
	error: Object as () => NuxtError
})
</script>