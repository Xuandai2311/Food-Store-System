<template>
  <div>
    <h2>order View</h2>
    <order-detail v-if="order === 1" />
    <list-order v-if="order === 0" />
  </div>
</template>
<script>
import OrderDetail from "./components/OrderDetail.vue";
import ListOrder from "./components/ListOrder.vue";
export default {
  components: { OrderDetail, ListOrder },
  data() {
    return {
      order: 1,
    };
  },
};
</script>
