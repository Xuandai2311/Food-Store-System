<template>
  <div class="footer mx-auto">
    <footer class="LayoutDefault__footer">
      <el-menu
        :default-active="activeMenu"
        class="flex justify-around -bottom-1 pt-2 pb-3"
      >
        <el-menu-item index="Home">
          <i class="icon el-icon-s-home"></i>
          <router-link to="/home" class="grid">Home</router-link>
        </el-menu-item>
        <el-menu-item index="Order">
          <router-link to="/order" class="grid">
            <i class="icon el-icon-s-order"></i>
            Order
          </router-link>
        </el-menu-item>
        <el-menu-item index="Chat">
          <router-link to="/chat" class="grid">
            <i class="icon el-icon-chat-dot-square"></i>
            Chat
          </router-link>
        </el-menu-item>
        <el-menu-item index="Profile">
          <router-link to="/profile" class="grid">
            <i class="icon el-icon-user"></i>
            Profile
          </router-link>
        </el-menu-item>
      </el-menu>
    </footer>
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
.footer {
  .icon {
    font-size: 32px;
  }
  .el-menu-item,
  .el-submenu__title {
    line-height: 2rem;
    display: grid;
    justify-items: center;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: theme("colors.white");
  }
  .el-menu-item.is-active {
    color: theme("colors.red-base");
  }
}
</style>
