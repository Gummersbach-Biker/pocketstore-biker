<template>
    <div class="rounded w-full overflow-hidden shadow-lg bg-white">
        <img v-if="!props.vehicle.cover" :src="'https://place-hold.it/700x580?text=' + props.identifier" class="w-full"
            alt="Sunset in the mountains">
        <img :src="url + '/api/files/' + props.vehicle.collectionId + '/' + props.vehicle.id + '/' + props.vehicle.cover" alt=""
            class="w-full">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ props.vehicle.name }}</div>
            <p class="text-gray-700 text-base">
                {{ props.vehicle.desc }}
            </p>
        </div>
        <div class="px-6 pt-4 pb-2 mb-3 space-x-3 space-y-3">
            <span
                class="badge badge-primary px-3 py-3 cursor-pointer">#tag{{ props.vehicle.tag }}</span>
            <span
                class="badge badge-primary px-3 py-3 cursor-pointer">#weekend{{ props.vehicle.wochenende }}</span>
            <span
                class="badge badge-primary px-3 py-3 cursor-pointer">#woche{{ props.vehicle.woche }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePocketBaseUrl} from '~/util/pocketbase'
const props = defineProps({
    identifier: { type: String, required: true },
    vehicle: { type: Object, required: true }
});

const url = usePocketBaseUrl();

</script>