<template>
    <div class="glass text-red-600 font-bold flex px-3 py-3 justify-center">
        <Fa :icon="faCircleInfo" />
        <p class="text-sm mx-3">
            Dieser Shop ist ein Demo Shop für PocketStore.io, ist also nur zum Testen.
        </p>
        <Fa :icon="faCircleInfo" />
    </div>
</template>

<script setup lang="ts">
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
</script>