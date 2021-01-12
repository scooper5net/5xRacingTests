import { fiveXRacing } from "./pageObjects/5xRacing";


describe("employee manager v2", () => {
  const page = new fiveXRacing({ browser: "chrome" });
  beforeEach(async () => {
    await page.navigate();
  });
  afterAll(async () => {
    await page.driver.quit();
  });
  test("Searching narrows the list", async () => {
    let originalList = await page.getEmployeeList();
    await page.searchFor("Bill");
    let resultList = await page.getEmployeeList();
    expect(originalList.length).toBeGreaterThanOrEqual(resultList.length);
  });
  test("Can add and delete an employee", async () => {
    let newEmployee = {
      name: "Test Employee",
      phone: 1234567890,
      email: "test@email.com",
      title: "test person",
    };
    await page.addEmployee(newEmployee);
    let employee = await page.getCurrentEmployee();
    expect(employee.name).toEqual(newEmployee.name);
    expect(employee.phone).toEqual(newEmployee.phone);
    expect(employee.email).toEqual(newEmployee.email);
    expect(employee.title).toEqual(newEmployee.title);
    await page.deleteEmployee("Test Employee");
    let employeeList = await page.getEmployeeList();
    expect(employeeList).not.toContain("Test Employee");
  });
});
