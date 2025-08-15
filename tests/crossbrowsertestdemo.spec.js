// tests/crossbrowsertestdemo.spec.js
const { test, expect } = require('@playwright/test');

test('My first cross-browser test', async ({ page }) => {
  //Opening URL and checking page title
  await page.goto('https://www.google.com/');
  const title = await page.title();
  console.log('Title is:', title);
  await expect(page).toHaveTitle(/Googles/);
});
