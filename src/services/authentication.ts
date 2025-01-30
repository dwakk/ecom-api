import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Account } from '../models';
import { handleError } from '../utils/handleError';
import AppError from '../structures/AppError';
import { RedisClient } from '../cache/redis';

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

async function generateTokens(account: Account): Promise<{ accessToken: string; refreshToken: string }> {
    try {
        const accessPayload = {
            id: account.id,
            email: account.email,
            role: account.role
        };

        const refreshPayload = {
            id: account.id,
            role: account.role
        };

        const accessToken = jwt.sign(accessPayload, process.env.JWT_SECRET!, { expiresIn: '15m' });
        const refreshToken = jwt.sign(refreshPayload, process.env.JWT_REFRESH_SECRET!, { expiresIn: '30d' });

        if (!accessToken || !refreshToken) {
            throw new AppError('Failed to generate token', 500, true);
        }

        const res = await saveRefreshToken(account.id.toString(),refreshToken);
        if (!res) {
            throw new AppError('Failed to save refresh token', 500, true);
        }

        return { accessToken, refreshToken };
    } catch (err) {
        throw handleError(err);
    }
}

async function authenticate(email: string, password: string): Promise<{ accessToken: string; refreshToken: string }> {
    try {
        const account = await Account.findOne({ where: { email } });
        if (!account) {
            throw new AppError('Invalid email or password', 401, true);
        }

        const match = await comparePassword(password, account.password);
        if (!match) {
            throw new AppError('Invalid email or password', 401, true);
        }

        return generateTokens(account);
    } catch (err) {
        throw handleError(err);
    }
}

async function blacklistTokens(accessToken: string, refreshToken: string): Promise<true> {
    try {
        const currentTime = Math.floor(Date.now() / 1000);
        const accessTokenPd = verifyToken(accessToken, process.env.JWT_SECRET!);
        const refreshTokenPd = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET!);

        await RedisClient.setEx(`blacklist:${accessToken}`, accessTokenPd.exp! - currentTime, 'true');
        await RedisClient.setEx(`blacklist:${refreshToken}`, refreshTokenPd.exp! - currentTime, 'true');

        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function isTokenBlacklisted(token: string): Promise<boolean> {
    try {
        const isBlacklisted = await RedisClient.get(`blacklist:${token}`);
        return isBlacklisted === 'true';
    } catch (err) {
        throw handleError(err);
    }
}

async function saveRefreshToken(userId: string, refreshToken: string): Promise<true> {
    try {
        const key = `refreshToken:${userId}:${refreshToken}`;
        const expirationTime = 30 * 24 * 60 * 60;
        await RedisClient.setEx(key, expirationTime, 'true');
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

async function isValidRefreshToken(userId: string, refreshToken: string): Promise<boolean> {
    try {
        const key = `refreshToken:${userId}:${refreshToken}`;
        const result = await RedisClient.get(key);
        return result === 'true';
    } catch (err) {
        throw handleError(err);
    }
}

async function revokeRefreshToken(userId: string, refreshToken: string): Promise<true> {
    try {
        const key = `refreshToken:${userId}:${refreshToken}`;
        await RedisClient.del(key);
        return true;
    } catch (err) {
        throw handleError(err);
    }
}

function verifyToken(token: string, secret: string): jwt.JwtPayload {
    try {
        const payload = jwt.verify(token, secret);
        return payload as jwt.JwtPayload;
    } catch (err) {
        throw handleError(err);
    }
}

const authenticationService = {
    hashPassword,
    comparePassword,
    generateTokens,
    authenticate,
    blacklistTokens,
    isTokenBlacklisted,
    saveRefreshToken,
    isValidRefreshToken,
    revokeRefreshToken,
    verifyToken
};

export { authenticationService };