<template>
  <nav class="p-4 flex space-x-40">
    <ul class="flex space-x-8">
      <li>
        <router-link to="/" class="text-whte-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">Home</router-link>
      </li>
      <li>
        <router-link to="/results" class="text-whte-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">Search</router-link>
      </li>
      <li>
        <router-link to="/login" class="text-whte-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">About</router-link>
      </li>
      <li>
        <router-link to="/contac" class="text-whte-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">Contact</router-link>
      </li>
    </ul>
    <ul class="flex space-x-8">
      <li>
        <router-link to="/register" class="text-whte-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">Register</router-link>
      </li>
      <li>
        <router-link to="/login" class="text-whte-600 hover:border-b-2 font-montserrat tracking-wide hover:border-yellowApp">Login</router-link>
      </li>
    </ul>
  </nav>
</template>