<template>
  <div>
    <div class="main-container">
      <app-main />
    </div>
    <bottom-navigation-bar class="fixed bottom-0 w-full shadow-5xl" />
  </div>
</template>

<script>
import AppMain from "./components/AppMain.vue";
import BottomNavigationBar from "@/layout/MobileView/components/BottomNavigationBar/BottomNavigationBar.vue";
export default {
  name: "Layout",
  components: {
    AppMain,
    BottomNavigationBar,
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    device() {
      return this.$store.state.app.device;
    },
  },
};
</script>
