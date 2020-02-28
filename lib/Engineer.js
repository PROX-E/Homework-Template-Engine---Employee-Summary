const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name,id,email,github,engineerBlock){
        super(name,id,email)
        this.github = github;
        }
        getRole() {
            return "Engineer"
        }
        getGithub() {
            return this.github;
        }
        getHTML() {
            return htmlBlocks.engineer(this);
        }       
        }
     module.exports = Engineer;
