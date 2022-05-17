<template>
  <div>
    <div class="main-container">
      <app-main />
    </div>
    <bottom-navigation-bar class="fixed bottom-0 w-full shadow-5xl z-9999" />
    <el-badge :value="12" class="item fixed bottom-40 right-17" type="success">
      <img
        class="fixed right-4 bottom-28"
        src="@/assets/images/icon/Cart.png"
        alt="Cart"
        @click="handleClick"
      />
    </el-badge>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
import BottomNavigationBar from "@/layout/MobileView/components/BottomNavigationBar/BottomNavigationBar.vue";
export default {
  name: "Layout",
  components: {
    AppMain,
    BottomNavigationBar,
  },
  methods: {
    handleClick() {
      return this.$router.push("/order/cart");
    },
  },
};
</script>
<style></style>
