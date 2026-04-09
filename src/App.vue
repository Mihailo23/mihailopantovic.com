<script setup lang="ts">
import { useHead } from "@unhead/vue";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import TechSection from "./components/TechSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import EducationSection from "./components/EducationSection.vue";
import ContactSection from "./components/ContactSection.vue";
import FooterSection from "./components/FooterSection.vue";

useHead({
  title: "Mihailo Pantovic — Software Developer",
  meta: [
    {
      name: "description",
      content:
        "Personal portfolio of Mihailo Pantovic, Software Developer. Vue.js, TypeScript, React, and modern web technologies.",
    },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Mihailo Pantovic — Software Developer" },
    {
      property: "og:description",
      content:
        "Personal portfolio of Mihailo Pantovic, Software Developer. Vue.js, TypeScript, React, and modern web technologies.",
    },
    { property: "og:url", content: "https://mihailopantovic.com" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "index, follow" },
  ],
  link: [{ rel: "canonical", href: "https://mihailopantovic.com" }],
});
</script>

<template>
  <NavBar />
  <main class="container">
    <HeroSection />
    <ExperienceSection />
    <TechSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>
