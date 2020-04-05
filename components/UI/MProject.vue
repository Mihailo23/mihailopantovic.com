<template>
  <div class="card my-8">
    <h4 class="text-xl leading-tight" v-text="title" />
    <a
      v-if="link"
      class="text-blue-500"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      v-text="link"
    />
    <div v-if="tags.length" class="flex">
      <MTag v-for="tag in tags" :key="tag" :name="tag" />
    </div>
    <slot></slot>
  </div>
</template>

<script>
import MTag from "./MTag";
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
  }
};
</script>

<style lang="scss" scoped></style>
