// Use template literals for a product card.

// function for the button product 1
function product1() {
const card = {
    product: "Laptop - ACER NITRO", price: "$20,000", stock: 10
}; 

document.getElementById("product").innerHTML = `Product: ${card.product}`; // Output: Product: Laptop - ACER NITRO
document.getElementById("price").innerHTML = `Price: ${card.price}`; // Output: Price: $20,000
document.getElementById("stocks").innerHTML = `Stocks: ${card.stock}`; // Output: Stocks: 10

}

// function for the button product 2
function product2() {
const card = {
    product: "Laptop - ASUS TUF", price: "$50,000", stock: 20
};

document.getElementById("product").innerHTML = `Product: ${card.product}`; // Output: Product: Laptop - ASUS TUF
document.getElementById("price").innerHTML = `Price: ${card.price}`; // Output: 
document.getElementById("stocks").innerHTML = `Stocks: ${card.stock}`; // Output: Stocks: 20

}