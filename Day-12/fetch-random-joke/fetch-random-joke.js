getJoke("fetch-joke.txt"); // Call the function and pass the file name

async function getJoke(joke) {
    let f = await fetch(joke); // Fetch the file from the given path or URL
    let display = await f.text(); // Convert the fetched response into text
    document.getElementById("joke").innerHTML = display; // Insert the text into the HTML element with id="joke"
}
