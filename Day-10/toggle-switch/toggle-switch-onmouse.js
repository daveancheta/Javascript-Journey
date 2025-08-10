// Create a toggle switch on mouse

function lightButtonOnMouse() {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("lightButton").classList.add("hidden");
    document.getElementById("darkButton").classList.remove("hidden");
}

function darkButtonOnMouse() {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("lightButton").classList.remove("hidden");
    document.getElementById("darkButton").classList.add("hidden");
}