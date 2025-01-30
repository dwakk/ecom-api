import { Account } from "../models";
import AppError from "../structures/AppError";
import AccountAttributes from "../typings/Account";
import { handleError } from "../utils/handleError";
import { authenticationService } from "./authentication";

async function createAccount(
    newAccount: Account
): Promise<{ accessToken: string; refreshToken: string }> {
    try {
        const accountExists = await Account.findOne({
            where: { email: newAccount.email },
        });

        if (accountExists) {
            throw new AppError("Account already exists", 409, true);
        }

        const hashed = await authenticationService.hashPassword(
            newAccount.password
        );
        newAccount.password = hashed;

        const account = await Account.create(newAccount);
        if (!account) {
            throw new AppError("Account not created", 500, true);
        }

        const token = authenticationService.generateTokens(account);
        return token;
    } catch (err) {
        throw handleError(err);
    }
}

async function getAccountById(id: number): Promise<Account> {
    try {
        const account = await Account.findByPk(id, {
            attributes: { exclude: ["password"] },
        });
        if (!account) {
            throw new AppError("Account not found", 404, true);
        }
        return account;
    } catch (err) {
        throw handleError(err);
    }
}

async function getAll(): Promise<Account[]> {
    try {
        const accounts = await Account.findAll();
        if (!accounts) {
            throw new AppError("No accounts found", 404, true);
        }
        return accounts;
    } catch (err) {
        throw handleError(err);
    }
}

async function deleteAccount(account: Account): Promise<true> {
    try {
        await account.destroy();
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function updateAccount(
    id: number,
    updates: Partial<AccountAttributes>
): Promise<Account> {
    try {
        if (updates.password) {
            const hashed = await authenticationService.hashPassword(
                updates.password
            );
            updates.password = hashed;
        }
        const affectedRows = await Account.update(updates, {
            where: { id },
            individualHooks: true,
        });
        if (affectedRows[0] === 0) {
            throw new AppError(
                "Account not found or no changes made",
                404,
                true
            );
        }
        const updatedAccount = await Account.findByPk(id);
        if (!updatedAccount) {
            throw new AppError("Account not found", 404, true);
        }
        return updatedAccount;
    } catch (err) {
        throw handleError(err);
    }
}

async function loginAccount(
    email: string,
    password: string
): Promise<{ accessToken: string; refreshToken: string }> {
    try {
        const account = await Account.findOne({ where: { email } });
        if (!account) {
            throw new AppError("Invalid email or password", 401, true);
        }

        const match = await authenticationService.comparePassword(
            password,
            account.password
        );

        if (!match) {
            throw new AppError("Invalid email or password", 401, true);
        }

        const token = authenticationService.generateTokens(account);
        return token;
    } catch (err) {
        throw handleError(err);
    }
}

async function logoutAccount(
    accessToken: string,
    refreshToken: string
): Promise<boolean> {
    try {
        await authenticationService.blacklistTokens(accessToken, refreshToken);
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

const accountService = {
    createAccount,
    getAccountById,
    getAll,
    deleteAccount,
    updateAccount,
    loginAccount,
    logoutAccount,
};

export { accountService };
