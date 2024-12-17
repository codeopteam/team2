<template>
    <div class=" not-found justify-start items-start pl-2 pt-8">

        <button @click="goHome" class="flex flex-col w-24 justify-center items-center">
            <img src="/house.gif" alt="" class="flex rounded w-12 justify-center items-center">
            <p class="text-xs">Go Back Home</p>
        </button>

    </div>
    <div class="w-full flex justify-center items-center">
        <img class="w-1/3" src="/wip.gif" alt="">

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

<style scoped></style>
