/**
 * Bank interface with a name, age, accountNumber, and balance
 */

interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}
/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    //Array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];
    /**
     * Searches all accounts for a matching accountNumber
     * @param accountNumber -- account number of the customer
     * @returns BankAccount if there is an account matching the accountNumber or Undefined if there is no matching account
     */
    private findAccount(accountNumber:string): BankAccount|undefined {
        return this.accounts.find(account => account.accountNumber == accountNumber);
    }

    /**
     * creates a new account with a unique account number
     * @param name -- name of the customer
     * @param age -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */

    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name: name,
            age: age,
            accountNumber: accountNumber,
            balance: 0
        }
        this.accounts.push(account); 
        return account;
    }
    /**
     * deposits money to a specified account number
     * @param name -- name of the customer
     * @param accountNumber -- account number of the customer
     * @param amount -- amount deposited 
     */
    public deposit(name: string, accountNumber: string, amount: number) {
        const account = this.findAccount(accountNumber)
        if (!account) {
            throw new Error ("Account does not exist")
        }
        else if (account?.name == name) {
            account.balance += amount
        } 
        else {
            throw new Error("You do not have access to this account")
        }
    }

    /**
     * withdraws money to a specified account number
     * @param name -- name of the customer
     * @param accountNumber -- account number of the customer
     * @param amount -- amount deposited 
     */
    public withdraw(name: string, accountNumber: string, amount: number) {
        const account = this.findAccount(accountNumber)
        if (!account) {
            throw new Error ("Account does not exist")
        }
        else if (account?.name == name) {
            account.balance -= amount
        } 
        else {
            throw new Error("You do not have access to this account")
        }
    }
    /**
     * Gets balance of a specified account
     * @param name -- name of customer
     * @param accountNumber -- account number of customer 
     * @returns number -- account balance
     */
    public getBalance(name: string, accountNumber: string) {
        const account = this.findAccount(accountNumber)
        if (!account) {
            throw new Error ("Account does not exist")
        }
        else if (account?.name == name) {
            return account.balance
        } 
        else {
            throw new Error("You do not have access to this account")
        }
    }
}