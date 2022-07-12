import Layout from "@/layout/MobileView";
export default [
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
    redirect: "/developing",
    children: [
      {
        path: "/developing",
        name: "Developing",
        component: () => import("@/views/MobileView/DevelopView.vue"),
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
    path: "/order",
    component: Layout,
    children: [
      {
        path: "/order/Cart",
        name: "Order",
        component: () =>
          import("@/views/MobileView/Home/components/order/OrderView.vue"),
      },
    ],
  },
  {
    path: "/order/Cart/loading",
    component: () =>
      import(
        "@/views/MobileView/Home/components/order/components/LoadingOrder.vue"
      ),
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
  {
    path: "/profile",
    component: Layout,
    children: [
      {
        path: "/profile/edit-profile",
        name: "Profile",
        component: () =>
          import(
            "@/views/MobileView/Home/components/profile/components/EditProfile.vue"
          ),
      },
    ],
  },
];
