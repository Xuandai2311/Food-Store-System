<template>
  <div class="Order_View mb-17 mt-2">
    <order-detail v-if="cartAmount > 0" />
    <el-tabs v-if="cartAmount === 0" v-model="activeName">
      <el-tab-pane label="Đang đến" name="dangden">
        <list-order />
      </el-tab-pane>
      <el-tab-pane label="Lịch sử" name="lichsu">
        <list-order />
      </el-tab-pane>
      <el-tab-pane label="Đánh giá" name="danhgia"></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import OrderDetail from "./components/OrderDetail.vue";
import ListOrder from "./components/ListOrder.vue";
import { mapGetters } from "vuex";
export default {
  components: { OrderDetail, ListOrder },
  data() {
    return {
      activeName: "lichsu",
    };
  },
  computed: {
    ...mapGetters(["cartAmount"]),
  },
};
</script>
<style lang="scss">
.Order_View {
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
    padding-left: 20%;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
}
</style>
