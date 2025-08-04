// Print 1 to Preferred Number

const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a number to start the loop: "))

for (let i = 1; i <= number; i++) {
    console.log(i);
}