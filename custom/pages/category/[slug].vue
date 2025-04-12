<script setup>
import PocketBase from 'pocketbase';
import { usePocketbaseStore } from '~/stores/pocketbase';
import { useBreadcrumbStore } from '~/stores/breadcrumb';
import { useRoute } from 'vue-router';

const store = usePocketbaseStore();
const storeBreadcrumb = useBreadcrumbStore();
const { url } = storeToRefs(store);
const pb = new PocketBase(url.value);
const category = ref({});
const products = ref([]);
const categories = ref([]);
const query = ref('');
const min = ref(0);
const max = ref(100);
const route = useRoute();

watch(query, () => {
  load()
}, { deep: true });


const load = async () => {
  let filter = 'category="' + category.value.id + '"';

  if (query.value) {
    filter += '&& name ~ "%' + query.value + '%"';
  }

  products.value = (await pb.collection('products').getList(
    1, 12, {
    filter
  }
  )).items;
}

onMounted(async () => {
  category.value = await pb.collection('categories').getFirstListItem('slug="' + route.params.slug.replace('.html', '') + '"');
  categories.value = await pb.collection('categories').getFullList(25);
  load();
  storeBreadcrumb.clear();
  storeBreadcrumb.add({
    label: 'Category View',
    link: 'category/bowling',
    id: 'category-view'
  });
});

</script>

<template>
  <section class="page">
    <div class="mx-auto max-w-6xl grid grid-cols-6 gap-3">
      <div class="col-span-6">
        <h2 class="font-bold text-lg px-3 py-3">{{ category.name }} </h2>
      </div>
      <div class="col-span-6">
        <section class="grid grid-cols-6 gap-3">
          <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
            <label for="" class="label text-sm font-bold">Name</label>
            <input type="text" v-model="query" class="input w-full input-bordered bg-gray-400 input-primary lg:w-auto">
          </div>
          <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
            <label for="" class="label text-sm font-bold">Category</label>
            <select class="select w-full select-bordered bg-gray-400 select-primary lg:w-auto">
              <option v-for="item in categories" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
          <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
            <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Min ({{ min }})
            </label>
            <input id="minmax-range" v-model="min" type="range" min="0" max="100"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
          </div>
          <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
            <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Max ({{ max }})
            </label>
            <input id="minmax-range" v-model="max" type="range" min="0" max="100"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
          </div>
        </section>
      </div>
      <template v-if="products.length > 0">
        <div v-for="product in products" class="col-span-6 md:col-span-2 py-3">
          <CatalogProductCard :identifier="product.id" />
        </div>
      </template>
      <div v-else class="col-span-6 mb-3">
        <p class="alert alert-warning">Es gibt noch keine Produkte in der Kategorie.</p>
      </div>
    </div>
  </section>
</template>