<template>
  <div v-for="product in products" :key="product.id" class="col-span-6 md:col-span-2 py-3">
    <CatalogProductCard :identifier="product" />
  </div>
</template>

<script setup>
import PocketBase from "pocketbase";
import { usePocketbaseStore } from "~/stores/pocketbase";

const { identifier } = defineProps({
  identifier: { type: String, required: true },
});

const store = usePocketbaseStore();
const { url } = storeToRefs(store);
const pb = new PocketBase(url.value);
const category = ref({});
const products = ref([]);

onMounted(async () => {
  category.value = await pb
    .collection("categories")
    .getFirstListItem('slug="' + identifier + '"',{expand: 'products'});
  products.value = category.value.products; 
});
</script>
