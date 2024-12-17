<template>
  <div>
    <Hero 
      class="pt-20" 
      mainText="Don't miss out!" 
      subTextBefore="Explore the" 
      highlightedText="vibrant events" 
      subTextAfter="happening in Spain." 
      imagePath="/Hero.png" 
    />
  </div>

  <div class="flex justify-center my-2">
    <div v-if="loading" class="loader"></div>
  </div>

  <h2 class="text-center mb-4 font-bold font-montserrat">Upcoming Events</h2>

  <div class="text-center mb-4">
    <div 
      v-if="galleryDefault"
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px] max-w-screen-lg mx-auto w-full px-2 md:px-4 lg:px-0"
    >
      <div 
        v-for="event in limitedEvents" 
        :key="event.id" 
        class="flex items-center justify-center"
      >
        <GalleryCard :event="event" />
      </div>
    </div>
  </div>
</template>



<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import Search from '../components/Search.vue';
import Hero from '../components/Hero.vue';
import GalleryCard from '../components/GalleryCard.vue';

export default {
  name: "Home",
  data() {
    return {
      search: null,
      error: "",
      loading: false,
      galleryDefault: null, 
    };
  },

  computed: {
  
    limitedEvents() {
      if (!this.galleryDefault || !this.galleryDefault._embedded) return [];
      return this.galleryDefault._embedded.events.slice(0, 9);
    }
  },

  components: {
    Header, Search, Hero, GalleryCard
  },
  methods: {
    searchData(city) {
      this.error = "";
      this.loading = true;

      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&countryCode=ES`;

      axios(url)
        .then(resp => {
          this.galleryDefault = resp.data;

          // Filtra por ciudad si se especifica
          if (city) {
            this.galleryDefault._embedded.events = this.galleryDefault._embedded.events.filter(event =>
              event._embedded.venues.some(venue =>
                venue.city?.name.toLowerCase() === city.toLowerCase()
              )
            );
          }


          if (this.galleryDefault._embedded.events.length === 0) {
            this.error = "No se encontraron eventos para la ciudad ingresada.";
          }
        })
        .catch(err => {
          console.error(err);
          this.error = "Error fetching data";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    this.searchData();
  }
};
</script>

<style>
.loader {
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  -webkit-mask: linear-gradient(0deg, #000 55%, #0000 0) bottom/100% 18.18%;
  background:
    linear-gradient(#f03355 0 0) bottom/100% 0% no-repeat #ddd;
  animation: l8 2s infinite steps(7);
}

@keyframes l8 {
  100% {
    background-size: 100% 115%
  }
}
</style>
