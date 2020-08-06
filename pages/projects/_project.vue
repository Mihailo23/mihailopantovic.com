<template>
  <div class="container">
    <h1
      class="my-8 text-brand text-4xl sm:text-5xl font-bold leading-none capitalize"
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
