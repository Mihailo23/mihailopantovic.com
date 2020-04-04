<template>
  <ul class="flex text-white">
    <NavigationItem to="/" exact>Home</NavigationItem>
    <NavigationItem to="/projects">Projects</NavigationItem>
  </ul>
</template>

<script>
import NavigationItem from "./NavigationItem.vue";
export default {
  components: {
    NavigationItem
  }
};
</script>

<style lang="scss" scoped></style>
