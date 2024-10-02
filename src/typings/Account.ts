interface AccountAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    createdAt?: Date;
    updatedAt?: Date;
}

export default AccountAttributes;