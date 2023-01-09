const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Russ", 49999, "Russ@gmail.com");

test("is an object(Russ)", () => {
  let isObject = false;
  if (typeof engineer === "object") {
    isObject = true;
  }
  //   isObject === true
  expect(isObject).toBe(true);
});
// object and integer tests
test("Can set object properties using constructor", () => {
  expect(engineer.name).toBe("Russ");
});
test("Can set integer properties using constructor", () => {
  expect(engineer.id).toBe(49999);
});

test("Can set object properties using constructor", () => {
  expect(engineer.email).toBe("Russ@gmail.com");
});
