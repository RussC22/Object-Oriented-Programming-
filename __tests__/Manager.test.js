// Manager variable
const Manager = require("../lib/Manager");
// object test
test("is an object(potato sandwich)", () => {
  const manager = new Manager("Russ", 49999, "Russ@gmail.com");

  let isObject = false;
  if (typeof manager === "object") {
    isObject = true;
  }

  //   isObject === true
  expect(isObject).toBe(true);
});
// interger test
test("Id is an integer", () => {
  const manager = new Manager("Russ", 49999, "Russ@gmail.com");
  expect(Number(manager.getId()));
  expect(manager.getId()).toBe(49999);
});
// email test
