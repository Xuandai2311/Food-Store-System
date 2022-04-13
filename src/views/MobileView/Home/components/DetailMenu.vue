<template>
  <div class="detail-menu">
    <el-link to="/home" tag="button"
      ><img
        class="absolute top-6 left-6"
        src="@/assets/images/backbtn.svg"
        alt=""
    /></el-link>
    <img
      class="w-full"
      src="@/assets/images/backgroundfood.png"
      alt="Background Menu Food"
    />
    <h2>Đ Food</h2>
    <p>Đống Đa, HN</p>
    <el-link type="danger" href="/home">Xem địa chỉ</el-link>
  </div>
</template>

<script>
export default {
  data() {},
  methods: {
    hanldeBack() {
      this.$router.push("/home");
    },
  },
};
</script>

<style></style>
