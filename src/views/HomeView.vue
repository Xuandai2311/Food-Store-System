<template>
  <div>
    <div class="sm:hidden text-red-base">Mobile View</div>
    <div class="hidden sm:block">web</div>
    <h2 class="text-red">dá</h2>
    <login-view />
  </div>
</template>

<script>
import LoginView from "@/views/WebView/Login/LoginView.vue";
export default {
  components: { LoginView },
};
</script>
