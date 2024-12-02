<template>
  <div class="col-span-6">
    <div class="hero bg-base-300 rounded-lg">
      <div class="hero-content flex-col lg:flex-row my-12">
        <img src="/harley-davidson-4ixHdlcROPI-unsplash.jpg" class="max-w-sm rounded-lg shadow-2xl">
        <div>
          <h1 class="text-3xl font-bold">Willkommen bei Gummersbach-Biker.shop</h1>
          <p data-testid="p-hero" class="py-6">
            Hier findest du vom Helm bis zum passender Kleidung alles rund ums Motorrad.
          </p>
          <button class="btn btn-primary">
            <Fa :icon="faLocationDot" />
            <span>Route planen</span>
          </button>
          <button class="btn btn-neutral ml-3">
            <Fa :icon="faPhone" />
            <span>Anrufen</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
</script>