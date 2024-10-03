interface OrderAttributes {
    id: number,
    user_id: number,
    status: string,
    total_price: number,
    createdAt?: Date,
    updatedAt?: Date;
}

export default OrderAttributes;