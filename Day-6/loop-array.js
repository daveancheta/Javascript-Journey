// Loop through array using for 
const fruits = ["Dragonfruit", "Cantaloupe", "Banana", "Apple", "Elderberry"];
fruits.sort();

let length = fruits.length;
let text = "";

for (let i = 2; i < length; i++) {
    text += fruits[i] + "\n";
}

console.log(text); // Output: Cantaloupe Dragonfruit Elderberry