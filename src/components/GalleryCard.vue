<template>
<div class="text-center mb-4 card py-4 px-2 shadow-md rounded w-[270px] h-60">
        <img :src="event.images[2]?.url" alt="Event image" class="w-full h-40 object-cover rounded" />  
        <h3 class="text-lg font-bold">{{ event.name }}</h3>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <a :href="event.link" target="_blank" class="text-blue-500 underline mt-2 block">
            More Details
        </a>
    </div>
</template>
<!-- <div class="flex flex-col justify-between h-full">
    <h4 class="font-bold"> {{ event.name }} </h4>

    <div v-for="(venue, index) in event._embedded.venues" :key="index">
        <p>City: {{ venue.city?.name }}</p>
        <p>Country: {{ venue.country?.name }}</p>
    </div>

    <p class="font-bold text-gray-500">More info</p>
    </div> -->

<script>
export default {
    name: "GalleryCard",
    props: {
        event: {
            type: Object,
            required: true,
        },
    },

};
</script>

<style scoped>
.gallery-card {
    background-color: #f9f9f9;
}
</style>