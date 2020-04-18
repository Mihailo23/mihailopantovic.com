<template>
  <aside class="text-center sm:text-right">
    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.languages')" />
      <div class="flex justify-center sm:justify-end">
        <MTag icon="javascript" title="JavaScript" />
        <MTag icon="html5" title="HTML5" />
        <MTag icon="php" title="PHP" />
        <MTag icon="css3" title="CSS3" />
      </div>
    </div>

    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.databases')" />
      <div class="flex justify-center sm:justify-end">
        <MTag icon="mysql" title="MySQL" />
        <MTag icon="mongodb" title="MongoDB" />
      </div>
    </div>
    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.frameworks')" />
      <h6 class="mt-2 text-sm">PHP:</h6>
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="wordpress" title="WordPress" />
        <MTag icon="laravel" title="Laravel" />
      </div>
      <h6 class="mt-2 text-sm">FRONT-END:</h6>
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="vuejs" title="VueJS" />
        <MTag icon="jquery" title="jQuery" />
        <MTag icon="bootstrap" title="Bootstrap" />
        <MTag icon="react" title="React" />
        <MTag icon="sass" title="SASS" />
      </div>
      <h6 class="mt-2 text-sm">MOBILE:</h6>
      <div class="flex justify-center sm:justify-end">
        <MTag icon="react" title="React Native" />
      </div>
    </div>
    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.other')" />
      <h6 class="mt-2 text-sm" v-text="$t('sidebar.version-control')" />
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="git" title="Git" />
      </div>
      <h6 class="mt-2 text-sm" v-text="$t('sidebar.ide')" />
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="visualstudio" title="VSCode" />
        <MTag icon="phpstorm" title="PhpStorm" />
        <MTag icon="photoshop" title="Photoshop" />
      </div>
      <h6 class="mt-2 text-sm" v-text="$t('sidebar.environments')" />
      <div class="flex justify-center sm:justify-end">
        <MTag icon="linux" title="Linux" />
        <MTag icon="apple" title="MacOS" />
        <MTag icon="windows8" title="Windows" />
      </div>
    </div>
  </aside>
</template>

<script>
import MTag from "~/components/UI/MTag.vue";
import MH5 from "~/components/UI/MH5.vue";
export default {
  components: {
    MTag,
    MH5
  }
};
</script>

<style lang="scss" scoped></style>
