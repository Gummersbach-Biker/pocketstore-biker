<template>
  <section class="header bg-[#043451] px-3 py-3 mb-3">
    <section class="flex justify-between mx-auto max-w-6xl">
      <div class="flex flex-col">
        <a href="/" class="flex">
          <img src="/logo.svg" class="h-10 my-3" alt="">
          <p class="flex ml-6 text-white font-bold items-center">
            Gummersbach-Biker.shop
          </p>
        </a>
        <input type="search" v-model="query" class="md:flex hidden input input-sm text-center placeholder:text-red-400"
          placeholder="Wonach suchst du ?">
      </div>
      <HeaderMobileNavigation></HeaderMobileNavigation>
      <HeaderDesktopNavigation />
    </section>
    <section class="w-full flex md:hidden">
      <input type="search" v-model="query" placeholder="Wonach suchst du ?"
        class="input w-full input input-sm text-center placeholder:text-red-400">
    </section>
  </section>
</template>

<script setup lang="ts">
const query = ref('');
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