<template>
  <div class="footer mx-auto">
    <el-menu default-active="1" class="flex justify-around bottom-0 py-2">
      <el-menu-item index="1">
        <i class="icon el-icon-s-home"></i>
        <router-link to="/home" class="grid">Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/order" class="grid">
          <i class="icon el-icon-s-order"></i>
          Order
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/chat" class="grid">
          <i class="icon el-icon-chat-dot-square"></i>
          Chat
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/profile" class="grid">
          <i class="icon el-icon-user"></i>
          Profile
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
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
