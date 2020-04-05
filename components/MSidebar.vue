<template>
  <aside class="text-center sm:text-left">
    <div class="card">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.languages')" />
      <div class="flex justify-center sm:justify-start">
        <MTag name="javascript" />
        <MTag name="html5" />
        <MTag name="php" />
        <MTag name="css3" />
      </div>
    </div>

    <div class="card">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.databases')" />
      <div class="flex justify-center sm:justify-start">
        <MTag name="mysql" />
        <MTag name="mongodb" />
      </div>
    </div>
    <div class="card">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.frameworks')" />
      <h6 class="mt-2 font-bold text-sm">PHP:</h6>
      <div class="flex justify-center sm:justify-start mb-4">
        <MTag name="wordpress" />
        <MTag name="laravel" />
      </div>
      <h6 class="mt-2 font-bold text-sm">FRONT-END:</h6>
      <div class="flex justify-center sm:justify-start mb-4">
        <MTag name="vuejs" />
        <MTag name="jquery" />
        <MTag name="bootstrap" />
        <MTag name="react" />
        <MTag name="sass" />
        <!-- <MTag name="tailwind" /> -->
      </div>
      <h6 class="mt-2 font-bold text-sm">MOBILE:</h6>
      <div class="flex justify-center sm:justify-start">
        <MTag name="react" />
      </div>
    </div>
    <div class="card">
      <hr class="my-4" />
      <h5 class="text-blue-500 font-bold" v-text="$t('sidebar.other')" />
      <h6
        class="mt-2 font-bold text-sm"
        v-text="$t('sidebar.version-control')"
      />
      <div class="flex justify-center sm:justify-start mb-4">
        <MTag name="git" />
      </div>
      <h6 class="mt-2 font-bold text-sm" v-text="$t('sidebar.ide')" />
      <div class="flex justify-center sm:justify-start mb-4">
        <MTag name="visualstudio" />
        <MTag name="phpstorm" />
        <!-- <MTag name="sublime" /> -->
        <MTag name="photoshop" />
      </div>
      <h6 class="mt-2 font-bold text-sm" v-text="$t('sidebar.environments')" />
      <div class="flex justify-center sm:justify-start">
        <MTag name="linux" />
        <MTag name="apple" />
        <MTag name="windows8" />
      </div>
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
