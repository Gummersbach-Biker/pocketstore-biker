<template>
    Hallo Welt
</template>

<script setup>
import { usePocketbase } from '~/utils/pocketbase';
import { useRoute, useRouter } from 'vue-router';
const pb = usePocketbase();

</script>