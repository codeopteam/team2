<template>
  <nav class="flex w-full justify-between items-center relative">
    <!-- Left Links -->
    <ul class="flex items-center gap-3 lg:gap-6 ms-2 md:ms-4">
      <li v-for="link in navLeft" :key="link.path">
        <router-link
          :to="link.path"
          class="text-white-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp hidden md:block"
          exact-active-class="active-link">
          {{ link.sectionName }}
        </router-link>
      </li>
    </ul>

    <!-- Right Links -->
    <ul class="flex items-center gap-3 lg:gap-4">
      <li v-for="link in navRight" :key="link.path">
        <router-link
          :to="link.path"
          class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp hidden md:block">
          {{ link.sectionName }}
        </router-link>
      </li>

      <li>
        <button class="flex justify-center items-center text-xs">
          <router-link to="/cart" class="flex flex-col items-center font-montserrat text-yellowApp">
            <img src="/ion_ticket.png" alt="Ticket icon" class="h-6 w-6 mb-1">
            <p class="flex items-center gap-2">
              <span>{{ cartStore.cartSize }}</span>
              tickets
            </p>
          </router-link>
        </button>
      </li>
      <router-link to="/">
        <Button class="hidden md:block"></Button>
      </router-link>

      <!-- Button hamburguer -->
      <div class="block md:hidden me-2">
        <button @click="showLinks()" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </ul>

    <!-- Menú desplegable (en columna) -->
    <div
      :class="['absolute top-full right-0 w-full bg-darkBlue bg-opacity-80', isMenuHamb ? 'flex flex-col items-center py-4 z-10' : 'hidden']"
      class="md:hidden" @click="this.isMenuHamb = false">
      <!-- Enlaces en columna -->
      <ul class="space-y-4 w-full px-4">
        <li v-for="link in navLeft.concat(navRight)" :key="link.path">
          <router-link
            :to="link.path"
            class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp block text-center"
            exact-active-class="active-link">
            {{ link.sectionName }}
          </router-link>
        </li>
        <li class="mt-3 text-center">
          <button @click="logout"
            class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">
            Logout
          </button>
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
    logout() {
      // Lógica de logout (puedes redirigir o llamar a una API)
      console.log("Logged out!");
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