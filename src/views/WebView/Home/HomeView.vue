<template>
  <div>
    <banner-view />
    <why-view />
    <menu-view />
    <services-view />
  </div>
</template>

<script>
export default {
  components: {
    BannerView: () => import("./components/BannerView.vue"),
    WhyView: () => import("./components/WhyView.vue"),
    MenuView: () => import("./components/MenuView.vue"),
    ServicesView: () => import("./components/ServicesView.vue"),
  },
};
</script>

<style></style>
