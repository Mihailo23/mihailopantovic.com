<template>
  <div class="space-y-2">
    <h4
      class="text-xl leading-tight"
      v-text="title"
    />
    <p v-if="link">
      <a
        class="text-brand"
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        v-text="link"
      />

    </p>
    <div
      v-if="tags.length"
      class="flex space-x-3"
    >
      <MTag
        v-for="tag in tags"
        :key="tag"
        :icon="icons[tag]"
      />
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
