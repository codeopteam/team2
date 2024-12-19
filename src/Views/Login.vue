<template>
  <div class="flex flex-col md:flex-row">
    <!-- Primer div con fondo oscuro (oculto en móviles) -->
    <div class="hidden md:flex w-5/12 h-screen bg-darkBlue justify-center items-center">
      <p class="text-white text-5xl w-5/6 font-montserrat">
        Discover tailored <br />
        events. <br />
        Sign up for personalized <br />
        recommendations <br />
        today!
      </p>
    </div>

    <!-- Segundo div con fondo blanco (ocupa el ancho completo en móviles) -->
    <div class="w-full md:w-7/12 h-screen bg-darkBlue">
      <div
        class="w-full flex flex-col rounded-none md:rounded-l-[50px] h-screen bg-white justify-center items-left px-6 md:px-32"
      >
        <div>
          <h2 class="text-2xl font-bold text-center mb-6 text-[#2B293D]">Login</h2>
          <div class="flex flex-col md:flex-row gap-2">
            <button
              class="flex items-center justify-center w-full md:w-1/2 py-2 mb-2 md:mb-0 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              <img src="/googleIcon.png" alt="Google" class="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            <button
              class="flex items-center justify-center w-full md:w-1/2 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              <img src="/facebookicon.png" alt="Facebook" class="w-5 h-5 mr-2" />
              Sign up with Facebook
            </button>
          </div>

          <div class="flex items-center my-6">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="mx-4 text-gray-500">OR</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>

          <form @submit.prevent="handleCreateAccount">
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-1" for="email">
                E-mail Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your e-mail"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div class="mb-6 relative">
              <label class="block text-gray-700 font-medium mb-1" for="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span class="absolute right-3 top-11 text-gray-400 cursor-pointer">
                👁️
              </span>
            </div>

            <div class="flex flex-col">
              <button
                type="submit"
                class="w-full bg-gray-800 text-white p-3 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Create Account
              </button>
              <p class="text-gray-500 text-center mt-4 text-sm">
                Already have an account?
                <a href="#" class="text-blue-500 font-semibold hover:underline">
                  Log In
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de Registro Exitoso -->
  <div
    v-if="showSuccessModal"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 class="text-xl font-bold mb-4">Registro exitoso</h3>
      <p class="text-gray-600">¡Tu cuenta se ha creado correctamente!</p>
      <button
        @click="showSuccessModal = false"
        class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Cerrar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorSections",
  data() {
    return {
      showSuccessModal: false,
    };
  },
  methods: {
    handleCreateAccount() {
      this.showSuccessModal = true;
    },
  },
};
</script>

<style scoped></style>
