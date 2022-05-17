<template>
  <div class="HotItem grid grid-cols-2 gap-3">
    <div v-for="item in hotItem" :key="item.id">
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
          <h2 class="text-base font-semibold">{{ item.title }}</h2>
          <div class="flex">
            <p class="text-base font-semibold text-gray line-through">
              {{ item.cost }} đ
            </p>
            <p class="text-base font-semibold pl-2 text-red-base">
              {{ item.priceSale }} đ
            </p>
          </div>
          <el-button class="btn my-3 w-36 border-red-base text-red-base" round
            >Add</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hotItem: {
      type: Array,
      require: true,
    },
  },
  methods: {
    getImgUrl(icon) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + icon + ".png");
    },
  },
};
</script>
<style lang="scss"></style>
