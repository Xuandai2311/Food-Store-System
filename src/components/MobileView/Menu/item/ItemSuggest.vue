<template>
  <div class="HotItem">
    <div
      class="my-4 w-80 inline-flex items-center justify-between border rounded-xl border-gray"
    >
      <div class="p-3 text-left">
        <h2 class="text-base font-semibold">{{ item.title }}</h2>
        <div class="flex py-2">
          <p class="text-sm font-semibold text-gray line-through">
            {{ item.cost | formatMoney }} đ
          </p>
          <p class="text-base font-semibold pl-2 text-red-base">
            {{ item.priceSale | formatMoney }} đ
          </p>
        </div>
        <el-button
          class="btn w-36 border-red-base text-red-base"
          round
          @click="handleClickAdd(item.id)"
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
    handleClickAdd(id) {
      this.$store.commit("PUSH_PRODUCT_TO_CART", id);
    },
  },
};
</script>
<style lang="scss"></style>
