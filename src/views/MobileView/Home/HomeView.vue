<template>
  <div class="home bg-bgHome sm:hidden">
    <div class="relative mb-16">
      <header-home-view />
      <banner-carousel-view />
      <wallet-view class="shadow-sm" />
      <service-view class="my-2" />
      <menu-view />
    </div>
  </div>
</template>

<script>
import HeaderHomeView from "@/views/MobileView/Home/components/home/HeaderHomeView.vue";
import BannerCarouselView from "@/views/MobileView/Home/components/home/BannerCarouselView.vue";
import WalletView from "@/views/MobileView/Home/components/home/WalletView.vue";
import ServiceView from "@/views/MobileView/Home/components/home/ServiceView.vue";
import MenuView from "@/views/MobileView/Home/components/home/MenuView.vue";
export default {
  components: {
    HeaderHomeView,
    BannerCarouselView,
    WalletView,
    ServiceView,
    MenuView,
  },
};
</script>
