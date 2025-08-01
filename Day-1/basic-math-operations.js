// Scenario: You went to a grocery store with ₱500 in your pocket. You decided to buy 2 sachets of soy sauce, each costing ₱15; a bottle of vinegar priced at ₱20; and 2 kilos of chicken, each costing ₱150 per kilo. A 12% VAT applies to the total.


// declare the price
let chicken = 150; // Chicken Price
let vinegar = 20; // Vinegar Price
let soySauce = 15; // Soy Sauce Price

// pocket money
let pocketMoney = 500;

// vat
let vat = 0.12; // VAT 12%

const boughtChicken = 2; // bought 2 kilo of chicken
const boughtVinegar = 1; // bought 1 vinegar
const boughtSoySauce = 2; // bought 2 Soy Sauce Sachet

// multiply the quantity by the product price
var totalChicken = boughtChicken * chicken; // Output: 300
var totalVinegar = boughtVinegar * vinegar; // Output: 20
var totalSoySauce = boughtSoySauce * soySauce; // Output: 30

// subtotal
const subTotal = totalChicken + totalVinegar + totalSoySauce; // Output: 300 + 20 + 30 = 350

// Add 12% VAT to the subtotal
const vatTotal = subTotal * vat; // Output: 350 * 0.12 = 42

// grandtotal 
const grandTotal = subTotal + vatTotal; // Output: 350 + 42 = 392

// change
const change = pocketMoney - grandTotal; // Output: 500 - 392 = 108

console.log("Sub Total:", subTotal); // Sub Total: 350
console.log("VAT:", vatTotal); // VAT: 42
console.log("Grand Total:", grandTotal); // Grand Total: 392
console.log("Change:", change); // Change: 108