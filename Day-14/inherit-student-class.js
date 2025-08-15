// Inherit class Student from Person

class Person {
    constructor(fname) {
        // Store the first name in the property 'fname'
        this.fname = fname;
    }
    // Method to return the first name
    fullname() {
        return 'The student first name is ' + this.fname;
    }
}

// Define the child class Student, inheriting from Person
class Student extends Person {
    constructor(fname, lname) {
        // Call the parent constructor to set 'fname'
        super(fname);
        // Store the last name in the property 'lname'
        this.lname = lname;
    }
    // Method to return the full name using the parent's method
    fullName() {
        return this.fullname() + ' and the last name is ' + this.lname;
    }
}

// Create a new Student object with first name "Dave" and last name "Ancheta"
const myStudent = new Student("Dave", "Ancheta");

// Output the full name to the console
console.log(myStudent.fullName());
