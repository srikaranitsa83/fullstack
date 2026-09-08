// ==========================================
// INHERITANCE TYPES IN JAVASCRIPT
// Banking Example
// ==========================================


// 1. SINGLE INHERITANCE
// One child class inherits from one parent class

class Bank {
    bankName = "ABC Bank";

    showBank() {
        console.log("Bank Name:", this.bankName);
    }
}

class Customer extends Bank {
    customerName = "Srikar";

    showCustomer() {
        console.log("Customer Name:", this.customerName);
    }
}

console.log("\n--- SINGLE INHERITANCE ---");
let customer = new Customer();
customer.showBank();
customer.showCustomer();


// 2. MULTILEVEL INHERITANCE
// Grandparent -> Parent -> Child

class Account extends Bank {
    accountNumber = "123456789";

    showAccount() {
        console.log("Account Number:", this.accountNumber);
    }
}

class SavingsAccount extends Account {
    balance = 50000;

    showBalance() {
        console.log("Balance:", this.balance);
    }
}

console.log("\n--- MULTILEVEL INHERITANCE ---");
let savings = new SavingsAccount();
savings.showBank();
savings.showAccount();
savings.showBalance();


// 3. HIERARCHICAL INHERITANCE
// One parent -> Multiple child classes

class Loan {
    loanAmount = 100000;

    showLoan() {
        console.log("Loan Amount:", this.loanAmount);
    }
}

class HomeLoan extends Loan {
    showHomeLoan() {
        console.log("Home Loan");
    }
}

class CarLoan extends Loan {
    showCarLoan() {
        console.log("Car Loan");
    }
}

console.log("\n--- HIERARCHICAL INHERITANCE ---");

let home = new HomeLoan();
home.showLoan();
home.showHomeLoan();

let car = new CarLoan();
car.showLoan();
car.showCarLoan();


// ==========================================
// 4. MULTIPLE INHERITANCE
// JavaScript does not support multiple
// inheritance directly, so we use a Mixin.
// ==========================================

class AccountDetails {
    showAccountDetails() {
        console.log("Account Type: Savings Account");
    }
}

class Transaction {
    deposit(amount) {
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        console.log("Withdrawn:", amount);
    }
}

// Mixin function
function applyMixin(targetClass, sourceClass) {
    Object.getOwnPropertyNames(sourceClass.prototype).forEach(name => {
        if (name !== "constructor") {
            Object.defineProperty(
                targetClass.prototype,
                name,
                Object.getOwnPropertyDescriptor(sourceClass.prototype, name)
            );
        }
    });
}

// Apply Transaction methods to AccountDetails
applyMixin(AccountDetails, Transaction);

console.log("\n--- MULTIPLE INHERITANCE ---");

let account = new AccountDetails();

account.showAccountDetails();
account.deposit(10000);
account.withdraw(5000);


// 5. HYBRID INHERITANCE
// Combination of multilevel + hierarchical
// inheritance

class Employee {
    showEmployee() {
        console.log("Bank Employee");
    }
}

class Manager extends Employee {
    showManager() {
        console.log("Manager");
    }
}

class SeniorManager extends Manager {
    showSeniorManager() {
        console.log("Senior Manager");
    }
}

class Cashier extends Employee {
    showCashier() {
        console.log("Cashier");
    }
}

console.log("\n--- HYBRID INHERITANCE ---");

// Multilevel inheritance:
// Employee -> Manager -> SeniorManager

let manager = new SeniorManager();

manager.showEmployee();
manager.showManager();
manager.showSeniorManager();

// Hierarchical inheritance:
// Employee -> Cashier

let cashier = new Cashier();

cashier.showEmployee();
cashier.showCashier();