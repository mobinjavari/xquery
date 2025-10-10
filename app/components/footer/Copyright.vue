<template>
    <div>
        <p class="text-sm">
            &copy; <span>{{ currentYear }}</span> &dash;
            {{ t('footer.copyright') }}
        </p>
    </div>
</template>

<script setup>
const { t } = useI18n()
const currentYear = new Date().getFullYear()
</script>
