<template>
    <div class="col-span-1 lg:col-span-2">
        <a :href="$localePath('/')">
            <LogoIcon
                class="h-12 w-auto text-theme-950 dark:text-theme-50 hover:opacity-80 transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-3" />
        </a>
        <p class="mt-6 text-base leading-7">
            {{ t('footer.desc') }}
        </p>
    </div>
</template>

<script setup>
import LogoIcon from '@/components/icons/LogoIcon.vue';

const { t } = useI18n()
</script>