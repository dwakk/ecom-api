interface CartAttributes {
    id: number;
    user_id: number;
    product_id: number;
    quantity: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export default CartAttributes;