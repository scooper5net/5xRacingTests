import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
  import { BasePage } from "./BasePage";
  
  
  
  export class fiveXRacing extends BasePage {
    // Set all of the locators that I will be using
    headerLogo: By = By.xpath('//img[@class="wsm-hdr__logo"]');
    searchBox: By = By.xpath('//input[@title="Search Catalog"]');
    searchButton: By = By.xpath('//input[@title="Search"]');
    deleteItem: By = By.xpath('//a[@title="Delete this item from the cart"]');
    emptyCartMessage: By = By.xpath('//div[@class="wsm_interface_error"]');
    contactUsLink: By = By.xpath('//a[@title="Contact Us"]');
    floorpanFromSearch: By = By.xpath('//div/a[@title="5X Racing - 5X Racing Mazda Miata Drop Floorpan Kit"]');
    findFloorInList: By = By.xpath('//div/a[contains(text(),"Floor")]')
    addToCart: By = By.xpath('//button[@name="action_cart_add"]');
    findTotal: By = By.xpath('//span[@class="wsm_cart_total_amount  wsm_cart_total_col2" and contains(text(),"$325.00")]');

    constructor(options) {
      super(options);
      this.url =
        "https://5xracing.com";
    }
    async navigate() {
      await this.driver.get(this.url);
      await this.driver.wait(
        until.elementIsEnabled(await this.getElement(this.searchBox))
      );
    }
    async searchFor(searchText: string) {
      await this.setInput(this.searchBox, searchText);
    }
    // async getEmployeeList() {
    //   const employeeList: Array<string> = [];
    //   let list = await this.driver.findElements(this.listedEmployees);
    //   for (let i = 0; i < list.length; i++) {
    //     await employeeList.push(await list[i].getText());
    //   }
    //   return list;
    // }
    // async selectEmployee(name: string) {
    //   await this.click(By.xpath(`//li[text()='${name}']`));
    //   await this.getElement(this.cardTitle);
    //   await this.driver.wait(
    //     until.elementTextContains(await this.getElement(this.cardTitle), name)
    //   );
    // }
    // async getCurrentEmployee() {
    //   let employee = { name: "", phone: 0, email: "", title: "", id: "" };
    //   employee.name = await this.getAttribute(this.nameEntry, "value");
    //   employee.phone = parseInt(
    //     await this.getAttribute(this.phoneEntry, "value"),
    //     10
    //   );
    //   employee.email = await this.getAttribute(this.emailEntry, "value");
    //   employee.title = await this.getAttribute(this.titleEntry, "value");
    //   employee.id = (await this.getText(this.idNumber)).slice(4);
    //   return employee;
    // }
    // async addEmployee(employee: Employee) {
    //   await this.click(this.addButton);
    //   //   await new Promise((res) => setTimeout(res, 500));
    //   //   await this.searchFor("New Employee");
    //   //   await new Promise((res) => setTimeout(res, 500));
    //   await this.selectEmployee("New Employee");
    //   await this.driver.wait(until.elementLocated(this.cardTitle));
    //   await this.driver.wait(
    //     until.elementTextIs(await this.getElement(this.cardTitle), "New Employee")
    //   );
    //   await this.setInput(this.nameEntry, employee.name);
    //   await this.setInput(this.phoneEntry, employee.phone);
    //   await this.setInput(this.emailEntry, employee.email);
    //   await this.setInput(this.titleEntry, employee.title);
    //   await this.click(this.saveButton);
    // }
    // async deleteEmployee(name: string) {
    //   await this.selectEmployee(name);
    //   let record = await this.driver.findElement(
    //     By.xpath(`//li[text()='${name}']`)
    //   );
    //   await this.click(this.deleteButton);
    //   await this.driver.wait(until.alertIsPresent());
    //   let alert = await this.driver.switchTo().alert();
    //   await alert.accept();
    //   await this.driver.wait(until.stalenessOf(record));
    // }
  }
  