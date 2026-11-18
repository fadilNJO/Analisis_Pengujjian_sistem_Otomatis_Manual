const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './specs',
  timeout: 15000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [['list'], ['json', { outputFile: '../../reports/automated_test_results.json' }]],
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    headless: true,
    actionTimeout: 5000,
    navigationTimeout: 10000,
    trace: 'retain-on-failure'
  }
});
