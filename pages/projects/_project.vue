<template>
  <div class="container pt-8">
    <h1
      class="text-blue-500 text-6xl font-bold leading-none capitalize"
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
