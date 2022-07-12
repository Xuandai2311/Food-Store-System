<template>
  <div class="HotItem">
    <div class="my-4 flex items-center border rounded-xl border-gray">
      <div class="p-3 text-left">
        <h2 class="text-base font-semibold">{{ item.title }}</h2>
        <p class>{{ item.descriptions }}</p>
        <div class="flex py-2">
          <p
            v-if="item.cost"
            class="text-sm font-semibold text-gray line-through"
          >
            {{ item.cost | formatMoney }} đ
          </p>
          <p class="text-base font-semibold pl-2 text-red-base">
            {{ item.priceSale | formatMoney }} đ
          </p>
        </div>
        <el-button
          v-if="!isHidden"
          class="btn w-36 border-red-base text-red-base"
          round
          @click="handleClickAdd(item.id)"
          >Add</el-button
        >
        <div class="flex items-center" v-if="isHidden">
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-minus"
            :disabled="quantityItemInCart === 1"
            circle
            @click="handleClickRemove(item.id)"
          ></el-button>
          <p class="px-3 text-base font-bold">{{ quantityItemInCart }}</p>
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-plus"
            circle
            @click="handleClickAdd(item.id)"
          ></el-button>
        </div>
        <!-- <img
          class="absolute top-2 float-right right-3"
          src="@/assets/images/favorite.svg"
          alt="Favorite"
        />-->
      </div>
      <img
        class="rounded-xl object-contain w-28 h-28 mx-3"
        :src="getImgUrl(item.img)"
        :alt="item.title"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isHidden: false,
    };
  },
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  computed: {
    ...mapGetters(["cart"]),
    quantityItemInCart() {
      let quantityItemInCart = "";
      this.cart.find((cart) => {
        if (cart.id === this.item.id) {
          quantityItemInCart = cart.quantity;
        }
      });
      return quantityItemInCart;
    },
  },
  methods: {
    getImgUrl(icon) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + icon + ".png");
    },
    handleClickAdd(id) {
      this.isHidden = true;
      this.$store.commit("PUSH_PRODUCT_TO_CART", id);
      return this.isHidden;
    },
    handleClickRemove(id) {
      this.$store.commit("REMOVE_PRODUCT_FROM_CART", id);
    },
  },
};
</script>
<style lang="scss">
.el-button:focus,
.el-button:hover {
  color: theme("colors.red-base");
  border-color: theme("colors.red-base");
  background-color: white;
}
.btn {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.el-input-number__decrease,
.el-input-number__increase {
  color: theme("colors.red-base");
  background: theme("colors.bgHome");
  border: 2px solid theme("colors.gray");
  border-radius: 9999px;
  font-size: 18px;
  top: 0;
}
.el-input-number__decrease {
  left: 0.5rem;
}
.el-input-number__increase {
  right: 0.5rem;
}
.el-input__inner {
  background-color: theme("colors.bgHome");
  border: none;
  font-size: 18px;
  font-weight: 700;
}
.el-input-number {
  width: 8rem;
}
.el-button.is-circle {
  padding: 4px;
}
</style>
