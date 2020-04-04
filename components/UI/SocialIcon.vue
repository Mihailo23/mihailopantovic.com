<template>
  <li>
    <a
      class="block text-blue-500 rounded-full bg-white border-2 border-white"
      target="_blank"
      :href="link"
    >
      <svg
        class="fill-current inline-block h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <slot />
      </svg>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
