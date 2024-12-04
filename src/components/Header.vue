<template>
  <header class=" h-[65px] items-center bg-darkBlue text-white flex justify-evenly">
    <img class="h[40px]" src="../../public/LogoRectangular.png" alt="Logo de la pagina">
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

