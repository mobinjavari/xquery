<template>
    <ContentSection :translation="`landing.${id}`">
        <div class="m-auto w-full max-w-2xl">
            <div v-for="(faq, index) in tm(`landing.${id}.items`)" :key="index" class="group">
                <button
class="flex w-full items-center justify-between py-6 text-right"
                    @click="selected = selected === index ? null : index">
                    <span class="text-lg font-medium">
                        {{ rt(faq.question) }}
                    </span>
                    <ArrowDownIcon
                        :class="['size-5 transition-transform duration-500', { 'rotate-180': selected === index }]" />
                </button>
                <transition name="accordion" mode="out-in">
                    <div v-show="selected === index" class="pb-6 text-base text-theme-600 dark:text-theme-200">
                        {{ rt(faq.answer) }}
                    </div>
                </transition>
            </div>
        </div>
    </ContentSection>
</template>

<script setup>
import { ref } from 'vue'
import ContentSection from '@/components/ui/ContentSection.vue'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'

const id = 'faq'
const selected = ref(null);
const { tm, rt } = useI18n()
</script>