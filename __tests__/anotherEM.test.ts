import { fiveXRacing } from "./pageObjects/5xRacing";

const page = new fiveXRacing("chrome");


const employees: Array = fetch("https://peaceful-inlet-88854.herokuapp.com/api/employees")
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));



describe("checking that the UI matches the DB", () => {
  beforeEach(async () => await page.navigate());
  afterAll(async () => await page.driver.quit());
  for (let i = 0; i < employees.length; i++) {
    test(`Looking for ${employees[i].employee_name} in the UI`, async () => {
      await page.selectEmployee(employees[i].employee_name);
      let employee = await page.getCurrentEmployee();
      expect(employee.id).toEqual(employees[i].employee_id.toString());
      expect(employee.name).toEqual(employees[i].employee_name);
      expect(employee.phone.toString()).toEqual(employees[i].employee_phone);
      expect(employee.email).toEqual(employees[i].employee_email);
      expect(employee.title).toEqual(employees[i].employee_title);
    });
  }
});