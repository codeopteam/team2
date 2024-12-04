import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from "./Views/Home.vue";
import Results from "./views/Results.vue";
import EventDetail from "./views/EventDetail.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
  },
  {
    path: "/event/:id",
    name: "EventDetail",
    component: EventDetail,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
