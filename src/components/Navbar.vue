<template>
  <nav class="flex w-full justify-between">
    <ul class="flex items-center gap-3 lg:gap-8 ms-6 md:ms-10 lg:ms-52 xl:ms-96 ms">
      <li v-for="link in navLeft" :key="link.path">
        <router-link :to="link.path"
          class="text-white-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp hidden md:block " exact-active-class="active-link">
          {{ link.sectionName }}
        </router-link>
      </li>
    </ul>

    <ul class="flex pr-8 items-center gap-3 lg:gap-5">
      <li v-for="link in navRight" :key="link.path">
        <router-link :to="link.path"
          class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp hidden md:block ms-2" exact-active-class="active-link">
          {{ link.sectionName }}
        </router-link>
      </li>

      <li>
        <button class="flex justify-center items-center text-xs">
          <router-link to="/cart" class="flex flex-col items-center font-montserrat text-yellowApp text-center">
            <img src="/ion_ticket.png" alt="Ticket icon" class="h-6 w-6 mb-1">
            <span>{{ cartStore.cartSize }} tickets</span>
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

<style>
  .active-link {
  border-bottom: 2px solid #FFE047;
  }
</style>