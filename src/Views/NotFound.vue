<template>
    <div class="not-found ">
        <img src="/notFound.gif" alt="404" class="w-60">

        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <button @click="goHome">Go back Home</button>
    </div>
</template>

<script>
export default {
    name: "NotFound",
    methods: {
        goHome() {
            this.$router.push({ name: "Home" });
        },
    },
};
</script>

<style scoped>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    text-align: center;
}
</style>