class BankAccount {
  // Private fields (cannot be accessed outside the class)
  #accountHolder;
  #balance;

  constructor(holderName, initialDeposit) {
    this.#accountHolder = holderName;
    // Validation during object creation
    this.#balance = initialDeposit > 0 ? initialDeposit : 0;
  }

  // Getter method to read private balance
  get balance() {
    return this.#balance;
  }

  // Getter method to read private holder name
  get accountHolder() {
    return this.#accountHolder;
  }

  // Public method to modify private balance safely
  
  deposit(amount) {
    if (amount <= 0) {
      console.log("❌ Deposit amount must be positive.");
      return;
    }
    this.#balance += amount;
    console.log(`✅ Deposited $${amount}. New balance: $${this.#balance}`);
  }

  // Public method with validation rules
  withdraw(amount) {
    if (amount <= 0) {
      console.log("❌ Withdrawal amount must be positive.");
      return;
    }
    if (amount > this.#balance) {
      console.log("❌ Denied: Insufficient funds.");
      return;
    }
    this.#balance -= amount;
    console.log(`✅ Withdrew $${amount}. Remaining balance: $${this.#balance}`);
  }
}

// --- Execution and Testing ---

// 1. Create a new account
const myAccount = new BankAccount("Alice Smith", 500);

// 2. Access data through public getters
console.log(`Account Holder: ${myAccount.accountHolder}`); // Alice Smith
console.log(`Initial Balance: $${myAccount.balance}`);     // $500

// 3. Interact using authorized public methods
myAccount.deposit(150);   // ✅ Deposited $150. New balance: $650
myAccount.withdraw(100);  // ✅ Withdrew $100. Remaining balance: $550

// 4. Test validation rules
myAccount.withdraw(1000); // ❌ Denied: Insufficient funds.
myAccount.deposit(-50);   // ❌ Deposit amount must be positive.

// 5. Proof of Encapsulation (Unauthorised direct access fails)
// console.log(myAccount.#balance); 
// ⚠️ SyntaxError: Private field '#balance' must be declared in an enclosing class

myAccount.balance = 999999; // ❌ Attempting to overwrite fails (no setter defined)
console.log(`Final Safe Balance: $${myAccount.balance}`); // Still $550