<template>
  <div
    class="quote-wrapper relative"
    :style="{
      height: '300px',
      width: '300px'
    }"
  >
    <blockquote
      class="text text-gray-100 text-shadow relative h-full w-full"
      cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/"
    >
      <p class="text-center h-full">
        <span class="italic" v-text="$t(project.testimonial)" />
      </p>
      <p
        class="absolute bottom-0 mb-8 text-center w-full"
        v-text="project.owner"
      />
    </blockquote>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="scss" scoped>
.text {
  background: radial-gradient(
    ellipse at center,
    black 0%,
    black 70%,
    transparent 70.3%
  );
}
.text::before {
  content: "";
  float: left;
  height: 100%;
  width: 50%;
  shape-outside: polygon(
    0 0,
    0 100%,
    100% 100%,
    60% 95%,
    25% 85%,
    10% 70%,
    0 50%,
    10% 30%,
    25% 15%,
    60% 5%,
    100% 0
  );
  shape-margin: 7%;
}
.text p {
  &::before {
    content: "";
    float: right;
    height: 100%;
    width: 50%;
    shape-outside: polygon(
      0 0,
      100% 0,
      100% 100%,
      0 100%,
      40% 95%,
      75% 85%,
      90% 70%,
      100% 50%,
      90% 30%,
      75% 15%,
      40% 5%
    );
    shape-margin: 7%;
  }
}
.quote-wrapper::before {
  content: "\201C";
  color: #ccc;
  font-family: sans-serif, serif;
  font-size: 270px;
  height: 82px;
  line-height: 1;
  opacity: 0.9;
  position: absolute;
  top: -3rem;
  left: 0;
  z-index: 1;
}
</style>
