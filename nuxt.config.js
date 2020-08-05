export default {
  head: {
    title: "Mihailo Pantovic - Front-End Developer",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        name: "og:type",
        content: "website"
      },
      {
        name: "og:url",
        content: "http://mihailopantovic.com"
      },
      {
        name: "og:title",
        content: "Mihailo Pantovic - Front-End Developer"
      },
      {
        name: "og:description",
        content: process.env.npm_package_description || ""
      },
      {
        name: "og:image",
        content: "/images/MihailoPantovic.jpeg"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:url",
        content: "http://mihailopantovic.com"
      },
      {
        name: "twitter:title",
        content: "Mihailo Pantovic - Front-End Developer"
      },
      {
        name: "twitter:description",
        content: process.env.npm_package_description || ""
      },
      {
        name: "twitter:image",
        content: "/images/MihailoPantovic.jpg"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
      },
      {
        rel: "preload",
        as: "style",
        href:
          "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        onLoad: "this.onload=null;this.rel='stylesheet'"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/i18n.js", { src: "~plugins/ga.js", mode: "client" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Router configuration
   */
  router: {
    middleware: "pages"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
