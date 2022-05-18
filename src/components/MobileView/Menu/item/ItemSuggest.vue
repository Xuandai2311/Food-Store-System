<template>
  <div class="HotItem">
    <div
      class="my-4 w-80 inline-flex items-center justify-between border rounded-xl border-gray"
    >
      <div class="p-3 text-left">
        <h2 class="text-base font-semibold">{{ item.title }}</h2>
        <p class>{{ item.descriptions }}</p>
        <div class="flex py-2">
          <p class="text-base font-semibold text-gray line-through">
            {{ item.cost }} đ
          </p>
          <p class="text-base font-semibold pl-2 text-red-base">
            {{ item.priceSale }} đ
          </p>
        </div>
        <el-button
          class="btn w-36 border-red-base text-red-base"
          round
          @click="handleClickAdd(item)"
          >Add</el-button
        >
      </div>
      <img
        class="rounded-xl w-28 h-28 m-3"
        :src="getImgUrl(item.img)"
        :alt="item.title"
      />
    </div>
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
  methods: {
    getImgUrl(icon) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + icon + ".png");
    },
    handleClickAdd(item) {
      this.$store.commit("PUSH_ITEM_TO_CART", item);
      console.log(item.id);
    },
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
</style>
