export default defineNuxtPlugin((nuxtApp) => {
  const { public: publicRuntimeConfig } = useRuntimeConfig();

  nuxtApp.provide("apiServer", publicRuntimeConfig.apiServer);
  nuxtApp.provide("webSlug", publicRuntimeConfig.webSlug);
});
