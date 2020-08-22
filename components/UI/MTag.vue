<template>
  <span
    class="icon"
    :data-title="icon.title"
    :style="{backgroundColor: icon.background }"
  >
    <component
      class="w-6 h-6"
      :is="icon.icon"
      :style="{color: icon.color }"
    />
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
  },
  components: {
    apple: () => import('~/components/UI/icons/apple.vue'),
    javascript: () => import('~/components/UI/icons/javascript.vue'),
  }
};
</script>

<style lang="scss">
.icon {
  position: relative;
}
.icon::after {
  font-family: Roboto;
  font-weight: bold;
  display: block;
  content: attr(data-title);
  visibility: hidden;
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 0.25rem;
  color: inherit;
  padding: 0.25rem;
  font-size: 0.75rem;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: -2rem;
  transform: translateX(-50%) translateY(-1rem);
  transition: visibility 0s 0.5s, opacity 0.5s ease,
    transform 0.5s cubic-bezier(0, 1, 0.5, 1);
  opacity: 0;
  white-space: nowrap;
}
.icon:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  transition: opacity 0.2s ease, transform 0.5s cubic-bezier(0, 1, 0.5, 1);
  visibility: visible;
}
</style>
