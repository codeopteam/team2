<template>
    <div class=" not-found justify-start items-start pl-2 pt-8">

        <button @click="goHome" class="flex flex-col w-24 justify-center items-center">
            <img src="/house.gif" alt="" class="flex rounded w-12 justify-center items-center">
            <p class="text-xs">Go Back Home</p>
        </button>
    </div>

    <div class="w-full flex flex-col justify-center items-center px-4">
        <h3 class="text-darkBlue text-2xl mb-4 font-montserrat text-center">Contact us</h3>
        <h2 class="text-darkBlue text-2xl sm:text-4xl font-montserrat text-center break-words">
            codeopteam@gmail.com
        </h2>
        <img src="/contactus.gif" alt="">
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
