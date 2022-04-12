<template>
  <div>
    <starteed-view class="sm:hidden" />
    <div class="hidden sm:block">web</div>
  </div>
</template>

<script>
// @ is an alias to /src
import StarteedView from "@/views/MobileView/Starteed/StarteedView.vue";

export default {
  components: {
    StarteedView,
  },
};
</script>
