const puppeteer = require("puppeteer");
const credentials = require("./credentials");
const width = 1366;
const height = 768;

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=${width},${height}`]
  });

  const page = await browser.newPage();
  // page.viewport({ width, height });

  // Connect Proc
  await page.goto("http://instagram.com/accounts/login");

  await page.waitFor(() => document.querySelectorAll("input").length);

  await page.type("[name=username]", credentials.username, { delay: 20 });
  await page.type("[name=password]", credentials.password, { delay: 20 });

  await page.evaluate(() => {
    document.querySelector("._5f5mN").click();
  });

  // Close app ads Proc
  await page.waitFor(() => document.querySelector(".chBAG"));
  await page.evaluate(() => {
    document.querySelector(".ckWGn").click();
  });

  // OPen Followers tab Proc
  await page.waitFor(() => document.querySelector("[placeholder=Search]"));

  await page.evaluate(() => {
    document.querySelector('[href="/accounts/activity/"]').click();
  });

  // Wait for the follow buttons to load

  await page.waitFor(
    () => document.querySelectorAll("[role=button] .oF4XW").length
  );

  // press every button with follow in the dom

  await page.evaluate(() => {
    const elements = document.querySelectorAll("[role=button] .oF4XW");

    elements.forEach(elem => {
      console.log(elem);
      if (elem.innerHTML === "Follow") {
        elem.click();
        console.log("clicked", elem);
      }
    });
  });

  await page.waitFor(10000);

  await browser.close();
})();
