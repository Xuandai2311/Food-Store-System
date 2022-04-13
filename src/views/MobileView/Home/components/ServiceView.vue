<template>
  <div class="service">
    <div class="flex justify-around py-3">
      <div
        v-for="item in listService"
        :key="item.id"
        class="grid justify-items-center"
      >
        <img :src="getImgUrl(item.img)" :alt="item.img" />
        <div class="text-left">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listService: [
        {
          id: 1,
          title: "Cơ sở",
          img: "branch",
        },
        {
          id: 2,
          title: "Đánh giá",
          img: "review",
        },
        {
          id: 3,
          title: "Khuyễn mãi",
          img: "discount",
        },
        {
          id: 4,
          title: "Đặt món",
          img: "ship",
        },
        {
          id: 5,
          title: "Đặt bàn",
          img: "book",
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
