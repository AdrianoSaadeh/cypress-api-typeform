const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    API_BASE_URL: "https://api.typeform.com",
  },

  experimentalSessionAndOrigin: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
