// Store name and age in localStorage
function submitButton() {

    // Get the value from the input field with id "fullname"
    const fullname = document.getElementById("fullname").value;

    // Get the value from the input field with id "age"
    const age = document.getElementById("age").value;

    // Store the fullname value in localStorage
    localStorage.setItem("fullname", fullname);

    // Store the age value in localStorage
    localStorage.setItem("age", age);

    // Retrieve the fullname value from localStorage
    let displayName = localStorage.getItem("fullname");

    // Retrieve the fullname value from localStorage
    let displayAge = localStorage.getItem("age");

    // Display the fullname and age values in HTML elements
    document.getElementById("displaySaveName").innerHTML = displayName;
    document.getElementById("displaySaveAge").innerHTML = displayAge;
}