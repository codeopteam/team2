<template>
    <div class=" not-found justify-start items-start pl-2 pt-8">
        <button @click="goHome" class="flex flex-col w-24 justify-center items-center">
            <img src="/house.gif" alt="" class="flex rounded w-12 justify-center items-center">
            <p class="text-xs">Go Back Home</p>
        </button>
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
    background-image: url('/contactus.gif');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
}
</style>
