<template>
  <div class="discount-info text-left py-4">
    <h2 class="my-2 text-base font-semibold">Discount for you</h2>
    <div class="h-17 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
      <div
        v-for="item in DiscountInfo"
        :key="item.id"
        class="inline-block border border-gray rounded-sm mx-1 p-2"
      >
        <div class="mb-1 flex">
          <img
            src="@/assets/images/icon/discount.png"
            alt="Discount"
            class="mr-1"
          />
          <p class="text-base text-black">{{ item.title }}</p>
        </div>
        <p class="text-sm">{{ item.detail }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    DiscountInfo: {
      type: Object,
      require: true,
    },
  },
};
</script>
