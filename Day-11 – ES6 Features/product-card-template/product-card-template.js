// Use template literals for a product card.

function product1() {
const card = {
    product: "Laptop - ACER NITRO", price: "$20,000", stock: 10
};

document.getElementById("product").innerHTML = `Product: ${card.product}`;
document.getElementById("price").innerHTML = `Price: ${card.price}`;
document.getElementById("stocks").innerHTML = `Stocks: ${card.stock}`;

}

function product2() {
const card = {
    product: "Laptop - ASUS TUF", price: "$50,000", stock: 10
};

document.getElementById("product").innerHTML = `Product: ${card.product}`;
document.getElementById("price").innerHTML = `Price: ${card.price}`;
document.getElementById("stocks").innerHTML = `Stocks: ${card.stock}`;

}