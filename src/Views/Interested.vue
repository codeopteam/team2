<template>
    <div class="flex flex-col items-center">
      <div class="bg-gray-50 w-full max-w-screen-sm lg:w-1/2 overflow-y-auto pb-4 min-h-[60vh] flex flex-col mt-10 mb-10 px-4 lg:px-0">
        <div class="flex justify-start items-center my-2">
          <button class="border text-5xl border-none m-4" @click="$router.go(-1)">←</button>
          <h1 class="text-3xl ms-4">Interested Events</h1>
        </div>
  
        <ul v-for="(ev, index) in interestedStore.favoritesEvents" :key="ev.id">
          <li class="bg-darkBlue text-white mt-4 border-b flex flex-col shadow-lg rounded-lg items-end w-full">
            <div class="flex h-20 border-l-8 border-yellowApp text-md font-montserrat text-left pl-8 justify-between items-center w-full">
              <span class="w-2/3">{{ ev.name }}</span>
              <button class="shadow-lg rounded-xl w-8 px-1 mx-4" @click="interestedStore.deleteFromInterested(ev.id)">
                <img src="/Interested-Button.png" alt="Star blue icon">
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { useInterestedStore } from '../stores/interestedStore';
  import { mapStores } from 'pinia';
  
  export default {
    name: "Interested",
    async mounted() {
      await this.interestedStore.loadInterestedFromFirestore();
    },
    computed: {
      ...mapStores(useInterestedStore),
    },
  };
  </script>  