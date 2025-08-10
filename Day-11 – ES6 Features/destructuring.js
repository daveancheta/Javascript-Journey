function calculate(x, y)
{
    const add = x + y;
    const subtraction = x - y;
    const multiply = x * y;
    const divide = x / y;

    return [add, subtraction, multiply, divide];
}

const [add, subtraction, multiply, divide] = calculate(5, 5);

console.log("Addition:", add);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiply);
console.log("Divide:", divide);