<template>
  <div class="menu mx-28">
    <div class="text-left mb-5">
      <p class="mt-36 mb-4 font-bold text-red-base uppercase">our menu</p>
      <h2
        class="text-4xl mb-12 font-bold text-black capitalize"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        menu that always
        <br />make you fall in love
      </h2>
    </div>
    <div>
      <menu-food-view />
      <menu-drink-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    MenuFoodView: () =>
      import("@/views/WebView/Home/components/MenuFoodView.vue"),
    MenuDrinkView: () =>
      import("@/views/WebView/Home/components/MenuDrinkView.vue"),
  },
};
</script>
<style lang="scss">
.menu {
  .el-tabs--left .el-tabs__header.is-left {
    width: 20%;
  }
  .el-tabs--left .el-tabs__item.is-left {
    margin-right: 3.8rem;
  }
  .el-tabs--left .el-tabs__active-bar.is-left,
  .el-tabs--left .el-tabs__nav-wrap.is-left::after {
    background-color: theme("colors.red-base");
  }
  .el-tabs--left .el-tabs__item.is-left {
    text-align: left;
  }
  .el-tabs__item.is-active {
    color: white;
    background: #a18ee5;
    box-shadow: 0px 0px 1px #a18ee5, 0px 0px 10px #a18ee5, 0px 0px 5px #a18ee5;
    border-radius: 40px;
    margin: 1rem 2rem 1rem 0.5rem;
    font-size: 16px;
    font-weight: 700;
  }
  .el-carousel__mask {
    background: none;
  }
}
</style>
