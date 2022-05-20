<template>
  <div class="Item_Order">
    <div
      class="my-4 flex items-center justify-between border rounded-xl border-gray"
    >
      <div class="p-3 text-left">
        <h2 class="text-base font-semibold">{{ item.title }}</h2>
        <div class="flex py-2">
          <p class="text-base font-semibold text-gray line-through">
            {{ item.cost }} đ
          </p>
          <p class="text-base font-semibold pl-2 text-red-base">
            {{ item.priceSale }} đ
          </p>
        </div>
        <div class="flex items-center">
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-minus"
            :disabled="quantityItemInCart === 1"
            @click="handleClickRemove(item.id)"
            circle
          ></el-button>
          <p class="px-3 text-base font-bold">{{ quantityItemInCart }}</p>
          <el-button
            class="text-red-base text-base leading-none"
            icon="el-icon-plus"
            @click="handleClickAdd(item.id)"
            circle
          ></el-button>
          <el-button @click="drawer = true" round>Ghi chú</el-button>
        </div>
      </div>
      <img
        class="rounded-xl w-28 h-28 m-3"
        :src="getImgUrl(item.img)"
        :alt="item.title"
      />
    </div>
    <el-drawer
      title="Ghi chú món ăn"
      :visible.sync="drawer"
      :direction="direction"
      size="50%"
    >
      <el-input class="w-4/5" type="textarea" v-model="note"></el-input>
      <el-button round>Xong</el-button>
    </el-drawer>
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
  },
  data() {
    return {
      drawer: false,
      direction: "btt",
      note: "",
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
  },
  methods: {
    getImgUrl(icon) {
      let images = require.context("@/assets/images/", false, /\.png$/);
      return images("./" + icon + ".png");
    },
    handleClickAdd(id) {
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
.Item_Order {
  .el-button.is-round {
    padding: 0.313rem 0.625rem;
  }
}
</style>
