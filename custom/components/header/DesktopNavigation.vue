<template>
    <section class="px-3 hidden md:flex flex-col">
        <div class="text-center py-3">
            <a href="/de/fahrzeuge" class="font-bold btn btn-secondary btn-block rounded-none">
                <span>Jetzt Fahrzeug mieten</span>
            </a>
        </div>
        <ul class="flex space-x-6 text-sm">
            <li>
                <a href="/" class="text-blue-600">
                    <Fa :icon="faHatCowboy" class="w-5 mr-3" color="white"/>
                    <span class="text-white">Helm</span>
                </a>
            </li>
            <li>
                <a href="/" class="text-blue-600">
                    <Fa :icon="faUser" class="w-5 mr-3" color="white"/>
                    <span class="text-white">Kleidung</span>
                </a>
            </li>
            <li>
                <a href="/" class="text-blue-600">
                    <Fa :icon="faHand" class="w-5 mr-3" color="white"/>
                    <span class="text-white">Handschuhe</span>
                </a>
            </li>
            <li>
                <a href="/" class="text-blue-600">
                    <Fa :icon="faMotorcycle" class="w-5 mr-3" color="white"/>
                    <span class="text-white">Motorräder</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome'
import { faHand,faHatCowboy,faUser,faMotorcycle } from '@fortawesome/free-solid-svg-icons'
</script>