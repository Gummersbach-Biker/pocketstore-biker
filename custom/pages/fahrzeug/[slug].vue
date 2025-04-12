<template>
    Hallo Welt
</template>

<script setup>
import PocketBase from 'pocketbase';
import { usePocketbaseStore } from '~/stores/pocketbase';
import { useRoute, useRouter } from 'vue-router';

const store = usePocketbaseStore();
const { url } = storeToRefs(store);
const pb = new PocketBase(url.value);

const products = ref([]);
const query = ref('');
const route = useRoute();
const router = useRouter();
</script>