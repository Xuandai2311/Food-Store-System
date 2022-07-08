<template>
  <div>
    <h2
      class="mb-4 text-left font-bold text-red-base uppercase"
      data-aos="zoom-in-up"
    >
      Menu Food
    </h2>
    <el-tabs :tab-position="tabPosition" v-model="activeName">
      <el-tab-pane label="Sale" name="sale">
        <span slot="label">
          <img
            class="inline"
            src="@/assets/images/Web/icon/sale.png"
            alt="Sale"
          />
          Sale
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsBySale" :key="item.id">
            <div
              class="flex justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Bánh Mì" name="banhmi">
        <span slot="label">
          <img
            class="inline"
            src="@/assets/images/Web/icon/banhmi.png"
            alt="Bánh mì"
          />
          Bánh Mì
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div
              class="flex justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Cơm" name="com">
        <span slot="label">
          <img
            class="inline w-12 h-12"
            src="@/assets/images/Web/icon/rice.png"
            alt="Cơm"
          />
          Cơm
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div
              class="flex justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Pizza" name="pizza">
        <span slot="label">
          <img
            class="inline"
            src="@/assets/images/Web/icon/Pizza.png"
            alt="pizza"
          />
          Pizza
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div
              class="flex justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <item-base :item="item" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-tab-pane>
      <el-tab-pane label="Fast Food" name="fastfood">
        <span slot="label">
          <img
            class="inline"
            src="@/assets/images/Web/icon/Hamburger.png"
            alt="Fastfood"
          />
          Fast Food
        </span>
        <el-carousel :autoplay="false" :interval="4000" type="card">
          <el-carousel-item v-for="item in productsByCategorie" :key="item.id">
            <div
              class="flex justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
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

<style lang="scss">
.el-carousel__arrow i {
  font-size: 1.9rem;
  color: #e94b64;
}
.el-carousel__arrow {
  display: block !important;
}
</style>
