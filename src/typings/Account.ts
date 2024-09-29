interface AccountAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
}

export default AccountAttributes;