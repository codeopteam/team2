import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Results from './views/Results.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import EventDetail from './views/EventDetail.vue';

//creamos las rutas, y especificamos cada ruta que fichero/vista irá a abrir
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/event/:id',
    name: 'EventDetail',
    component: EventDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;







// import { createWebHistory, createRouter } from 'vue-router'
// import Search from './views/Search.vue'
//nuestros dos ficheros de vistas

//creamos dos rutas, y especificamos cada ruta que fichero/vista irá a abrir
// const routes = [
//   { path: "/", name: "Search", component: Search },
// ]
// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })
// export default router

// export const routes = [
//   { path: "/", name: "home", component: Home },
//   {
//     path: "/film/:id",
//     name: "film",
//     component: Film,
//     children: [
//       { path: "person/:charid", name: "character", component: Character },
//       // la ruta completa seria algo asi /film/1/person/3
//     ],
//   },
//   { path: "/:path(.*)", component: NotFound },
// ];