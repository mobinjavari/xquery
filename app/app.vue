<template>
	<LoadingOverlay v-if="loading" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
import LoadingOverlay from '@/components/ui/LoadingOverlay.vue';
import { useLoading } from '@/composables/useLoading';

const { loading } = useLoading();

setTimeout(() => loading.value = false, 500);
</script>
