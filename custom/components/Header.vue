<template>
  <section class="header bg-[#043451] px-3 py-3 mb-3">
    <section class="flex justify-between mx-auto max-w-6xl">
      <a href="/" class="flex">
        <img src="/logo.svg" class="h-10 my-3" alt="">
        <p class="flex items-center ml-6 text-xl text-white font-bold">
          Gummersbach-Biker.shop
        </p>
      </a>
      <nav>
        <ul class="flex space-x-6 mt-3 items-center mr-6">
          <li>
            <a href="/" class="text-white">
              <Fa :icon="faMotorcycle" class="mr-3" />
              <span>Motorräder</span>
            </a>
          </li>
          <li>
            <a href="/" class="text-white">
              <Fa :icon="faUser" class="mr-3" />
              <span>Klamotten</span>

            </a>
          </li>
          <li>
            <a href="/" class="text-white">
              <Fa :icon="faHeart" class="text-red-400 mr-3" />
              <span>Wunschliste</span>
            </a>
          </li>
          <li>
            <a href="/" class="text-white">
              <Fa :icon="faShoppingCart" />
              <span class="ml-3">12</span>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome';
import { faMotorcycle, faHeart,faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
</script>

<style>
@font-face {
  font-family: "Anta-Regular";
  src: url("/Anta-Regular.ttf");
}

.logo {
  font-family: "Anta-Regular", serif;
}
</style>