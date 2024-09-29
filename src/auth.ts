import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Account from './models/Account';

async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
}

async function comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
}

async function generateToken(account: Account) {
    const payload = {
        id: account.id,
        role: account.role
    };

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
}

async function authenticate(email: string, password: string) {
    const account = await Account.findOne({ where: { email } });
    if (!account) {
        throw new Error('Invalid email or password');
    }

    const match = await comparePassword(password, account.password);
    if (!match) {
        throw new Error('Invalid email or password');
    }

    return generateToken(account);
}

export { hashPassword, comparePassword, generateToken, authenticate };