<template>
  <!-- <h1>Hola Mundo</h1> -->
  <Search></Search>
  <!-- <RouterView></RouterView> -->
</template>

<script>

import Search from './components/Search.vue';
import axios from 'axios';
export default {
  name: "App",
  components: {
    Search,
},

}
</script>

<style></style>