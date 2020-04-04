<template>
  <aside>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold">SKILLS</h5>
      <MTag>JavaScript</MTag>
      <MTag>Sass</MTag>
      <MTag>HTML</MTag>
      <MTag>CSS</MTag>
      <MTag>PHP</MTag>
      <MTag>MySQL</MTag>
      <MTag>Mongo</MTag>
    </div>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold">FRAMEWORKS</h5>
      <h6 class="mt-2 font-bold text-sm">PHP:</h6>
      <MTag>Wordpress</MTag>
      <MTag>Laravel</MTag>
      <h6 class="mt-2 font-bold text-sm">FRONT-END:</h6>
      <MTag>Vue.js</MTag>
      <MTag>jQuery</MTag>
      <MTag>Bootstrap</MTag>
      <MTag>React</MTag>
      <MTag>TailwindCSS</MTag>
      <h6 class="mt-2 font-bold text-sm">MOBILE:</h6>
      <MTag>React Native</MTag>
    </div>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold">OTHER</h5>
      <h6 class="mt-2 font-bold text-sm">Version Control:</h6>
      <MTag>Git</MTag>
      <h6 class="mt-2 font-bold text-sm">IDE Tools:</h6>
      <MTag>Visual Studio Code</MTag>
      <MTag>PHPStorm</MTag>
      <MTag>Sublime Text</MTag>
      <MTag>Adobe Photoshop</MTag>
      <h6 class="mt-2 font-bold text-sm">Environments:</h6>
      <MTag>Linux</MTag>
      <MTag>Mac OS</MTag>
      <MTag>Windows</MTag>
    </div>
  </aside>
</template>

<script>
import MTag from "~/components/UI/MTag.vue";
export default {
  components: {
    MTag
  }
};
</script>

<style lang="scss" scoped></style>
