<template>
  <div>
    <banner-view />
    <why-view />
    <menu-view />
  </div>
</template>

<script>
import BannerView from "@/views/WebView/Home/components/BannerView.vue";
import WhyView from "@/views/WebView/Home/components/WhyView.vue";
import MenuView from "./components/MenuView.vue";
export default {
  components: {
    BannerView,
    WhyView,
    MenuView,
  },
};
</script>

<style></style>
