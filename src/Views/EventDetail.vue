<template>

  <div v-if="eventDetailresp" class="w-full ">
    <div class="flex items-center justify-center w-full py-12">
      <img class="w-11/12 rounded-2xl h-96 object-cover object-top" :src="eventDetailresp.images[2]?.url"
        alt="Event Image" />
    </div>

    <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96 flex">

        <h3 class="border border-orange-600 w-1/2 text-2xl font-bold">{{ eventDetailresp.name }}</h3>
        <div class="border border-orange-600 w-1/2 flex flex-col items-end">
          <p>estrella</p>
          <p>compartir</p>
        </div>

      </div>
    </div>
    <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96 flex">

        <div>
          <h4>startDateTime: {{ eventDetailresp.sales.public.startDateTime }}</h4>
          <!-- <h4>Date: {{ eventStore.item.dates[start][localDate] }}</h4> -->
          <!-- <h4>Hora: {{ eventStore.item.dates[start][localTime] }}</h4>  -->
        </div>
        <div>
          <p>caracas</p>
          <p>caracas</p>
          <p>caracas</p>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96">
        <div src="" frameborder="0" class="w-5/12 border border-orange-600 h-80">
          <Map :longitude="longitude" :latitude="latitude"></Map>
          <h3>{{ eventDetailresp._embedded.venues[0].address?.line1 }}</h3>
          <h3>{{ eventDetailresp._embedded.venues[0].city?.name }}</h3>
    
        </div>

      </div>
    </div>

    <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96">
        <p>Hosted By</p>
      </div>
    </div>

    <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96">
        <p>Event Description</p>
      </div>
    </div>

    <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96">
        <p>Tags</p>
      </div>
    </div>

    <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96">
        <p>Other Events you may like</p>
        <div class="w-full flex">
          <div class="w-1/3 h-80 border border-orange-600"></div>
          <div class="w-1/3 h-80 border border-orange-600"></div>
          <div class="w-1/3 h-80 border border-orange-600"></div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

import axios from "axios";
import Map from "../components/Map.vue";
export default {
  name: "EventDetail",

  data() {
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

          const location = response.data._embedded?.venues[0]?.location;
          if (location) {
            this.longitude = location.longitude;
            this.latitude = location.latitude;
          }
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
  components: {
    Map,
  },
  mounted() {
    this.performSearch()
  }
}
</script>