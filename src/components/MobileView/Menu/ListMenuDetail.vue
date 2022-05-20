<template>
  <div class="List_Menu_Detail mb-10">
    <h2 class="my-3 text-lg font-semibold text-left">
      {{ titleCategorieAcitve }}
    </h2>
    <item-main
      v-for="item in productsByCategorie"
      :key="item.id"
      :item="item"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ItemMain from "@/components/MobileView/Menu/item/ItemMain.vue";
export default {
  components: { ItemMain },
  props: {
    categoriesActive: {
      type: String,
      require: true,
    },
  },
  computed: {
    ...mapGetters(["Products", "categories"]),
    productsByCategorie() {
      const productsByCategorie = [];
      this.Products.forEach((item) => {
        if (item.categorie === this.categoriesActive) {
          productsByCategorie.push(item);
        }
      });
      return productsByCategorie;
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
};
</script>
