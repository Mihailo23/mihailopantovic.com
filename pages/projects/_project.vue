<template>
  <div class="container px-2 sm:px-0">
    <h1
      class="my-4 text-blue-500 text-4xl sm:text-5xl font-bold leading-none capitalize"
      v-text="title"
    />
    <h2 class="text-6xl">TODO</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: ""
    };
  },
  computed: {
    title() {
      return this.project.split("-").join(" ");
    }
  },
  watch: {
    "$route.params.project": {
      handler(value) {
        this.project = value;
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
