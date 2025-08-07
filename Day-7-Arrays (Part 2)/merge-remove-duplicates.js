// Combine 2 arrays and remove duplicates.

const fruits1 = ["apple", "banana", "durian"];
const fruits2 = ["apple", "fig", "mango"];

let result = combineArray(fruits1.concat(fruits2));

function combineArray(fruits) {
    let uniqueFruit = [...new Set(fruits)];
    return uniqueFruit;
}


console.log(result);