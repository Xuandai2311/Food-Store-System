<template>
  <div class="menu mx-28">
    <div class="text-left">
      <p class="mt-36 mb-4 font-bold text-red-base uppercase">our menu</p>
      <h2 class="text-4xl mb-12 font-bold text-black capitalize">
        menu that always
        <br />make you fall in love
      </h2>
    </div>
    <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane>
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Sale
        </span>
        <item-base />
      </el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import ItemBase from "@/components/WebView/ItemBase.vue";
export default {
  components: { ItemBase },
  data() {
    return {
      tabPosition: "left",
    };
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
}
</style>
