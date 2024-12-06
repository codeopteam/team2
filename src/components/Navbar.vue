<template>
  <nav class="p-4 flex space-x-20">
    <ul class="flex space-x-8">
      <li>
        <router-link to="/" class="text-white-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">{{ section1 }}</router-link>
      </li>
      <li>
        <router-link to="/about" class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">{{ section2 }}</router-link>
      </li>
      <li>
        <router-link to="/contact" class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">{{ section3 }}</router-link>
      </li>
    </ul>
    <ul class="flex space-x-8">
      <li>
        <router-link to="/register" class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">{{  section4 }}</router-link>
      </li>
      <li>
        <router-link to="/login" class="text-white hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">{{ section5 }}</router-link>
      </li>
      <li>
        <button>
          <router-link to="/cart" class=" font-montserrat text-yellowApp ">{{ cartStore.cartSize }}</router-link>
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
import  { useCartStore } from "../stores/cartStore"
import { mapStores } from "pinia";

export default {
  name: "NavBar",
  props: {
      section1: "",
      section2: "",
      section3: "",
      section4: "",
      section5: "",
     
    },
    computed: {
      ...mapStores(useCartStore)
    }

}

</script> 