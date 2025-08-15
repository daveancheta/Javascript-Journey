function submitForm(event, form) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    
    // Get product name and price from form inputs
    let product = form.elements["product"].value;
    let price = form.elements["price"].value;

    // Create a new product object
    const newProduct = { product, price };

    // Retrieve existing products from localStorage, or start with an empty array
    let saveProduct = JSON.parse(localStorage.getItem("product")) || [];

    // Add the new product to the array
    saveProduct.push(newProduct);

    // Save the updated product list to localStorage as a JSON string
    localStorage.setItem("product", JSON.stringify(saveProduct));

    // Reload the page to update the displayed cart
    location.reload();
}

// Retrieve the saved products from localStorage
let products = JSON.parse(localStorage.getItem("product"));

// Variable to store the cart HTML
let cart = "";

// Loop through each saved product and add it to the cart HTML
products.forEach(p => {
    cart += `<li>${p.product} - $${p.price}</li><br>`;
});

// Display the cart HTML in the element with ID "displayCart"
document.getElementById("displayCart").innerHTML = cart;

function clearStorage() {
    // Clear all data from localStorage
    localStorage.clear();

    // Reload the page to update the display
    location.reload();
}
