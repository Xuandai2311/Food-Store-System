import Layout from "@/layout/MobileView";
export default [
  {
    path: "/mobile/",
    name: "mobile",
    component: () => import("@/views/MobileView/Starteed/StarteedView.vue"),
  },
  {
    path: "/mobile/login",
    name: "Login MobileView",
    component: () => import("@/views/MobileView/Starteed/components/LoginView"),
  },
  {
    path: "/mobile/register",
    name: "Register MobileView",
    component: () =>
      import("@/views/MobileView/Starteed/components/RegisterView"),
  },
  {
    path: "/mobile/developing",
    component: Layout,
    redirect: "/developing",
    children: [
      {
        path: "/mobile/developing",
        name: "Developing MobileView",
        component: () => import("@/views/MobileView/DevelopView.vue"),
      },
    ],
  },
  {
    path: "/mobile/home",
    component: Layout,
    redirect: "/mobile/home",
    children: [
      {
        path: "/mobile/home",
        name: "Home MobileView",
        component: () => import("@/views/MobileView/Home/HomeView.vue"),
      },
    ],
  },
  {
    path: "/mobile/home",
    component: Layout,
    children: [
      {
        path: "/mobile/home/menu_food",
        name: "DetailMenu MobileView",
        component: () =>
          import(
            "@/views/MobileView/Home/components/home/detailmenu/DetailMenu.vue"
          ),
      },
    ],
  },
  {
    path: "/mobile/",
    component: Layout,
    children: [
      {
        path: "/mobile/order",
        name: "Order MobileView",
        component: () =>
          import("@/views/MobileView/Home/components/order/OrderView.vue"),
      },
    ],
  },
  {
    path: "/mobile/order",
    component: Layout,
    children: [
      {
        path: "/mobile/order/Cart",
        name: "Cart MobileView",
        component: () =>
          import("@/views/MobileView/Home/components/order/OrderView.vue"),
      },
    ],
  },
  {
    path: "/mobile/order/Cart/loading",
    component: () =>
      import(
        "@/views/MobileView/Home/components/order/components/LoadingOrder.vue"
      ),
  },
  {
    path: "/mobile/",
    component: Layout,
    children: [
      {
        path: "/mobile/chat",
        name: "Chat MobileView",
        component: () =>
          import("@/views/MobileView/Home/components/chat/ChatView.vue"),
      },
    ],
  },
  {
    path: "/mobile/",
    component: Layout,
    children: [
      {
        path: "/mobile/profile",
        name: "Profile MobileView",
        component: () =>
          import("@/views/MobileView/Home/components/profile/ProfileView.vue"),
      },
    ],
  },
  {
    path: "/mobile/profile",
    component: Layout,
    children: [
      {
        path: "/mobile/profile/edit-profile",
        name: "EditProfile MobileView",
        component: () =>
          import(
            "@/views/MobileView/Home/components/profile/components/EditProfile.vue"
          ),
      },
    ],
  },
];
