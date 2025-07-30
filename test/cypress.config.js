const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/*.cy.js',
    retries: 0,
    env: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
});
