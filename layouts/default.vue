<template>
  <div>
    <app-navigation />
    <nuxt />
  </div>
</template>
<script>
import AppNavigation from "~/components/AppNavigation.vue";

export default {
  components: {
    AppNavigation
  }
};
</script>
<style>
html {
  font-family: Lato;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.page-enter-active {
  transition: opacity 0.25s ease-out;
}

.page-leave-active {
  transition: opacity 0.25s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
