<template>
    <div class="not-found justify-start items-start">

        <button @click="goHome"><img src="/public/back.png" alt="" class="rounded-full m-8"></button>
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
    height: 100vh;
    background-image: url('/notFound.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* color: white; */
}
</style>
