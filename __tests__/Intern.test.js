const Intern = require("../lib/Intern");

const intern = new Intern("Mike", 48995, "mike@gmail.com", "UNCCharlote");
test("Intern to be an object", () => {
  expect(typeof intern).toBe("object");
});
