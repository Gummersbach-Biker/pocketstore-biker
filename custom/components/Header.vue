<template>
  <section class="header bg-[#113F67] mb-3 mx-auto max-w-6xl text-white px-3 py-3">
    <section class="flex justify-between">
      <a href="/" class="logo flex items-center">
        <img src="/biker-logo.svg" class="h-12" alt="">
        <span class="ml-3 text-white font-bold text-lg">
          Gummersbach<br>Biker.shop
        </span>
      </a>
      <section class="menu md:hidden">
        <button v-if="!open" @click="open = !open" class="btn btn-primary btn-square">
          <FontAwesomeIcon size="2x" :icon="['fas', 'bars']"/>
        </button>
        <button v-else class="btn btn-primary btn-square" @click="open = !open">
          <FontAwesomeIcon size="2x" :icon="['fas', 'times']"/>
        </button>
      </section>
      <section class="navigation hidden md:flex items-end md:flex-col">
        <nav class="flex space-x-6">
          <a :href="$localePath('/category/helme.html')" class="col">
            <font-awesome-icon class="mr-2" :icon="['fas', 'helmet-safety']"/>
            <span>Helme</span>
          </a>
          <a :href="$localePath('/category/kleidung.html')" class="col">
            <font-awesome-icon class="mr-2" :icon="['fas', 'person']"/>
            <span>Kleidung</span>
          </a>
          <a :href="$localePath('/category/schuhe.html')" class="col">
            <font-awesome-icon class="mr-2" :icon="['fas', 'shoe-prints']"/>
            <span>Schuhe</span>
          </a>
        </nav>
        <nav class="flex space-x-6 mt-2">
          <a :href="$localePath('/blog')" class="col">
            <font-awesome-icon class="mr-2" :icon="['fas', 'rss']"/>
            <span>Blog</span>
          </a>
          <a :href="$localePath('/werkstatt')" class="col">
            <font-awesome-icon class="mr-2" :icon="['fas', 'wrench']"/>
            <span>Werkstatt</span>
          </a>
          <a :href="$localePath('/categories')" class="col">
            <font-awesome-icon class="mr-2" :icon="['fas', 'euro']"/>
            <span>kaufen</span>
          </a>
          <a :href="$localePath('bikes')" class="col">
            <font-awesome-icon class="mr-2" :icon="['fas', 'clock']"/>
            <span>mieten</span>
          </a>
        </nav>
      </section>
    </section>
  </section>
  <section v-if="open" class="mx-3 bg-white block mb-3 px-3 py-3">
    <section class="grid grid-cols-6 gap-3">
      <div class="col-span-3">
        <a href="/de/blog" class="btn btn-primary btn-block">Blog</a>
      </div>
      <div class="col-span-3">
        <a href="/de/category/helm.html" class="btn btn-primary btn-block">Helme</a>
      </div>
      <div class="col-span-3">
        <a href="/de/category/kleidung.html" class="btn btn-primary btn-block">Kleidung</a>
      </div>
      <div class="col-span-3">
        <a href="/de/category/schuhe.html" class="btn btn-primary btn-block">Schuhe</a>
      </div>
      <div class="col-span-3">
        <NuxtLink class="btn btn-primary btn-block" :to="$localePath('bikes')">mieten</NuxtLink>
      </div>
      <div class="col-span-3">
        <NuxtLink class="btn btn-primary btn-block" :to="$localePath('categories')">kaufen</NuxtLink>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {useLocalStorage} from '@vueuse/core'

const open = useLocalStorage('navigation', false, {});
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

useHead({
  link: [{
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/biker-logo.svg'
  }]
})

onMounted(() => {
  open.value = false;
});

</script>