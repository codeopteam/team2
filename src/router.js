import { createWebHistory, createRouter } from 'vue-router'
import Search from './Views/Search.vue'
//nuestros dos ficheros de vistas

//creamos dos rutas, y especificamos cada ruta que fichero/vista irá a abrir
const routes = [
  { path: "/", name: "Search", component: Search },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

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