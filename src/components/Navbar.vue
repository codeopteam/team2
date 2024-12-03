<template>
  <nav class="bg-gray-100 p-4">
    <ul class="flex justify-around">
      <li>
        <router-link to="/" class="text-blue-600 hover:underline">Inicio</router-link>
      </li>
      <li>
        <router-link to="/search" class="text-blue-600 hover:underline">Buscar</router-link>
      </li>
      <li>
        <router-link to="/login" class="text-blue-600 hover:underline">Iniciar Sesión</router-link>
      </li>
      <li>
        <router-link to="/register" class="text-blue-600 hover:underline">Registro</router-link>
      </li>
    </ul>
  </nav>
</template>