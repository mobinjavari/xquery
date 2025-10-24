<template>
    <div>
        <h3 class="text-lg font-semibold">
            {{ t('footer.links.text') }}
        </h3>
        <ul class="mt-6 space-y-4 list-disc list-inside">
            <li v-for="(item, id) in tm('footer.links.items')" :key="id"
                class="hover:text-theme-600 dark:hover:text-theme-400 transition-colors duration-300">
                <a :href="$localePath(rt(item.to))" class="text-base">
                    {{ rt(item.text) }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { t, tm, rt } = useI18n()
</script>