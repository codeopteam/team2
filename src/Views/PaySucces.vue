<template>
<!-- Inicio modal Pay Now -->
 <div class="flex flex-col items-center justify-center gap-7">
<div  
  class="flex flex-col pb-4 justify-center items-center bg-gray-50 w-full max-w-screen-sm lg:w-1/2 min-h-[60vh] mt-10 mb-10 gap-5 px-4 lg:px-0">
  <div class="w-full bg-yellowApp flex items-center rounded-md shadow-lg text-center justify-center">   
    <h2 class="text-xl font-semibold font-montserrat my-8">
        You have made the payment successfully!        
    </h2>   
  </div>
  <p class="text-sm font-montserrat text-center font-semibold mt-5">
    It is a simulation of the payment process.</p>

  <div class="w-full max-w-xs md:w-4/6 h-40 bg-white mt-4 shadow-lg rounded-md border-t-4 border-t-yellowApp border">
    <div class="h-full w-full flex text-center flex-col">
      <p class="text-sm font-montserrat text-center font-semibold mt-5">
        You will receive an email with the tickets.</p>
        <p class="text-sm font-montserrat text-center font-semibold mt-5">
            It is a simulation.</p>
        <p class="text-xs font-montserrat mt-4">EvenTop TEAM</p>
      <div class="ml-5 flex text-center">      
      </div>
    </div>
  </div>

  <div
    class="bg-white px-6 py-4 w-full border-t shadow-xl font-montserrat mt-auto h-24 flex flex-col justify-between rounded-md">
    <div class="flex justify-evenly text-center w-full font-montserrat text-sm">
        <p class="text-sm font-montserrat text-center font-semibold mt-5 flex">
            Enjoy the event!</p>
    </div>

    <div class="flex justify-center text-sm font-montserrat">
     
    </div>

  
  </div>
</div>
</div>
<!-- Final modal Pay Now -->
</template>

<script>

export default {
    name: "PaySucces",
}

</script>