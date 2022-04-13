<template>
  <div>
    <el-menu default-active="1" class="mt-20 grid gap-10">
      <el-menu-item index="1">
        <img src="@/assets/images/home.svg" alt="Home" />
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="2">
        <img src="@/assets/images/sale.svg" alt="Menu" />
        <span slot="title">Menu</span>
      </el-menu-item>
      <el-menu-item index="3">
        <img src="@/assets/images/message.svg" alt="message" />
        <span slot="title">Review</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  fill: red;
}
</style>
