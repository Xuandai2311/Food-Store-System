<template>
  <div>
    <h2 class="text-3xl mb-12 font-bold text-red-base uppercase">Menu Food</h2>
    <el-tabs :tab-position="tabPosition" v-model="activeName">
      <el-tab-pane label="Sale" name="sale">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Sale
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsBySale" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Bánh Mì" name="banhmi">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Bánh Mì
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Cơm" name="com">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Cơm
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Pizza" name="pizza">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Pizza
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Fast Food" name="fastfood">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Fast Food
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    ItemBase: () => import("@/components/WebView/ItemBase.vue"),
  },
  data() {
    return {
      tabPosition: "left",
      activeName: "sale",
    };
  },
  computed: {
    ...mapGetters(["Products", "categories"]),
    productsBySale() {
      const groups = [];
      this.Products.forEach((item) => {
        if ((item.sale === "sale") & (item.type === "food")) {
          groups.push(item);
        }
      });
      return groups;
    },
    productsByCategorie() {
      const productsByCategorie = [];
      this.Products.forEach((item) => {
        if (item.categorie === this.activeName) {
          productsByCategorie.push(item);
        }
      });
      return productsByCategorie;
    },
  },
};
</script>

<style></style>
