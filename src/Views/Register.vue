<template>
  <div class="flex flex-row">


    <!-- Primer div con fondo oscuro -->
    <div class="w-5/12 h-screen bg-darkBlue flex justify-center items-center">
      <p class="text-white text-5xl w-5/6 font-montserrat">Discover tailored <br> events. <br>
        Sign up for personalized <br> recommendations <br> today!</p>
    </div>
    <!-- Segundo div con fondo blanco -->
    <div class="w-7/12 h-screen bg-darkBlue">
      <div
        class="border border-red-800 w-full flex flex-col rounded-l-[50px] rounded h-screen bg-white justify-center items-left">

        <div class="mx-32">

          <h2 class="text-3xl font-bold text-center mb-6">Create Account</h2>
          <div class="flex border">

            <button
              class="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
              <img src="/googleIcon.png" alt="Google" class="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            <button
              class="flex items-center justify-center w-1/2 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
              <img src="/facebookicon.png" alt="Facebook" class="w-5 h-5 mr-2" />
              Sign up with Facebook
            </button>



          </div>

          <div class="flex items-center my-6">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="mx-4 text-gray-500">OR</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>

          <form action="">

            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-1" for="fullname">Full Name</label>
              <input id="fullname" type="text" placeholder="Enter your full name"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>

            <div class="mb-6 relative">
              <label class="block text-gray-700 font-medium mb-1" for="password">Password</label>
              <input id="password" type="password" placeholder="Enter password"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <span class="absolute right-3 top-11 text-gray-400 cursor-pointer">
                <!-- Icono de ojo (placeholder) -->
                👁️
              </span>
            </div>


            <div class="mb-6 relative">
              <label class="block text-gray-700 font-medium mb-1" for="password">Password</label>
              <input id="password" type="password" placeholder="Enter password"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <span class="absolute right-3 top-11 text-gray-400 cursor-pointer">
                <!-- Icono de ojo (placeholder) -->
                👁️
              </span>
            </div>

            <div class="flex flex-col">

              <button type="submit"
                class="w-full bg-gray-800 text-white p-3 rounded-lg font-medium hover:bg-gray-900 transition">
                Create Account
              </button>
              <p class="text-gray-500 text-center mt-4 text-sm">
                Already have an account?
                <a href="#" class="text-blue-500 font-semibold hover:underline">Log In</a>
              </p>
            </div>
          </form>

        </div>
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
