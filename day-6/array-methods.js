// pop() removes the last element of an array.
const fruits = ["Apple", "Banana", "Cantaloupe", "Dragonfruit", "Elderberry"];
fruits.pop();

console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cantaloupe', 'Dragonfruit' ]

// push() adds new items to the end of an array
const fruits1 = ["Apple", "Banana", "Cantaloupe", "Dragonfruit", "Elderberry"];
fruits1.push("Fig");

console.log(fruits1); // Output: [ 'Apple', 'Banana', 'Cantaloupe', 'Dragonfruit', 'Elderberry', 'Fig' ]

// shift() removes the first item of an array:
const fruits2 = ["Apple", "Banana", "Cantaloupe", "Dragonfruit", "Elderberry"];
fruits2.shift();

console.log(fruits2); // Output:

// shift() returns the removed array element
console.log(fruits2.shift()); // Output: Banana

// The unshift() method adds new elements to the beginning of an array.
const fruits3 = ["Apple", "Banana", "Cantaloupe", "Dragonfruit", "Elderberry"];
fruits3.unshift("Grape", "Kiwi");

console.log(fruits3);