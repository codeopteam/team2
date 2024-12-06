<template>
  <div>
    <h1 class="text-2xl font-bold">Cart</h1>
    <ul v-for="item in cartStore.items">
      <li>{{ item.name }}</li>
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
};


</script>
