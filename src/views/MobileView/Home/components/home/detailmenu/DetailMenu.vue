<template>
  <div class="detail-menu bg-bgHome">
    <div class="background-header mb-17">
      <router-link to="/home" tag="button" class="absolute left-6 top-5">
        <img src="@/assets/images/backbtn.svg" alt="Back Home" />
      </router-link>
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
      <restaurant-info class="mx-4" />
      <menu-tabs class="mx-4" />
    </div>
  </div>
</template>

<script>
import RestaurantInfo from "./RestaurantInfo.vue";
import MenuTabs from "./MenuTabs.vue";
export default {
  components: {
    RestaurantInfo,
    MenuTabs,
  },
};
</script>

<style></style>
