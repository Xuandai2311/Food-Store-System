<template>
  <div>
    <h2 class="text-3xl mb-12 font-bold text-red-base uppercase">Menu Drink</h2>
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
      <el-tab-pane label="Trà sữa" name="milktea">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Trà sữa
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Cà Phê" name="coffee">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Cà Phê
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Nước giải khát" name="gaz">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Nước giải khát
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div class="flex justify-center">
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Rượu" name="ancohol">
        <span slot="label">
          <img class="inline" src="@/assets/images/Web/sale.png" alt="Sale" />
          Rượu
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
        if ((item.sale === "sale") & (item.type === "drink")) {
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
