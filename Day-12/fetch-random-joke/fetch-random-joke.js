getJoke("fetch-joke.txt");

async function getJoke(joke) {
    let f = await fetch(joke);
    let display = await f.text();
    document.getElementById("joke").innerHTML = display;
}