<template>
    <!-- <div class=" text-center items-center  py-4 px-2 rounded w-[300px] h-[300px] font-opensanz">
        <img :src="event.images[2]?.url" alt="Event image" class="w-full h-40 object-cover rounded" />
        <div class="flex flex-row">
            <div class="p-2">
                <p>MES</p>
                <p>dia</p>
                <h2>{{ event.date }}</h2>
            </div>
            <div class="text-left p-2">
                <p class="font-bold">{{ event.name }}</p>
                <p>{{ event.location }}</p>

            </div>
        </div>
    </div> -->

    <div class="text-center items-center py-4 px-2 rounded w-[300px] h-[300px] font-opensanz">
  <img :src="event.images[2]?.url" alt="Event image" class="w-full h-40 object-cover rounded" />
  <div class="flex flex-row">
    <div class="p-2">
      <p>{{ new Date(event.dates.start.localDate).toLocaleString('es-ES', { month: 'long' }).toUpperCase() }}</p>
      <p>{{ new Date(event.dates.start.localDate).getDate() }}</p>
      <h2>{{ event.dates.start.localTime }}</h2>
    </div>
    <div class="text-left p-2">
      <p class="font-bold">{{ event.name }}</p>
      <p>{{ event._embedded.venues[0]?.name }}</p>
      <p>{{ event._embedded.attractions[0]?.name }}</p>
    </div>
  </div>
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