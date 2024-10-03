import { NextFunction, Request, Response } from "express";
import Account from "../models/Account";
import { createAccountService, loginAccountService, updateAccountService } from "../services/account";

export async function getAccountInfo(req: Request, res: Response, next: NextFunction) {
    try {
        const account = req.account;

        if (!account) {
            return res.status(400).json({ message: 'No account found' });
        }

        return res.status(200).json(account);
    } catch (err) {
        next(err);
    }
}

export async function loginAccount(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const accessToken = await loginAccountService(email, password);
        return res.status(200).json({ accessToken });
    } catch (err) {
        next(err);
    }
}

export async function createAccount(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newAccount = {
        name,
        email,
        password,
        role: 'user'
    } as Account;

    try {
        const account = await createAccountService(newAccount);
        return res.status(201).json(account);
    } catch (err: any) {
        next(err);
    }
}

export async function updateAccount(req: Request, res: Response, next: NextFunction) {
    const data = req.body;
    const account = req.account;
    if (!account) {
        return res.status(400).json({ message: 'No account found' });
    }
    try {
        const updatedAccount = await updateAccountService(account.id, data);
        return res.status(200).json(updatedAccount);
    } catch (err: any) {
        next(err);
    }
}