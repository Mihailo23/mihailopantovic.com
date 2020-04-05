<template>
  <aside>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.languages')" />
      <MTag>JavaScript</MTag>
      <MTag>HTML</MTag>
      <MTag>CSS</MTag>
      <MTag>PHP</MTag>
    </div>

    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.databases')" />
      <MTag>MySQL</MTag>
      <MTag>Mongo</MTag>
    </div>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.frameworks')" />
      <h6 class="mt-2 font-bold text-sm">PHP:</h6>
      <MTag>Wordpress</MTag>
      <MTag>Laravel</MTag>
      <h6 class="mt-2 font-bold text-sm">FRONT-END:</h6>
      <MTag>Vue.js</MTag>
      <MTag>jQuery</MTag>
      <MTag>Bootstrap</MTag>
      <MTag>React</MTag>
      <MTag>Sass</MTag>
      <MTag>TailwindCSS</MTag>
      <h6 class="mt-2 font-bold text-sm">MOBILE:</h6>
      <MTag>React Native</MTag>
    </div>
    <div class="card my-8">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.other')" />
      <h6
        class="mt-2 font-bold text-sm"
        v-text="$t('sidebar.version-control')"
      />
      <MTag>Git</MTag>
      <h6 class="mt-2 font-bold text-sm" v-text="$t('sidebar.ide')" />
      <MTag>Visual Studio Code</MTag>
      <MTag>PHPStorm</MTag>
      <MTag>Sublime Text</MTag>
      <MTag>Adobe Photoshop</MTag>
      <h6 class="mt-2 font-bold text-sm" v-text="$t('sidebar.environments')" />
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
