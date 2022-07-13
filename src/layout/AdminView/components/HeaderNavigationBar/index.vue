<template>
  <div
    class="HeaderNavigationBar fixed items-center top-0 left-64 z-10 flex w-full justify-between mx-8 mt-8"
  >
    <div class="ml-9 text-left">
      <div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }" class="text-white"
            >Admin</el-breadcrumb-item
          >
          <el-breadcrumb-item>
            {{ currentRouteName }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <p class="font-bold text-white mt-2">
        {{ currentRouteName }}
      </p>
    </div>
    <div class="mr-96 flex items-center gap-8">
      <el-badge :value="3" class="item">
        <el-popover placement="bottom-start" trigger="hover">
          <i
            slot="reference"
            class="el-icon-message-solid text-2xl notification"
          ></i>
        </el-popover>
      </el-badge>
      <img src="@/assets/images/icon/avt.png" alt="avatar" class="h-10" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
<style lang="scss">
.HeaderNavigationBar {
  .el-breadcrumb__inner {
    color: #fff !important;
  }
  .notification {
    color: #fff;
  }
}
</style>
