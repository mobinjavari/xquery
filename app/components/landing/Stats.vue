<template>
    <ContentSection :translation="`landing.${id}`" pattern>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div v-for="stat in stats" :key="rt(stat.label)" ref="statRefs"
                class="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt class="text-base leading-7 text-theme-700 dark:text-theme-200">
                    {{ rt(stat.label) }}
                </dt>
                <dd class="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                    <span>{{ rt(stat.start) }}</span><span>{{ rt(stat.suffix) }}</span>
                </dd>
            </div>
        </dl>
    </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue'
import { reactive, ref, onMounted, nextTick } from 'vue'

const id = 'stats'
const { tm, rt } = useI18n()
const stats = reactive(tm(`landing.${id}.items`))
const statRefs = ref([])

function startCounter(stat) {
    const duration = 2000
    const frameRate = 30
    const totalFrames = Math.round((duration / 1000) * frameRate)
    let frame = 0

    const counter = setInterval(() => {
        frame++
        stat.start = Math.round((stat.end / totalFrames) * frame)
        if (frame >= totalFrames) {
            stat.start = stat.end
            clearInterval(counter)
        }
    }, duration / totalFrames)
}

onMounted(() => {
    nextTick(() => {
        statRefs.value.forEach((el, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        startCounter(stats[index])
                        observer.disconnect()
                    }
                },
                { threshold: 0.5 }
            )
            if (el) observer.observe(el)
        })
    })
})
</script>
