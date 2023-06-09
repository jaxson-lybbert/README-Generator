// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "How would you describe your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "install",
  },
  {
    type: "input",
    message: "How do people use your project?",
    name: "usageInfo",
  },
  {
    type: "input",
    message: "What should people know about contributing to your project?",
    name: "contributionGuide",
  },
  {
    type: "input",
    message: "Are there any instructions for testing?",
    name: "testingInfo",
  },
  {
    type: "list",
    message: "Is there a license associated with your project?",
    choices: ["MIT License", "GNU GPL", "Apache 2.0", "ISC", "None"],
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}

// Function call to initialize app
init();
