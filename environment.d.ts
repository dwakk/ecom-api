declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            DB_NAME: string;
            DB_USER: string;
            DB_PASS: string;
            DB_HOST: string;
            JWT_SECRET: string;
        }
    }
}

export { };
