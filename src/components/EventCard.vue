<template>
    <div class="event-card shadow-md rounded p-4">
        <h3 class="text-lg font-bold">{{ event.name }}</h3>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <!-- <p>{{ event.city.name }}</p> -->
         <h4>{{ event._embedded.venues[0].city?.name }}</h4>

        <a :href="event.link" target="_blank" class="text-blue-500 underline mt-2 block">
            More Details
        </a>
    </div>


    <!-- <div class="flex flex-col justify-between h-full">
            <h4 class="font-bold"> {{ event.name }} </h4>

            <div v-for="(venue, index) in event._embedded.venues" :key="index">
            <p>City: {{ venue.city?.name }}</p>
            <p>Country: {{ venue.country?.name }}</p>
            </div>

            <p class="font-bold text-gray-500">More info</p>
            </div> -->
</template>

<script>
export default {
    name: "EventCard",
    props: {
        event: {
            type: Object,
            required: true,
        },
      
    },
  mounted() {
   console.log(this.event)
  },
};
</script>

<style scoped>
.event-card {
    background-color: #f9f9f9;
}
</style>