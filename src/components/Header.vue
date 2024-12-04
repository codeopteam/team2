<template>
  <header class="bg-blue-600 text-white p-4">
    <h1 class="text-lg font-bold">Soy el Header</h1>
    <Navbar></Navbar>  
  </header>

</template>
<script>
  
  import Navbar from '../components/Navbar.vue'

  export default {
    components: {
        Navbar,
    },
};
</script>

