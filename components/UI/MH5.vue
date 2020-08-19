<template>
  <h5
    class="font-bold"
    v-text="text"
  >
    <slot />
  </h5>
</template>

<script>
export default {
  props: ['text']
};
</script>
