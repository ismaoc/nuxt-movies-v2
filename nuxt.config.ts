// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
	app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },
  css: ["~/assets/styles/main.css"],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@unocss/nuxt'
  ],
  runtimeConfig: {
		apiKey: process.env.NUXT_API_KEY
	},
})