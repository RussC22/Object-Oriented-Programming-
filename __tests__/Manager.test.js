// manager variable
const Manager = require("../lib/Manager");

test("is an object(potato sandwich)", () => {
  const manager = new Manager("Russ", 49999, "Russ@gmail.com");

  let isObject = false;
  if (typeof manager === "object") {
    isObject = true;
  }

  //   isObject === true
  expect(isObject).toBe(true);
});

test("Id is an integer", () => {
  const manager = new Manager("Russ", 49999, "Russ@gmail.com");

  let isObject = false;
  if (typeof manager.id === "int") {
    isObject = true;
  }

  //   5 > 15
  expect(isObject).toBe(true);
});

const x = 5;
const y = 15;

function checkIfGreater() {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

checkIfGreater();
