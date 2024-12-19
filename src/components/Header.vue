<template>
  <header class="h-[65px] bg-darkBlue text-white flex items-center justify-between px-4 md:px-12">
    <div class="flex items-center justify-between w-full">
      <div v-if="$route.path !== '/'">
        <router-link to="/">
          <img
            class="h-[30px] md:h-[40px] w-auto mr-4 md:mr-80"
            src="/LogoRectangular.png"
            alt="Logo de la página"
          >
        </router-link>
      </div>
      <div v-else>
        <img
          class="h-[30px] md:h-[40px] w-auto mr-4 md:mr-80"
          src="/LogoRectangular.png"
          alt="Logo de la página"
        >
      </div>
      <Navbar :navLeft="navLeft" :navRight="navRight"></Navbar>
    </div>
  </header>
</template>



<script>

import Navbar from '../components/Navbar.vue'
// import Button from '../components/Button.vue';

export default {
  components: {
    Navbar,
    // Button,
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
