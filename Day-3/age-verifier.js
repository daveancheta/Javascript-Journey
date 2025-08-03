const prompt = require("prompt-sync")();

console.log("Are you eligible to drive?");
let ageInput = parseInt(prompt("Enter Your Age:"));

if (ageInput >= 18) {
    console.log("You are now of legal age. You can drive.");
} else if (ageInput <= 17) {
    console.log("You are still a minor. You can't drive.")
}