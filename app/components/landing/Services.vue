<template>
	<ContentSection :translation="`landing.${id}`">
		<dl class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div
v-for="service in tm(`landing.${id}.items`)" :key="rt(service.title)"
				class="p-8 flex flex-col overflow-hidden rounded-3xl hover:scale-[1.01] transition-all duration-300 ease-in-out bg-primary-50/40 dark:bg-primary-950/20 border border-primary-200 dark:border-primary-600/20 shadow-xl shadow-primary-300 hover:shadow-primary-400 dark:shadow-primary-950/10 dark:hover:shadow-primary-950/30">
				<dt class="flex items-center gap-x-4">
					<div
						class="size-14 flex items-center justify-center rounded-2xl transition-colors duration-300 bg-theme-100/50 text-theme-900 dark:bg-theme-50/10 dark:text-primary-50">
						<component :is="resolveIcon(rt(service.icon))" class="size-7" />
					</div>
					<h3 class="text-lg font-semibold leading-8 tracking-tight text-theme-900 dark:text-theme-50">
						{{ rt(service.title) }}
					</h3>
				</dt>
				<dd class="mt-6">
					<p class="text-base leading-7 text-theme-600 dark:text-theme-100">
						{{ rt(service.desc) }}
					</p>
				</dd>
			</div>
		</dl>
	</ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'

const id = 'services'
const { tm, rt } = useI18n()
const { resolveIcon } = useIcons()
</script>