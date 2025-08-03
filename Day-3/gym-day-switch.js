const prompt = require("prompt-sync")();

console.log("What is your workout today?")
let dayInput = prompt("What day is it? ");
let dayLowerCase = dayInput.toLowerCase();
let day;
switch (dayLowerCase) {
    case "monday":
        day = ("Cardio Day");
        break;
    case "tuesday":
        day = ("Leg Workout");
        break;
    case "wednesday":
        day = ("Rest Day");
        break;
    case "thursday":
        day = ("Upper Body");
        break;
    case "friday":
        day = ("Yoga & Flexibility");
        break;
    case "saturday":
        day = ("Full Body Training");
        break;
    case "sunday":
        day = ("Rest & Recovery");
        break;
    default:
        day = ("Error")
        break;
}

console.log(day);