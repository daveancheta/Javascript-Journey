// Use map() to double each number.

const doubleNumber = [1, 2, 3, 4, 5]
const result = doubleNumber.map(multiplyNumber);

function multiplyNumber(num) {
    return num * 2;
}

console.log((result));