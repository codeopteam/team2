<template>

  <div v-if="eventDetailresp" class="w-full ">
    <div class="flex items-center justify-center w-full py-12">
      <img class="w-11/12 rounded-2xl h-96 object-cover object-top" :src="eventDetailresp.images[2]?.url"
        alt="Event Image" />
    </div>

    <div class="flex items-center justify-center w-full">
      <div class="w-11/12 flex justify-between">
        <div>
          <h3 class="text-2xl font-bold">{{ eventDetailresp.name }}</h3>
          <h4 class="font-semibold mt-2 text-xl">Date and Time</h4>
          <div class="flex gap-2 mt-2">
            <img src="/calendarIcon.svg" class="w-5" alt="Calendar Icon" />
            <p class="font-semibold mt-2 pb-2 ms-1">{{ eventDetailresp.dates.start.localDate }}</p>
          </div>
          <div class="flex gap-2 mt-2">
            <img src="/watchIcon.svg" class="w-6" alt="Watch Icon" />
            <p class="font-semibold">{{ new
              Date(`${eventDetailresp.dates.start.localDate}T${eventDetailresp.dates.start.localTime}`).toLocaleTimeString('en-EN',
                { hour: '2-digit', minute: '2-digit', hour12: false }) }}</p>
          </div>
        </div>

        <div>
          <div class="flex justify-end self-start mb-8">
            <button class="flex items-end" @click="interested = !interested">
              <img v-if="interested" src="/Interested-Button.png" alt="Start Icon" class="w-12">
              <img v-else src="/Interested-Button2.png" alt="Start Icon" class="w-12">
              
            </button>
            <button>
              <img src="/Share button.png" alt="Share Icon" class="w-12 mx-2" />
            </button>


          </div>

          <!-- section buy ticket -->
          <div class="w-60 flex">
            <div>
              <router-link to="/cart">
                <BuyTicketButton class="mb-7 ms-4" ></BuyTicketButton>
              </router-link>
              <BuyTicketButton class="mb-7 ms-4" @click.stop="cartStore.addItemToCart(eventDetailresp)"></BuyTicketButton>
              

              <h6 class="text-xl font-semibold my-3 ms-6">Ticket Information</h6>
              <div class="flex ms-4">
                <img src="/ion_ticketBlue.png" alt="Ticket Icon" class="w-5">
                <h4 class="ms-2">Standard min price: {{ eventDetailresp.priceRanges[0].min }} €</h4>
                <!-- <h4>Standard including fees: {{ eventDetailresp.priceRanges[1].min }} €</h4>          -->
              </div>
            </div>
          </div>
          <!-- section buy ticket -->
        </div>
      </div>
    </div>


    <div class="flex items-center justify-center w-full">
      <div class="w-11/12 h-96">
        <div src="" frameborder="0" class="w-5/12 h-80">
          <h6 class="text-xl font-semibold mb-2 ms-2">Location</h6>
          <div class="flex">
            <img src="/locationIcon.svg" alt="Location Icon" class="w-5 me-2">
            <div>
              <h3>{{ eventDetailresp._embedded.venues[0].address?.line1 }}</h3>
              <div class="flex">
                <h3>{{ eventDetailresp._embedded.venues[0]?.postalCode }}</h3>
                <h3 class="ms-2">{{ eventDetailresp._embedded.venues[0].city?.name }}</h3>
              </div>
            </div>
          </div>
          <Map :longitude="longitude" :latitude="latitude" class="mt-2"></Map>

        </div>

      </div>
    </div>


    <div class="flex items-center justify-center w-full py-8">
      <div class="w-11/12">
        <h6 class="text-xl font-semibold mb-4 ms-6">Hosted By</h6>
        <img src="/ImageNameButtons.png" alt="City Youth Movement Logo" class="w-60">
      </div>
    </div>

    <!-- <div class="flex items-center justify-center w-full py-12">
      <div class="w-11/12 border border-red-950 h-96">

        <h4>More Event Details:</h4>
       
      </div>
    </div> -->

    <div class="flex items-center justify-center py-6">
      <div class="w-11/12 ms-6">
        <img src="/Tags.png" alt="Tags" class="w-8/12">
      </div>
    </div>

    <div class="flex items-center justify-center py-12">
      <div>
        <img src="/Other events you may like.png" alt="suggested events"/>
        <!-- <p>Other Events you may like</p>
        <div class="w-full flex">
          <div class="w-1/3 h-80 border border-orange-600"></div>
          <div class="w-1/3 h-80 border border-orange-600"></div>
          <div class="w-1/3 h-80 border border-orange-600"></div>
        </div> -->
      </div>
    </div>



  </div>
</template>

<script>
import { useEventStore } from '../stores/eventStore';
import { mapStores } from 'pinia';
import { useCartStore } from '../stores/cartStore';

import axios from "axios";
import Map from "../components/Map.vue";
import BuyTicketButton from "../components/BuyButton.vue";

export default {
  name: "EventDetail",
  
    computed: {
        ...mapStores(useEventStore, useCartStore)
    
    },

  data() {
    return {
      eventDetailresp: null,
      loading: false,
      error: "",
      interested: false,
    }
  },

  methods: {
    performSearch() {

      this.loading = true;
      this.error = "";
      this.interested = false;
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
          this.interested = false;
        });
    },
  },
  components: {
    Map,
    BuyTicketButton,
  },
  mounted() {
    this.performSearch()
  }
}
</script>