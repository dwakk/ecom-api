import Account from "../models/Account";
import AppError from "../structures/AppError";
import AccountAttributes from "../typings/Account";
import { handleError } from "./error";
import { comparePassword, generateToken, hashPassword } from "./authentication";

export async function createAccountService(newAccount: Account): Promise<Account> {
    try {
        const accountExists = await Account.findOne({ where: { email: newAccount.email } });

        if (accountExists) {
            throw new AppError('Account already exists', 409, true);
        }

        const hashed = await hashPassword(newAccount.password);
        newAccount.password = hashed;

        const account = await Account.create(newAccount);
        if (!account) {
            throw new AppError('Account not created', 500, true);
        }
        return account;

    } catch (err) {
        throw handleError(err);
    }
}


export async function getAccountByIdService(id: number): Promise<Account> {
    try {
        const account = await Account.findByPk(id);
        if (!account) {
            throw new AppError('Account not found', 404, true);
        }
        return account;
    } catch (err) {
        throw handleError(err);
    }
}

export async function getAllAccountsService(): Promise<Account[]> {
    try {
        const accounts = await Account.findAll();
        if (!accounts) {
            throw new AppError('No accounts found', 404, true);
        }
        return accounts;
    } catch (err) {
        throw handleError(err);
    }
}

export async function deleteAccountService(id: number): Promise<boolean> {
    try {
        const account = await Account.findByPk(id);
        if (!account) {
            throw new AppError('Account not found', 404, true);
        }
        await account.destroy();
        return true;
    } catch (err) {
        throw handleError(err);
    }
}


export async function updateAccountService(id: number, updates: Partial<AccountAttributes>): Promise<Account> {
    try {
        if (updates.password) {
            const hashed = await hashPassword(updates.password);
            updates.password = hashed;
        }
        const affectedRows = await Account.update(updates, { where: { id }, individualHooks: true });
        if (affectedRows[0] === 0) {
            throw new AppError('Account not found or no changes made', 404, true);
        }
        const updatedAccount = await Account.findByPk(id);
        if (!updatedAccount) {
            throw new AppError('Account not found', 404, true);
        }
        return updatedAccount;
    } catch (err) {
        throw handleError(err);
    }
}



export async function loginAccountService(email: string, password: string): Promise<string> {
    try {
        const account = await Account.findOne({ where: { email } });
        if (!account) {
            throw new AppError('Invalid email or password', 401, true);
        }

        const match = await comparePassword(password, account.password);

        if (!match) {
            throw new AppError('Invalid email or password', 401, true);
        }

        const token = generateToken(account);
        if (!token) {
            throw new AppError('Failed to generate token', 500, true);
        }
        return token;

    } catch (err) {
        throw handleError(err);
    }
}

