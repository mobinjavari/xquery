<template>
  <ContentSection :translation="`landing.${id}`">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="plan in tm(`landing.${id}.items`)" :key="rt(plan.name)" :class="[
        'relative p-8 overflow-hidden rounded-3xl flex flex-col transition-all duration-300',
        plan.isPrimary
          ? 'bg-gradient-to-tr from-theme-600 to-theme-900 dark:from-theme-500 dark:to-theme-950 text-white shadow-lg scale-105'
          : 'bg-theme-100/50 dark:bg-theme-900 border border-theme-400/50 dark:border-theme-700'
      ]">
        <div class="flex items-center gap-x-4">
          <div :class="[
            'rounded-xl p-3',
            plan.isPrimary
              ? 'bg-theme-50/20 text-theme-50'
              : 'bg-theme-700 dark:bg-theme-400 text-theme-50'
          ]">
            <component :is="cs(rt(plan.icon))" class="size-6" />
          </div>
          <h3 :class="[
            'text-xl font-semibold',
            plan.isPrimary ? 'text-white' : 'text-theme-900 dark:text-theme-100'
          ]">
            {{ rt(plan.name) }}
          </h3>
          <div v-if="plan.isPrimary"
            class="absolute top-10 rtl:left-8 ltr:right-8 rounded-xl bg-theme-50/20 px-3 py-2 text-xs font-semibold text-theme-50 backdrop-blur-sm">
            {{ t(`landing.${id}.suggested`) }}
          </div>
        </div>
        <p class="mt-4 text-sm" :class="plan.isPrimary ? 'text-theme-50/90' : 'text-theme-600 dark:text-theme-300'">
          {{ rt(plan.desc) }}
        </p>
        <div class="mt-6 flex items-baseline gap-x-1">
          <span class="text-4xl font-bold tracking-tight">{{ rt(plan.price) }}</span>
          <span class="text-sm font-semibold">/ {{ rt(plan.cycle) }}</span>
        </div>
        <ul class="mt-8 space-y-3 text-sm">
          <li v-for="feature in plan.features" :key="rt(feature)"
            :class="plan.isPrimary ? 'text-theme-50' : 'text-theme-700 dark:text-theme-200'"
            class="flex items-center gap-x-2">
            <CheckmarkIcon class="size-4" />
            <span>
              {{ rt(feature) }}
            </span>
          </li>
        </ul>
        <div v-if="plan.orderLink" class="mt-10 flex items-center gap-x-4">
          <a :href="rt(plan.orderLink).startsWith('http') ? rt(plan.orderLink) : $localePath(rt(plan.orderLink))"
            :class="[
              'flex-1 block rounded-xl px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-300',
              plan.isPrimary
                ? 'bg-theme-50 text-theme-700 hover:bg-theme-100'
                : 'bg-theme-600 text-theme-50 hover:bg-theme-700 dark:hover:bg-theme-500'
            ]">
            {{ t(`landing.${id}.order`) }} {{ rt(plan.name) }}
          </a>
        </div>
      </div>
    </div>
  </ContentSection>
</template>

<script setup>
import ContentSection from '@/components/ui/ContentSection.vue';
import CheckmarkIcon from '@/components/icons/CheckmarkIcon.vue';

const id = 'pricing'
const { cs } = useIcons();
const { t, tm, rt } = useI18n();
</script>