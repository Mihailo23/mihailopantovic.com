<template>
  <div class="container px-2 sm:px-0">
    <div class="my-8">
      <MH1 :text="$t('projects.title')" />
    </div>
    <div class="flex flex-wrap -mx-2">
      <div class="w-full sm:w-2/3 px-2">
        <main>
          <div
            v-for="(project, name) in PROJECTS"
            :key="name"
            class="mb-8"
          >
            <m-project
              :title="$t(project.title)"
              :link="project.url"
              :tags="project.tags"
            />
          </div>
        </main>
      </div>
      <div class="w-full sm:w-1/3 px-2">
        <m-sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import { PROJECTS } from "~/assets/constants";

import MSidebar from "~/components/MSidebar.vue";
import MProject from "~/components/UI/MProject.vue";
import MH1 from "~/components/UI/MH1.vue";
export default {
  components: {
    MSidebar,
    MProject,
    MH1
  },
  data() {
    return {
      PROJECTS
    };
  }
};
</script>

<style lang="scss" scoped></style>
