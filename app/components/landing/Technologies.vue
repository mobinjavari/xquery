<template>
	<ContentSection :translation="`landing.${id}`" pattern>
		<dl class="grid grid-cols-2 gap-8 lg:grid-cols-4">
			<div v-for="tech in tm(`landing.${id}.items`)" :key="rt(tech.name)"
				class="flex flex-col items-center group">
				<dt
					class="flex size-20 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 bg-primary-50/50 dark:bg-theme-600 border border-theme-950/30 dark:border-none">
					<component :is="cs(rt(tech.icon))"
						class="h-10 w-10 transition-transform duration-500 group-hover:scale-125" />
				</dt>
				<dd class="mt-4">
					<p class="text-base font-medium transition-all duration-500 group-hover:scale-110">
						{{ rt(tech.name) }}
					</p>
				</dd>
			</div>
		</dl>
	</ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'
import useIcons from '@/composables/useIcons'

const id = 'technologies'
const { cs } = useIcons()
const { tm, rt } = useI18n()
</script>