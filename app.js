const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const htmlBlocks = require("./lib/htmlBlocks.js");
const fs = require("fs");
const open = require("open");

const team = [htmlBlocks.header(), htmlBlocks.footer()];