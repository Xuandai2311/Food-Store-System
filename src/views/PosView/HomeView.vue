<template>
  <div class="grid grid-cols-12 w-full">
    <navbar-left class="col-span-1 h-100 w-1/12 fixed bg-dark" />
    <content-view class="col-span-7 w-full ml-26 bg-yellow" />
    <navbar-right class="col-span-4 w-1/3 fixed right-0 bg-dark" />
  </div>
</template>

<script>
import NavbarLeft from "@/views/PosView/components/NavbarLeft.vue";
import ContentView from "@/views/PosView/components/ContentView.vue";
import NavbarRight from "@/views/PosView/components/NavbarRight.vue";
export default {
  components: { NavbarLeft, ContentView, NavbarRight },
};
</script>

<style></style>
