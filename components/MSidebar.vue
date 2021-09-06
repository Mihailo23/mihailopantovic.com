<template>
  <aside class="text-center sm:text-right space-y-6">
    <hr class="my-4" />
    <div class="border-b pb-6">
      <MH5
        class="mb-2"
        :text="$t('sidebar.languages')"
      />
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="ICONS.js" />
        <MTag :icon="ICONS.html" />
        <MTag :icon="ICONS.php" />
        <MTag :icon="ICONS.css" />
      </div>
    </div>

    <div class="border-b pb-6">
      <MH5
        class="mb-2"
        :text="$t('sidebar.databases')"
      />
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="ICONS.mysql" />
        <MTag :icon="ICONS.mongo" />
      </div>
    </div>
    <div class="border-b pb-6">
      <MH5
        class="mb-2"
        :text="$t('sidebar.frameworks')"
      />
      <h6 class="my-2 text-sm">PHP:</h6>
      <div class="flex justify-center sm:justify-end space-x-3 mb-4">
        <MTag :icon="ICONS.wordpress" />
        <MTag :icon="ICONS.laravel" />
      </div>
      <h6 class="my-2 text-sm">FRONT-END:</h6>
      <div class="flex justify-center sm:justify-end space-x-3 mb-4">
        <MTag :icon="ICONS.vue" />
        <MTag :icon="ICONS.tailwind" />
        <MTag :icon="ICONS.jquery" />
        <MTag :icon="ICONS.bootstrap" />
        <MTag :icon="ICONS.react" />
        <MTag :icon="ICONS.sass" />
      </div>
      <h6 class="my-2 text-sm">MOBILE:</h6>
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="ICONS.reactnative" />
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
        <MTag :icon="ICONS.git" />
      </div>
      <h6
        class="my-2 text-sm"
        v-text="$t('sidebar.ide')"
      />
      <div class="flex justify-center sm:justify-end space-x-3 mb-4">
        <MTag :icon="ICONS.vsc" />
        <MTag :icon="ICONS.photoshop" />
      </div>
      <h6
        class="my-2 text-sm"
        v-text="$t('sidebar.environments')"
      />
      <div class="flex justify-center sm:justify-end space-x-3">
        <MTag :icon="ICONS.linux" />
        <MTag :icon="ICONS.mac" />
        <MTag :icon="ICONS.windows" />
      </div>
    </div>
  </aside>
</template>

<script>
import MTag from "~/components/UI/MTag.vue";
import MH5 from "~/components/UI/MH5.vue";
import { ICONS } from "~/assets/constants";
export default {
  components: {
    MTag,
    MH5
  },
  data() {
    return {
      ICONS
    };
  }
};
</script>

<style lang="scss" scoped></style>
