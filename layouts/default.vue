<template>
  <div>
    <client-only>
      <m-header />
    </client-only>
    <nuxt />
  </div>
</template>
<script>
import MHeader from "~/components/MHeader.vue";

export default {
  components: {
    MHeader
  }
};
</script>
<style>
html {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-display: swap;
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
  transition: opacity 0.5s ease-out;
}

.page-leave-active {
  transition: opacity 0.5s ease-in;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
