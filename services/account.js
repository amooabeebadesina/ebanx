import Account from '../models/account';


class AccountService {

    constructor() {
        this.accounts = [];
    }

    depositToAccount({ destination, amount }) {
        const accountIndex = this.accounts.findIndex((account) => destination === account.id);
        if (accountIndex === -1) {
            // Account does not exist. Create new account;
            const newAccount = new Account(destination, amount);
            this.accounts.push(newAccount);
            return newAccount;
        } else {
            const account = this.accounts[accountIndex];
            account.addToBalance(amount);
            return account;
        }
    }
}

export default AccountService;
