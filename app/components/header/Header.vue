<template>
    <header class="w-full mx-auto max-w-7xl">
        <nav class="flex items-center justify-between p-6">
            <div class="flex lg:flex-1">
                <a :href="$localePath('/')" class="-m-1.5 p-1.5">
                    <LogoIcon
                        class="h-12 w-auto text-theme-800 dark:text-theme-200 transform transition duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:text-theme-600 dark:hover:text-theme-300" />
                </a>
            </div>
            <div class="lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
                <Button
:to="t('header.login.to')" :icon="resolveIcon(t('header.login.icon'))" shine
                    class="bg-theme-600 text-theme-50 dark:bg-theme-500">
                    {{ t('header.login.text') }}
                </Button>
            </div>
        </nav>
    </header>
</template>

<script setup>
import Button from '@/components/ui/Button.vue';
import LogoIcon from '@/components/icons/LogoIcon.vue'

const { t } = useI18n()
const { resolveIcon } = useIcons()
</script>
