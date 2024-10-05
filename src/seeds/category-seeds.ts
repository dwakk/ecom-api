import Category from '../models/Category';
import CategoryAttributes from '../typings/Category';

const data: CategoryAttributes[] = [
    {
        "id": 1,
        "slug": "beauty",
        "category_name": "Beauty",
        "url": `${process.env.BASE_URL}/category/beauty`
    },
    {
        "id": 2,
        "slug": "fragrances",
        "category_name": "Fragrances",
        "url": `${process.env.BASE_URL}/category/fragrances`
    },
    {
        "id": 3,
        "slug": "furniture",
        "category_name": "Furniture",
        "url": `${process.env.BASE_URL}/category/furniture`
    },
    {
        "id": 4,
        "slug": "groceries",
        "category_name": "Groceries",
        "url": `${process.env.BASE_URL}/category/groceries`
    },
    {
        "id": 5,
        "slug": "home-decoration",
        "category_name": "Home Decoration",
        "url": `${process.env.BASE_URL}/category/home-decoration`
    },
    {
        "id": 6,
        "slug": "kitchen-accessories",
        "category_name": "Kitchen Accessories",
        "url": `${process.env.BASE_URL}/category/kitchen-accessories`
    },
    {
        "id": 7,
        "slug": "laptops",
        "category_name": "Laptops",
        "url": `${process.env.BASE_URL}/category/laptops`
    },
    {
        "id": 8,
        "slug": "mens-shirts",
        "category_name": "Mens Shirts",
        "url": `${process.env.BASE_URL}/category/mens-shirts`
    },
    {
        "id": 9,
        "slug": "mens-shoes",
        "category_name": "Mens Shoes",
        "url": `${process.env.BASE_URL}/category/mens-shoes`
    },
    {
        "id": 10,
        "slug": "mens-watches",
        "category_name": "Mens Watches",
        "url": `${process.env.BASE_URL}/category/mens-watches`
    },
    {
        "id": 11,
        "slug": "mobile-accessories",
        "category_name": "Mobile Accessories",
        "url": `${process.env.BASE_URL}/category/mobile-accessories`
    },
    {
        "id": 12,
        "slug": "motorcycle",
        "category_name": "Motorcycle",
        "url": `${process.env.BASE_URL}/category/motorcycle`
    },
    {
        "id": 13,
        "slug": "skin-care",
        "category_name": "Skin Care",
        "url": `${process.env.BASE_URL}/category/skin-care`
    },
    {
        "id": 14,
        "slug": "smartphones",
        "category_name": "Smartphones",
        "url": `${process.env.BASE_URL}/category/smartphones`
    },
    {
        "id": 15,
        "slug": "sports-accessories",
        "category_name": "Sports Accessories",
        "url": `${process.env.BASE_URL}/category/sports-accessories`
    },
    {
        "id": 16,
        "slug": "sunglasses",
        "category_name": "Sunglasses",
        "url": `${process.env.BASE_URL}/category/sunglasses`
    },
    {
        "id": 17,
        "slug": "tablets",
        "category_name": "Tablets",
        "url": `${process.env.BASE_URL}/category/tablets`
    },
    {
        "id": 18,
        "slug": "tops",
        "category_name": "Tops",
        "url": `${process.env.BASE_URL}/category/tops`
    },
    {
        "id": 19,
        "slug": "vehicle",
        "category_name": "Vehicle",
        "url": `${process.env.BASE_URL}/category/vehicle`
    },
    {
        "id": 20,
        "slug": "womens-bags",
        "category_name": "Womens Bags",
        "url": `${process.env.BASE_URL}/category/womens-bags`
    },
    {
        "id": 21,
        "slug": "womens-dresses",
        "category_name": "Womens Dresses",
        "url": `${process.env.BASE_URL}/category/womens-dresses`
    },
    {
        "id": 22,
        "slug": "womens-jewellery",
        "category_name": "Womens Jewellery",
        "url": `${process.env.BASE_URL}/category/womens-jewellery`
    },
    {
        "id": 23,
        "slug": "womens-shoes",
        "category_name": "Womens Shoes",
        "url": `${process.env.BASE_URL}/category/womens-shoes`
    },
    {
        "id": 24,
        "slug": "womens-watches",
        "category_name": "Womens Watches",
        "url": `${process.env.BASE_URL}/category/womens-watches`
    }
];

async function seedCategories() {
    await Category.bulkCreate(data);
}

export default seedCategories;