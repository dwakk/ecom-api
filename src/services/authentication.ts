import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Account } from '../models';
import { handleError } from '../utils/handleError';
import AppError from '../structures/AppError';

async function hashPassword(password: string): Promise<string> {
    try {
        const salt = await bcrypt.genSalt(12);
        const hash = await bcrypt.hash(password, salt);
        if (!hash) {
            throw new AppError('Failed to hash password', 500, true);
        }
        return hash;
    } catch (err) {
        throw handleError(err);
    }
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(password, hash);
        return match;
    } catch (err) {
        throw handleError(err);
    }
}

async function generateToken(account: Account): Promise<string> {
    try {
        const payload = {
            id: account.id,
            role: account.role
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1d' });
        if (!token) {
            throw new AppError('Failed to generate token', 500, true);
        }
        return token;
    } catch (err) {
        throw handleError(err);
    }
}

async function authenticate(email: string, password: string): Promise<string> {
    try {
        const account = await Account.findOne({ where: { email } });
        if (!account) {
            throw new AppError('Invalid email or password', 401, true);
        }

        const match = await comparePassword(password, account.password);
        if (!match) {
            throw new AppError('Invalid email or password', 401, true);
        }

        return generateToken(account);
    } catch (err) {
        throw handleError(err);
    }
}

const authenticationService = {
    hashPassword,
    comparePassword,
    generateToken,
    authenticate
};

export { authenticationService };