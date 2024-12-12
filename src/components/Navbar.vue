<template>
  <nav class="flex w-full justify-between">
    <ul class="flex space-x-8">
      <li v-for="link in navLeft" :key="link.path">
        <router-link 
          :to="link.path" 
          class="text-white-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">
          {{ link.sectionName }}
        </router-link>
      </li>
    </ul>

    <ul class="flex space-x-8 pr-8">
      <li v-for="link in navRight" :key="link.path">
        <router-link 
          :to="link.path" 
          class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">
          {{ link.sectionName }}
        </router-link>
      </li>
      
      <li>
        <button class="flex flex-col items-center">
          <router-link 
            to="/cart" 
            class="flex font-montserrat text-yellowApp items-center space-x-2">
            <img 
              src="/ion_ticket.png" 
              alt="Ticket icon" 
              class="h-6 w-6 mr-2"
            >
            <span>{{ cartStore.cartSize }}</span>
          </router-link>
        </button>
      </li>
    </ul>
  </nav>
</template>



<script>
import { useCartStore } from "../stores/cartStore"
import { mapStores } from "pinia";

export default {
  name: "NavBar",
  props:
    ["navLeft", "navRight"],
  data() {
    return {

    };
  },

  computed: {
    ...mapStores(useCartStore)
  },
  // mounted() {
  //   this.cartStore.getItemsFromFirebase()

  // }

};

</script>