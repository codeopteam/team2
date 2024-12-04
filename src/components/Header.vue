<template>
  <header class=" h-[65px] items-center bg-darkBlue text-white flex justify-around px-12
">
<div class="flex items-center justify-center space-x-20 flex-grow ">
  <img class="h[40px] pl-6" src="../../public/LogoRectangular.png" alt="Logo de la pagina">
    <Navbar section1="Home"
    section2="About"
    section3="Contact"/> 
</div>
    
    <div class="flex space-x-8 items-center">
    <Navbar section4="Register"
    section5="Login"
    />   
    <Button></Button> 
    </div>
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

