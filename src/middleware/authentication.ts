import jwt from 'jsonwebtoken';
import Account from '../models/Account';
import { Request, Response, NextFunction } from 'express';

export async function authenticateJWT(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authorization.split(' ')[1];

    if (!token) {
        return next();
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!);
        const account = await Account.findByPk((payload as jwt.JwtPayload).id);
        if (!account) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.account = account;
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    return next();
}

export async function accessControl(role: "admin" | "user") {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.account || req.account.role !== role) {
            return res.status(403).json({ message: 'You are not authorized to perform this action' });
        }
        next();
    };
}