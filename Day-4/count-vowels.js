// Loop through a string and count vowels.

let word = "education"
let wordSplit = word.split('');
let vowelCount = 0;

for (let i = 0; i < wordSplit.length; i++) {
    let letter = wordSplit[i].toLowerCase();
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        vowelCount++;
    }
}

console.log(vowelCount);