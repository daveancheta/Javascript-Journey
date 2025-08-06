// Loop through array using for 
const fruits = ["Dragonfruit", "Cantaloupe", "Banana", "Apple", "Elderberry"];
fruits.sort();

let length = fruits.length;
let text = "";

for (let i = 2; i < length; i++) {
    text += fruits[i] + "\n";
}

console.log(text); // Output: Cantaloupe Dragonfruit Elderberry

// forEach() calls a function for each element in an array
const fruits2 = ["Dragonfruit", "Cantaloupe", "Banana", "Apple", "Elderberry"];
fruits2.sort();

let text2 = "";
fruits.forEach(myFunction);

function myFunction(item, index) {
    text2 += index + ". " + item + "\n";
}

console.log(text2); // Output: 0. Apple1. Banana 2. Cantaloupe 3. Dragonfruit 4. Elderberry