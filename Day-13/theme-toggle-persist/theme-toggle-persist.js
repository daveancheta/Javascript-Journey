// Create a theme toggle that remembers state.

function lightTheme() {

    // Store the Light theme value in localStorage
    localStorage.setItem("theme", "light");

    // Reload the page
    location.reload();
}

function darkTheme() {

    // Store the Dark theme value in localStorage
    localStorage.setItem("theme", "dark");

    // Reload the page
    location.reload();
}

// Retrieve the theme value from localStorage
let themeData = localStorage.getItem("theme");


if (themeData === "light") {
    // If the theme is set to "light", the body background will be white
    document.getElementById("body").style.backgroundColor = "white";
} else {
    // If the theme is not "light", the body background will be black
    document.getElementById("body").style.backgroundColor = "black";
}

