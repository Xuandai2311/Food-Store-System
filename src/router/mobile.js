import Layout from "@/layout/WebView";
export default [
  {
    path: "/login",
    component: Layout,
    redirect: "/login",
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/WebView/Login/LoginView.vue"),
      },
    ],
  },
];
