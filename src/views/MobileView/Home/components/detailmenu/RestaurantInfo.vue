<template>
  <div class="resturant-info">
    <name-description />
    <common-info :common-info="commonInfo" />
    <delivery-info />
    <discount-info :discount-info="DiscountInfo" />
  </div>
</template>

<script>
export default {
  components: {
    NameDescription: () =>
      import("@/components/MobileView/DetailMenu/NameDescription.vue"),
    CommonInfo: () =>
      import("@/components/MobileView/DetailMenu/CommonInfo.vue"),
    DeliveryInfo: () =>
      import("@/components/MobileView/DetailMenu/DeliveryInfo.vue"),
    DiscountInfo: () =>
      import("@/components/MobileView/DetailMenu/DiscountInfo.vue"),
  },
  data() {
    return {
      commonInfo: [
        {
          id: 1,
          title: "99+ Reviews",
          detail: "4.8",
        },
        {
          id: 2,
          title: "Menu",
          detail: "8",
        },
        {
          id: 3,
          title: "8AM - 10PM",
          detail: "Mở cửa",
        },
      ],
      DiscountInfo: [
        {
          id: 1,
          title: "F&B Discount 75%",
          detail: "Discounts for all menus",
        },
        {
          id: 2,
          title: "Shipping Discount 50%",
          detail: "Applicable for all merchants ",
        },
        {
          id: 3,
          title: "F&B Discount 75%",
          detail: "Discounts for all menus",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.resturant-info {
  .divide-x-2 > :not([hidden]) ~ :not([hidden]) {
    padding-left: 10%;
  }
}
</style>
