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
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/MobileView/Home/HomeView.vue"),
      },
    ],
  },
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "/home/menu_food",
        name: "Home",
        component: () =>
          import(
            "@/views/MobileView/Home/components/home/detailmenu/DetailMenu.vue"
          ),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/order",
        name: "Order",
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
        name: "Chat",
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
        name: "Profile",
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
