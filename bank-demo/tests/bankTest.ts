import Bank from "../src/bank";

const bank = new Bank();

const account = bank.createAccount("John Doe", 29, "2938298");
const account2 = bank.createAccount("Jane Doe", 29, "12345");

//create account tests
if (account.accountNumber == "2938298") {
    console.log("Scenario 1 pass")
} else {
    console.log("Scenario 1 fail")
}

if (account2.accountNumber == "12345") {
    console.log("Scenario 1 pass")
} else {
    console.log("Scenario 1 fail")
}

try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 fail")
} catch (_) {
    console.log("Scenario 2 pass")
}

//deposit tests
bank.deposit("John Doe", "2938298", 10);
if (account.balance == 10) {
    console.log("Scenario 1 pass")
} else {
    console.log("Scenario 1 fail")
}

try {
    bank.deposit("John Doe", "12345", 10);
    console.log("Scenario 2 fail")
} catch (_) {
    console.log("Scenario 2 pass")
}

try {
    bank.deposit("John Doe", "10", 10);
    console.log("Scenario 3 fail")
} catch (_) {
    console.log("Scenario 3 pass")
}