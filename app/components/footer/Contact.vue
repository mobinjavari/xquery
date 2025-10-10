<template>
    <div>
        <h3 class="text-lg font-semibold">
            {{ t('footer.contact.text') }}
        </h3>
        <ul class="mt-6 space-y-4">
            <li v-for="(item, id) in tm('footer.contact.items')" :key="id" class="flex items-center gap-x-3 text-base">
                <a :href="$localePath(rt(item.to))" target="_blank"
                    class="hover:text-theme-600 dark:hover:text-theme-400 transition-colors duration-300">
                    <component :is="cs(rt(item.icon))" class="size-5 inline-block mx-2" />
                    {{ rt(item.text) }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const { cs } = useIcons()
const { t, tm, rt } = useI18n()
</script>
