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
  // import { useEventStore } from '../stores/eventStore';
  // import { mapStores } from 'pinia';
  import axios from "axios";

  export default {
  name: "EventDetail",
  
  data(){
   return {
   loading: false,
   error: "",
   }
  },
  methods: {
    performSearch(id) {     
      this.loading = true;
      this.error = "";

      const apiKey = import.meta.env.VITE_API_KEY;

      // const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&id=${id}`;
      // let url = `https://app.ticketmaster.eu/mfxapi/v2/events/{event_id}`;
      let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}/{event_id}`;

      axios(url)
        .then((response) => {
          let event = response.data._embedded.events/{event_id};                     
          
        })
        .catch((err) => {
          console.error(err);
          this.error = "Failed to fetch results. Please try again.";
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  computed: {
        ...mapStores(useEventStore)
        
    },
    mounted() {
      console.log("Event Store:", this.eventStore.item); 
      // hacer fetch con id del eventCard
      this.performSearch(this.$route.params.id)
    }   
}
  </script>