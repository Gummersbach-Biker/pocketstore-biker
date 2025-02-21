<template>
    <section class="bg-gray-300 min-h-screen bg-cover bg-fixed"
        style="background-image:url('/francisco-requena-A9tP39BIn28-unsplash.jpg')">
        <header>
            <Header />
        </header>
        <main class="mx-auto max-w-6xl min-h-screen px-3 xl:px-0">
            <Messages />
            <Breadcrumb />
            <CookieBanner />
            <slot />
        </main>
        <footer class="">
            <Footer />
        </footer>
    </section>
</template>
<script setup lang="ts">
import './main.css';
import tracking from '~/util/tracking';
import { useBreadcrumbStore } from '~/stores/breadcrumb';
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';

const store = useBreadcrumbStore();

onMounted(() => {
    tracking.trackPage()
    store.clear()

    useHead({
        title: 'Gummersbach-Biker.shop',
        link: [
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
            { rel: 'manifest', href: '/site.webmanifest' }
        ]
    });
});
</script>