<template>
  <div class="results-page">
    <h1 class="text-2xl font-bold text-center my-4">Search Results</h1>

    <!-- Include Search -->
    <Search @search="performSearch" />

    <!-- Display results -->
    <div v-if="loading" class="loader my-4 mx-auto"></div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else-if="results" class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <EventCard 
        v-for="event in results" 
        :key="event.id" 
        :event="event" 
      />
    </div>
    <div v-else class="text-center text-gray-500">No results found. Try a different search.</div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import EventCard from "../components/EventCard.vue";
import axios from "axios";

export default {
  name: "Results",
  components: {
    Search,
    EventCard,
  },
  data() {
    return {
      results: null,
      loading: false,
      error: "",
    };
  },
  methods: {
    performSearch(city) {
      this.loading = true;
      this.error = "";

      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=dnXP9GPEbiPAAeB7O61vBwuP1pp1MY1t&countryCode=ES`;
      
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

          if (!this.results || this.results.length === 0) {
            this.error = "No events found.";
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
  mounted() {
    this.performSearch(); // Fetch initial results
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
