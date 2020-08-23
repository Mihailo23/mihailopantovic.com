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
    bootstrap: () => import('~/components/UI/icons/bootstrap.vue'),
    css3: () => import('~/components/UI/icons/css3.vue'),
    git: () => import('~/components/UI/icons/git.vue'),
    html5: () => import('~/components/UI/icons/html5.vue'),
    javascript: () => import('~/components/UI/icons/javascript.vue'),
    jquery: () => import('~/components/UI/icons/jquery.vue'),
    laravel: () => import('~/components/UI/icons/laravel.vue'),
    linux: () => import('~/components/UI/icons/linux.vue'),
    mongodb: () => import('~/components/UI/icons/mongodb.vue'),
    mysql: () => import('~/components/UI/icons/mysql.vue'),
    photoshop: () => import('~/components/UI/icons/photoshop.vue'),
    php: () => import('~/components/UI/icons/php.vue'),
    react: () => import('~/components/UI/icons/react.vue'),
    sass: () => import('~/components/UI/icons/sass.vue'),
    sublimetext: () => import('~/components/UI/icons/sublimetext.vue'),
    tailwindcss: () => import('~/components/UI/icons/tailwindcss.vue'),
    visualstudiocode: () => import('~/components/UI/icons/visualstudiocode.vue'),
    vuejs: () => import('~/components/UI/icons/vuejs.vue'),
    windows: () => import('~/components/UI/icons/windows.vue'),
    wordpress: () => import('~/components/UI/icons/wordpress.vue'),
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
