import Vue from "vue";
import VueRouter from "vue-router";
import web from "./web";
import mobile from "./mobile";
import admin from "./admin";
Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...web, ...mobile, ...admin],
});

export default router;
