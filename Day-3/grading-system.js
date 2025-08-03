
const prompt = require("prompt-sync")();

var gradeInput = parseInt(prompt("Enter Grade:"));

if (gradeInput >= 95) {
    console.log("Excellent!");
} else if (gradeInput >= 90) {
    console.log("Outstanding")
} else if (gradeInput >= 85) {
    console.log("Amazing")
} else if (gradeInput >= 80) {
    console.log("Fantastic");
} else if (gradeInput >= 75) {
    console.log("Impressive") } 
else if (gradeInput >= 70) {
    console.log("Not bad")
} else {
    console.log("error")
}
