const Employee = require("./Employee.js");
const htmlBlocks = require("./htmlBlocks");

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return htmlBlocks.manager(this);
    } 
 };

 module.exports = Manager;