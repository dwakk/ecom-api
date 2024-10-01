import Account from "../models/Account";
import AccountAttributes from "../typings/Account";
import { comparePassword, generateToken, hashPassword } from "./authentication";

export async function createAccountService(newAccount: Account) {
    try {
        const accountExists = await Account.findOne({ where: { email: newAccount.email } });

        if (accountExists) {
            throw new Error('Account already exists');
        }

        const hashed = await hashPassword(newAccount.password);
        newAccount.password = hashed;

        const account = await Account.create(newAccount);
        return account;

    } catch (err: any) {
        console.error('Error creating account:', err.message);
        throw err;
    }
}


export async function getAccountByIdService(id: number) {
    try {
        const account = await Account.findByPk(id);
        return account;
    } catch (err) {
        throw err;
    }
}

export async function getAllAccountsService() {
    try {
        const accounts = await Account.findAll();
        return accounts;
    } catch (err) {
        throw err;
    }
}

export async function deleteAccountService(id: number) {
    try {
        const account = await Account.findByPk(id);
        if (!account) {
            throw new Error('Account not found');
        }
        await account.destroy();
        return true;
    } catch (err) {
        throw err;
    }
}


export async function updateAccountService(id: number, updates: Partial<AccountAttributes>) {
    try {
        const [affectedRows, [updatedAccount]] = await Account.update(updates, { where: { id }, returning: true, individualHooks: true });
        if (affectedRows === 0) {
            throw new Error('Account not found');
        }
        return updatedAccount;
    } catch (err) {
        throw err;
    }
}



export async function loginAccountService(email: string, password: string) {
    try {
        const account = await Account.findOne({ where: { email } });
        if (!account) {
            throw new Error('Invalid email or password');
        }

        const match = await comparePassword(password, account.password);

        if (!match) {
            throw new Error('Invalid email or password');
        }

        const token = generateToken(account);
        return token;

    } catch (err: any) {
        console.error('Login error:', err.message);
        throw err;
    }
}

