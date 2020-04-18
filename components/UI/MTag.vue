<template>
  <span
    class=" flex items-center justify-center w-10 h-10 rounded-full leading-none"
  >
    <i
      :class="`icon devicon-${icon.icon}-plain colored text-2xl`"
      :data-title="icon.title"
    ></i>
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
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
  background-color: #ffffff;
  border: 1px solid;
  border-radius: 0.25rem;
  color: inherit;
  padding: 0.25rem;
  font-size: 0.75rem;
  position: absolute;
  z-index: 1;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.5s 0.2s cubic-bezier(0, 0.5, 0, 1);
  white-space: nowrap;
}
.icon:hover::after {
  opacity: 1;
  top: -2rem;
}
</style>
