export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiServer: process.env.API_SERVER || 'http://localhost:8000',
      webSlug: process.env.WEB_SLUG || 'default-slug',
    },
  },
  css: (() => {
    // Crea la URL dinámica del archivo CSS
    const apiServer = process.env.API_SERVER || 'http://localhost:8000';
    const webSlug = process.env.WEB_SLUG || 'default-slug';
    const customCSS = `${apiServer}/css/${webSlug}/custom-values.css`;

    return [
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap-icons/font/bootstrap-icons.css',
      '@fortawesome/fontawesome-free/css/all.min.css',
      'aos/dist/aos.css',
      'glightbox/dist/css/glightbox.min.css',
      'swiper/swiper-bundle.min.css',
      customCSS, // Agrega el CSS generado dinámicamente
      '~/assets/css/main.css',
    ];
  })(),

})
