<template>
    <section class="page mx-auto max-w-6xl my-6">
        <section class="grid grid-cols-6 gap-3">
            <div v-for="vehicle in vehicles" class="col-span-6 sm:col-span-3 md:col-span-2">
                <FahrzeugCard :identifier="vehicle.id" :vehicle="vehicle" />
            </div>
        </section>
    </section>
</template>

<script setup lang="ts">
import { usePocketBase } from '~/util/pocketbase'
import { storeToRefs } from 'pinia'

const vehicles = ref([]);

const pb = usePocketBase();

const load = async () => {
    vehicles.value = await pb.collection('vehicles').getFullList(25);
}

onMounted(() => {
    load();
})
</script>