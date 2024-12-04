export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  plugins: ['~/plugins/env.js'],
  runtimeConfig: {
    public: {
      apiServer: process.env.API_SERVER || 'http://localhost:8000',
      webSlug: process.env.WEB_SLUG || 'default-slug',
    },
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'aos/dist/aos.css',
    'glightbox/dist/css/glightbox.min.css',
    '~/assets/css/custom-values.css',
    '~/assets/css/main.css',
  ],
});
