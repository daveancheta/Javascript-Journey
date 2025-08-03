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
} else if (answerLowerCase === "c") {
    console.log("Great Job. You're correct.");
} else if (answerLowerCase === "d") {
    console.log("Sorry. You're wrong.");
}  else if (answerLowerCase === "e") {
    console.log("Great Job. You're correct.");
} else if (answerLowerCase === "f") {
    console.log("Sorry. You're wrong.");
} else {
    console.log("Error");
}

console.log("Which of the following values will be treated as truthy in JavaScript?");
console.log('A. "0"');
console.log('B. 0');
console.log('C. false');
console.log('D. "false"');
console.log('E. null');
console.log('F. {}');

let answerInput2 = prompt("Enter your Answer: ");
let answerLowerCase2 = answerInput2.toLowerCase();

if (answerLowerCase2 === "a") {
    console.log("Great Job. You're correct.");
} else if (answerLowerCase2 === "b") {
    console.log("Sorry. You're wrong.");
} else if (answerLowerCase2 === "c") {
    console.log("Sorry. You're wrong.");
} else if (answerLowerCase2 === "d") {
    console.log("Great Job. You're correct.");
}  else if (answerLowerCase2 === "e") {
    console.log("Sorry. You're wrong.");
} else if (answerLowerCase2 === "f") {
    console.log("Great Job. You're correct.");
} else {
    console.log("Error");
}

