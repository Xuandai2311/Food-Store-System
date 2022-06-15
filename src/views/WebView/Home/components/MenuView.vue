<template>
  <div class="menu mx-28">
    <div class="text-left">
      <p class="mt-36 mb-4 font-bold text-red-base uppercase">our menu</p>
      <h2 class="text-4xl mb-12 font-bold text-black capitalize">
        menu that always
        <br />make you fall in love
      </h2>
    </div>
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
import ItemBase from "@/components/WebView/ItemBase.vue";
import { mapGetters } from "vuex";
export default {
  components: { ItemBase },
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
        if (item.sale === "sale") {
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
<style lang="scss">
.menu {
  .el-tabs--left .el-tabs__header.is-left {
    width: 20%;
  }
  .el-tabs--left .el-tabs__item.is-left {
    margin-right: 3.8rem;
  }
  .el-tabs--left .el-tabs__active-bar.is-left,
  .el-tabs--left .el-tabs__nav-wrap.is-left::after {
    background-color: theme("colors.red-base");
  }
  .el-tabs--left .el-tabs__item.is-left {
    text-align: left;
  }
  .el-tabs__item.is-active {
    color: white;
    background: #a18ee5;
    box-shadow: 0px 0px 1px #a18ee5, 0px 0px 10px #a18ee5, 0px 0px 5px #a18ee5;
    border-radius: 40px;
    margin: 1rem 2rem 1rem 0.5rem;
    font-size: 16px;
    font-weight: 700;
  }
  .el-carousel__mask {
    background: none;
  }
}
</style>
