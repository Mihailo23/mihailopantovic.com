<template>
  <nuxt-link
    :exact="exact"
    :to="to"
    class="link outline-none transition duration-500 uppercase text-xs font-bold tracking-widest px-3 py-2"
  >
    {{text}}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/"
    },
    exact: Boolean,
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  position: relative;
}
.link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 100%;
  border-top: 0.25rem solid black;
  border-radius: 0.25rem;
  transition: right 0.5s cubic-bezier(0, 0.5, 0, 1);
}
@media (hover: hover) {
  .link:hover::after {
    animation: anchor-underline 1.5s cubic-bezier(0, 0.5, 0, 1) infinite;
  }
}
.nuxt-link-active::after {
  right: 0;
}
@keyframes anchor-underline {
  0%,
  10% {
    left: 0;
    right: 100%;
  }
  40%,
  60% {
    left: 0;
    right: 0;
  }
  90%,
  100% {
    left: 100%;
    right: 0;
  }
}
</style>
