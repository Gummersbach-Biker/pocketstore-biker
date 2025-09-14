<template>
  <div class="col-span-6">
    <div class="hero bg-gray-400 rounded-lg">
      <div class="hero-content flex-col lg:flex-row">
        <img src="/harley-davidson-1HZcJjdtc9g-unsplash.jpg" alt=""
        class="max-w-sm rounded-lg shadow-2xl">
        <div>
          <h1 class="text-2xl font-bold">Willkommen in unserem Online-Shop für Motoräder und Kleidung</h1>
          <p data-testid="p-hero" class="py-6">
            Gerne empfangen wir euch auch in unserem Laden in Buxthude :D <br>
            Persönlich und Kompenent auch vor Ort. Folgt uns auch auf <a href="/">Instagram</a>.
          </p>
          <section class="actions space-x-3">
            <button class="btn btn-insta">
              <FontAwesomeIcon size="2x" :icon="faInstagram"></FontAwesomeIcon>
              <span>jmse.cloud</span>
            </button>
            <button class="btn btn-primary">
              <FontAwesomeIcon size="2x" :icon="faInstagram"></FontAwesomeIcon>
              <span>mkay.dev</span>
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>
