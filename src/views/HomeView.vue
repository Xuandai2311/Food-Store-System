<template>
  <div>
    <login-view class="hidden sm:block" />
    <starteed-view class="" />
  </div>
</template>

<script>
import LoginView from "@/views/WebView/Login/LoginView.vue";
import StarteedView from "@/views/MobileView/Starteed/StarteedView.vue";
export default {
  components: { LoginView, StarteedView },
};
</script>
