<template>
  <div class="">
    <div class="bg-Header-Admin absolute top-0 w-full"></div>
    <header-navigation-bar />
    <div class="main-container ml-72 mt-28">
      <app-main />
    </div>
    <left-navigation-bar />
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
import LeftNavigationBar from "./components/LeftNavigationBar";
import HeaderNavigationBar from "./components/HeaderNavigationBar";
export default {
  name: "Layout",
  components: {
    AppMain,
    LeftNavigationBar,
    HeaderNavigationBar,
  },
  // data() {
  //   return {
  //     param: this.$router.path(/order/cart)
  //   }
  // },
};
</script>
<style lang="scss" scoped>
.bg-Header-Admin {
  background-color: #2dce89 !important;
  min-height: 300px !important;
}
</style>
