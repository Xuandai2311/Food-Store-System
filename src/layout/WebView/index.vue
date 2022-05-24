<template>
  <div class="hidden sm:block w-container mx-auto">
    <header-view />
    <div class="main-container">
      <app-main />
    </div>
    <footer-view />
  </div>
</template>

<script>
import AppMain from "@/layout/WebView/components/AppMain.vue";
import HeaderView from "@/layout/WebView/components/HeaderView.vue";
import FooterView from "@/layout/WebView/components/FooterView.vue";
export default {
  name: "Layout",
  components: {
    AppMain,
    HeaderView,
    FooterView,
  },
};
</script>

<style></style>
