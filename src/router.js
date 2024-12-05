import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from "./Views/Home.vue";
import Results from "./Views/Results.vue";
import EventDetail from "./Views/EventDetail.vue";
import About from "./Views/About.vue";
import Login from "./Views/Login.vue";
import Register from "./Views/Register.vue";
import Contact from "./Views/Contact.vue";
import Cart from "./Views/Cart.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/results/:city",
    name: "Results",
    component: Results,
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    component: EventDetail,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
