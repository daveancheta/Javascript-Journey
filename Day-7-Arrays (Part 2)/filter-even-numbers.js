// Use filter() to get even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers.filter(evenNumbers);

function evenNumbers(numbers) {
    if (numbers % 2 === 0) {
        return numbers;
    }
}

console.log(result);