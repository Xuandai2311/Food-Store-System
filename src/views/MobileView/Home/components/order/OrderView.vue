<template>
  <div class="mb-17">
    <order-detail v-if="cartAmount > 0" />
    <list-order v-if="cartAmount === 0" />
  </div>
</template>
<script>
import OrderDetail from "./components/OrderDetail.vue";
import ListOrder from "./components/ListOrder.vue";
import { mapGetters } from "vuex";
export default {
  components: { OrderDetail, ListOrder },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartAmount"]),
  },
};
</script>
