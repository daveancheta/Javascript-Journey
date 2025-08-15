// Convert object to JSON and back.

function showData() {
    // Create a variable with a name value
    let name = "dave";

    // Create an object containing the name
    const data = { name };

    // Create an empty array to store the object
    let saveData = [];

    // Add the object to the array
    saveData.push(data);

    // Convert the array (with the object) into a JSON string and save it to localStorage
    localStorage.setItem("name", JSON.stringify(saveData));

    // Retrieve the JSON string from localStorage and convert it back to a JavaScript array
    let displayData = JSON.parse(localStorage.getItem("name"));

    // Variable to store HTML output
    let html = "";

    // Loop through each object in the array and add the 'name' value to the HTML string
    displayData.forEach(n => {
        html += `${n.name}`;
    });

    // Insert the generated HTML into the element with ID "display"
    document.getElementById("display").innerHTML = html;
}
