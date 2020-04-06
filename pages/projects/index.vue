<template>
  <div class="container px-2 sm:px-0">
    <h1
      class="my-8 text-blue-500 text-4xl sm:text-5xl font-bold leading-none"
      v-text="$t('projects.title')"
    />
    <div class="flex flex-wrap -mx-2">
      <div class="w-full sm:w-2/3 px-2">
        <main>
          <div v-for="(project, name) in projects" :key="name" class="mb-8">
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
import projects from "~/assets/projects.json";

import MSidebar from "~/components/MSidebar.vue";
import MProject from "~/components/UI/MProject.vue";
export default {
  components: {
    MSidebar,
    MProject
  },
  data() {
    return {
      projects
    };
  }
};
</script>

<style lang="scss" scoped></style>
