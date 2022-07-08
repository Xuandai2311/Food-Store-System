<template>
  <div class="px-3 py-6 bg-grayLight">
    <div class="flex justify-between">
      <div class="flex">
        <p class="font-bold">Đồ ăn</p>
        <p class="text-grayDark">#123214</p>
      </div>
      <p class="text-grayDark">06/04/2022</p>
    </div>
    <div class="my-3 flex gap-8 justify-between">
      <img
        class="h-24 rounded-full"
        src="@/assets/images/choco-creamcake.png"
        alt="choco-creamcake"
      />
      <div class="grid justify-start">
        <p class="font-bold truncate">
          TocoToco Delivery - 123, Hai Bà Trưng, Hà Nội
        </p>
        <p class="text-grayDark truncate">
          Trường đại học Kinh Doanh và Công Nghệ Hà Nội
        </p>
        <p><b>45.000đ</b> (1 phần) - Tiền mặt</p>
      </div>
    </div>
    <div class="pt-3 flex justify-between items-center">
      <p class="font-bold">Hoàn thành</p>
      <el-button class="button-base w-2/6 h-11">Đặt lại</el-button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      timestamp: "",
    };
  },
  computed: {
    ...mapGetters(["orderList"]),
  },
  mounted() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
    click() {
      this.$store.commit("PUSH_TIME", this.timestamp);
      console.log(this.timestamp);
    },
  },
};
</script>
