// Create a shopping list app (array-based).
const prompt = require("prompt-sync")();

while (true) {
    console.log("Add to Cart Now");
    console.log("1. Apple");
    console.log("2. Mango");
    console.log("3. Banana");
    console.log("4. Durian");
    console.log("5. Exit");

const fruit = new Map([
    ["apple", "Apple - $100"],
    ["mango", "Mango - $105"],
    ["banana", "Banana - $50"],
    ["durian", "Durian - $80"]
]);
    let userAnswer = parseInt(prompt("Enter your Choice: "));
    if (userAnswer === 5) {
        console.log("Thank you!");
        break;
    } else if (userAnswer === 1) {
        console.log("Added to Cart", fruit.get('apple'));
    } else if (userAnswer === 2) {
        console.log("Added to Cart", fruit.get('mango'));
    } else if (userAnswer === 3) {
        console.log("Added to Cart", fruit.get('banana'));
    } else if (userAnswer === 4) {
        console.log("Added to Cart", fruit.get('durian'));
    } else {
        console.log("Error");
    }
}