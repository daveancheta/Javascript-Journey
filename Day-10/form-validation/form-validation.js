// Form Validation

// != & !== - inequality operators
// == & === - Equality Operators"

function submitButton() {
    const fnameInput = document.getElementById("first_name").value;
    const mnameInput = document.getElementById("middle_name").value;
    const snameInput = document.getElementById("surname").value;

    if (fnameInput.length === 0 || mnameInput.length === 0 || snameInput.length === 0) {
        document.getElementById("validation").classList.remove("hidden")
        document.getElementById("submittedContainer").classList.add("hidden");
    } else if (fnameInput.length !== 0 || mnameInput.length !== 0 || snameInput.length !== 0) {
        document.getElementById("validation").classList.add("hidden")
        document.getElementById("submittedContainer").classList.remove("hidden");
        document.getElementById("fname").innerHTML = fnameInput;
        document.getElementById("mname").innerHTML = mnameInput;
        document.getElementById("sname").innerHTML = snameInput;
    } else {
        document.getElementById("error").innerHTML = "Something went wrong, please try again";
    }
}