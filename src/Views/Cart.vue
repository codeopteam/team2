<template>
  <div>
    <h1 class="text-2xl font-bold">Cart</h1>
    <ul v-for="(item,index) in cartStore.items">
      <li>{{ item.name }}

        <button class="border border-orange-600 rounded-md px-1 bg-orange-600" @click="cartStore.deleteItem(index)"> x </button>
      </li>
    </ul>
  </div>
</template>

<script>

import { useCartStore } from '../stores/cartStore';
import { mapStores } from 'pinia';

export default {
    name: "Cart",
    computed: {
        ...mapStores(useCartStore)

    },
    //  mounted() {
    //   this.cartStore.showCart()

    // },
};


</script>
