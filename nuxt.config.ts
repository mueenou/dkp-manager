// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
});
