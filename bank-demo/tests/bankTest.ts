import Bank from "../src/bank";

const bank = new Bank();

const account = bank.createAccount("John Doe", 29, "2938298");

if (account.accountNumber == "2938298") {
    console.log("Scenario 1 pass")
} else {
    console.log("Scenario 1 fail")
}

try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 fail")
} catch (e) {
    console.log("Scenario 2 pass")
}