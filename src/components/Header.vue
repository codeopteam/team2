<template>
  <header class=" h-[65px] items-center bg-darkBlue text-white flex justify-end px-12
">
    <div class="flex items-center justify-betwween space-x-32 flex-grow ">
      <img class="h[40px]" src="/LogoRectangular.png" alt="Logo de la pagina">
      <Navbar section1="Home" section2="About" section3="Contact" />
    </div>

    <div class="flex space-x-8 items-center">
      <Navbar section4="Register" section5="Login" section6="Cart" />
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
