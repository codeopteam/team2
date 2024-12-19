<template>

<div class="flex flex-col items-center justify-center gap-7">

<!-- Modal de Cart con lógica init -->
<div 
  v-if="!showModal" 
  class="bg-gray-50 w-full max-w-screen-sm lg:w-1/2 overflow-y-auto pb-4 min-h-[60vh] flex flex-col mt-10 mb-10 px-4 lg:px-0">
  <!-- Título -->
  <div class="bg-darkBlue w-full shadow-lg rounded-md flex justify-between items-center p-6">
    <h2 class="text-xl font-semibold font-montserrat text-yellowApp">Select Tickets</h2>
  </div>

  <!-- Encabezados Ticket Types y Quantity -->
  <div class="mt-4 flex flex-col items-end w-full">
    <div class="flex text-md font-montserrat text-left pl-8 justify-end items-center w-full">    
    <p class="text-sm font-montserrat ml-8">Price</p>
    <p class="text-sm font-montserrat mr-4 md:mr-8 lg:mr-10 text-right ml-10 md:ml-12 lg:ml-14">Quantity</p>
  </div>
  </div>

  <!-- Lista de Tickets -->
  <ul 
    v-for="(item, index) in cartStore.items" 
    :key="index"
    class="bg-white mt-4 border-b flex flex-col shadow-lg rounded-lg items-end w-full">
    <li
      class="flex h-20 border-l-8 border-yellowApp text-md font-montserrat text-left pl-8 justify-between items-center w-full">
      <span class="w-2/3">{{ item.name }}</span>
      <h6>{{item.priceRanges[0].min}} €</h6>
      <h6></h6>
      <div class="ml-auto pr-8">      
        <div class="flex items-center">
          <button
            class="w-10 h-14 border rounded-full text-2xl font-montserrat flex justify-center items-center leading-none border-none" @click="cartStore.deleteItem(index)" >-
            </button>
          <span class="text-xl font-openSanz">{{ item.quantity }}</span>
          <button
            class="w-8 h-14 border rounded-full text-2xl font-montserrat flex justify-center items-center leading-none border-none" @click="cartStore.addItemToCart(item)">+
            </button>

          <button class="shadow-lg rounded-xl w-6 px-1 ms-1" @click="cartStore.deleteEventInCart(index)">
          <img src="/icon _trash.png" alt="Delete Icon">
        </button>
        </div>
      </div>
    </li>
  </ul>

  <!-- Contenedor Final en la parte inferior -->
  <div class="bg-white px-6 py-4 border-t shadow-xl font-montserrat mt-auto w-full">
    <div class="flex justify-between items-center text-center mb-4">
      <div class="text-lg font-semibold w-1/2">
        <span class="mr-2">Qty:</span>
        <span class="text-bold">{{ cartStore.cartSize }}</span>
      </div>
      <div class="text-lg font-semibold w-1/2">
        <span class="mr-2">Total:</span>
        <span class="text-bold font-bold">{{ cartStore.getTotalPrice }} €</span>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        class="bg-darkBlue text-yellowApp w-11/12 rounded-md text-xl font-montserrat flex items-center justify-center h-12 flex-row"
        @click="showModal = true">
        Proceed >
      </button>
    </div>
  </div>
</div>
<!-- Modal de Cart con lógica end -->


<!-- Inicio modal Pay Now -->
<div 
  v-if="showModal" 
  class="flex flex-col pb-4 justify-center items-center overflow-y-auto bg-gray-50 w-full max-w-screen-sm lg:w-1/2 min-h-[60vh] mt-10 mb-10 gap-5 px-4 lg:px-0">
  <div class="w-full bg-yellowApp flex items-center p-4 rounded-md shadow-lg">
    <button class="border text-5xl border-none mb-2 me-4" @click="showModal=false">←</button>
    <h2 class="text-xl font-semibold font-montserrat">
      Order Summary
    </h2>
   
  </div>

  <div class="w-full max-w-xs md:w-4/6 h-24 bg-white mt-4 shadow-lg rounded-md border-t-4 border-t-yellowApp border">
    <div class="h-full w-full">
      <p class="text-sm font-montserrat text-center font-semibold mt-5">Standard Ticket</p>
      <div class="ml-5">
        <p class="text-xs font-montserrat">EvenTop</p>
        <div class="flex justify-between">
          <p class="text-xs font-montserrat">Your Ticket</p>
          <p class="px-8 text-xs font-montserrat text-darkBlue bg-yellowApp">40€</p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-white px-6 py-4 w-full border-t shadow-xl font-montserrat mt-auto h-48 flex flex-col justify-between">
    <div class="flex justify-evenly text-center w-full font-montserrat text-sm">
      <div>
        <p>Sub Total:</p>
        <p>Tax:</p>
      </div>
      <div>
        <p>40€</p>
        <p>10€</p>
      </div>
    </div>

    <div class="flex justify-center text-sm font-montserrat">
      <p>Order Total:</p>
      <p>50€</p>
    </div>

    <div class="flex justify-center w-full">
      <router-link to="/pay">
      <button
        class="px-4 md:px-8 lg:px-16 rounded-md text-md text-center font-montserrat bg-yellowApp w-full md:w-auto max-w-full text-darkBlue flex items-center justify-center h-12 flex-row gap-4">
        <img src="/bag.png" alt="Shop Icon" class="h-7">Pay Now
      </button>
    </router-link>
    </div>
  </div>
</div>
<!-- Final modal Pay Now -->

</div>



</template>

<script>

import { RouterLink } from 'vue-router';
import { useCartStore } from '../stores/cartStore';
import { mapStores } from 'pinia';

export default {
  name: "Cart",
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    ...mapStores(useCartStore)

  },
  //  mounted() {
  //   this.cartStore.showCart()

  // },
};


</script>
