import { createRouter, createWebHistory } from "vue-router";

// Import views
import Home from "./Views/Home.vue";
import Results from "./Views/Results.vue";
import EventDetail from "./Views/EventDetail.vue";
import About from "./Views/About.vue";
import Login from "./Views/Login.vue";
import Register from "./Views/Register.vue";
import Contact from "./Views/Contact.vue";
import Cart from "./Views/Cart.vue";
import NotFound from "./Views/NotFound.vue"
import PaySucces from "./Views/PaySucces.vue";
import WorkInProgress from "./views/WorkInProgress.vue";
import Video from "./views/video.vue";
import Interested from "./Views/Interested.vue";

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
  {
    path: "/interested",
    name: "Interested",
    component: Interested,
  },
  {
    path: "/pay",
    name: "PaySucces",
    component: PaySucces,
  },
  {
    path: "/wip",
    name: "WorkInProgress",
    component: WorkInProgress,
  },
  {
    path: "/video",
    name: "Video",
    component: Video,
  },
  {
    path: "/:pathMatch(.*)*", 
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
