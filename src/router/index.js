import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "@/views/MobileView/Home/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/MobileView/Starteed/components/LoginView"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("@/views/MobileView/Starteed/components/RegisterView"),
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/home/menu",
    name: "menu",
    component: () =>
      import("@/views/MobileView/Home/components/detailmenu/DetailMenu"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
