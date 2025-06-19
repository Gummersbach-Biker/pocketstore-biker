<template>
  <div>
    <input type="checkbox" v-model="open" class="modal-toggle" />
    <div class="modal modal-top pl-3 mt-3 max-w-md mx-auto lg:hidden" role="dialog">
      <div class="modal-box">
        <h3 class="text-lg font-bold mb-3">
          <div class="divider divider-primary">Navigation</div>
        </h3>
        <section class="lg:hidden grid grid-cols-6 gap-3">
          <div class="col-span-3">
            <a href="/" class="btn btn-secondary btn-block">Bekleidung</a>
          </div>
          <div class="col-span-3">
            <a href="/" class="btn btn-secondary btn-block">Helme</a>
          </div>
          <div class="col-span-3">
            <a href="/" class="btn btn-secondary btn-block">Motorräder</a>
          </div>
          <div class="col-span-3">
            <a href="/" class="btn btn-secondary btn-block">Quads</a>
          </div>
          <div class="col-span-6">
            <a href="/" class="btn btn-secondary btn-block">Reifen & Service</a>
          </div>
          <div class="col-span-3">
            <a href="/" class="btn btn-secondary btn-block">Helme</a>
          </div>
          <div class="col-span-3">
            <a href="/" class="btn btn-secondary btn-block">Zubehör</a>
          </div>
        </section>
      </div>
      <label class="modal-backdrop" @click="open = !open">Close</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";

const open = useLocalStorage("open-navigation", false, {});
</script>