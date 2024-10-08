interface ProductAttributes {
    id: number;
    product_name: string;
    price: number;
    category_id: number;
    description: string;
    thumbnail: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export default ProductAttributes;