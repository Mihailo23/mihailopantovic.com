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
    <p v-if="date" class="text-gray-600 text-xs" v-text="date" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Card Title"
    },

    content: {
      type: String,
      default: "Default Content"
    },
    link: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped></style>
