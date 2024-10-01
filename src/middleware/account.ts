import { NextFunction, Request, Response } from "express";
import Account from "../models/Account";
import { createAccountService, loginAccountService } from "../services/account";
import { hashPassword } from "../services/authentication";

export async function getAccountInfo(req: Request, res: Response, next: NextFunction) {
    const account = req.account;

    if (!account) {
        return res.status(400).json({ message: 'No account found' });
    }

    return res.json(account);
}

export async function loginAccount(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const accessToken = await loginAccountService(email, password);
        return res.status(200).json({ accessToken });
    } catch (err: any) {
        return res.status(500).json({ message: err.message });
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
        return res.status(500).json({ message: err.message });
    }
}