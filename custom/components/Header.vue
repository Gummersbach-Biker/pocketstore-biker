<template>
  <div>
    <div class="bg-black">
      <section class="header mx-auto max-w-6xl py-3 mb-3 flex justify-between">
        <section class="logo flex ml-3">
          <a href="/" class="flex">
            <img
              src="/pocketstore-symbold-white.svg"
              class="h-10 mt-1"
              alt=""
            />
            <span class="text-white ml-3">Gummersbach<br />Biker.shop</span>
          </a>
        </section>
        <section class="lg:hidden flex items-center mr-3">
          <button v-if="!open" @click="open = !open">
            <FontAwesomeIcon
              :icon="faBars"
              size="2x"
              color="white"
            ></FontAwesomeIcon>
          </button>
          <button v-else @click="open = !open">
            <FontAwesomeIcon
              :icon="faTimes"
              size="2x"
              color="white"
            ></FontAwesomeIcon>
          </button>
        </section>
        <nav class="text-white md:items-center hidden lg:flex mr-3">
          <ul class="flex space-x-6 items-center">
            <li><a href="/" class="btn btn-neutral btn-sm">Bekleidung</a></li>
            <li><a href="/" class="btn btn-neutral btn-sm">Helme</a></li>
            <li><a href="/" class="btn btn-neutral btn-sm">Fahrzeuge</a></li>
            <li>
              <a href="/" class="btn btn-neutral btn-sm">Reifen & Service</a>
            </li>
            <li><a href="/" class="btn btn-neutral btn-sm">Technik</a></li>
            <li><a href="/" class="btn btn-neutral btn-sm">Zubehör</a></li>
          </ul>
        </nav>
      </section>
    </div>
    <div>
      <section class="mb-3 max-w-6xl mx-auto px-3 xl:px-0 md:hidden">
        <a href="/mieten" class="btn btn-primary btn-block">Fahrzeug mieten</a>
      </section>
      <ModalNavigation class="lg:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocalStorage } from "@vueuse/core";

const open = useLocalStorage("open-navigation", false, {});
</script>