import { fiveXRacing } from "./pageObjects/5xRacing";

describe("5X Racing Test FireFox", () => {
  const page = new fiveXRacing({ browser: "firefox" });
  beforeEach(async () => {
    await page.navigate();
  });
  // test("Searching narrows the list", async () => {
  //   let originalList = await page.getEmployeeList();
  //   await page.searchFor("Bill");
  //   let resultList = await page.getEmployeeList();
  //   expect(originalList.length).toBeGreaterThanOrEqual(resultList.length);
  // });
  // Nacigate to the home page, and make sure that the 
  // 5X Racing logo is visible in the header
  test("Can navigate to the home page.", async() => {

  )};
  // Search for floor
  test("Can search and get good results", async() => {

  });
  // Add floor drop kit to the shopping cart
  test("Can add an item to the shopping cart", async() => {

  });
  // Remove floor drop kit from the cart
  test("Can remove item from the cart", async() => {

  });
  // Contact Us page has contact info
  test("Contact Us page has contact info", async() => {

  });

});
