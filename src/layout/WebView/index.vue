<template>
  <div class="bg-web hidden sm:block">
    <header-view id="Header" class="px-32" />
    <div class="main-container pt-14 container mx-auto">
      <app-main class="pt-20" />
    </div>
    <footer-view class="mx-40" />
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
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 100) {
        document.getElementById("Header").classList.add("bg-Header");
      } else {
        document.getElementById("Header").classList.remove("bg-Header");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-Header {
  background: linear-gradient(
    111.39deg,
    #e9f3fd 100%,
    rgba(229, 229, 254, 0.5) 100%,
    #e9f3fd 89.83%
  );
  box-shadow: 0px 13.4555px 33.6388px rgba(57, 57, 57, 0.1);
}
.bg-web {
  background: linear-gradient(
    111.39deg,
    #e9f3fd 12.37%,
    rgba(229, 229, 254, 0.5) 53.12%,
    #e9f3fd 89.83%
  );
}
</style>
