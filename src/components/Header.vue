<template>
  <header class="bg-gray-600 text-white p-4 flex justify-around">
    <img src="../../public/LogoRectangular.png" alt="Logo de la pagina">
    <Navbar></Navbar> 
    <Button></Button> 
  </header>

</template>
<script>
  
  import Navbar from '../components/Navbar.vue'
  import Button from '../components/Button.vue';

  export default {
    components: {
        Navbar,
        Button,
    },
};
</script>

