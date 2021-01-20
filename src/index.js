const puppeteer = require("puppeteer");

const pageURL = "https://ppgcc.posgrad.ufsc.br/cursos/" //The Website you want

const webscraping = async pageURL => {
  const browser = await puppeteer.launch({
    headless: false, // Shows program working
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  let dataObj = {};

  try {
    await page.goto(pageURL);

    const publishedNews = await page.evaluate(()=> {
      const newsDOM = document.querySelectorAll("#recent-posts-3>  ul > li"); //This where you target the dom
      let newsList = [];
      newsDOM.forEach(linkElement =>{
        const currentNews = linkElement.querySelector("a")//What is this? Grabbing links?
        .innerText;
        newsList.push(currentNews);
      });
      return newsList;
    });

    dataObj = {
      amount: publishedNews.length,
      publishedNews
    };
    console.log(dataObj);


  } catch (e){
    console.log(e);
  }
  browser.close();
};

webscraping(pageURL).catch(console.error);