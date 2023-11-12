// @ts-ignore - no types for this package
import puppeteer from "puppeteer";

export default eventHandler(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.google.com/");

  return {
    base64: await page.screenshot({ encoding: "base64" }),
  };
});
