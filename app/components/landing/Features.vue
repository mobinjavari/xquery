<template>
	<ContentSection :translation="`landing.${id}`">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div v-for="feature in tm(`landing.${id}.items`)" :key="rt(feature.title)" class="group">
				<dl class="text-center flex flex-col items-center justify-center rounded-2xl p-8">
					<dt>
						<div class="relative flex items-center justify-center">
							<div
class="relative z-10 p-3 rounded-full size-16 flex items-center justify-center 
										bg-theme-200/50 border border-theme-500/50 dark:bg-theme-50/80 dark:border-none">
								<component
:is="resolveIcon(rt(feature.icon))"
									class="size-8 text-theme-900 dark:text-theme-900" />
							</div>
							<span
v-for="n in 2" :key="n" :style="{ animationDelay: (n - 1) + 's' }"
								class="absolute z-5 top-1/2 left-1/2 size-20 rounded-full bg-theme-500/20 -translate-x-1/2 -translate-y-1/2 animate-ping-slow"/>
						</div>

						<h3 class="text-lg mt-10 font-semibold">
							{{ rt(feature.title) }}
						</h3>
					</dt>
					<dd class="mt-2 px-10">
						<p class="text-sm text-theme-700 dark:text-theme-200">
							{{ rt(feature.desc) }}
						</p>
					</dd>
				</dl>
			</div>
		</div>
	</ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'

const id = 'features'
const { resolveIcon } = useIcons()
const { tm, rt } = useI18n()
</script>

<style scoped>
@keyframes ping-slow {
	0% {
		transform: translate(-50%, -50%) scale(0.8);
		opacity: 1;
	}

	80% {
		transform: translate(-50%, -50%) scale(1.5);
		opacity: 0;
	}

	100% {
		opacity: 0;
	}
}

.animate-ping-slow {
	animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}
</style>