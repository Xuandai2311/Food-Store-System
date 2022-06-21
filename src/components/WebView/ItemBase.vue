<template>
  <div class="HotItem">
    <div class="border rounded-xl border-gray text-left inline-block">
      <div class="relative">
        <img
          class="rounded-t-xl object-cover h-132 min-w-full"
          :src="getImgUrl(item.img)"
          :alt="item.title"
        />
        <!-- <img
          class="absolute top-2 float-right right-3"
          src="@/assets/images/favorite.svg"
          alt="Favorite"
        />-->
      </div>
      <div class="px-3 text-center">
        <h2 class="text-sm font-semibold">{{ item.title }}</h2>
        <div class="flex">
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
          class="btn my-3 w-32 border-red-base text-red-base"
          round
          @click="handleClickAdd(item.id)"
          >Add</el-button
        >
        <div class="my-3 flex items-center" v-if="isHidden">
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-minus"
            circle
            :disabled="quantityItemInCart === 1"
            @click="handleClickRemove(item.id)"
          ></el-button>
          <p class="px-3 text-base font-bold">{{ quantityItemInCart }}</p>
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-plus"
            @click="handleClickAdd(item.id)"
            circle
          ></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Object,
      require: true,
    },
    categoriesActive: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      isHidden: false,
    };
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
    titleCategorieAcitve() {
      let titleCategorieAcitve = "";
      this.categories.find((item) => {
        if (item.name === this.categoriesActive) {
          titleCategorieAcitve = item.title;
        }
      });
      return titleCategorieAcitve;
    },
  },
  methods: {
    getImgUrl(icon) {
      let images = require.context("@/assets/images/Web", false, /\.png$/);
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
<style lang="scss"></style>
