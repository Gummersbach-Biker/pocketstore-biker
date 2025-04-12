<template>
  <div v-if="product" class="card shadow-xl bg-primary border-4 border-white">
    <figure>
      <NuxtLink :to="'/' + locale + '/product/' + product.slug + '.html'">
        <img src="/product-motorrad.jpg" alt="Shoes">
      </NuxtLink>
    </figure>
    <div class="card-body">
      <h2 class="card-title text-white">{{ product.name }}</h2>
      <p class="text-ellipsis text-white line-clamp-2">{{ product.description }}</p>
      <div class="card-actions join gap-0 justify-end">
        <a v-if="product.price" :href="'/' + locale + '/product/' + product.slug + '.html'"
          class="btn btn-secondary join-item">
          {{ product.price.toFixed(2) }} €
        </a>
        <CatalogAddToCart :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import PocketBase from 'pocketbase';
import { usePocketbaseStore } from '~/stores/pocketbase';
import { watch } from 'vue'

const i18n = useI18n();
const locale = i18n.locale;

const props = defineProps({
  identifier: { type: String, required: true }
});

const store = usePocketbaseStore();
const { url } = storeToRefs(store);
const pb = new PocketBase(url.value);
const product = ref({});

const load = async () => {
  product.value = await pb.collection('products').getOne(props.identifier);
}

watch(
  () => props.identifier,
  (newValue, oldValue) => {
    load();
  },
  { immediate: true } // Trigger immediately on mount
);

</script>