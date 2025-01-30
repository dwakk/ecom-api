declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            PORT: number;
            FRONTEND_URL: string;
            DB_NAME: string;
            DB_USER: string;
            DB_PASS: string;
            DB_HOST: string;
            REDIS_URL: string;
            REDIS_PASSWORD: string;
            JWT_SECRET: string;
            JWT_REFRESH_SECRET: string;
            BASE_URL: string;
            STRIPE_SECRET_KEY: string;
        }
    }
}

export { };
