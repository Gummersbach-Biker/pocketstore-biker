<template>
    <section class="page bg-cover min-h-screen" data-theme="light">
        <header>
            <Header />
        </header>
        <main class="mx-auto max-w-6xl min-h-screen px-3 2xl:px-0">
            <Messages />
            <Breadcrumb />
            <CookieBanner />
            <BackToTop />
            <slot />
        </main>
        <footer>
            <Footer />
        </footer>
    </section>
</template>
<script setup lang="ts">
import "../main.css";
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";
</script>

<style scoped>
.page {
  background-image: url("/harley-davidson-zGzXsJUBQfs-unsplash.jpg");
}
</style>

