<template>
  <div>
    <h2>profile viewf</h2>
    <tab-bar-footer-view class="fixed bottom-0 w-full shadow-5xl" />
  </div>
</template>
<script>
export default {
  components: {
    TabBarFooterView: () =>
      import("@/components/MobileView/TabBarFooterView.vue"),
  },
};
</script>
