import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Community from "../views/Community.vue";
import Analyze from "../views/Analyze.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/community",
    name: "Community",
    component: Community,
  },
  {
    path: "/analyze",
    name: "Analyze",
    component: Analyze,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
