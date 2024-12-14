<template>

  <div class="flex flex-col items-center justify-center gap-7">

    <!-- MOdal de Cart con logica init-->
    <div v-if="!showModal"  class="bg-gray-50 w-1/2 overflow-y-auto pb-4 min-h-[60vh] flex flex-col mt-20">
      <!-- Título -->
      <div class="bg-darkBlue shadow-lg rounded-lg flex justify-between items-center p-6">
        <h2 class="text-2xl font-semibold font-montserrat text-yellowApp">Select Tickets</h2>
      </div>

      <!-- Encabezados Ticket Types y Quantity -->
      <div class="mt-14 grid grid-cols-2 gap-4 w-auto">
        <p class="text-md font-montserrat ml-8">Ticket Types</p>
        <p class="text-md font-montserrat mr-10 text-right">Quantity</p>
      </div>

      <!-- Lista de Tickets -->
      <ul v-for="(item, index) in cartStore.items"
        class="bg-white mt-4 border-b flex flex-col shadow-lg rounded-lg items-end w-auto">
        <li
          class="flex h-32 border-l-8 border-yellowApp text-xl font-montserrat text-left pl-8 justify-between items-center w-full">
          <span class="w-2/3">{{ item.name }}</span>
          <div class="ml-auto pr-8">
            <button class="border border-orange-600 rounded-md px-1 bg-orange-600" @click="cartStore.deleteItem(index)">
              x
            </button>
          </div>
        </li>
      </ul>

      <!-- Contenedor Final en la parte inferior -->
      <div class="bg-white px-6 py-4 border-t shadow-xl font-montserrat mt-auto w-auto">
        <div class="flex justify-between items-center text-center mb-4">
          <div class="text-lg font-semibold w-1/2">
            <span class="mr-2">Qty:</span>
            <span class="text-bold">1</span>
          </div>
          <div class="text-lg font-semibold w-1/2">
            <span class="mr-2">Total:</span>
            <span class="text-bold font-bold">200</span>
          </div>
        </div>

        <div class="flex justify-center">
          <button class="bg-darkBlue text-yellowApp px-60 py-6 rounded-md text-xl font-montserrat mt-7" @click="showModal = true">
            Proceed >
          </button>
        </div>
      </div>


    </div>
    <!-- MOdal de Cart con logica end-->


    <!-- inicio modal Pay Now  -->

    <div v-if="showModal" class="container bg-gray-50 w-[882px] h-[860px] mt-20">
      <div class=" bg-yellowApp rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center p-1">
          <h2 class="text-4xl font-montserrat">
            < Order Sumary</h2>
        </div>
      </div>

    

      <div class="bg-white mt-24 shadow-lg rounded-lg ml-40 mr-32">
        <div class="border-t-8 border-yellowApp">

          <div>
            <p class="text-4xl font-montserrat text-center mt-8">Standard Ticket</p>
            <div class="ml-5 mt-11">
              <p class="text-2xl font-montserrat mt-2">EvenTop</p>

              <div class="flex justify-between pb-12">
                <p class="text-2xl font-montserrat">Your Ticket </p>
                <p class="px-8 py-1 text-xl font-montserrat text-darkBlue bg-yellowApp">40€</p>
              </div>

            </div>
          </div>

        </div>

      </div>

      <div class="bg-white px-6 py-4 border-t shadow-xl mt-32">

        <div class=" flex justify-between font-montserrat text-3xl mb-8 ml-40 mr-40 mt-8">

          <div>
            <p> Sub Total:</p>
            <p> Tax:</p>
          </div>

          <div>
            <p> 40€</p>
            <p> 10€</p>
          </div>

        </div>



        <div class="bg-slate-400 m-1 h-0.5 mb-10"> </div>

        <div class=" flex justify-center gap-48 text-5xl font-montserrat">
          <p>Order Total:</p>
          <p>50€</p>

        </div>


        <div class="flex justify-center">
          <button class="px-60 py-6 rounded-md text-4xl font-montserrat mt-7 bg-yellowApp text-darkBlue">
            < Pay Now>
          </button>
        </div>
      </div>
    </div>





  </div>


</template>

<script>

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
