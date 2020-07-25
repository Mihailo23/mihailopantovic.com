<template>
  <li>
    <a
      class="w-6 h-6 flex text-black bg-white items-center justify-center rounded-full bg-black"
      target="_blank"
      :aria-label="title"
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
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
