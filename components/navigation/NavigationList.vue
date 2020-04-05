<template>
  <ul class="flex text-white items-center">
    <NavigationItem to="/" exact>Home</NavigationItem>
    <NavigationItem to="/projects">Projects</NavigationItem>
    <div class="ml-auto">
      <LanguageChanger />
    </div>
  </ul>
</template>

<script>
import NavigationItem from "./NavigationItem.vue";
import LanguageChanger from "~/components/UI/LanguageChanger.vue";
export default {
  components: {
    NavigationItem,
    LanguageChanger
  }
};
</script>

<style lang="scss" scoped></style>
