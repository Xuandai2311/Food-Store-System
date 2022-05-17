<template>
  <div class="List_Menu_Detail mb-10">
    <h2 class="my-3 text-lg font-semibold text-left">
      Bánh Mì ({{ banhMi.length }})
    </h2>
    <item-base :banhMi="banhMi" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ItemBase from "@/components/MobileView/Menu/item/ItemBase.vue";
export default {
  components: { ItemBase },
  computed: { ...mapGetters(["banhMi"]) },
};
</script>
