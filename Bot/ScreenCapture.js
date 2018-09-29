const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({ height: 1080, width: 1920 });
  await page.goto("https://www.instagram.com/mohamedalikefi/");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
