const greeting = setTimeout(myGreetings, 5000);

function myGreetings() {
    document.getElementById("greetings").innerHTML = "Happy Birthday";
}