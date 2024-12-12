<template>

    <div v-if="eventDetailresp">
      <h1 class="text-2xl font-bold">Event Name: {{ eventDetailresp.name }}</h1>
      <h4>startDateTime: {{ eventDetailresp.sales.public.startDateTime }}</h4>
      <!-- <h4>Date: {{ eventStore.item.dates[start][localDate] }}</h4> -->
      <!-- <h4>Hora: {{ eventStore.item.dates[start][localTime] }}</h4>  -->
      <img :src="eventDetailresp.images[2]?.url" alt="Event Image"/>
   
    </div>
  </template>

  <script>
  
  import axios from "axios";

  export default {
  name: "EventDetail",
  
  data(){
   return {
   eventDetailresp: null,
   loading: false,
   error: "",
   }
  },
  methods: {
    performSearch() {   
        
      this.loading = true;
      this.error = "";

      const apiKey = import.meta.env.VITE_API_KEY;
     
      let url = `https://app.ticketmaster.com/discovery/v2/events/${this.$route.params.id}.json?apikey=${apiKey}`;    

      axios(url)
        .then((response) => {          
          console.log(response)  
          this.eventDetailresp = response.data           
          
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
    mounted() {
      this.performSearch()     
    }   
}
  </script>