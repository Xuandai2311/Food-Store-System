<template>
  <div
    class="header bg-gradient-to-r from-bgHeaderHome-red to-bgHeaderHome-red-light"
  >
    <div class="pb-8 pt-10 grid gap-5">
      <div class="flex gap-3 justify-around">
        <div class="text-left grid w-3/5">
          <span class="col-span-2 font-medium text-sm text-white"
            >Địa chỉ hiện tại</span
          >
          <router-link
            to="/developing"
            tag="button"
            class="truncate font-semibold text-base text-white"
            >Trường Đại Học Kinh Doanh Và Công Nghệ Hà Nội</router-link
          >
          <i class="el-icon-arrow-down text-white font-medium"></i>
        </div>
        <i
          @click="handleClickGoToDeveloping"
          class="el-icon-bell text-white font-medium text-xl"
        ></i>
      </div>
      <el-input
        placeholder="Hôm nay bạn muốn ăn gì nào ?"
        v-model="input"
        class="w-5/6 mx-auto"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleClickGoToDeveloping() {
      this.$router.push({ path: "/developing" });
    },
  },
};
</script>

<style lang="scss">
.header {
  .el-input__inner {
    border: none;
    border-radius: 2rem;
  }
}
</style>
