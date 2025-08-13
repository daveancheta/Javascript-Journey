const number = [1, 2, 3, 4, 5, 2, 1, 3];

let result = uniqueNumber(number);

function uniqueNumber() {
const uniqueNumbers = [...new Set(number)];
return uniqueNumbers;
}

console.log(result);
