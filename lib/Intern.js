const Employee = require("./Employee.js");
const htmlBlocks = require("./htmlBlocks");
class Intern extends Employee {
    constructor(name,id,email,school){
    super(name,id,email)
    this.school = school
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
    getHTML() {
        return htmlBlocks.intern(this);
    } 
 }

 module.exports = Intern;