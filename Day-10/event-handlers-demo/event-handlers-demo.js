// Mouseover

// On Mouseover
function bigbutton(x) {
    x.style.width = "200px"
    x.style.height = "100px"
}
function normalButton(x) {
    x.style.width = "100px"
    x.style.height = "50px"
}

// On Mouseover with click
function showMessage() {
    document.getElementById("message").classList.remove("hidden");
}

function hideMessage() {
    document.getElementById("message").classList.add("hidden");
}