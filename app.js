const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const htmlBlocks = require("./lib/htmlBlocks.js");
const fs = require("fs");
const open = require("open");

const team = [htmlBlocks.header(), htmlBlocks.footer()];

function initalize(){
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: `What is your manager's name?`
      },
      {
        type: "input",
        name: "id",
        message: `What is your manager's ID?`
      },
      {
        type: "input",
        name: "email",
        message: `What is your manager's email?`
      },
      {
        type: "input",
        name: "officeNumber",
        message: `What is your manager's office number?`
      }
    ])
  }