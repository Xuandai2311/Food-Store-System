<template>
  <div class="Order_Detail">
    <div
      class="header fixed w-full bg-white z-10 py-3 border-b-2 border-gray shadow-sm"
    >
      <div class="background-header flex justify-between mx-4">
        <div class="text-left flex gap-6 items-center">
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
          v-for="item in productsBySale"
          :key="item.id"
          :item="item"
        />
      </div>
      <div class="pay_info mx-4 my-4 border-t border-gray">
        <div class="flex justify-between border-b border-gray px-4 py-2">
          <p>Tổng: {{ cartAmount }} phần</p>
          <p>{{ cartTotalAmount | formatMoney }} đ</p>
        </div>
        <div class="flex justify-between border-b border-gray px-4 py-2">
          <p>Phí giao hàng: 1.4km</p>
          <p>15.000đ</p>
        </div>
        <div class="flex justify-between px-4 py-2">
          <p class="font-bold">Tổng cộng</p>
          <p class="font-bold text-red-base">30.000đ</p>
        </div>
        <p class="text-right pb-2">Đã bao gồm thuế.</p>
        <div
          class="mt-3 flex justify-between items-center border-b border-gray px-4 py-2"
        >
          <div class="flex gap-3">
            <img src="@/assets/images/icon/discount.png" alt="Discount" />
            <p>Khuyến mãi</p>
          </div>
          <div class="flex">
            <el-link :underline="false" type="danger">Chọn Voucher</el-link>
            <img src="@/assets/images/icon/see_more.png" alt="See More" />
          </div>
        </div>
        <div
          class="flex items-center justify-between border-b border-gray px-4 py-2"
        >
          <div class="flex items-center gap-4">
            <img src="@/assets/images/icon/coins.png" alt="Coins" />
            <p>Dùng 10.000 Xu</p>
          </div>
          <div class="flex gap-3">
            <p class="text-grayDark">[-10.000đ]</p>
            <el-switch v-model="switchCoins" active-color="#E94B64"></el-switch>
          </div>
        </div>
        <div class="my-4">
          <el-radio-group v-model="pay">
            <el-radio-button label="Ví điện tử"></el-radio-button>
            <el-radio-button label="Tiền mặt"></el-radio-button>
          </el-radio-group>
        </div>
        <el-button
          class="btn_order bg-red-base text-white text-base leading-3 font-semibold w-full mb-5"
          round
          @click="handleClickOrder"
          >Đặt đơn</el-button
        >
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
  computed: {
    ...mapGetters(["cart", "cartAmount", "Products", "cartTotalAmount"]),
    productsBySale() {
      const groups = [];
      this.Products.forEach((item) => {
        if (item.sale === "sale") {
          groups.push(item);
        }
      });
      return groups;
    },
  },
  data() {
    return {
      switchCoins: false,
      pay: "Ví điện tử",
    };
  },
  methods: {
    handleClickOrder() {
      setTimeout(() => {
        this.$router.push("/order/Cart/loading");
      }, 700);
    },
  },
};
</script>
<style lang="scss">
.Order_Detail {
  .el-radio-button {
    margin: 0 0.5rem;
  }
  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0.25rem;
    box-shadow: none !important;
    border-left: 1px solid #dcdfe6;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0.25rem;
    box-shadow: none !important;
  }
  .el-radio-button__inner {
    padding: 0.75rem 2.9rem;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    border: 1px solid theme("colors.red-base");
    color: theme("colors.red-base");
    background-color: theme("colors.white");
    border-color: theme("colors.red-base");
  }
  .btn_order {
    .el-button.is-round {
      padding: 10px 10px;
    }
  }
}
</style>
