// Make a live character counter (input field).

const input = document.getElementById("inputType");

input.addEventListener('input', () => {
const inputValue = document.getElementById("inputType").value;
const inputLength = inputValue.length;

    if (input.value.trim() === '') {
        document.getElementById("displayCount").innerHTML = "0";
    } else {
        document.getElementById("displayCount").innerHTML = inputLength;
    }
});




