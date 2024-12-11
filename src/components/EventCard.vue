<template>
    <div class="gap-4 flex event-card shadow-md rounded p-4">
        <div class="border w-3/5">
            <img :src="event.images[2]?.url" alt="Event image" class="w-full h-40 object-cover rounded" />
        </div>
        <div class="w-2/5">
            <h3 class="text-sm font-openSans">{{ event.name }}</h3>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
        <div class="flex gap-2">
            <div class="flex gap-2 text-darkGray text-sm">
                <p>{{ new Date(event.dates.start.localDate).getDate() }}</p> <!--buscar q significa-->
                <p>{{ new Date(event.dates.start.localDate).toLocaleString('en-EN', {month: 'short'}) }}</p>
            </div>
            <h4 class="font-openSans text-darkGray text-sm">{{ event._embedded.venues[0].city?.name }}</h4>
        </div>
        
        <!-- <p>{{ event.city.name }}</p> -->
        
        <h2 class="text-darkGray font-light text-sm">{{ event.dates.start.localTime.substring(0, 5) }}</h2>
        <!-- <a :href="event.link" target="_blank" class="text-blue-500 underline mt-2 block">
            More Details
        </a> -->
        <!-- <button class="border border-red-500 rounded" @click="cartStore.addItemToCart(event)">Add</button>   -->
        </div>
        
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
import { useCartStore } from '../stores/cartStore';
import { mapStores } from 'pinia';


export default {
    name: "EventCard",
    
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapStores(useCartStore)
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