<template>
  <nuxt-link
    :exact="exact"
    :to="to"
    class="outline-none transition duration-500 uppercase text-xs font-bold tracking-widest px-3 py-1 border-b-4 border-transparent hover:border-blue-500 focus:border-blue-500"
  >
    <slot
  /></nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/"
    },
    exact: Boolean
  }
};
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  border-color: #4299e1;
}
</style>
