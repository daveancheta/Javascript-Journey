while (true) {
const prompt = require("prompt-sync")();

console.log("Which of the following values will be treated as falsy in JavaScript?");
console.log('A. "0"');
console.log('B. 0');
console.log('C. false');
console.log('D. "false"');
console.log('E. null');
console.log('F. {}');

let answerInput = prompt("Enter your Answer: ");
let answerLowerCase = answerInput.toLowerCase();

if (answerLowerCase === "a") {
    console.log("Sorry. You're wrong.");
} else if (answerLowerCase === "b") {
    console.log("Great Job. You're correct.");
    break;
} else if (answerLowerCase === "c") {
    console.log("Great Job. You're correct.");
    break;
} else if (answerLowerCase === "d") {
    console.log("Sorry. You're wrong.");
}  else if (answerLowerCase === "e") {
    console.log("Great Job. You're correct.");
    break;
} else if (answerLowerCase === "f") {
    console.log("Sorry. You're wrong.");
} else {
    console.log("Error");
}
}