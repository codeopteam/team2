<template>
    <div class="flex flex-col min-h-screen">
        <!-- Header -->
        <Header />

        <!-- Navbar -->
        <Navbar />

        <!-- Main Content -->
        <main class="flex-grow container mx-auto p-4">
            <router-view />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";

export default {
    components: {
        Header,
        Footer,
        Navbar,
    },
};
</script>

<style scoped>
/* Puedes agregar estilos específicos aquí */
</style>