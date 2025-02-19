import { Account } from "../models";
import AccountAttributes from "../typings/Account";
import { authenticationService } from "../services/authentication";

const data: AccountAttributes[] = [
    {
        id: 1,
        name: 'Admin',
        email: 'admin@localhost',
        password: 'admin',
        role: 'admin'
    },
    {
        id: 2,
        name: 'User',
        email: 'user@localhost',
        password: 'user',
        role: 'user'
    }
];

async function seedAccounts() {
    for (const account of data) {
        account.password = await authenticationService.hashPassword(account.password);
    }
    await Account.bulkCreate(data);
}

export default seedAccounts;