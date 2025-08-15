// Add methods to class and use this

class Person {
    constructor(name) {
        // Initialize the name property when creating a new object
        this.name = name;
    }
    setName(name) {
        // Update the name property using 'this' to refer to the current object
        this.name = name;
        // Return a message with the updated name
        return `My new name is ${this.name}`;
    }
}

// Create a new Person object with the name "Dave"
const myPerson1 = new Person("Dave");

// Display the current name property
console.log("My name is",  myPerson1.name);

// Call setName method to update the name and log the returned message
console.log(myPerson1.setName("Heaven"));
