<template>
    <div class="bg-[url('../../Hero.png')] h-80 bg-cover p-8" >
      <!-- <p>Página de Inicio</p> -->
       <div class="flex justify-center">
        <div>
        <h1 class="text-2xl font-bold text-white mt-8 font-montserrat"> Don't miss out!</h1>
        <h1 class="text-2xl font-bold text-white mt-2 font-montserrat">Explore the <span class="text-yellowApp">vibrant events</span> happening in Spain.</h1>
      
        <input type="text" 
        class="mt-4 rounded-sm bg-[url('../../Lupa.png')] bg-no-repeat bg-[left_10px_center] bg-[length:20px_20px] pl-9 w-full pb-1" 
        placeholder="City"
        @keydown.enter="handleKeyDown">
      </div> 
    </div>     
      
    </div>
  </template>

  <script>
export default {
  name: "Hero",
  methods: {
    handleKeyDown() {
      this.$router.push("/results"); // Redirige a la ruta '/results'
    }
  }
}
</script>