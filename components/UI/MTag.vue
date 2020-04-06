<template>
  <span
    class="flex items-center justify-center w-10 h-10 rounded-full leading-none"
    :title="`${name.toUpperCase()}`"
  >
    <i :class="`devicon-${name}-plain colored text-2xl`"></i>
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
