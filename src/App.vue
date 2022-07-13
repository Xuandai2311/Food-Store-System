<template>
  <div id="app" v-bind:class="checkScreen()">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    checkScreen() {},
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media (min-width: 640px) {
  .app-web {
    background: linear-gradient(
      111.39deg,
      #e9f3fd 12.37%,
      rgba(229, 229, 254, 0.5) 53.12%,
      #e9f3fd 89.83%
    );
  }
}
</style>
