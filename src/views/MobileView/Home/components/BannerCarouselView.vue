<template>
  <div class="banner-carousel mt-4 mx-4">
    <el-carousel trigger="click" indicator-position="outside" height="150px">
      <el-carousel-item
        v-for="item in listFoodSale"
        :key="item.id"
        class="rounded-lg"
      >
        <div class="relative">
          <h2 class="absolute font-semibold text-xl text-white top-14 left-6">
            {{ item.title }}
          </h2>
          <p class="absolute font-semibold text-sm text-white top-24 left-6">
            Off up to {{ item.sale }} %
          </p>

          <img :src="getImgUrl(item.img)" :alt="item.img" class="w-full" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listFoodSale: [
        {
          id: 1,
          title: "Today's Best Deals",
          sale: 75,
          img: "food1",
        },
        {
          id: 2,
          title: "Weekly Best Deals",
          sale: 50,
          img: "food2",
        },
        {
          id: 3,
          title: "Weekly Best Deals",
          sale: 35,
          img: "food2",
        },
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + img + ".png");
    },
  },
};
</script>

<style></style>
