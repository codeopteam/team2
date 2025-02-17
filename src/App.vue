<template>
  <div id="app">
    <Layout />
  </div>
</template>



<script>
import { watch } from 'vue'; 
import Layout from '@/views/Layout.vue';
import { useAuthStore } from './stores/AuthStore';

export default {
  components: {
    Layout,
  },
  setup() {
    const authStore = useAuthStore();

    // Reaccionar a los cambios en el usuario
    watch(
      () => authStore.user, // Observar el estado del usuario
      (newUser) => {
        if (!newUser) {
          console.log("Usuario deslogueado. Puedes redirigir aquí.");
          // Redirigir al login o mostrar una alerta
          // Por ejemplo, usar vue-router para redirigir:
          // router.push('/login');
        } else {
          console.log("Usuario logueado:", newUser);
        }
      }
    );

    return {
      authStore,
    };
  },

  mounted() {
  const authStore = useAuthStore();
  authStore.fetchUser().then(user => {
    if (user) {
      console.log("Usuario cargado en App.vue:", user);
    } else {
      console.log("No hay usuario logueado al refrescar la página.");
    }
  });
}

};
</script>




<!-- <template>
  <Search></Search>
</template>

<script>

import Search from './views/Search.vue';
export default {
  name: "App",
  components: {
    Search,
},

}
</script>

<style></style> -->
