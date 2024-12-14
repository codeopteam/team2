<template>

  <div class="flex flex-col items-center justify-center gap-7">

    <!-- MOdal de Cart con logica init-->
    <div class="border border-red-800 bg-gray-50 w-1/2 overflow-y-auto pb-4 min-h-[60vh] flex flex-col mt-20">
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
        <div class="flex justify-between text-center mb-4">
          <span class="text-xl">
            <span class="ml-72">Qty:</span>
            <span class="text-darkBlue"> 1 </span>
          </span>
          <p class="text-xl">Total: <b class="text-darkBlue mr-60 font-montserrat">40€</b></p>
        </div>

        <div class="flex justify-center">
          <button class="bg-darkBlue text-yellowApp px-60 py-6 rounded-md text-xl font-montserrat mt-7">Proceed
            ></button>
        </div>
      </div>
    </div>
    <!-- MOdal de Cart con logica end-->


    <!-- Modal init Proceed -->

    <!-- <div class="border border-red-800 bg-gray-50 w-[882px] h-[860px] mb-44">
      <div class="bg-darkBlue rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center p-1">
          <h2 class="text-4xl font-montserrat text-yellowApp">Select Tickets</h2>
        </div>
      </div>

      <div class="mt-14 grid grid-cols-2 gap-4">
        <p class="text-md font-montserrat ml-8">Ticket Types</p>
        <p class="text-md font-montserrat mr-10 text-right">Quantity</p>
      </div>

      <div class="bg-white mt-4 border-b flex justify-between shadow-lg rounded-lg">
        <div class="flex items-center gap-2 border-l-8 border-yellowApp">
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

      <div class="bg-white px-6 py-4 border-t mt-96 shadow-xl font-montserrat">
        <div class="flex justify-between text-center mb-4">
          <span class=" text-3xl">
            <span class=" ml-72">Qty:</span>
            <span class="text-darkBlue"> 1 </span>
          </span>
          <p class="text-3xl">Total: <b class="text-darkBlue mr-60 font-montserrat">40€</b> </p>
        </div>

        <div class="flex justify-center">
          <button class="bg-darkBlue text-yellowApp px-60 py-6 rounded-md text-4xl font-montserrat mt-7">Proceed
            ></button>
        </div>
      </div>
    </div> -->

    <!-- Fin modal Proceed  -->



    <!-- inicio modal Pay Now  -->


    <div class="border border-red-800 container bg-gray-50 w-[882px] h-[860px]">
      <div class=" bg-yellowApp rounded-lg shadow-lg p-6">
        <div class="flex justify-between items-center p-1">
          <h2 class="text-4xl font-montserrat">
            < Order Sumary</h2>
        </div>
      </div>

      <!-- <div class="mt-14 grid grid-cols-2 gap-4">
      <p class="text-md font-montserrat ml-8">Ticket Types</p>
      <p class="text-md font-montserrat mr-10 text-right">Quantity</p>
    </div> -->

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
  computed: {
    ...mapStores(useCartStore)

  },
  //  mounted() {
  //   this.cartStore.showCart()

  // },
};


</script>
