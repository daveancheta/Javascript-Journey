// Function to handle the form submission
function submitForm(event, form) {
    event.preventDefault(); // Prevent the default form submission (stops page refresh)

    // Get values from the form inputs
    const task = form.elements["task"].value; // Get the task text
    const date = form.elements["date"].value; // Get the task date

    // Create an object for the new task
    const newTask = { task, date };

    // Get the saved tasks from localStorage or use an empty array if none exist
    let saveTask = JSON.parse(localStorage.getItem("task")) || [];

    // Add the new task to the saved task array
    saveTask.push(newTask);

    // Save the updated task list back into localStorage
    localStorage.setItem("task", JSON.stringify(saveTask));

    // Reload the page to update the task display
    location.reload();
}

// Get the saved tasks from localStorage (returns null if none exist)
let displayTask = JSON.parse(localStorage.getItem("task"));
let html = "";

// Loop through each saved task and create HTML to display it
displayTask.forEach(task => {
    html += `${task.task} - ${task.date}<br>`; // Format: "Task - Date"
});

// Insert the generated HTML into the element with ID "display"
document.getElementById("display").innerHTML = html;
