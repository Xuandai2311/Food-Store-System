import Layout from "@/layout/AdminView";
export default [
  {
    path: "/admin",
    name: "Login Admin",
    component: () => import("@/views/AdminView/Signin.vue"),
  },
  {
    path: "/admin/dashboard",
    component: Layout,
    redirect: "/admin/dashboard",
    children: [
      {
        path: "/admin/dashboard",
        name: "Dashboard",
        component: () => import("@/views/AdminView/DashBoardView"),
      },
    ],
  },
  {
    path: "/admin/product",
    component: Layout,
    redirect: "/admin/product",
    children: [
      {
        path: "/admin/product",
        name: "Sản phẩm",
        component: () => import("@/views/AdminView/ProductView"),
      },
    ],
  },
  {
    path: "/admin/category",
    component: Layout,
    redirect: "/admin/category",
    children: [
      {
        path: "/admin/category",
        name: "Phân loại",
        component: () => import("@/views/AdminView/CategoryView"),
      },
    ],
  },
  {
    path: "/admin/customers",
    component: Layout,
    redirect: "/admin/customers",
    children: [
      {
        path: "/admin/customers",
        name: "Khách hàng",
        component: () => import("@/views/AdminView/CustomersView"),
      },
    ],
  },
  {
    path: "/admin/orders",
    component: Layout,
    redirect: "/admin/orders",
    children: [
      {
        path: "/admin/orders",
        name: "Đơn đặt hàng",
        component: () => import("@/views/AdminView/OrdersView"),
      },
    ],
  },
  {
    path: "/admin/staff",
    component: Layout,
    redirect: "/admin/staff",
    children: [
      {
        path: "/admin/staff",
        name: "Nhân viên",
        component: () => import("@/views/AdminView/StaffView"),
      },
    ],
  },
  {
    path: "/admin/settings",
    component: Layout,
    redirect: "/admin/settings",
    children: [
      {
        path: "/admin/settings",
        name: "Cài đặt",
        component: () => import("@/views/AdminView/SettingView"),
      },
    ],
  },
];
