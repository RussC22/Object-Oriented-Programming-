// employee variable
const Employee = require("../lib/Employee");

test("is an object(potato sandwich)", () => {
  const employee = new Employee("Russ", 49999, "Russ@gmail.com");

  let isObject = false;
  if (typeof employee === "object") {
    isObject = true;
  }

  //   isObject === true
  expect(isObject).toBe(true);
});

test("Can set object properties using constructor", () => {
  const employee = new Employee("Russ", 49999, "Russ@gmail.com");

  expect(employee.name).toBe("Russ");
  expect(employee.id).toBe(49999);
  expect(employee.email).tobe("Russ@gmail.com");
});

checkIfGreater();

// Test gitters
test();
