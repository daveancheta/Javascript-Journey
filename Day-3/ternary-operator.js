const prompt = require("prompt-sync")();


console.log("Are you underage or of legal age?");
let ageInput = parseInt(prompt("Enter your age: "));

const output = ageInput >= 18 ? "You are of legal age." : "You are still a minor.";

console.log(output);

