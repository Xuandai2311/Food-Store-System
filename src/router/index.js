import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
Vue.use(VueRouter);
import Layout from "@/layout/MobileView";
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
    path: "/",
    component: Layout,
    children: [
      {
        path: "/home",
        component: () => import("@/views/MobileView/Home/HomeView.vue"),
      },
    ],
  },
  {
    path: "/home/menu",
    name: "menu",
    component: () =>
      import("@/views/MobileView/Home/components/detailmenu/DetailMenu"),
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/order",
        component: () =>
          import("@/views/MobileView/Home/components/order/OrderView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/chat",
        component: () =>
          import("@/views/MobileView/Home/components/chat/ChatView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/profile",
        component: () =>
          import("@/views/MobileView/Home/components/profile/ProfileView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
