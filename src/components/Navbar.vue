<template>
  <nav class="p-4 flex flex-wrap justify-between items-center space-y-4 md:space-y-0">
    <ul class="flex flex-wrap space-x-4 md:space-x-8">
      <li v-for="link in navLeft" :key="link.path">
        <router-link :to="link.path"
          class="text-white-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">
          {{ link.sectionName }}
        </router-link>
      </li>
    </ul>
    <ul class="flex flex-wrap items-center space-x-4 md:space-x-8">
      <li v-for="link in navRight" :key="link.path">
        <router-link :to="link.path"
          class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">
          {{ link.sectionName }}
        </router-link>
      </li>
      <!-- <li v-if="cartStore.showTickets"> -->

      <li>
        <router-link to="/cart" class="flex items-center font-montserrat text-yellowApp space-x-2">
          <img src="/ion_ticket.png" alt="Ticket icon" class="h-6 w-6">
          <span>{{ cartStore.cartSize }}</span>
        </router-link>
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