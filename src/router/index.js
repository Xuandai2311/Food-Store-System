import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailMenu from "@/views/MobileView/Home/components/DetailMenu.vue";
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
    component: () =>
      import("@/views/MobileView/Starteed/components/LoginView.vue"),
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
    component: DetailMenu,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
