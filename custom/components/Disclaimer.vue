<template>
    <div class="alert bg-transparent text-white font-bold">
        <Fa :icon="faCircleInfo" />
        <p class="text-sm">
            Dieser Shop ist ein Demo Shop für PocketStore.io, ist also nur zum Testen.
        </p>
        <Fa :icon="faCircleInfo" />
    </div>
</template>

<script setup lang="ts">
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
</script>