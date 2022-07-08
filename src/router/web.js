import Layout from "@/layout/WebView";
export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/WebView/Login/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/WebView/Login/SignUpView.vue"),
  },
  {
    path: "/developing",
    component: Layout,
    redirect: "/developing",
    children: [
      {
        path: "/developing",
        name: "Developing",
        component: () => import("@/views/WebView/DevelopingView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/WebView/Home/HomeView.vue"),
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/menu",
    children: [
      {
        path: "/menu",
        name: "Menu",
        component: () => import("@/views/WebView/Menu"),
      },
    ],
  },
];
