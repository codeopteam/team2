<template>
  <div>
    <h1 class="text-2xl font-bold">Cart</h1>
    <ul v-for="(item, index) in cartStore.items">
      <li>{{ item.name }}

        <button class="border border-orange-600 rounded-md px-1 bg-orange-600" @click="cartStore.deleteItem(index)"> x
        </button>
      </li>
    </ul>
  </div>


  <!-- Modal init -->

  <div class="bg-gray-50 w-[882px] h-[860px]">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <div class="flex justify-between items-center p-1 mt-4">
        <h2 class="text-4xl font-montserrat">Select Tickets</h2>
      </div>
    </div>

    <div class="mt-14 grid grid-cols-2 gap-4">
      <p class="text-md font-montserrat ml-8">Ticket Types</p>
      <p class="text-md font-montserrat mr-10 text-right">Quantity</p>
    </div>

    <div class="bg-white mt-4 border-b flex justify-between shadow-lg rounded-lg">
      <div class="flex items-center gap-2 border-l-8  border-green-700">
      </div>

      <div class=" p-6 ">
        <p class="text-4xl font-montserrat text-left -ml-72">Standard Ticket</p>
        <p class="text-2xl font-montserrat mt-2 pb-4 -ml-72">40€</p>
      </div>

      <div class="flex items-center gap-4 justify-center ml-12 mr-8">
        <button
          class="w-14 h-14 border rounded-full text-3xl font-montserrat flex justify-center items-center leading-none">-</button>
        <span class="text-5xl font-openSanz">1</span>
        <button
          class="w-14 h-14 border rounded-full text-3xl font-montserrat flex justify-center items-center leading-none">+</button>
      </div>
    </div>

    <div class="bg-white px-6 py-4 border-t mt-96 shadow-xl">
      <div class="flex justify-between text-center mb-4">
        <span class=" text-3xl font-montserrat">
          <span class="ml-72">Qty:</span>
          <span class="text-green-600 font-montserrat"> 1 </span>
        </span>
        <p class="text-3xl">Total: <b class="text-green-600 mr-56"> 40€ </b> </p>
      </div>

      <div class="flex justify-center">
        <button class="bg-darkBlue text-white px-60 py-6 rounded-md text-4xl font-montserrat mt-7">Proceed ></button>
      </div>
    </div>
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
