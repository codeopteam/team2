<template>
  <!-- <Hero mainText="Explore a world of events. Find what excites you!" subTextBefore="" highlightedText="" subTextAfter=""
    imagePath="" /> -->

  <Hero mainText="Explore a world of events. Find what excites you!" subTextBefore="" highlightedText="" subTextAfter=""
    imagePath="" heightClass="h-60" />


  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
  
    <div class="col-span-1">
    <!-- Include Search -->
    <Search @search="filterResults" />
  </div>
  <div class="col-span-3">
    <!-- Display results -->
    <div v-if="loading" class="loader my-4 mx-auto"></div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else-if="results" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-if="filterRes">
        <EventCard v-for="event in filterRes" :key="event.id" :event="event"/>
      </div>
      <div v-else>
        <EventCard v-for="event in results" :key="event.id" :event="event"/>
      </div>
      
    </div>
    <div v-else class="text-center text-gray-500">No results found. Try a different search.</div>
  </div>
</div>
</template>

<script>
// import { useCartStore } from '../stores/cartStore';
// import { mapStores } from 'pinia';

import Search from "../components/Search.vue";
import EventCard from "../components/EventCard.vue";
import axios from "axios";
import Hero from '../components/Hero.vue';

export default {
  name: "Results",
  components: {
    Search,
    EventCard,
    Hero
  },
  data() {
    return {
      filterRes: null,
      results: null,
      loading: false,
      error: "",
    };
  },

  // computed: {
  //       ...mapStores(useCartStore)

  //   },

  methods: {
    filterResults(filtersEvents){
      console.log(filtersEvents)
      //this.filterRes = this.results.filter(event => event._embedded.attractions[0].classifications[0].segment.name === filtersEvents.eventType)
      this.filterRes = this.results.filter(event => event.dates.start.localDate === filtersEvents.date && event._embedded.attractions[0].classifications[0].segment.name === filtersEvents.eventType)
      console.log(this.filterRes)
    },

    performSearch(city) {
      this.loading = true;
      this.error = "";

      const apiKey = import.meta.env.VITE_API_KEY;

      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=ES&city=${city}`;

      axios(url)
        .then((response) => {
          const events = response.data._embedded.events;

          // Filter results by city if provided
          if (city) {
            this.results = events.filter((event) =>
              event._embedded.venues.some((venue) =>
                venue.city?.name.toLowerCase() === city.toLowerCase()
              )
            );
          } else {
            this.results = events;
           
          }
          console.log(this.results)
          this.filterRes = null

          if (!this.results || this.results.length === 0) {
            this.error = "No events found.";
            this.$router.push({ name: "NotFound" });
          }
        })
        .catch((err) => {
          console.error(err);
          this.error = "Failed to fetch results. Please try again.";
          this.$router.push({ name: "NotFound" });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    '$route.params.city': {
      immediate: true,
      handler(newCity) {
        if (newCity) {
          this.performSearch(newCity);
        }
      },
    },
  },
  mounted() {
    this.performSearch(this.$route.params.city); // Fetch initial results

    // this.cartStore.getItemsFromFirebase();
    // this.cartStore.showCart()

  },
};
</script>

<style scoped>
.loader {
  width: 60px;
  height: 60px;
  border: 6px solid #ccc;
  border-top-color: #f00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
