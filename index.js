// inquirer and fs variables
const inquirer = require("inquirer");
const fs = require("fs");

const generateHtml = require("./utils/generateHtml");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

// Questions
const questions = [
  {
    type: "input",
    message: "Employees name?",
    name: "Employee",
  },
  {
    type: "list",
    message: "Employees position",
    name: "Position",
    choices: ["Engineer", "Intern", "Manager"],
  },
  {
    type: "list",
    name: "Contact",
    message: "Choose your email or cell number.",
    choices: ["Email", "Number"],
  },
  {
    type: "input",
    message: "Employees manager?",
    name: "ManagerInfo",
  },
];

// Examples
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const will = new Person("Will", "Smith", 53);
const jaiden = new Person("Jaiden", "Smith", 24);
const willow = new Person("Williow", "Smith", 21);

console.log("Will", will);

// / The function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("success!");
    }
  });
}

// / The function to initialize app & save app in outbound folder
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    const filename = "./outbound/" + data.title + ".html";
    writeToFile(filename, generateHtml(data));
  });
}

init();
