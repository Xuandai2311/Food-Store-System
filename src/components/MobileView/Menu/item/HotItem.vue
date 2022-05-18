<template>
  <div class="HotItem">
    <div class="border rounded-xl border-gray text-left inline-block">
      <div class="relative">
        <img
          class="rounded-t-xl h-132"
          :src="getImgUrl(item.img)"
          :alt="item.title"
        />
        <img
          class="absolute top-2 float-right right-3"
          src="@/assets/images/favorite.svg"
          alt="Favorite"
        />
      </div>
      <div class="px-3 text-center">
        <h2 class="text-sm font-semibold">{{ item.title }}</h2>
        <div class="flex">
          <p class="text-base font-semibold text-gray line-through">
            {{ item.cost }} đ
          </p>
          <p class="text-base font-semibold pl-2 text-red-base">
            {{ item.priceSale }} đ
          </p>
        </div>
        <el-button
          v-if="!isHidden"
          class="btn my-3 w-36 border-red-base text-red-base"
          round
          @click="handleClickAdd(item)"
          >Add</el-button
        >
        <div class="my-3 flex items-center" v-if="isHidden">
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
        </div>
      </div>
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
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    getImgUrl(icon) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + icon + ".png");
    },
    handleClickAdd(item) {
      this.isHidden = true;
      this.$store.commit("PUSH_ITEM_TO_CART", item);
      console.log(item.id);
      return this.isHidden;
    },
  },
};
</script>
<style lang="scss"></style>
