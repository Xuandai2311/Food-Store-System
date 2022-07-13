<template>
  <div class="app-main">
    <component :is="layout">
      <router-view :layout.sync="layout" />
    </component>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
