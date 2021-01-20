const puppeteer = require("puppeteer");

const pageURL = "www.twitch.tv/directory" //The Website you want

const webscraping = async pageURL => {
  const browser = await puppeteer.launch({
    headless: false, // Shows program working
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();

  try {

  } catch (error){
    console.log(error);
  }
  browser.close();
};

webscraping(pageURL).catch(console.error);