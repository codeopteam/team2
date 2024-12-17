<template>
    <div class="not-found justify-start items-start pl-2 pt-8">
        <button @click="goHome" class="flex flex-col w-24 justify-center items-center">
            <img src="/house.gif" alt="Go back home" class="flex rounded w-12 justify-center items-center">
            <p class="text-xs">Go Back Home</p>
        </button>
    </div>

    <div class="w-full flex flex-col justify-center items-center mb-10">
        <video 
            src="/video-demo.mp4" 
            class="w-full max-w-4xl h-auto" 
            controls 
            autoplay 
            loop 
            muted
        >
            Your browser does not support the video tag.
        </video>
    </div>
</template>


<script>
export default {
    name: "Video",
    methods: {
        goHome() {
            this.$router.push({ name: "Home" });
        },
    },
};
</script>

<style scoped>

</style>
