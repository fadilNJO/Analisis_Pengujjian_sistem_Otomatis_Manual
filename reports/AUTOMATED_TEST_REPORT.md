# Automated Smoke Test Report

- Target: https://the-internet.herokuapp.com/
- Runner: Playwright Test, Node.js
- Date/environment: `PENDING`
- Command: `cd tests/automated && npm install && npx playwright install chromium && npm test`
- Execution status: `NOT RUN` in this repository session.
- Cases authored: 5 smoke tests. Results are not reported until run against the live target.
- Output, when executed: `reports/automated_test_results.json` and Playwright traces for failed cases.

Only run serially and occasionally. Network outages, target changes, or rate limiting should be distinguished from product defects. Do not describe the authored case count as successful tests.
