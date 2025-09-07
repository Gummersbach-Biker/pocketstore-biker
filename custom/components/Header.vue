<script setup lang="ts">
</script>

<template>
  <section class="header bg-[#113F67] mb-3 mx-auto max-w-6xl text-white px-3 py-3">
    <section class="flex justify-between">
      <a href="/" class="logo flex items-center">
        <img src="/biker-logo.svg" class="h-12" alt="">
        <span class="ml-3 text-white font-bold text-lg">Gummersbach<br>Biker.shop</span>
      </a>
      <section class="navigation flex items-end md:flex-col">
        <ul class="flex space-x-5 min-w-md">
          <li>
            <a href="/de/category/helm.html">
              <FontAwesomeIcon :icon="['fas', 'helmet-safety']"/>
              <span class="ml-3">Helme</span>
            </a>
          </li>
          <li>
            <a href="/de/category/kleidung.html">
              <FontAwesomeIcon :icon="['fas', 'user-secret']"/>
              <span class="ml-3">Kleidung</span>
            </a>
          </li>
          <li>
            <a href="/de/category/motorräder.html">
              <FontAwesomeIcon :icon="['fas', 'motorcycle']"/>
              <span class="ml-3">Bikes</span>
            </a>
          </li>
          <li>
            <a href="/de/wunschzettel">
              <FontAwesomeIcon :icon="['fas', 'heart']"/>
              <span class="ml-3">Wunschzettel</span>
            </a>
          </li>
          <li>
            <a href="/de/checkout">
              <FontAwesomeIcon :icon="['fas', 'shopping-cart']"/>
              <span class="ml-3">Warenkorb</span>
            </a>
          </li>
        </ul>
        <a href="/de/mieten" class="btn btn-sm btn-primary btn-block mt-3">Fahrzeug mieten</a>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

useHead({
  link: [{
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/biker-logo.svg'
  }]
})

</script>