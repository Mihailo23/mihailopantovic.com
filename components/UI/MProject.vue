<template>
  <div class="card">
    <h4 class="text-xl leading-tight" v-text="title" />
    <a
      v-if="link"
      class="text-brand"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      v-text="link"
    />
    <div v-if="tags.length" class="flex">
      <MTag v-for="tag in tags" :key="tag" :icon="icons[tag]" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import MTag from "./MTag";
import icons from "~/assets/icons.json";
export default {
  components: {
    MTag
  },
  props: {
    title: {
      type: String,
      default: "Card Title"
    },
    link: {
      type: String,
      default: ""
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      icons
    };
  }
};
</script>

<style lang="scss" scoped></style>
