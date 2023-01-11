import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  target: "static",
  head: {
    titleTemplate: "%s - Book Cottages and Resorts in Kodaikanal",
    title: "Kodaikanal Trip Advisor",
    script: [
      { hid: "stripe", src: "https://smtpjs.com/v3/smtp.js", defer: true },
    ],
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "We Guarantee you our best packages for holiday tours &amp; travels in Kodaikanal. Our team spends its major focus on giving safe &amp; secure trips. Our expert trip makers guide you by giving complete information on the trip and live guidance.",
      },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "keywords",
        content:
          "best cottages in kodaikanal , 3 bedroom cottages in kodaikanal, 2 bedroom cottages in kodaikanal, family cottages in kodaikanal, independent cottages in kodaikanal, Villas in kodaikanal, wooden cottages in kodaikanal, cottages in kodaikanal for couples, Resorts in Kodaikanal, Hotel Rooms in Kodaikanal, Cheap cottages in kodaikanal, low budget cottages in Kodaikanal, Wood house in Kodaikanal, Cottages in vattakanal, cottages with view in kodaikanal.",
      },
      // {
      //   name: "robots",
      //   content: "index, follow",
      // },
      {
        httpEquiv: "Content-Type",
        content: "text/html; charset=utf-8",
      },
      {
        name: "language",
        content: "English",
      },
      {
        property: "og:title",
        content:
          "Kodaikanl TripAdvisor - Book Cottages and Resorts in Kodaikanal",
      },
      {
        property: "og:site_name",
        content: "Kodaikanal TripAdvisor",
      },
      {
        property: "og:url",
        content: "https://www.kodaiguide.in",
      },
      {
        property: "og:description",
        content:
          "We Guarantee you with our best packages for holiday tours &amp; travels in Kodaikanal. Our team spends its major focus on giving safe &amp; secure trips. Our expert trip makers guide you by giving complete information on the trip and live guidance",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content:
          "https://lh3.googleusercontent.com/p/AF1QipPvk0vxEj3ekof7kFl5hukJ2VFbugyMDAsgB8bF=s680-w680-h510",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:site",
        content: "@Kodaikanal TripAdvisor",
      },
      {
        name: "twitter:title",
        content:
          "Kodaikanl TripAdvisor - Book Cottages and Resorts in Kodaikanal",
      },
      {
        name: "twitter:description",
        content:
          "We Guarantee you our best packages for holiday tours &amp; travels in Kodaikanal. Our team spends its major focus on giving safe &amp; secure trips. Our expert trip makers guide you by giving complete",
      },
      {
        name: "twitter:image",
        content:
          "https://lh3.googleusercontent.com/p/AF1QipPvk0vxEj3ekof7kFl5hukJ2VFbugyMDAsgB8bF=s680-w680-h510",
      },
      {
        name: "google-site-verification",
        content: "NINwSbwrOskafYi00LtfoqU9ZhylLszTaL0iyH7OLVc",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/kodailogo.jpg" },
      {
        rel: "canonical",
        href: "https://www.kodaiguide.in/",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/google-maps", ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "nuxt-seo", "nuxt-sitemap"],
  sitemap: {
    hostname: "https://kodaiguide.in",
  },

  // axios: {
  //   baseURL: "/",
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: "#DA9F3F",
          secondary: "#101920",
          accent: "#F1F3FF",
          error: "#b71c1c",
          bg: "#272727",
        },
        dark: {
          primary: "#DA9F3F",
          greycol: "#1a1a1d",
          secondary: "#101920",
          accent: "#F1F3FF",
          error: "#b71c1c",
          bg: "#263238",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
  },
};
