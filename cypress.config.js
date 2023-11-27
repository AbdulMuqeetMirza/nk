
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/results",
    reportPageTitle: "NK Associates Automation Report",
    embeddedScreenshots: true,
    inlineAssets: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //report plugin
    },

    baseUrl: 'https://develop.d2vr74cwsk1kb.amplifyapp.com/contact',
  },

  // // Add the afterEach hook for capturing screenshots
  // afterEach: () => {
  //   // Capture a screenshot for the test, regardless of pass or fail
  //   cy.screenshot({ capture: 'fullPage' });
  // },

  afterEach: (test, runnable) => {
    // Check if the test passed or failed
    if (test.state === 'failed') {
      // If the test failed, create a filename indicating failure
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} (failed)`;
      // Capture a screenshot for the failed test
      cy.screenshot(screenshotFileName, { capture: 'fullPage' });
    } else {
      // If the test passed, create a filename indicating success
      const screenshotFileName = `${runnable.parent.title} -- ${test.title} (passed)`;
      // Capture a screenshot for the passed test
      cy.screenshot(screenshotFileName, { capture: 'fullPage' });
    }
  },

 



});

 

// //npm run cypress:run:chrome