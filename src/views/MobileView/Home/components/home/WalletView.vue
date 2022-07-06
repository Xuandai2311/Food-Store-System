<template>
  <div class="wallet bg-white">
    <div class="divide-x-2 divide-gray flex justify-around py-3">
      <div
        v-for="item in listWallet"
        :key="item.id"
        class="flex pl-8 gap-4"
        @click="handleClickGoToDeveloping"
      >
        <img :src="getImgUrl(item.img)" :alt="item.img" />
        <div class="text-left">
          <p>{{ item.title }}</p>
          <p>{{ item.amount | filterValue }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listWallet: [
        {
          id: 1,
          title: "Số dư ví",
          amount: "1000000",
          img: "wallet",
        },
        {
          id: 2,
          title: "Số điểm thưởng",
          amount: "10000",
          img: "coins",
        },
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      let images = require.context("@/assets/images/", false, /\.svg$/);
      return images("./" + img + ".svg");
    },
    handleClickGoToDeveloping() {
      this.$router.push({ path: "/developing" });
    },
  },
  filters: {
    filterValue(value) {
      let val = (value / 1).toFixed(0).replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style></style>
