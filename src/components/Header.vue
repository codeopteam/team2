<template>
  <header class="bg-blue-600 text-white p-4">
    <h1 class="text-lg font-bold">Soy el Header</h1>
    <Navbar></Navbar>
    <Search></Search>
  </header>

</template>
<script>
  import Search from '../components/Search.vue'
  import Navbar from '../components/Navbar.vue'

  export default {
    components: {
        Search,
        Navbar,
    },
};
</script>

