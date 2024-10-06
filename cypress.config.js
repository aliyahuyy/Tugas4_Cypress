const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl : 'https://www.saucedemo.com',
      specPattern : "cypress/support/e2e",
      supportFile : false,
      //chromeWebSecurity : false
  },
});
