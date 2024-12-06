<template>
  <button class="border border-red-500 rounded" @click="cartStore.addItemToCart(event)">Add</button>  
</template>

<script>
import { useCartStore } from "../stores/cartStore";
import { mapStores } from "pinia";

export default {
    name: "AddButton",
    computed: {
      ...mapStores(useCartStore)
    }
    
}

</script>


