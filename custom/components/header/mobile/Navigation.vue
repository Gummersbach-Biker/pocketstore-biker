<template>
    <section class="mobile-nav md:hidden">
        <nav class="mt-4 sm:mt-4 mr-2">
            <section class="times" v-if="open" @click="open = !open">
                <Fa :icon="faTimes" color="white" size="2x" />
            </section>
            <section class="bars" v-else @click="open = !open">
                <Fa :icon="faBars" color="white" size="2x" />
            </section>
        </nav>
        <dialog id="my_modal_1" class="modal modal-top" :class="{ 'hidden': !open }" :open="open">
            <div class="modal-box">
                <h3 class="text-lg font-bold mb-3">Navigation</h3>
                <section class="grid grid-cols-6 gap-3">
                    <div class="col-span-3">
                        <a href="/de/fahrzeuge" class="btn btn-primary btn-block">Fahrzeuge mieten</a>
                    </div>
                    <div v-for="category in categories" class="col-span-3">
                        <a :href="'/de/category/' + category.slug + '.html'" class="btn btn-neutral btn-block">{{
                            category.name }}</a>
                    </div>
                </section>
                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn" @click="open = !open">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { faMotorcycle, faHeart, faUser, faTimes, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { usePocketbase } from '~/util/pocketbase'

const categories = ref([]);
const pb = usePocketbase();

const open = ref(false);

onMounted(async () => {
    categories.value = await pb.collection('categories').getFullList(25);
});

</script>