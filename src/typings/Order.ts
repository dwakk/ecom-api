interface OrderAttributes {
    id?: number,
    account_id: number,
    total_price: number,
    cart_id: number | null,
    status: "pending" | "completed",
    createdAt?: Date,
    updatedAt?: Date;
}

export default OrderAttributes;