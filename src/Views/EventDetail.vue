<template>
  <div v-if="eventDetailresp" class="w-full">
    <div class="flex items-center justify-center w-full py-6">
      <img
        class="w-full sm:w-10/12 md:w-11/12 lg:w-8/12 xl:w-11/12 h-auto sm:h-80 md:h-56 lg:h-80 xl:h-72 2xl:h-64 rounded-xl object-cover object-top px-4 sm:px-0"
        :src="eventDetailresp.images[2]?.url" alt="Event Image" />
    </div>



    <div class="flex items-center justify-center w-full">
      <div class="w-11/12 flex flex-col lg:flex-row justify-between">
        <div class="mb-6 lg:mb-0">
          <h3 class="text-2xl font-bold">{{ eventDetailresp.name }}</h3>
          <h4 class="font-semibold mt-2 text-xl">Date and Time</h4>
          <div class="flex gap-2 mt-2">
            <img src="/calendarIcon.svg" class="w-5" alt="Calendar Icon" />
            <p class="font-semibold mt-2 pb-2 ms-1">{{ eventDetailresp.dates?.start?.localDate }}</p>
          </div>
          <div class="flex gap-2 mt-2">
            <img src="/watchIcon.svg" class="w-6" alt="Watch Icon" />
            <p class="font-semibold">{{ new
              Date(`${eventDetailresp.dates.start.localDate}T${eventDetailresp.dates.start.localTime}`).toLocaleTimeString('en-EN',
                { hour: '2-digit', minute: '2-digit', hour12: false }) }}</p>
          </div>
        </div>

        <div>
          <div class="flex justify-evenly self-start mb-8">
            <!-- <button class="flex items-end" @click="interested = !interested"> -->
            <button class="flex items-end" @click="interestedStore.addToInterested(eventDetailresp)">
              <img :src="isInterested() ? '/Interested-Button.png' : '/Interested-Button2.png'" alt="Start Icon"
                class="w-12">

            </button>
            <button class="">
              <img src="/Share button.png" alt="Share Icon" class="w-12 mx-2" />
            </button>
            <div>
              <button class="flex justify-center items-center text-xs">
                <router-link to="/cart" class="flex flex-col items-center font-montserrat text-darkBlue">
                  <img src="/ion_ticketBlue.png" alt="Ticket icon" class="h-6 w-6 mb-1">
                  <p class="flex items-center gap-2">
                    <span>{{ cartStore.cartSize }}</span>
                    tickets
                  </p>
                </router-link>
              </button>
            </div>
          </div>

          <!-- section buy ticket -->
          <div class="flex flex-col lg:w-60 w-full">
            <!-- Botón "Buy Tickets" -->
            <router-link to="/cart">
              <BuyTicketButton label="Buy Tickets" icon="/ion_ticketBlue.png"
                customClasses="bg-yellowApp text-darkBlue w-full" class="mb-4 lg:mb-7"></BuyTicketButton>
            </router-link>
            <!-- Botón "Add to Cart" -->
            <BuyTicketButton label="Add to Cart" icon="/shopping_bag.png"
              customClasses="bg-darkBlue text-white gap-2 w-full" class="mb-4 lg:mb-7"
              @click.stop="cartStore.addItemToCart(eventDetailresp)"></BuyTicketButton>
          </div>


          <div class="flex flex-col lg:w-60 w-full">
  <h6 class="text-xl font-semibold my-3 lg:ms-6">Ticket Information</h6>
  <div class="flex lg:ms-4" v-if="eventDetailresp.priceRanges?.length > 0">
    <img src="/ion_ticketBlue.png" alt="Ticket Icon" class="w-5">
    <h4 class="ms-2">
      Standard price:
    <span v-if="eventDetailresp.priceRanges[0].min">From {{ eventDetailresp.priceRanges[0].min }} €</span>
    <span v-if="eventDetailresp.priceRanges[0].max">to {{ eventDetailresp.priceRanges[0].max }} €</span>
    </h4>
  </div>
  <div class="lg:ms-4" v-else>
    <p>No pricing information available.</p>
  </div>

  
          </div>
          <!-- section buy ticket -->
        </div>
      </div>
    </div>

    <!-- Location Section (Optional) -->
    <div v-if="eventDetailresp" class="w-full">
      <div class="flex flex-wrap items-center justify-center w-full">
        <div class="w-11/12 h-auto">
          <div class="w-full lg:w-5/12 h-auto p-4 border rounded-lg shadow-md">
            <h6 class="text-xl font-semibold mb-2 ms-2">Location</h6>
            <div class="flex flex-wrap items-center">
              <img src="/locationIcon.svg" alt="Location Icon" class="w-5 me-2 mb-2">
              <div>
                <h3>{{ eventDetailresp._embedded.venues[0].address?.line1 }}</h3>
                <div class="flex flex-wrap">
                  <h3>{{ eventDetailresp._embedded.venues[0]?.postalCode }}</h3>
                  <h3 class="ms-2">{{ eventDetailresp._embedded.venues[0].city?.name }}</h3>
                </div>
              </div>
            </div>
            <Map :longitude="longitude" :latitude="latitude" class="mt-2 w-full h-64"></Map>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center w-full py-8">
      <div class="w-11/12">
        <h6 class="text-xl font-semibold mb-4 ms-6">Hosted By</h6>
        <img src="/ImageNameButtons.png" alt="City Youth Movement Logo" class="w-60">
      </div>
    </div>

    <div class="flex items-center justify-center py-6">
      <div class="w-11/12 ms-6">
        <img src="/Tags.png" alt="Tags" class="w-8/12">
      </div>
    </div>

    <div class="flex items-center justify-center py-12">
      <div>
        <img src="/Other events you may like.png" alt="suggested events" />
      </div>
    </div>
  </div>
</template>


<script>
import { useEventStore } from '../stores/eventStore';
import { mapStores } from 'pinia';
import { useCartStore } from '../stores/cartStore';
import { useInterestedStore } from '../stores/interestedStore';

import axios from "axios";
import Map from "../components/Map.vue";
import BuyTicketButton from "../components/BuyButton.vue";

export default {
  name: "EventDetail",
  computed: {
    ...mapStores(useEventStore, useCartStore, useInterestedStore) //interestedStore object created

  },

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
      this.interested = this.eventDetailresp && this.interestedStore.favoritesEvents.some(event => event.id === this.eventDetailresp.id);
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
          this.interested = this.eventDetailresp && this.interestedStore.favoritesEvents.some(event => event.id === this.eventDetailresp.id);;
        });
    },
    isInterested() {
      return this.eventDetailresp && this.interestedStore.favoritesEvents.some(event => event.id === this.eventDetailresp.id);
    }

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