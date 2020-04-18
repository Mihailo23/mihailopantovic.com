<template>
  <aside class="text-center sm:text-right">
    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.languages')" />
      <div class="flex justify-center sm:justify-end">
        <MTag icon="javascript" title="javascript" />
        <MTag icon="html5" title="html5" />
        <MTag icon="php" title="php" />
        <MTag icon="css3" title="css3" />
      </div>
    </div>

    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.databases')" />
      <div class="flex justify-center sm:justify-end">
        <MTag icon="mysql" title="mysql" />
        <MTag icon="mongodb" title="mongodb" />
      </div>
    </div>
    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.frameworks')" />
      <h6 class="mt-2 text-sm">PHP:</h6>
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="wordpress" title="wordpress" />
        <MTag icon="laravel" title="laravel" />
      </div>
      <h6 class="mt-2 text-sm">FRONT-END:</h6>
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="vuejs" title="vuejs" />
        <MTag icon="jquery" title="jquery" />
        <MTag icon="bootstrap" title="bootstrap" />
        <MTag icon="react" title="react" />
        <MTag icon="sass" title="sass" />
      </div>
      <h6 class="mt-2 text-sm">MOBILE:</h6>
      <div class="flex justify-center sm:justify-end">
        <MTag icon="react" title="react" />
      </div>
    </div>
    <div class="card">
      <hr class="my-4" />
      <MH5 v-text="$t('sidebar.other')" />
      <h6 class="mt-2 text-sm" v-text="$t('sidebar.version-control')" />
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="git" title="git" />
      </div>
      <h6 class="mt-2 text-sm" v-text="$t('sidebar.ide')" />
      <div class="flex justify-center sm:justify-end mb-4">
        <MTag icon="visualstudio" title="visualstudio" />
        <MTag icon="phpstorm" title="phpstorm" />
        <MTag icon="photoshop" title="photoshop" />
      </div>
      <h6 class="mt-2 text-sm" v-text="$t('sidebar.environments')" />
      <div class="flex justify-center sm:justify-end">
        <MTag icon="linux" title="linux" />
        <MTag icon="apple" title="apple" />
        <MTag icon="windows8" title="windows8" />
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
