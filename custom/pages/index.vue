<template>
  <section class="page">
    <div class="mx-auto max-w-6xl grid grid-cols-6 gap-3">
      <HomepageHero/>
      <CatalogProductGrid identifier="nerd"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {addBreadcrumb} from "~/utils/breadcrumb";

const {t,te} = useI18n();
useHead({
  title: t("general.title"),
  meta: [
    {
      name: 'description',
      content: te("general.description") ? t("general.description") : 'PocketStore.io is a Open Source Shop Framework which is based on PocketBase and made with Nuxt/VueJs by Jonathan Martz.'
    }
  ]
});

onMounted(() => {
  addBreadcrumb({
    code: 'test',
    link: 'test123',
    icon: 'question'
  })
})
</script>