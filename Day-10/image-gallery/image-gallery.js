// Image with display name field

const input = document.getElementById("inputName");

input.addEventListener("input", () => {
    const inputName = document.getElementById("inputName").value;
    if (inputName.length !== 0) {
        document.getElementById("button").classList.remove("disable")
    } else if (inputName.length === 0) {
        document.getElementById("button").classList.add("disable")
    }
})

function submitName() {
    const displayName = document.getElementById("inputName").value;
    document.getElementById("displayName").innerHTML = displayName;
}