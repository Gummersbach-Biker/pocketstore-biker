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
        <div class="px-6 pt-4 pb-2">
            <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag{{ props.vehicle.tag }}</span>
            <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#weekend{{ props.vehicle.wochenende }}</span>
            <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#woche{{ props.vehicle.woche }}</span>
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