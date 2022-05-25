<template>
  <div class="Why_Choice">
    <p class="mt-36 mb-4 font-bold text-red-base uppercase">What we serve</p>
    <h2 class="text-4xl mb-12 font-bold text-black">Why Choice What2Eat ?</h2>
    <div class="flex justify-around">
      <div class="relative mt-60" v-for="item in whyChoice" :key="item.id">
        <img
          class="images absolute bottom-10 ml-2"
          :src="getImgUrl(item.img)"
          :alt="item.img"
        />
        <h2 class="text-3xl font-bold">{{ item.title }}</h2>
        <p class="w-2/3 mx-auto mt-4">{{ item.describe }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      whyChoice: [
        {
          id: 1,
          title: "Easy",
          describe: "Only with your smartphone you can get a food",
          img: "phone",
        },
        {
          id: 2,
          title: "Fast",
          describe: "We can deliver your food very fast",
          img: "rocket",
        },
        {
          id: 3,
          title: "Safe",
          describe: "All food label halal and stay healthy for you",
          img: "box",
        },
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      let images = require.context("@/assets/images/Web", false, /\.png$/);
      return images("./" + img + ".png");
    },
  },
};
</script>
<style lang="scss" scoped>
.images::before {
  animation: toBottomFromTop 3s forwards infinite;
}
</style>
