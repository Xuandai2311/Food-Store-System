<template>
  <div class="developing">
    <el-dialog :visible.sync="dialogDeveloping" width="85%">
      <img
        class="mx-auto"
        src="@/assets/images/developing.png"
        alt="developing"
      />
      <h2 class="text-xl font-bold my-6">Chức năng đang bảo trì</h2>
      <p class="break-normal whitespace-normal">
        Để nâng cao chất lượng phục vụ chức năng này đang trong thời gian bảo
        trì để có thể đem lại cho quý khách những trải nghiệm tối nhất. Xin lỗi
        về sự bất tiện này, chúng tôi sẽ thông báo sau khi bảo trì kết thúc.
      </p>
      <button class="button-base my-6" @click="handleClickClose">Đóng</button>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogDeveloping: true,
    };
  },
  methods: {
    handleClickClose() {
      this.$router.push({ path: "/mobile/home" });
    },
  },
};
</script>

<style lang="scss">
.developing {
  .el-dialog__header {
    display: none;
  }
  .el-dialog {
    border-radius: 16px;
  }
}
</style>
