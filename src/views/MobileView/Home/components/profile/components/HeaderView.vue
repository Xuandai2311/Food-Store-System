<template>
  <div class="header h-184.5 relative">
    <router-link
      to="/mobile/developing"
      class="absolute bottom-8 mx-8 text-left flex items-center gap-4"
    >
      <img class="h-16" src="@/assets/images/icon/avt.png" alt="" />
      <h3 class="text-white font-bold text-lg">Lê Xuân Đại</h3>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  background-image: url(@/assets/images/bg-header-profile.png);
  background-size: 390px 196px;
}
</style>
