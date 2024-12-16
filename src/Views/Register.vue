<template>
  <div class="flex flex-row">
    <!-- Primer div con fondo oscuro -->
    <div class="w-2/5 h-screen bg-darkBlue flex justify-center items-center">
      <p class="text-white text-5xl w-5/6 font-montserrat">Discover tailored <br> events. <br>
        Sign up for personalized <br> recommendations <br> today!</p>
    </div>
    <!-- Segundo div con fondo blanco -->
    <div class="w-2/5 h-screen bg-darkBlue">
      <div class="flex flex-col w-full rounded-l-[50px] rounded h-screen bg-white justify-center items-left">
        <p class="text-black">Creatte Account</p>
        <div class="border">
          <div>Google</div>
          <div>Facebook</div>
          <div>linea</div>
        </div>
        <form action="">
          <input type="text">
          <input type="text">
          <input type="text">
          <button>Create Account</button>
          <a href="">Already have an account? Log In <span>Log In</span></a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorSections'
};
</script>

<style scoped>
/* Puedes añadir más estilos si lo necesitas */
</style>
