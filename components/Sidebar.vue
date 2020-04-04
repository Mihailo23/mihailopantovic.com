<template>
  <aside>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold">SKILLS</h5>
      <Tag>JavaScript</Tag>
      <Tag>Sass</Tag>
      <Tag>HTML</Tag>
      <Tag>CSS</Tag>
      <Tag>PHP</Tag>
      <Tag>MySQL</Tag>
      <Tag>Mongo</Tag>
    </div>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold">FRAMEWORKS</h5>
      <h6 class="mt-2 font-bold text-sm">PHP:</h6>
      <Tag>Wordpress</Tag>
      <Tag>Laravel</Tag>
      <h6 class="mt-2 font-bold text-sm">FRONT-END:</h6>
      <Tag>Vue.js</Tag>
      <Tag>jQuery</Tag>
      <Tag>Bootstrap</Tag>
      <Tag>React</Tag>
      <Tag>TailwindCSS</Tag>
      <h6 class="mt-2 font-bold text-sm">MOBILE:</h6>
      <Tag>React Native</Tag>
    </div>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold">OTHER</h5>
      <h6 class="mt-2 font-bold text-sm">Version Control:</h6>
      <Tag>Git</Tag>
      <h6 class="mt-2 font-bold text-sm">IDE Tools:</h6>
      <Tag>Visual Studio Code</Tag>
      <Tag>PHPStorm</Tag>
      <Tag>Sublime Text</Tag>
      <Tag>Adobe Photoshop Platforms</Tag>
      <h6 class="mt-2 font-bold text-sm">Environments:</h6>
      <Tag>Linux</Tag>
      <Tag>Mac OS</Tag>
      <Tag>Windows</Tag>
    </div>
  </aside>
</template>

<script>
import Tag from "~/components/UI/Tag.vue";
export default {
  components: {
    Tag
  }
};
</script>

<style lang="scss" scoped></style>
