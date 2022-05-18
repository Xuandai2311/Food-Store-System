<template>
  <div class="HotItem">
    <div
      class="my-4 flex items-center justify-between border rounded-xl border-gray"
    >
      <div class="p-3 text-left">
        <h2 class="text-base font-semibold">{{ item.title }}</h2>
        <div class="flex py-2">
          <p class="text-base font-semibold text-gray line-through">
            {{ item.cost }} đ
          </p>
          <p class="text-base font-semibold pl-2 text-red-base">
            {{ item.priceSale }} đ
          </p>
        </div>
        <div class="flex items-center">
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-minus"
            circle
          ></el-button>
          <p class="px-3 text-base font-bold">2</p>
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-plus"
            circle
          ></el-button>
          <el-button @click="drawer = true" round class="btn_note"
            >Ghi chú</el-button
          >
        </div>
      </div>
      <img
        class="rounded-xl w-28 h-28 m-3"
        :src="getImgUrl(item.img)"
        :alt="item.title"
      />
    </div>
    <el-drawer
      title="Ghi chú món ăn"
      :visible.sync="drawer"
      :direction="direction"
      size="50%"
    >
      <el-input class="w-4/5" type="textarea" v-model="note"></el-input>
      <el-button round>Xong</el-button>
    </el-drawer>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      drawer: false,
      direction: "btt",
    };
  },
  methods: {
    getImgUrl(icon) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + icon + ".png");
    },
    // handleClickAdd(item) {
    //   this.isHidden = true;
    //   this.$store.commit("PUSH_ITEM_TO_CART", item);
    //   console.log(item.id);
    //   return this.isHidden;
    // },
  },
};
</script>
<style lang="scss">
.el-button:focus,
.el-button:hover {
  color: theme("colors.red-base");
  border-color: theme("colors.red-base");
  background-color: white;
}
.btn {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.el-input-number__decrease,
.el-input-number__increase {
  color: theme("colors.red-base");
  background: theme("colors.bgHome");
  border: 2px solid theme("colors.gray");
  border-radius: 9999px;
  font-size: 18px;
  top: 0;
}
.el-input-number__decrease {
  left: 0.5rem;
}
.el-input-number__increase {
  right: 0.5rem;
}
.el-input__inner {
  background-color: theme("colors.bgHome");
  border: none;
  font-size: 18px;
  font-weight: 700;
}
.el-input-number {
  width: 8rem;
}
.el-button.is-circle {
  padding: 4px;
}
.btn_note {
  .el-button.is-round {
    padding: 5px 10px;
  }
}
</style>
