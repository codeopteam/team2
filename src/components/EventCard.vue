<template>
<div class="gap-4 flex event-card shadow-md rounded p-4">
   <RouterLink :to = "`/event/${event.id}`">
   <div class="gap-4 flex event-card rounded" @click="eventStore.eventDetail(event)">
        <div class="border w-[300px] relative">  <!--w-2/1 -->
            <img :src="event.images[2]?.url" alt="Event image" class="w-full h-40 object-cover rounded" />
        </div>
    </div>
    </RouterLink> 
    <div class="w-2/5 flex flex-col justify-between">
        <div>
        <h3 class="text-base font-openSans">{{ event.name }}</h3>
        <p>{{ event.date }}</p>
        <p>{{ event.location }}</p>
    
        <div class="flex gap-2 items-center">
            <div class="flex gap-2 text-darkGray text-sm">
                <p>{{ new Date(event.dates.start.localDate).getDate() }}</p> 
                <p>{{ new Date(event.dates.start.localDate).toLocaleString('en-EN', {month: 'short'}) }}</p>
            </div>
            <div class="border-l border-darkGray h-4"></div>
        <h4 class="font-openSans text-darkGray text-sm">{{ event._embedded.venues[0].city?.name }}</h4>
    </div> 
       <h2 class="text-darkGray font-light text-sm">{{ event.dates.start.localTime.substring(0, 5) }}</h2>
    </div>
       <button class= "bg-yellowApp mt-2 rounded px-2 h-8 font-montserrat self-start" @click.stop="cartStore.addItemToCart(event)">Add</button> 
    </div>
</div>
</template>

<script>
import { useEventStore } from '../stores/eventStore';
import { mapStores } from 'pinia';
import { useCartStore } from '../stores/cartStore';


export default {
    name: "EventCard",        
    props: {
        event: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapStores(useEventStore, useCartStore)
    
    },
  mounted() {
   //console.log(this.event)
  },
};
</script>

<style scoped>
.event-card {
    background-color: #f9f9f9;
    
}
</style>