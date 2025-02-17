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
            <!-- <button
              class="flex items-center justify-center w-full md:w-1/2 py-2 mb-2 md:mb-0 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              <img src="/googleIcon.png" alt="Google" class="w-5 h-5 mr-2" />
              Sign up with Google
            </button> -->
            <!-- <button
              class="flex items-center justify-center w-full md:w-1/2 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition"
            >
              <img src="/facebookicon.png" alt="Facebook" class="w-5 h-5 mr-2" />
              Sign up with Facebook
            </button> -->
          </div>

          <!-- <div class="flex items-center my-6">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="mx-4 text-gray-500">OR</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div> -->
          <!-- Formulario -->
          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <label class="block text-gray-700 font-medium mb-1" for="emailLogin">
                E-mail Address
              </label>
              <input
                id="emailLogin"
                type="email"
                placeholder="Enter your e-mail"
                v-model="emailLogin"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div class="mb-6 relative">
              <label class="block text-gray-700 font-medium mb-1" for="passwordLogin">
                Password
              </label>
              <input
                id="passwordLogin"
                type="password"
                placeholder="Enter password"
                v-model="passwordLogin"
                class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <!-- <span class="absolute right-3 top-11 text-gray-400 cursor-pointer">
                👁️
              </span> -->
            </div>

            <!-- Mensajes de error o éxito -->
            <div v-if="errorMessage" class="text-red-500 mb-4">
              {{ errorMessage }}
            </div>

            <div class="flex flex-col">
              <button
                type="submit"
                class="w-full bg-gray-800 text-white p-3 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Login
              </button>
              <p class="text-gray-500 text-center mt-4 text-sm">
                Have you not registered yet?
                <a href="./register" class="text-blue-500 font-semibold hover:underline">
                  Register
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
      <!-- <h3 class="text-xl font-bold mb-4">Registro exitoso</h3> -->
      <!-- <p class="text-gray-600">¡Tu cuenta se ha creado correctamente!</p> -->
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
import { useAuthStore } from '../stores/authStore';

export default {
  name: "Login",
  data() {
    return {
      emailLogin:"",
      passwordLogin: "",
      errorMessage: null,
      loading: false,     
    };
  },
  methods: {
    async handleLogin() {
      if (!this.emailLogin || !this.passwordLogin) {
      console.error("Email and password are required.");
      return;
    }
      const authStore = useAuthStore();
      this.loading = true;
      this.errorMessage = null;

      try {
        await authStore.login(this.emailLogin, this.passwordLogin); // Llamamos al método login
        console.log("Usuario logueado con éxito:", authStore.user); // Comprobamos el usuario logueado
        this.$router.push("/"); // Redirige a home
      } catch (error) {
        console.error("Login error:", error);
        this.errorMessage = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
