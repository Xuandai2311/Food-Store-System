<template>
  <div class="Sale_Menu_Variants mb-10">
    <h2 class="my-3 text-lg font-semibold text-left">
      Món Hot Sale ({{ hotItem.length }})
    </h2>
    <div class="grid grid-cols-2 gap-3">
      <hot-item v-for="item in hotItem" :key="item.id" :item="item" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HotItem from "./item/HotItem.vue";
export default {
  components: { HotItem },
  computed: { ...mapGetters(["hotItem"]) },
};
</script>
