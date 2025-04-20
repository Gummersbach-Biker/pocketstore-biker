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
                        <input type="text" placeholder="Was ist der Name ?" v-model="query"
                            class="input w-full input-bordered placeholder:text-white bg-gray-400 input-primary">
                    </div>
                    <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
                        <label for="" class="label text-sm font-bold">Stichwort</label>
                        <select v-model="selectedTags" class="select w-full select-bordered bg-gray-400 select-primary">
                            <option value="">Bitte wählen</option>
                            <option v-for="tag in tags" :value="tag.id">{{ tag.name }}</option>
                        </select>
                    </div>
                    <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
                        <label for="" class="label text-sm font-bold">Marke</label>
                        <select v-model="selectedBrands"
                            class="select w-full select-bordered bg-gray-400 select-primary">
                            <option value="">Bitte wählen</option>
                            <option v-for="brand in brands" :value="brand.id">{{ brand.name }}</option>
                        </select>
                    </div>
                    <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
                        <label for="" class="label text-sm font-bold">Kategorie</label>
                        <select v-model="selectedCategory"
                            class="select w-full select-bordered bg-gray-400 select-primary">
                            <option value="">Bitte wählen</option>
                            <option v-for="item in categories" :value="item.slug">{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
                        <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Preis Min ({{ min
                            }})
                        </label>
                        <input id="minmax-range" v-model="min" type="range" min="0"
                            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                    </div>
                    <div class="col-span-6 md:col-span-2 bg-white px-3 py-3">
                        <label for="minmax-range" class="block mb-2 text-sm font-medium text-gray-900">Preis Max ({{ max
                            }})
                        </label>
                        <input id="minmax-range" v-model="max" type="range" min="0"
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

<script setup>
import { usePocketBase } from '~/util/pocketbase';
import { useRoute, useRouter } from 'vue-router';

const pb = usePocketBase();
const init = ref(false);
const category = ref({});
const products = ref([]);
const categories = ref([]);
const brands = ref([]);
const tags = ref([]);
const query = ref('');
const min = ref(0);
const max = ref(100);
const selectedCategory = ref('');
const selectedTags = ref('');
const selectedBrands = ref('');
const route = useRoute();
const router = useRouter();

watch(query, () => {
    load()
}, { deep: true });

watch(min, (value) => {
    if (value > max.value) {
        max.value = value
    }
    load();
});

watch(max, (value) => {
    if (value > min.value) {
        max.value = value
    }
    load();
});

watch(selectedCategory, (value) => {
    if (init.value) {
        router.push('/de/category/' + value + '.html');
    }
});

watch(selectedBrands, () => {
    load()
}, { deep: true });

watch(selectedTags, () => {
    load()
}, { deep: true });

const load = async () => {
    let filter = 'category="' + category.value.id + '"';

    if (query.value) {
        filter += '&& name ~ "%' + query.value + '%"';
    }

    if (selectedBrands.value !== '') {
        filter += '&& brands ~ "' + selectedBrands.value + '"';
    }

    if (selectedTags.value !== '') {
        filter += '&& tags ~ "' + selectedTags.value + '"';
    }

    filter += '&& price <= ' + max.value
    filter += '&& price >= ' + min.value

    products.value = (await pb.collection('products').getList(
        1, 12, {
        filter
    }
    )).items;

    products.value.map((item) => {
        if (item.price < min.value) {
            min.value = item.price;
        }

        if (item.price > max.value) {
            max.value = item.price;
        }
    });
}

onMounted(async () => {
    category.value = await pb.collection('categories').getFirstListItem('slug="' + route.params.slug.replace('.html', '') + '"');
    selectedCategory.value = category.value.slug;
    categories.value = await pb.collection('categories').getFullList(25);

    categories.value.sort((a, b) => a.name.localeCompare(b.name));
    brands.value = await pb.collection('product_brands').getFullList(25);
    tags.value = await pb.collection('product_tags').getFullList(25);
    load();
    init.value = true;
});

</script>