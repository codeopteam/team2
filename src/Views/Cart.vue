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

  <div class="bg-gray-50 w-[882px] h-[910px]">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <div class="flex justify-between items-center p-1 mt-4">
        <h2 class="text-3xl font-montserrat">Select Tickets</h2>
      </div>
    </div>

    <div class="mt-14 grid grid-cols-2 gap-4">
      <p class="text-md font-montserrat ml-8">Ticket Types</p>
      <p class="text-md font-montserrat mr-8 text-right">Quantity</p>
    </div>

    <div class="bg-white mt-4 border-b flex justify-between shadow-lg rounded-lg p-4">
      <div class="flex items-center gap-2 border-l-8 border-green-700">
      </div>

      <div>
        <p class="text-3xl font-montserrat text-left">Standard Ticket</p>
        <p class="text-2xl font-montserrat mt-2 pb-4">40€</p>
      </div>

      <div class="flex items-center gap-4 justify-center">
        <button
          class="w-14 h-14 border rounded-full text-3xl font-montserrat flex justify-center items-center leading-none">-</button>
        <span class="text-5xl font-openSanz">1</span>
        <button
          class="w-14 h-14 border rounded-full text-3xl font-montserrat flex justify-center items-center bg-red-500 text-white leading-none">+</button>
      </div>
    </div>

    <div class="bg-white px-6 py-4 border-t mt-6">
      <div class="flex justify-between text-center font-montserrat mb-4">
        <span class="flex gap-1">
          <span>Qty:</span>
          <span class="text-green-600 font-montserrat">1</span>
        </span>
        <p class="text-3xl">Total: <b class="text-green-600">40€</b></p>
      </div>

      <div>
        <button class="bg-darkBlue text-white px-6 py-2 rounded-md text-2xl font-montserrat">Proceed ></button>
      </div>
    </div>
  </div>


  <!-- <div class=" bg-gray-50 w-[882px] h-[910px]">
    <div class="bg-white rounded-lg shadow-lg p-6 ">
      <div class="flex justify-between items-center p-1 mt-4">
        <h2 class="text-3xl font-montserrat">Select Tickets</h2>
      </div>
    </div>


    <div class="mt-14 grid- grid-cols-2 gap-4 ">
      <p class="text-md font-montserrat ml-8">Ticket Types</p>
      <p class="text-md font-montserrat mr-8 text-right">Quantity</p>
    </div>


    <div class=" bg-white mt-4 border-b flex justify-between shadow-lg rounded-">
      <div class="flex items-center gap-2 border-l-8 border-green-700">
      </div>


      <div>
        <p class="text-3xl font-montserrat text-left pt-5 -ml-80">Standard Ticket</p>
        <p class="text-2xl font-montserrat mt-6 pb-4 -ml-80 ">40€</p>
      </div>


      <div class="flex items-center gap-4 justify-center mr-6 ">
        <button class="w-14 h-14 border rounded-full text-3xl font-monserrat"> - </button>
        <span class="text-5xl font-openSanz">1</span>
        <button class="w-14 h-14 border rounded-full text-3xl font-monserrat text-center flex justify-center items-center bg-red-500">+</button>
        <button class="w-14 h-14 border rounded-full text-3xl font-montserrat flex justify-center items-center bg-red-500 text-white">+</button>

      </div>

    </div>


    <div class="bg-white px-6 py-4 border-t mt-6">

      <div class=" flex justify-between text-center font-montserrat mb-4">
        <span class="flex gap-1">
          <span>Qty:</span>
          <span class="text-green-600 font-montserrat">1</span>

        </span>

        <p class="text-3xl">Total: <b class="text-green-600">40€</b></p>
      </div>

      <div>

        <button class="bg-darkBlue text-white px-6 py-2 rounded-md text-2xl font-montserrat "> Proceed ></button>

      </div>



    </div>



  </div> -->

  <!-- Modal end -->


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
