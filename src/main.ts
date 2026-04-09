import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import { createHead } from "@unhead/vue/client";
import "./style.css";
import App from "./App.vue";
import en from "./locales/en";
import sr from "./locales/sr";

function detectLocale(): "en" | "sr" {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("locale");
  if (saved === "en" || saved === "sr") return saved;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("sr") || lang.startsWith("hr") || lang.startsWith("bs"))
    return "sr";
  return "en";
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: "en",
  messages: { en, sr },
});

const head = createHead();
const app = createApp(App);
app.use(i18n);
app.use(head);
app.mount("#app");
