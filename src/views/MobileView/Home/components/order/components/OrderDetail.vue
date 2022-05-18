<template>
  <div>
    <div
      class="header fixed w-full bg-white z-10 py-3 border-b-2 border-gray shadow-sm"
    >
      <div class="background-header flex justify-between mx-4">
        <div class="text-left flex gap-6">
          <router-link to="/home/menu_food" tag="button" class>
            <img src="@/assets/images/backbtn.svg" alt="Back Home" />
          </router-link>
          <div>
            <p class="font-bold">Xác nhận đơn hàng</p>
          </div>
        </div>
      </div>
    </div>
    <div class="location pt-20 py-6">
      <h2 class="mx-4 mb-3 font-bold text-base text-left">Địa Chỉ Giao Hàng</h2>
      <!-- <div class="my-3 rounded border border-gray bg-grayLight">
        <div class="p-3">
          <p>Khoảng cách: 1.2km</p>
          <p>giao trong 15 phút</p>
        </div>
        <router-link class="text-red-base">Thay đổi địa chỉ</router-link>
      </div>-->
      <delivery-info />
    </div>
    <div class="item_order">
      <h2 class="mx-4 mb-3 font-bold text-base text-left">Giỏ Hàng</h2>
      <item-order
        class="mx-4"
        v-for="item in cart"
        :item="item"
        :key="item.id"
      />
      <div class="mx-4 flex justify-between">
        <p class="font-bold">Món ăn đề xuất</p>
        <el-link type="danger" href>Xem tất cả</el-link>
      </div>
      <div
        class="h-40 flex overflow-x-scroll overflow-y-hidden whitespace-nowrap"
      >
        <item-suggest
          class="ml-4"
          v-for="item in hotItem"
          :item="item"
          :key="item.id"
        />
      </div>
      <div class="pay_info mx-4 my-4 border-t border-gray">
        <div class="flex justify-between border-b border-gray px-4 py-2">
          <p>Tổng: {{ cartAmount }} phần</p>
          <p>15.000đ</p>
        </div>
        <div class="flex justify-between border-b border-gray px-4 py-2">
          <p>Phí giao hàng: 1.4km</p>
          <p>15.000đ</p>
        </div>
        <div class="flex justify-between px-4 py-2">
          <p class="font-bold">Tổng cộng</p>
          <p class="font-bold text-red-base">30.000đ</p>
        </div>
        <p class="text-right py-2">Đã bao gồm thuế.</p>
        <div class="mt-3 flex justify-between items-center">
          <div class="flex">
            <img src="@/assets/images/icon/discount.png" alt="Discount" />
            <p>Khuyến mãi</p>
          </div>
          <div class="flex">
            <el-link :underline="false" type="danger">Chọn Voucher</el-link>
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import DeliveryInfo from "@/components/MobileView/DetailMenu/DeliveryInfo.vue";
import ItemOrder from "@/components/MobileView/Menu/item/ItemOrder.vue";
import ItemSuggest from "@/components/MobileView/Menu/item/ItemSuggest.vue";
export default {
  components: { DeliveryInfo, ItemSuggest, ItemOrder },
  computed: { ...mapGetters(["cart", "hotItem", "cartAmount"]) },
};
</script>
