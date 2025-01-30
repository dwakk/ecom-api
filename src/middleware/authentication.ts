import jwt from 'jsonwebtoken';
import { Account } from '../models';
import { Request, Response, NextFunction } from 'express';
import AppError from '../structures/AppError';
import { authenticationService } from '../services/authentication';

export async function authenticateJWT(req: Request, res: Response, next: NextFunction) {
    try {
        const accessToken = req.cookies.accessToken;
        if (!accessToken) {
            return next(new AppError('No token found', 401, true));
        }

        if (await authenticationService.isTokenBlacklisted(accessToken)) {
            return next(new AppError('Token is blacklisted', 401, true));
        }

        try {

            const payload = jwt.verify(accessToken, process.env.JWT_SECRET!);
            const account = await Account.findByPk((payload as jwt.JwtPayload).id, { attributes: { exclude: ['password'] } });
            if (!account) {
                return next(new AppError('Invalid token', 401, true));
            }

            req.account = account;
        } catch (error) {
            return next(new AppError('Invalid token', 401, true));
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
                return next(new AppError('You are not allowed to perform this action', 403, true));
            }
            next();
        } catch (err) {
            next(err);
        }
    };
}