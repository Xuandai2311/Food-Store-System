<template>
  <div class="footer">
    <el-menu
      default-active="5"
      class="flex fixed justify-center bottom-0 w-full py-2"
    >
      <el-menu-item index="1">
        <i class="icon el-icon-s-home"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="icon el-icon-s-order"></i>
        <span slot="title">Order</span>
      </el-menu-item>
      <el-menu-item index="3">
        <img
          class="relative bottom-8"
          src="@/assets/images/card.svg"
          alt="Cards"
        />
      </el-menu-item>
      <el-menu-item index="4">
        <i class="icon el-icon-chat-dot-square"></i>
        <span slot="title">Chat</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="icon el-icon-user"></i>
        <span slot="title">Profile</span>
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
    color: theme("colors.red-light");
  }
}
</style>
