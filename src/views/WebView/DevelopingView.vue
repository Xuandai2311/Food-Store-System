<template>
  <div class="developing-container">
    <banner-view />
    <why-view />
    <menu-view />
    <services-view />
    <feedback-view />
    <el-dialog
      :visible.sync="dialogDeveloping"
      :before-close="handleClickClose"
      lock-scroll="true"
    >
      <div class="grid justify-items-center">
        <img src="@/assets/images/Web/developing.png" alt="developing" />
        <h2 class="text-xl font-bold my-6">Chức năng đang bảo trì</h2>
        <p class="break-normal whitespace-normal w-2/4">
          Để nâng cao chất lượng phục vụ chức năng này đang trong thời gian bảo
          trì để có thể đem lại cho quý khách những trải nghiệm tối nhất. Xin
          lỗi về sự bất tiện này, chúng tôi sẽ thông báo sau khi bảo trì kết
          thúc.
        </p>
        <button class="button-base my-6 w-1/4" @click="handleClickClose">
          Đóng
        </button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {
    BannerView: () => import("./Home/components/BannerView.vue"),
    WhyView: () => import("./Home/components/WhyView.vue"),
    MenuView: () => import("./Home/components/MenuView.vue"),
    ServicesView: () => import("./Home/components/ServicesView.vue"),
    FeedbackView: () => import("./Home/components/FeedbackView.vue"),
  },
  data() {
    return {
      dialogDeveloping: true,
    };
  },
  methods: {
    handleClickClose() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="scss">
.developing-container {
  .el-dialog__header {
    display: none;
  }
}
.v-modal {
  display: none;
}
.el-dialog {
  border-radius: 16px;
}
</style>
