function submitForm(event, form) {
    event.preventDefault();
    
    let product = form.elements["product"].value;
    let price = form.elements["price"].value;

    const newProduct = {product, price};

    let saveProduct = JSON.parse(localStorage.getItem("product")) || [];
    saveProduct.push(newProduct);
    localStorage.setItem("product", JSON.stringify(saveProduct));


    location.reload();
}

  let products = JSON.parse(localStorage.getItem("product"));
  let cart = "";
    products.forEach(p => {
        cart += `<li>${p.product} - $${p.price}</li><br>`
    });

    document.getElementById("displayCart").innerHTML = cart;

function clearStorage() {
    localStorage.clear();
    location.reload();
}