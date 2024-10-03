import AppError from "../structures/AppError";

export function handleError(err: unknown, statusCode = 500): AppError {
    if (err instanceof AppError) {
        return err;
    } else if (err instanceof Error) {
        return new AppError(err.message, statusCode, true);
    } else {
        return new AppError('An unknown error occurred', statusCode, true);
    }
}