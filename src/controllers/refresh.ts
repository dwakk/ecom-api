import { authenticationService } from "../services/authentication";
import { accountService } from "../services/account";
import { NextFunction, Request, Response } from "express";
import AppError from "../structures/AppError";
import jwt from "jsonwebtoken";

async function refresh(req: Request, res: Response, next: NextFunction) {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return next(new AppError("Refresh token not found", 401, true));
        }

        const payload = authenticationService.verifyToken(
            refreshToken,
            process.env.JWT_REFRESH_SECRET!
        );
        const isValid = await authenticationService.isValidRefreshToken(
            payload.id,
            refreshToken
        );

        if (!isValid) {
            return next(new AppError("Invalid refresh token", 401, true));
        }

        const account = await accountService.getAccountById(payload.id);

        if (!account) {
            return next(new AppError("Account not found", 404, true));
        }

        const accessToken = jwt.sign(
            {
                id: account.id,
                email: account.email,
                role: account.role,
            },
            process.env.JWT_SECRET!,
            { expiresIn: "15m" }
        );

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 15 * 60 * 1000,
        });

        return res.status(200).json({ message: "Refresh successful" });
    } catch (err) {
        next(err);
    }
}

const refreshController = {
    refresh,
};

export { refreshController };
