<template>
    <div>
      <h1 class="text-2xl font-bold">Event Name: {{ eventStore.item.name }}</h1>
      <h4>startDateTime: {{ eventStore.item.sales.public.startDateTime }}</h4>
      <!-- <h4>Date: {{ eventStore.item.dates[start][localDate] }}</h4> -->
      <!-- <h4>Hora: {{ eventStore.item.dates[start][localTime] }}</h4>  -->
      <img :src="eventStore.item.images[2]?.url" alt="Event Image"/>
   
    </div>
  </template>

  <script>
  import { useEventStore } from '../stores/eventStore';
  import { mapStores } from 'pinia';
  export default {
  name: "EventDetail",

  computed: {
        ...mapStores(useEventStore)
        
    },
    mounted() {
      console.log("Event Store:", this.eventStore.item);
    }
   
}
  </script>