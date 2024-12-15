<template>
  <header class="h-[65px] bg-darkBlue text-white flex items-center justify-between px-12">
    <div class="flex items-center justify-between w-full space-x-32">
      <div v-if="$route.path !== '/'">
        <router-link to="/">
          <img class="h-[40px]" src="/LogoRectangular.png" alt="Logo de la pagina">
      </router-link>
      </div>
      <div v-else>
        <img class="h-[40px]" src="/LogoRectangular.png" alt="Logo de la pagina">
      </div>
        
      <Navbar :navLeft="navLeft" :navRight="navRight"></Navbar>
    </div>

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
  data() {
    return {
      navLeft: [
        {
          path: "/",
          sectionName: "Home"
        },
        {
          path: "/about",
          sectionName: "About"
        },
        {
          path: "/contact",
          sectionName: "Contact"
        },
      ],
      navRight: [
        {
          path: "/register",
          sectionName: "Register"
        },
        {
          path: "/login",
          sectionName: "Login"
        },
      ],
    };
  },
};
</script>
