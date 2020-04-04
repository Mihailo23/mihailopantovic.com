<template>
  <div>{{ $route.params.project }}</div>
</template>

<script>
export default {
  watch: {
    "$route.params.project": {
      handler(value) {
        // console.log(value);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
