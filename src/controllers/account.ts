import { NextFunction, Request, Response } from "express";
import Account from "../models/Account";
import { accountService } from "../services/account";
import AppError from "../structures/AppError";

async function getAccountInfo(req: Request, res: Response, next: NextFunction) {
    try {
        const account = req.account;

        if (!account) {
            return next(new AppError('Account not found', 404, true));
        }

        return res.status(200).json(account);
    } catch (err) {
        next(err);
    }
}

async function loginAccount(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new AppError('Email and password are required', 400, true));
    }

    try {
        const accessToken = await accountService.loginAccount(email, password);
        return res.status(200).json({ accessToken });
    } catch (err) {
        next(err);
    }
}

async function createAccount(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return next(new AppError('Name, email and password are required', 400, true));
    }

    const newAccount = {
        name,
        email,
        password,
        role: 'user'
    } as Account;

    try {
        const accessToken = await accountService.createAccount(newAccount);
        return res.status(201).json({ accessToken });
    } catch (err) {
        next(err);
    }
}

async function updateAccount(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
    const account = req.account;
    if (!account) {
        return next(new AppError('Account not found', 404, true));
    }
    try {
        const updatedAccount = await accountService.updateAccount(account.id, data);
        return res.status(200).json(updatedAccount);
    } catch (err) {
        next(err);
    }
}

async function deleteAccount(req: Request, res: Response, next: NextFunction) {
    const account = req.account;
    if (!account) {
        return next(new AppError('Account not found', 404, true));
    }
    try {
        const isDestroyed = await accountService.deleteAccount(account);
        if (!isDestroyed) {
            return next(new AppError('Account not destroyed', 404, true));
        }
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
}

const accountController = {
    createAccount,
    deleteAccount,
    getAccountInfo,
    loginAccount,
    updateAccount
};

export { accountController };