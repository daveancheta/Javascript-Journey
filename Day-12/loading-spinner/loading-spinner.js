// Show loading spinner while fetching data.

function fetchData() {
    // Display the loading animation when the button is clicked
    document.getElementById("loaderIcon").classList.remove("hidden"); 

     // Simulate a 5-second delay before loading data
    setTimeout(loadData, 5000); 

    function loadData() {

         // Call the function to fetch the file "data.txt"
        getData("data.txt"); 
        async function getData(file) {

            // Fetch the file from the specified path or URL
            let data = await fetch(file); 

            // Convert the fetched response into text
            let dataText = await data.text(); 

             // Display the fetched data in the element with id "dataContent"
            document.getElementById("dataContent").innerHTML = dataText; 

            // Hide the loading animation after data is loaded
            document.getElementById("loaderIcon").classList.add("hidden"); 
        }
    }
}

// Added some comments to better understand this last task for Day 12 — hope you learned something, guys! 
// Did not add an if-else condition since this is a one-time button click, just to demonstrate the function of this task.
