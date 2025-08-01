// You’ve decided to start saving for your dream vacation to Palawan. You open a savings account at your local bank and deposit ₱20,000. The bank offers a simple interest rate of 4% per year, and you plan to leave the money untouched for 5 years.

const depositMoney = 20000; // 20,000
const interestRate = 4; // interest rate of 4%
const keepMoney = 5; // you plan to leave the money untouched for 5 years

// Math Operation
let PrincipalxRate = depositMoney * interestRate; // 20000 * 4 = 8000
let PrincipalxRatexTime = PrincipalxRate * keepMoney; // 8000 * 5 = 400000 
let interest = PrincipalxRatexTime / 100; // 4000000 / 100 = 4000

// total amount after 5 years
let grandTotal = depositMoney + interest; // 20000 + 4000 = 24000


console.log("Total Interest earned after 5 years:", interest); // Output: Total Interest earned after 5 years: 4000
console.log("Total Amount after 5 years:", grandTotal); // Total Amount after 5 years: 24000