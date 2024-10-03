import jwt from 'jsonwebtoken';
import Account from '../models/Account';
import { Request, Response, NextFunction } from 'express';
import AppError from '../structures/AppError';

export async function authenticateJWT(req: Request, res: Response, next: NextFunction) {
    try {
        const authorization = req.headers.authorization;

        if (!authorization || !authorization.startsWith('Bearer ')) {
            throw new AppError('Invalid token', 401, true);
        }

        const token = authorization.split(' ')[1];

        if (!token) {
            throw new AppError('Invalid token', 401, true);
        }

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET!);
            const account = await Account.findByPk((payload as jwt.JwtPayload).id);
            if (!account) {
                throw new AppError('Invalid token', 401, true);
            }
            req.account = account;
        } catch (error) {
            throw new AppError('Invalid token', 401, true);
        }

        return next();
    } catch (err) {
        next(err);
    }
}

export function accessControl(role: "admin" | "user") {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.account || req.account.role !== role) {
                throw new AppError('You are not allowed to perform this action', 403, true);
            }
            next();
        } catch (err) {
            next(err);
        }
    };
}