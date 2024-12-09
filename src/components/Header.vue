<template>
  <header class="h-[65px] items-center bg-darkBlue text-white flex justify-end px-12
">
    <div class="flex items-center justify-between space-x-32 flex-grow ">
      <img class="h-[40px]" src="/LogoRectangular.png" alt="Logo de la pagina">
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
  data(){
    return {
      navLeft: [
        {path: "/",
        sectionName: "Home" 
        },
        {path: "/about",
        sectionName: "About" 
        },
        {path: "/contact",
        sectionName: "Contact" 
        },
      ],
      navRight: [
        {path: "/register",
        sectionName: "Register" 
        },
        {path: "/login",
        sectionName: "Login" 
        },
      ],
      };
    },
  };
</script>
