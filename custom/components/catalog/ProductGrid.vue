<template>
  <div v-for="product in products" :key="product.id" class="col-span-6 md:col-span-2 py-3">
    <CatalogProductCard :identifier="product" />
  </div>
</template>

<script setup>
import { usePocketbase } from "~/utils/pocketbase";

const { identifier } = defineProps({
  identifier: { type: String, required: true },
});

const pb = usePocketbase();
const category = ref({});
const products = ref([]);

onMounted(async () => {
  category.value = await pb
    .collection("categories")
    .getFirstListItem('slug="' + identifier + '"',{expand: 'products'});
  products.value = category.value.products; 
});
</script>
