<template>
  <div class="space-y-2">
    <h2
      class="text-xl leading-tight"
      v-text="title"
    />
    <h3 v-if="link">
      <a
        class="text-brand"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        v-text="link"
      />
    </h3>
    <div
      v-if="tags.length"
      class="flex space-x-3"
    >
      <MTag
        v-for="tag in tags"
        :key="tag"
        :icon="ICONS[tag]"
      />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import MTag from "./MTag";
import { ICONS } from "~/assets/constants";
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
      ICONS
    };
  }
};
</script>

<style lang="scss" scoped></style>
