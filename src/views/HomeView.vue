<template>
  <div>
    <login-view class="hidden sm:block" />
  </div>
</template>

<script>
import LoginView from "@/views/WebView/Login/LoginView.vue";
export default {
  components: { LoginView },
};
</script>
