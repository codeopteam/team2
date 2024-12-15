<template>
    <div class="flex flex-col min-h-screen">
        <!-- Header -->
        <Header />


        <!-- Main Content -->
        <main class="flex-grow">
            <router-view />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style scoped>
/* Puedes agregar estilos específicos aquí */
</style>