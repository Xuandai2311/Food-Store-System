<template>
  <div class="menufood_tabs">
    <div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="Bánh Mì" name="banhmi">
          <sale-menu-variants />
          <list-menu-detail :categoriesActive="activeName" />
        </el-tab-pane>
        <el-tab-pane label="Cơm" name="com">
          <sale-menu-variants />
          <list-menu-detail :categoriesActive="activeName" />
        </el-tab-pane>
        <el-tab-pane label="Pizza" name="pizza">
          <sale-menu-variants />
          <list-menu-detail :categoriesActive="activeName" />
        </el-tab-pane>
        <el-tab-pane label="Fast Food" name="fastfood">
          <sale-menu-variants />
          <list-menu-detail :categoriesActive="activeName" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import SaleMenuVariants from "@/components/MobileView/Menu/SaleMenuVariants.vue";
import ListMenuDetail from "@/components/MobileView/Menu/ListMenuDetail.vue";
// import { mapGetters } from "vuex";
export default {
  components: { SaleMenuVariants, ListMenuDetail },
  data() {
    return {
      activeName: "banhmi",
    };
  },
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
