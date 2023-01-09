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
// object and integer tests
test("Can set object properties using constructor", () => {
  expect(employee.name).toBe("Russ");
});
test("Can set integer properties using constructor", () => {
  expect(employee.id).toBe(49999);
});

test("Can set object properties using constructor", () => {
  expect(employee.email).toBe("Russ@gmail.com");
});
