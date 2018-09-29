const puppeteer = require("puppeteer"); // the puppeteer headless chrome api
const shuffle = require("shuffle-array");

let ops = require("../app.js"); // Datatbase
let cnf = require("../config/config.json"); // configuration of the bot
let run = async function() {
  // set up Puppeteer instance
  const browser = await puppeteer.launch({
    headless: cnf.settings.headless,
    args: ["--no-sandbox"]
  });

  const page = await browser.newPage();
  page.setViewport({ width: 1200, height: 764 });

  // Load Instagram Page
  await page.goto("https://www.instagram.com");
  await page.waitFor(2500);
  await page.click(cnf.selectors.home_to_login_button);
  await page.waitFor(2500);

  // Login to the app
  await page.click(cnf.selectors.username_field);
  await page.keyboard.type(cnf.username);
  await page.click(cnf.selectors.password_field);
  await page.keyboard.type(cnf.password);

  await page.click(cnf.selectors.login_button);
  await page.waitForNavigation();

  // Grab user Data
  await page.goto("https://www.instagram.com/" + cnf.username + "/?hl=en");
  await page.waitFor(3500);
  let followersSpan = await page.evaluate(
    () => document.querySelectorAll(".g47SY")[1].title
  );
  let followers = parseInt(followersSpan, 10);
  console.log(followers);
  let followingSpan = await page.evaluate(
    () => document.querySelectorAll(".g47SY")[2].innerHTML
  );
  let following = parseInt(followingSpan, 10);
  console.log(following);
  await ops.addUser(cnf.username, followers, following);

  //Start Crawling Instagram

  let hashtags = shuffle(cnf.hashtags); //Randomise htags with shuffle

  for (let hl = 0; hl < hashtags.length; hl++) {
    // Search for hashtags
    await page.goto(
      "https://www.instagram.com/explore/tags/" + hashtags[hl] + "/?hl=en"
    );
    console.log("===> hashtag search: " + hashtags[hl]);
    //Grab posts
    // Loop through the latest 9 posts
    for (let r = 1; r < 4; r++) {
      for (let c = 1; c < 4; c++) {
        //Try to select post, wait, if successful continue
        let br = false;
        await page
          .click(
            "div:nth-child(4) > div > div:nth-child(" +
              r +
              ") > div:nth-child(" +
              c +
              ") > a"
          )
          .catch(() => {
            br = true;
          });
        if (br) continue;
        await page.waitFor(2250 + Math.floor(Math.random() * 250));
        // Get post info
        let hasEmptyHeart = await page.$(cnf.selectors.post_heart_grey);

        //get the username
        let username = await page.evaluate(x => {
          let element = document.querySelector(x);
          return Promise.resolve(element ? element.innerHTML : "");
        }, cnf.selectors.post_username);

        // check if user is followed
        let followStatus = await page.evaluate(x => {
          let element = document.querySelector(x);
          return Promise.resolve(element ? element.innerHTML : "");
        }, cnf.selectors.post_follow_link);
        console.log("followStatus", followStatus);
        //like post if not liked before (Gray heart indicator)
        if (hasEmptyHeart !== null && Math.random() < cnf.settings.like_ratio) {
          await page.click(cnf.selectors.post_like_button);
          console.log("---> like for " + username);
          await page.waitFor(10000 + Math.floor(Math.random() * 5000));
        }
        // check if user has been followed before
        let isArchivedUser;

        await ops
          .inArchive(username)
          .then(() => (isArchivedUser = true))
          .catch(() => (isArchivedUser = false));

        // check if user not followed right now and not perviously and ratio chack then follow -->
        console.log(
          followStatus === "Follow" &&
            !isArchivedUser &&
            Math.random() < cnf.settings.follow_ratio
        );
        if (
          followStatus === "Follow" &&
          !isArchivedUser &&
          Math.random() < cnf.settings.follow_ratio
        ) {
          await ops
            .addFollow(username)
            .then(() => {
              return page.click(cnf.selectors.post_follow_link);
            })
            .then(() => {
              console.log("---> follow for " + username);
              return page.waitFor(10000 + Math.floor(Math.random() * 5000));
            })
            .catch(() => {
              console.log("---> Allready following " + username);
            });
        }

        // Close post after
        await page
          .click(cnf.selectors.post_close_button)
          .catch(() => console.log(":::> Error closing post"));
      }
    }
  }

  // Close browser
  browser.close();
};

module.exports = run;
