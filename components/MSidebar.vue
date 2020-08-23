<template>
  <aside class="text-center sm:text-right space-y-6">
    <hr class="my-4" />
    <div class="border-b pb-6">
      <MH5
        class="mb-2"
        :text="$t('sidebar.languages')"
      />
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="icons.js" />
        <MTag :icon="icons.html" />
        <MTag :icon="icons.php" />
        <MTag :icon="icons.css" />
      </div>
    </div>

    <div class="border-b pb-6">
      <MH5
        class="mb-2"
        :text="$t('sidebar.databases')"
      />
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="icons.mysql" />
        <MTag :icon="icons.mongo" />
      </div>
    </div>
    <div class="border-b pb-6">
      <MH5
        class="mb-2"
        :text="$t('sidebar.frameworks')"
      />
      <h6 class="my-2 text-sm">PHP:</h6>
      <div class="flex justify-center sm:justify-end space-x-3 mb-4">
        <MTag :icon="icons.wordpress" />
        <MTag :icon="icons.laravel" />
      </div>
      <h6 class="my-2 text-sm">FRONT-END:</h6>
      <div class="flex justify-center sm:justify-end space-x-3 mb-4">
        <MTag :icon="icons.vue" />
        <MTag :icon="icons.tailwind" />
        <MTag :icon="icons.jquery" />
        <MTag :icon="icons.bootstrap" />
        <MTag :icon="icons.react" />
        <MTag :icon="icons.sass" />
      </div>
      <h6 class="my-2 text-sm">MOBILE:</h6>
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="icons.reactnative" />
      </div>
    </div>
    <div class="border-b pb-6">
      <MH5
        class="mb-2"
        :text="$t('sidebar.other')"
      />
      <h6
        class="my-2 text-sm"
        v-text="$t('sidebar.version-control')"
      />
      <div class="flex justify-center sm:justify-end space-x-3 mb-4">
        <MTag :icon="icons.git" />
      </div>
      <h6
        class="my-2 text-sm"
        v-text="$t('sidebar.ide')"
      />
      <div class="flex justify-center sm:justify-end space-x-3 mb-4">
        <MTag :icon="icons.vsc" />
        <MTag :icon="icons.photoshop" />
      </div>
      <h6
        class="my-2 text-sm"
        v-text="$t('sidebar.environments')"
      />
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="icons.linux" />
        <MTag :icon="icons.mac" />
        <MTag :icon="icons.windows" />
      </div>
    </div>
  </aside>
</template>

<script>
import MTag from "~/components/UI/MTag.vue";
import MH5 from "~/components/UI/MH5.vue";
import icons from "~/assets/icons.json";
export default {
  components: {
    MTag,
    MH5
  },
  data() {
    return {
      icons
    };
  }
};
</script>

<style lang="scss" scoped></style>
