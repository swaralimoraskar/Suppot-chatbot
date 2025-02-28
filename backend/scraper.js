import puppeteer from "puppeteer";

async function scrapeDocumentation(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  const text = await page.evaluate(() => document.body.innerText);
  await browser.close();

  return text;
}

export default scrapeDocumentation;