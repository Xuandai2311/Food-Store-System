<template>
  <div class="starteed bg-bgStarteed-be h-100">
    <h1 class="text-6xl font-bold text-white pt-12 text-left pl-11">
      Food for Everyone
    </h1>
    <img
      src="@/assets/images/starteed.png"
      alt="starteed"
      class="pt-6 pb-4 mx-auto"
    />
    <el-button @click="drawer = true" class="button-base"
      >Get starteed</el-button
    >
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :withHeader="false"
    >
      <router-link
        to="/login"
        tag="button"
        @click="drawer = true"
        class="my-8 button-base"
        >Login</router-link
      >
      <router-link
        to="/register"
        tag="button"
        @click="drawer = true"
        class="text-red-base text-base font-semibold bg-white w-4/5 h-16 border-0 rounded-4xl"
        >Register</router-link
      >
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "btt",
    };
  },
};
</script>

<style lang="scss">
.starteed {
  .el-drawer__open .el-drawer.btt {
    border-radius: 1.25rem 1.25rem 0 0;
    background: theme("colors.bgStarteed.white");
  }
}
</style>
