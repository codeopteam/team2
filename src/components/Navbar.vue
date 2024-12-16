<template>
  <nav class="flex w-full justify-between relative">
    <!-- Left Links -->
    <ul class="flex items-center gap-3 lg:gap-8 ms-6 md:ms-10 lg:ms-52 xl:ms-96 ms">
      <li v-for="link in navLeft" :key="link.path">
        <router-link :to="link.path"
          class="text-white-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp hidden md:block"
          exact-active-class="active-link">
          {{ link.sectionName }}
        </router-link>
      </li>
    </ul>

    <!-- Right Links -->
    <ul class="flex pr-8 items-center gap-3 lg:gap-5">
      <li v-for="link in navRight" :key="link.path">
        <router-link :to="link.path"
          class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp hidden md:block ms-2"
          exact-active-class="active-link">
          {{ link.sectionName }}
        </router-link>
      </li>

      <li>
        <button class="flex justify-center items-center text-xs">
          <router-link to="/cart" class="flex flex-col items-center font-montserrat text-yellowApp text-center">
            <img src="/ion_ticket.png" alt="Ticket icon" class="h-6 w-6 mb-1">
            <p class="flex items-center gap-2">
              <span>{{ cartStore.cartSize }}</span>
              tickets
            </p>

          </router-link>
        </button>
      </li>

      <Button class="mx-4 md:mx-6"></Button>

      <!-- Button hamburguer -->
      <div class="block md:hidden -me-12">
        <button @click="showLinks()" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </ul>


    <!-- Menú desplegable (en columna) -->
    <div
      :class="['absolute top-full -right-8 w-full bg-darkBlue bg-opacity-80', isMenuHamb ? 'flex flex-col items-center py-4 z-10 w-40 ms-24' : 'hidden']"
      class="md:hidden" @click="this.isMenuHamb = false">
      <!-- Enlaces en columna -->
      <ul class="space-y-4">
        <li v-for="link in navLeft.concat(navRight)" :key="link.path">
          <router-link :to="link.path"
            class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp"
            exact-active-class="active-link">
            {{ link.sectionName }}
          </router-link>
        </li>

      </ul>

    </div>

  </nav>
</template>

<script>
import { useCartStore } from "../stores/cartStore";
import { mapStores } from "pinia";
import Button from "../components/Button.vue"

export default {
  name: "NavBar",
  props: ["navLeft", "navRight"],
  data() {
    return {
      isMenuHamb: false, // Controla la visibilidad del menú desplegable
    };
  },
  components: {
    Button,
  },
  methods: {
    showLinks() {
      // Alternar la visibilidad del menú
      this.isMenuHamb = !this.isMenuHamb;
    },
  },
  computed: {
    ...mapStores(useCartStore),
  },
};
</script>

<style>
.active-link {
  border-bottom: 2px solid #FFE047;
}
</style>