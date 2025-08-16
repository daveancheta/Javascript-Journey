// Add private properties using #
// Example: Bank class with private balance

class Bank {
    #balance; // private property, only accessible inside the class

    constructor(initialAmount) {
        // Initialize the private balance when creating a new account
        this.#balance = initialAmount;
    }

    deposit(amount) {
        // Add the given amount to the private balance
        this.#balance += amount;
    }

    getBalance() {
        // Public method to access the private balance
        return this.#balance;
    }
}

// Create a new Bank account with initial balance of 1000
const account = new Bank(1000);

// Deposit 1500 into the account
account.deposit(1500);

// Display the current balance (should be 2500)
console.log(account.getBalance());
