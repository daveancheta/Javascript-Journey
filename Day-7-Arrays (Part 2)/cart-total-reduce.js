// Use reduce() to get total price from a cart array.
const cartAmount = [100, 50, 45, 20];
const result = cartAmount.reduce(add);

function add(total, num) {
    return total + num;
}

console.log(result);