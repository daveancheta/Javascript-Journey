// Create a class Person with name & greet()

class Person {
    constructor(name) {
        // Store the name passed when creating a new Person object
        this.name = name;
    }

    greet() {
        // Return a greeting message including the person's name
        return `Hello, my name is ${this.name}`
    }
}

// Create a new Person object with the name "Dave"
const myPerson1 = new Person("Dave")
// Output the greeting message to the console
console.log(myPerson1.greet());
