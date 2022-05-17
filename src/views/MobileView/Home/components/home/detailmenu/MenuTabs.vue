<template>
  <div class="menufood_tabs">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Sale" name="sale">
        <sale-menu-variants />
        <list-menu-detail />
      </el-tab-pane>
      <el-tab-pane label="Bánh Mì" name="banhmi">
        <list-menu-detail />
      </el-tab-pane>
      <el-tab-pane label="Cơm" name="com">cơm</el-tab-pane>
      <el-tab-pane label="Pizza" name="pizza">pizza</el-tab-pane>
      <el-tab-pane label="Fast Food" name="fastfood">User</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SaleMenuVariants from "@/components/MobileView/Menu/SaleMenuVariants.vue";
import ListMenuDetail from "@/components/MobileView/Menu/ListMenuDetail.vue";
export default {
  components: { SaleMenuVariants, ListMenuDetail },
  data() {
    return {
      activeName: "sale",
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.menufood_tabs {
  .el-tabs__item {
    font-size: 16px;
  }
  .el-tabs__item.is-active {
    color: theme("colors.red-base");
    font-size: 16px;
  }
  .el-tabs__active-bar {
    background-color: theme("colors.red-base");
  }
  .el-tabs__nav-wrap::after {
    background-color: none;
  }
  .el-tabs__nav-scroll {
    overflow: auto;
  }
}
</style>
