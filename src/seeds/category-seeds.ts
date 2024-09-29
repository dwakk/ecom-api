import Category from "../models/Category";

const data = [
    {
        "id": 1,
        "slug": "beauty",
        "category_name": "Beauty",
        "url": "http://localhost:3000/api/products/category/beauty"
    },
    {
        "id": 2,
        "slug": "fragrances",
        "category_name": "Fragrances",
        "url": "http://localhost:3000/api/products/category/fragrances"
    },
    {
        "id": 3,
        "slug": "furniture",
        "category_name": "Furniture",
        "url": "http://localhost:3000/api/products/category/furniture"
    },
    {
        "id": 4,
        "slug": "groceries",
        "category_name": "Groceries",
        "url": "http://localhost:3000/api/products/category/groceries"
    },
    {
        "id": 5,
        "slug": "home-decoration",
        "category_name": "Home Decoration",
        "url": "http://localhost:3000/api/products/category/home-decoration"
    },
    {
        "id": 6,
        "slug": "kitchen-accessories",
        "category_name": "Kitchen Accessories",
        "url": "http://localhost:3000/api/products/category/kitchen-accessories"
    },
    {
        "id": 7,
        "slug": "laptops",
        "category_name": "Laptops",
        "url": "http://localhost:3000/api/products/category/laptops"
    },
    {
        "id": 8,
        "slug": "mens-shirts",
        "category_name": "Mens Shirts",
        "url": "http://localhost:3000/api/products/category/mens-shirts"
    },
    {
        "id": 9,
        "slug": "mens-shoes",
        "category_name": "Mens Shoes",
        "url": "http://localhost:3000/api/products/category/mens-shoes"
    },
    {
        "id": 10,
        "slug": "mens-watches",
        "category_name": "Mens Watches",
        "url": "http://localhost:3000/api/products/category/mens-watches"
    },
    {
        "id": 11,
        "slug": "mobile-accessories",
        "category_name": "Mobile Accessories",
        "url": "http://localhost:3000/api/products/category/mobile-accessories"
    },
    {
        "id": 12,
        "slug": "motorcycle",
        "category_name": "Motorcycle",
        "url": "http://localhost:3000/api/products/category/motorcycle"
    },
    {
        "id": 13,
        "slug": "skin-care",
        "category_name": "Skin Care",
        "url": "http://localhost:3000/api/products/category/skin-care"
    },
    {
        "id": 14,
        "slug": "smartphones",
        "category_name": "Smartphones",
        "url": "http://localhost:3000/api/products/category/smartphones"
    },
    {
        "id": 15,
        "slug": "sports-accessories",
        "category_name": "Sports Accessories",
        "url": "http://localhost:3000/api/products/category/sports-accessories"
    },
    {
        "id": 16,
        "slug": "sunglasses",
        "category_name": "Sunglasses",
        "url": "http://localhost:3000/api/products/category/sunglasses"
    },
    {
        "id": 17,
        "slug": "tablets",
        "category_name": "Tablets",
        "url": "http://localhost:3000/api/products/category/tablets"
    },
    {
        "id": 18,
        "slug": "tops",
        "category_name": "Tops",
        "url": "http://localhost:3000/api/products/category/tops"
    },
    {
        "id": 19,
        "slug": "vehicle",
        "category_name": "Vehicle",
        "url": "http://localhost:3000/api/products/category/vehicle"
    },
    {
        "id": 20,
        "slug": "womens-bags",
        "category_name": "Womens Bags",
        "url": "http://localhost:3000/api/products/category/womens-bags"
    },
    {
        "id": 21,
        "slug": "womens-dresses",
        "category_name": "Womens Dresses",
        "url": "http://localhost:3000/api/products/category/womens-dresses"
    },
    {
        "id": 22,
        "slug": "womens-jewellery",
        "category_name": "Womens Jewellery",
        "url": "http://localhost:3000/api/products/category/womens-jewellery"
    },
    {
        "id": 23,
        "slug": "womens-shoes",
        "category_name": "Womens Shoes",
        "url": "http://localhost:3000/api/products/category/womens-shoes"
    },
    {
        "id": 24,
        "slug": "womens-watches",
        "category_name": "Womens Watches",
        "url": "http://localhost:3000/api/products/category/womens-watches"
    }
];

async function seedCategories() {
    await Category.bulkCreate(data);
}

export default seedCategories;