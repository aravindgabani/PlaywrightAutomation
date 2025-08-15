const { test, expect } = require('@playwright/test');

test('Playwright download file example', async ({ page }) => {
  await page.goto('https://only-testing-blog.blogspot.com/2014/05/login.html');

 const downloadPromise = page.waitForEvent('download');
await page.getByRole('link', { name: 'Download Text File' }).click();
const download = await downloadPromise;

  //await download.saveAs('downloads/' +download.suggestedFilename());
  const suggested = await download.suggestedFilename();
await download.saveAs(`./downloads/${suggested}`);

const fs = require('fs');
if (!fs.existsSync('./downloads')) fs.mkdirSync('./downloads');
const saved = `./downloads/${suggested}`;
console.log('Saved file:', saved);


});
