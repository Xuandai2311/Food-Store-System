<template>
  <div class="sm:hidden">
    <div class="main-container">
      <app-main />
    </div>
    <bottom-navigation-bar class="fixed bottom-0 w-full shadow-5xl z-9999" />
    <div v-if="$route.path != '/mobile/order/cart'">
      <el-badge
        v-if="cartAmount > 0"
        :value="cartAmount"
        class="item fixed bottom-36 right-14 z-10"
        type="success"
      ></el-badge>
      <img
        class="fixed right-4 bottom-28"
        src="@/assets/images/icon/Cart.png"
        alt="Cart"
        @click="handleClick()"
      />
    </div>
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
import BottomNavigationBar from "@/layout/MobileView/components/BottomNavigationBar/BottomNavigationBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  components: {
    AppMain,
    BottomNavigationBar,
  },
  // data() {
  //   return {
  //     param: this.$router.path(/order/cart)
  //   }
  // },
  computed: { ...mapGetters(["cartAmount"]) },
  methods: {
    handleClick() {
      let path;
      if (this.cartAmount > 0) {
        path = "/mobile/order/cart";
      } else {
        path = "/mobile/order";
      }
      return this.$router.push(path);
    },
  },
};
</script>
<style></style>
