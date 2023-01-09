// Employee variable
const Employee = require("../lib/Employee");
const employee = new Employee("Russ", 49999, "Russ@gmail.com");

test("is an object(Russ)", () => {
  let isObject = false;
  if (typeof employee === "object") {
    isObject = true;
  }

  //   isObject === true
  expect(isObject).toBe(true);
});
// object test
test("Can set object properties using constructor", () => {
  expect(employee.name).toBe("Russ");
  expect(employee.id).toBe(49999);
  expect(employee.email).toBe("Russ@gmail.com");
});
