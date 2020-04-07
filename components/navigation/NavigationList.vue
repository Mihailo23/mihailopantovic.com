<template>
  <ul class="flex text-white items-center py-1">
    <NavigationItem to="/" exact class="mr-2" v-text="$t('links.home')" />
    <NavigationItem to="/projects" v-text="$t('links.projects')" />
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
