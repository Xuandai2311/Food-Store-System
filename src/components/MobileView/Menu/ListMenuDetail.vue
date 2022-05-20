<template>
  <div class="List_Menu_Detail mb-10">
    <h2 class="my-3 text-lg font-semibold text-left">
      {{ titleCategorieAcitve }}
    </h2>
    <!-- <item-base
      v-for="item in productsByCategorie"
      :key="item.id"
      :item="item"
    /> -->
  </div>
</template>
<script>
// import ItemBase from "@/components/MobileView/Menu/item/ItemBase.vue";
import { mapGetters } from "vuex";
export default {
  props: {
    categoriesActive: {
      type: String,
      require: true,
    },
  },
  // components: { ItemBase },
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
