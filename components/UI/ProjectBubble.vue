<template>
  <li>
    <nuxt-link
      :to="`/projects/${project}`"
      class="block text-blue-500 rounded-full border-2 border-white w-12 h-12 bg-contain bg-center bg-no-repeat bg-black -mr-4"
      :class="project"
    ></nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    project: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
