DEMO Project

Description
This project contains automated tests written using Playwright.

The tests cover:
1.placing an order by filling in the username and email fields and clicking the order button;
2.signing in to the application.

Setup
Make sure you have Node.js installed.

Install dependencies:
npm install

Create a .env file in the root directory with the following content:
APP_URL=https://fe-delivery.tallinn-learning.ee/

Running Tests
Run all tests:
npx playwright test

Run tests with a specific file:
npx playwright test tests/lesson16.1.spec.ts
npx playwright test tests/lesson16.spec.ts
