import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import AppError from "../structures/AppError";

export const errorHandler: ErrorRequestHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(`Error occured: ${err}`);
    console.error(`Request: ${req.method} ${req.url}`);

    let statusCode = 500;
    let message = "An unknown error occurred";
    if (err instanceof AppError) {
        statusCode = err.statusCode || 500;
        message = err.isOperational ? err.message : "An unknown error occurred";
    } else if (err instanceof Error) {
        message = err.message;
    }

    res.status(statusCode).json({ message });
};