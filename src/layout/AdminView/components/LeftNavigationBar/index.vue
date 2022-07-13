<template>
  <div class="LeftNavigationBar fixed top-0 bottom-0 left-0 z-50">
    <div
      class="HeightNavbar m-6 p-3 overflow-auto border-0 shadow-2xl rounded-2xl bg-white"
    >
      <div>
        <router-link class="flex items-center gap-3 mb-4" to="/admin/dashboard">
          <img
            src="@/assets/images/Web/logo.png"
            class="navbar-brand-img h-12"
            alt="logo"
          />
          <span class="font-semibold">Food Now</span>
        </router-link>
        <hr class="mt-0 horizontal" />
        <el-menu
          :default-active="activeMenu"
          class="el-menu-vertical-demo grid gap-4"
        >
          <el-menu-item index="Dashboard">
            <router-link to="/admin/dashboard" class="flex items-center">
              <i class="el-icon-s-platform dashboard"></i>
              Dashboard
            </router-link>
          </el-menu-item>
          <el-menu-item index="Sản phẩm">
            <router-link to="/admin/product" class="flex items-center">
              <i class="el-icon-fork-spoon product"></i>
              Sản phẩm
            </router-link>
          </el-menu-item>
          <el-menu-item index="Phân loại">
            <router-link to="/admin/category" class="flex items-center">
              <i class="el-icon-tickets Category"></i>
              Phân loại
            </router-link>
          </el-menu-item>
          <el-menu-item index="Khách hàng">
            <router-link to="/admin/customers" class="flex items-center">
              <i class="el-icon-s-custom Customers"></i>
              Khách hàng
            </router-link>
          </el-menu-item>
          <el-menu-item index="Đơn đặt hàng">
            <router-link to="/admin/orders" class="flex items-center">
              <i class="el-icon-shopping-cart-full Orders"></i>
              Đơn đặt hàng
            </router-link>
          </el-menu-item>
          <el-menu-item index="Nhân viên">
            <router-link to="/admin/staff" class="flex items-center">
              <i class="el-icon-user Staff"></i>
              Nhân viên
            </router-link>
          </el-menu-item>
          <el-menu-item index="Cài đặt">
            <router-link to="/admin/settings" class="flex items-center">
              <i class="el-icon-setting Setting"></i>
              Cài đặt
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeMenu() {
      const activeMenu = this.$route.name;
      return activeMenu;
    },
  },
};
</script>

<style lang="scss">
.LeftNavigationBar {
  max-width: 15.625rem !important;
  .HeightNavbar {
    height: 95vh;
    width: 15.625rem !important;
  }
  .horizontal {
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
    background-color: transparent;
    height: 1px;
    border: 0;
    opacity: 0.25;
  }
  .dashboard {
    color: #7366e4;
  }
  .product {
    color: #f55341;
  }
  .el-menu {
    border: none;
  }
  .el-menu-item.is-active {
    color: #2dce89;
    font-size: 17px;
    font-weight: 700;
  }
}
</style>
