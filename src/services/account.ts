import Account from "../models/Account";
import AccountAttributes from "../typings/Account";

async function createAccount(newAccount: Account) {
    try {
        const accountExists = await Account.findOne({ where: { email: newAccount.email } });

        if (accountExists) {
            throw new Error('Account already exists');
        }

        const account = await Account.create(newAccount);
        return account;

    } catch (err) {
        throw err;
    }
}

async function getAccountById(id: number) {
    try {
        const account = await Account.findByPk(id);
        return account;
    } catch (err) {
        throw err;
    }
}

async function getAllUsers() {
    try {
        const accounts = await Account.findAll();
        return accounts;
    } catch (err) {
        throw err;
    }
}

async function deleteUser(id: number) {
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

async function updateUser(id: number, updates: Partial<AccountAttributes>) {
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

export default {
    createAccount,
    getAccountById,
    getAllUsers,
    deleteUser,
    updateUser
};