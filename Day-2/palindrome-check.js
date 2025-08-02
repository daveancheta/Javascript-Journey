// Palindrome Check

let word = "Racecar";

let lowercase = word.toLowerCase();

let palindrome = lowercase.split('').reverse().join('');

if (lowercase === palindrome) {
    console.log("True. The word", "'" + word + "'", "is palindrome") // Output: True. The word 'Racecar' is palindrome
} else {
    console.log("False. The word", "'" + word + "'", "is not a palindrome") // If the word is 'Hello', Output: False. The word 'Hello' is not a palindrome
}


