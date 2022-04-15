<template>
  <div class="detail-menu bg-bgHome">
    <div class="background-header">
      <router-link to="/home" tag="button" class="absolute left-6 top-5"
        ><img src="@/assets/images/backbtn.svg" alt="Back Home"
      /></router-link>
      <img
        src="@/assets/images/favorite.svg"
        alt="Favorite"
        class="absolute right-6 top-5"
      />
      <img
        class="w-full"
        src="@/assets/images/backgroundfood.png"
        alt="Background Menu Food"
      />
    </div>
    <restaurant-info />
    <tab-bar-footer-view class="fixed bottom-0 w-full shadow-5xl" />
  </div>
</template>

<script>
import TabBarFooterView from "@/components/MobileView/TabBarFooterView.vue";
import RestaurantInfo from "./RestaurantInfo.vue";
export default {
  components: {
    TabBarFooterView,
    RestaurantInfo,
  },
};
</script>

<style></style>
