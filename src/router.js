import { createWebHistory, createRouter } from 'vue-router'
//nuestros dos ficheros de vistas

//creamos dos rutas, y especificamos cada ruta que fichero/vista irá a abrir
const routes = [
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router