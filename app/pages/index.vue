<template>
    <Hero />
    <WhyUs />
    <Services />
    <Technologies />
    <Features />
    <Stats />
    <Pricing />
    <Steps />
    <Experties />
    <Tools />
    <FAQ />
</template>

<script setup lang="ts">
import Hero from '@/components/landing/Hero.vue';
import WhyUs from '@/components/landing/WhyUs.vue';
import Services from '@/components/landing/Services.vue';
import Technologies from '@/components/landing/Technologies.vue';
import Features from '@/components/landing/Features.vue';
import Stats from '@/components/landing/Stats.vue';
import Pricing from '@/components/landing/Pricing.vue';
import Steps from '@/components/landing/Steps.vue';
import Experties from '@/components/landing/Experties.vue';
import Tools from '@/components/landing/Tools.vue';
import FAQ from '@/components/landing/FAQ.vue';

const { t } = useI18n()
useSeo({ title: t('landing.title'), description: t('landing.desc') })
</script>
