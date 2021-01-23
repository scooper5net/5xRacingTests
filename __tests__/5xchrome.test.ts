import { Key } from "selenium-webdriver";
import { fiveXRacing } from "./pageObjects/5xRacing";


describe("5X Racing Test Chrome", () => {
  const page = new fiveXRacing({ browser: "chrome" });
  afterAll(async () => {
    await page.driver.quit();
  });
  // Navigate to the home page, and make sure that the 
  // 5X Racing logo is visible in the header
  test("Can navigate to the home page.", async() => {
    await page.navigate();
    await page.driver.findElement(page.headerLogo);
  });
  // Search for floor
  test("Can search and get good results", async() => {
    await page.searchFor('floor');
    let isVisible = (await page.driver.findElement(page.floorpanFromSearch).isEnabled());
    expect (isVisible).toBeTruthy();
  });
  // Add floor drop kit to the shopping cart
  test("Can add an item to the shopping cart", async() => {
    await page.click(page.floorpanFromSearch);
    await page.driver.findElement(page.addToCart).sendKeys(Key.RETURN);
    await page.driver.sleep(2000);
    let price = (await (await page.driver.findElement(page.findTotal)).getText());
    expect (price).toEqual("$325.00");
  });
  // Remove floor drop kit from the cart
  test("Can remove item from the cart", async() => {
    await page.click(page.deleteItem);
    await page.driver.sleep(3000);
    let isVisible = (await page.driver.findElement(page.emptyCartMessage).isEnabled());
    expect (isVisible).toBeTruthy();
  });
  // Contact Us page has contact info
  test("Contact Us page has contact info", async() => {
    await page.click(page.contactUsLink);
    await page.driver.sleep(2000);
    let isVisible = (await (await page.driver.findElement(page.contactEmailAddress)).getText());
    expect (isVisible).toBeDefined();
  });

});
