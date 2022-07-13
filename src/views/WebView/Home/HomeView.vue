<template>
  <div>
    <banner-view />
    <why-view />
    <menu-view />
    <services-view />
    <feedback-view />
  </div>
</template>

<script>
export default {
  components: {
    BannerView: () => import("./components/BannerView.vue"),
    WhyView: () => import("./components/WhyView.vue"),
    MenuView: () => import("./components/MenuView.vue"),
    ServicesView: () => import("./components/ServicesView.vue"),
    FeedbackView: () => import("./components/FeedbackView.vue"),
  },
};
</script>

<style></style>
