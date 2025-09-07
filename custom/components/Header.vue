<script setup lang="ts">
</script>

<template>
  <section class="header bg-[#113F67] mb-3 mx-auto max-w-6xl text-white px-3 py-3">
    <section class="flex justify-between">
      <a href="/" class="logo flex items-center">
        <img src="/biker-logo.svg" class="h-16" alt="">
        <span class="ml-3 text-white font-bold text-lg">Gummersbach<br>Biker.shop</span>
      </a>
      <section class="navigation block xs:flex items-end flex-col">
        <button class="btn btn-sm btn-primary btn-block mb-3">Fahrzeug mieten</button>
        <ul class="flex space-x-5 min-w-md">
          <li>
            <FontAwesomeIcon :icon="['fas', 'helmet-safety']"/>
            <a href="/bikes" class="ml-3">Helme</a>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'user-secret']"/>
            <a href="/bikes" class="ml-3">Kleidung</a>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'motorcycle']"/>
            <a href="/bikes" class="ml-3">Bikes</a>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'motorcycle']"/>
            <a href="/bikes" class="ml-3">Bikes</a>
          </li>
          <li>
            <FontAwesomeIcon :icon="['fas', 'motorcycle']"/>
            <a href="/bikes" class="ml-3">Bikes</a>
          </li>
        </ul>
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
</script>