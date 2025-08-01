// Scenario: You're planning a vacation to Baguio City, and you check the local weather forecast. It says:
// “Temperature: 20°C”
// But you're more familiar with Fahrenheit, and want to know how warm or cold that is

const celsius = 20; // 20°C
const ratio = 9/5; // 9/5 ration
const offset = 32; // 32 offset

let celsiusxration = celsius * ratio; // 20 * 9/5 = 36
let celsiusxrationxoffset = offset + celsiusxration; // 32 + 36 = 68

console.log(celsius + "°C is equal to", celsiusxrationxoffset + "°F"); // Output: 20°C is equal to 68°F

