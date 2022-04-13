<template>
  <div class="home bg-background2 sm:hidden">
    <header-home-view />
    <banner-carousel-view />
    <wallet-view />
    <service-view />
    <menu-view />
    <tab-bar-footer-view class="fixed bottom-0 w-full" />
  </div>
</template>

<script>
import TabBarFooterView from "@/views/MobileView/Home/components/TabBarFooterView.vue";
import HeaderHomeView from "@/views/MobileView/Home/components/HeaderHomeView.vue";
import BannerCarouselView from "./components/BannerCarouselView.vue";
import WalletView from "./components/WalletView.vue";
import ServiceView from "./components/ServiceView.vue";
import MenuView from "./components/MenuView.vue";
export default {
  components: {
    TabBarFooterView,
    HeaderHomeView,
    BannerCarouselView,
    WalletView,
    ServiceView,
    MenuView,
  },
};
</script>

<style></style>
