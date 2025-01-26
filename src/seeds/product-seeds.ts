import { Product } from "../models";
import ProductAttributes from "../typings/Product";

const data: ProductAttributes[] = [
    {
        id: 1,
        product_name: "Essence Mascara Lash Princess",
        price: 9.99,
        category_id: 1,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
        description:
            "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        stock: 158,
        reserved: 33,
    },
    {
        id: 2,
        product_name: "Eyeshadow Palette with Mirror",
        price: 19.99,
        category_id: 1,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
        description:
            "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        stock: 97,
        reserved: 41,
    },
    {
        id: 3,
        product_name: "Powder Canister",
        price: 14.99,
        category_id: 1,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
        description:
            "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        stock: 26,
        reserved: 44,
    },
    {
        id: 4,
        product_name: "Red Lipstick",
        price: 12.99,
        category_id: 1,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
        description:
            "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        stock: 129,
        reserved: 20,
    },
    {
        id: 5,
        product_name: "Red Nail Polish",
        price: 8.99,
        category_id: 1,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
        description:
            "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        stock: 29,
        reserved: 17,
    },
    {
        id: 6,
        product_name: "Calvin Klein CK One",
        price: 49.99,
        category_id: 2,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
        description:
            "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        stock: 81,
        reserved: 8,
    },
    {
        id: 7,
        product_name: "Chanel Coco Noir Eau De",
        price: 129.99,
        category_id: 2,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
        description:
            "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        stock: 198,
        reserved: 21,
    },
    {
        id: 8,
        product_name: "Dior J'adore",
        price: 89.99,
        category_id: 2,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
        description:
            "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        stock: 173,
        reserved: 23,
    },
    {
        id: 9,
        product_name: "Dolce Shine Eau de",
        price: 69.99,
        category_id: 2,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
        description:
            "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        stock: 6,
        reserved: 42,
    },
    {
        id: 10,
        product_name: "Gucci Bloom Eau de",
        price: 79.99,
        category_id: 2,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
        description:
            "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        stock: 14,
        reserved: 8,
    },
    {
        id: 11,
        product_name: "Annibale Colombo Bed",
        price: 1899.99,
        category_id: 3,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
        description:
            "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        stock: 174,
        reserved: 22,
    },
    {
        id: 12,
        product_name: "Annibale Colombo Sofa",
        price: 2499.99,
        category_id: 3,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png",
        description:
            "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        stock: 39,
        reserved: 20,
    },
    {
        id: 13,
        product_name: "Bedside Table African Cherry",
        price: 299.99,
        category_id: 3,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
        description:
            "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        stock: 73,
        reserved: 31,
    },
    {
        id: 14,
        product_name: "Knoll Saarinen Executive Conference Chair",
        price: 499.99,
        category_id: 3,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
        description:
            "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        stock: 112,
        reserved: 27,
    },
    {
        id: 15,
        product_name: "Wooden Bathroom Sink With Mirror",
        price: 799.99,
        category_id: 3,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
        description:
            "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
        stock: 171,
        reserved: 39,
    },
    {
        id: 16,
        product_name: "Apple",
        price: 1.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png",
        description:
            "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
        stock: 142,
        reserved: 27,
    },
    {
        id: 17,
        product_name: "Beef Steak",
        price: 12.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/thumbnail.png",
        description:
            "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
        stock: 50,
        reserved: 33,
    },
    {
        id: 18,
        product_name: "Cat Food",
        price: 8.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/thumbnail.png",
        description:
            "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
        stock: 182,
        reserved: 45,
    },
    {
        id: 19,
        product_name: "Chicken Meat",
        price: 9.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
        description:
            "Fresh and tender chicken meat, suitable for various culinary preparations.",
        stock: 139,
        reserved: 9,
    },
    {
        id: 20,
        product_name: "Cooking Oil",
        price: 4.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/thumbnail.png",
        description:
            "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
        stock: 59,
        reserved: 41,
    },
    {
        id: 21,
        product_name: "Cucumber",
        price: 1.49,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Cucumber/thumbnail.png",
        description:
            "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
        stock: 44,
        reserved: 22,
    },
    {
        id: 22,
        product_name: "Dog Food",
        price: 10.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Dog%20Food/thumbnail.png",
        description:
            "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
        stock: 85,
        reserved: 2,
    },
    {
        id: 23,
        product_name: "Eggs",
        price: 2.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Eggs/thumbnail.png",
        description:
            "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
        stock: 35,
        reserved: 33,
    },
    {
        id: 24,
        product_name: "Fish Steak",
        price: 14.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Fish%20Steak/thumbnail.png",
        description:
            "Quality fish steak, suitable for grilling, baking, or pan-searing.",
        stock: 24,
        reserved: 0,
    },
    {
        id: 25,
        product_name: "Green Bell Pepper",
        price: 1.29,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Green%20Bell%20Pepper/thumbnail.png",
        description:
            "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
        stock: 77,
        reserved: 10,
    },
    {
        id: 26,
        product_name: "Green Chili Pepper",
        price: 0.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png",
        description:
            "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        stock: 25,
        reserved: 23,
    },
    {
        id: 27,
        product_name: "Honey Jar",
        price: 6.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Honey%20Jar/thumbnail.png",
        description:
            "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        stock: 181,
        reserved: 38,
    },
    {
        id: 28,
        product_name: "Ice Cream",
        price: 5.49,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
        description:
            "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        stock: 167,
        reserved: 16,
    },
    {
        id: 29,
        product_name: "Juice",
        price: 3.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Juice/thumbnail.png",
        description:
            "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        stock: 98,
        reserved: 37,
    },
    {
        id: 30,
        product_name: "Kiwi",
        price: 2.49,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Kiwi/thumbnail.png",
        description:
            "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
        stock: 193,
        reserved: 17,
    },
    {
        id: 31,
        product_name: "Lemon",
        price: 0.79,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Lemon/thumbnail.png",
        description:
            "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
        stock: 170,
        reserved: 12,
    },
    {
        id: 32,
        product_name: "Milk",
        price: 3.49,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Milk/thumbnail.png",
        description:
            "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
        stock: 45,
        reserved: 4,
    },
    {
        id: 33,
        product_name: "Mulberry",
        price: 4.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Mulberry/thumbnail.png",
        description:
            "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
        stock: 88,
        reserved: 13,
    },
    {
        id: 34,
        product_name: "Nescafe Coffee",
        price: 7.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Nescafe%20Coffee/thumbnail.png",
        description:
            "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
        stock: 183,
        reserved: 6,
    },
    {
        id: 35,
        product_name: "Potatoes",
        price: 2.29,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Potatoes/thumbnail.png",
        description:
            "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
        stock: 89,
        reserved: 35,
    },
    {
        id: 36,
        product_name: "Protein Powder",
        price: 19.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Protein%20Powder/thumbnail.png",
        description:
            "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
        stock: 0,
        reserved: 33,
    },
    {
        id: 37,
        product_name: "Red Onions",
        price: 1.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Red%20Onions/thumbnail.png",
        description:
            "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
        stock: 171,
        reserved: 42,
    },
    {
        id: 38,
        product_name: "Rice",
        price: 5.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Rice/thumbnail.png",
        description:
            "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
        stock: 53,
        reserved: 34,
    },
    {
        id: 39,
        product_name: "Soft Drinks",
        price: 1.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Soft%20Drinks/thumbnail.png",
        description:
            "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
        stock: 115,
        reserved: 7,
    },
    {
        id: 40,
        product_name: "Strawberry",
        price: 3.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Strawberry/thumbnail.png",
        description:
            "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
        stock: 124,
        reserved: 11,
    },
    {
        id: 41,
        product_name: "Tissue Paper Box",
        price: 2.49,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Tissue%20Paper%20Box/thumbnail.png",
        description:
            "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
        stock: 39,
        reserved: 41,
    },
    {
        id: 42,
        product_name: "Water",
        price: 0.99,
        category_id: 4,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/groceries/Water/thumbnail.png",
        description:
            "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
        stock: 41,
        reserved: 26,
    },
    {
        id: 43,
        product_name: "Decoration Swing",
        price: 59.99,
        category_id: 5,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/home-decoration/Decoration%20Swing/thumbnail.png",
        description:
            "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
        stock: 164,
        reserved: 15,
    },
    {
        id: 44,
        product_name: "Family Tree Photo Frame",
        price: 29.99,
        category_id: 5,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png",
        description:
            "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
        stock: 2,
        reserved: 38,
    },
    {
        id: 45,
        product_name: "House Showpiece Plant",
        price: 39.99,
        category_id: 5,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/home-decoration/House%20Showpiece%20Plant/thumbnail.png",
        description:
            "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
        stock: 101,
        reserved: 1,
    },
    {
        id: 46,
        product_name: "Plant Pot",
        price: 14.99,
        category_id: 5,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/home-decoration/Plant%20Pot/thumbnail.png",
        description:
            "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
        stock: 54,
        reserved: 43,
    },
    {
        id: 47,
        product_name: "Table Lamp",
        price: 49.99,
        category_id: 5,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/home-decoration/Table%20Lamp/thumbnail.png",
        description:
            "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
        stock: 29,
        reserved: 37,
    },
    {
        id: 48,
        product_name: "Bamboo Spatula",
        price: 7.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Bamboo%20Spatula/thumbnail.png",
        description:
            "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
        stock: 158,
        reserved: 13,
    },
    {
        id: 49,
        product_name: "Black Aluminium Cup",
        price: 5.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Aluminium%20Cup/thumbnail.png",
        description:
            "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
        stock: 133,
        reserved: 31,
    },
    {
        id: 50,
        product_name: "Black Whisk",
        price: 9.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Black%20Whisk/thumbnail.png",
        description:
            "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
        stock: 67,
        reserved: 31,
    },
    {
        id: 51,
        product_name: "Boxed Blender",
        price: 39.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png",
        description:
            "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
        stock: 103,
        reserved: 24,
    },
    {
        id: 52,
        product_name: "Carbon Steel Wok",
        price: 29.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Carbon%20Steel%20Wok/thumbnail.png",
        description:
            "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
        stock: 90,
        reserved: 37,
    },
    {
        id: 53,
        product_name: "Chopping Board",
        price: 12.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Chopping%20Board/thumbnail.png",
        description:
            "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
        stock: 101,
        reserved: 32,
    },
    {
        id: 54,
        product_name: "Citrus Squeezer Yellow",
        price: 8.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Citrus%20Squeezer%20Yellow/thumbnail.png",
        description:
            "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
        stock: 66,
        reserved: 28,
    },
    {
        id: 55,
        product_name: "Egg Slicer",
        price: 6.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Egg%20Slicer/thumbnail.png",
        description:
            "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
        stock: 88,
        reserved: 23,
    },
    {
        id: 56,
        product_name: "Electric Stove",
        price: 49.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/thumbnail.png",
        description:
            "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
        stock: 100,
        reserved: 27,
    },
    {
        id: 57,
        product_name: "Fine Mesh Strainer",
        price: 9.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fine%20Mesh%20Strainer/thumbnail.png",
        description:
            "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
        stock: 112,
        reserved: 7,
    },
    {
        id: 58,
        product_name: "Fork",
        price: 3.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Fork/thumbnail.png",
        description:
            "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
        stock: 6,
        reserved: 37,
    },
    {
        id: 59,
        product_name: "Glass",
        price: 4.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Glass/thumbnail.png",
        description:
            "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
        stock: 60,
        reserved: 45,
    },
    {
        id: 60,
        product_name: "Grater Black",
        price: 10.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Grater%20Black/thumbnail.png",
        description:
            "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
        stock: 64,
        reserved: 8,
    },
    {
        id: 61,
        product_name: "Hand Blender",
        price: 34.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Hand%20Blender/thumbnail.png",
        description:
            "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
        stock: 6,
        reserved: 47,
    },
    {
        id: 62,
        product_name: "Ice Cube Tray",
        price: 5.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Ice%20Cube%20Tray/thumbnail.png",
        description:
            "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
        stock: 114,
        reserved: 10,
    },
    {
        id: 63,
        product_name: "Kitchen Sieve",
        price: 7.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Kitchen%20Sieve/thumbnail.png",
        description:
            "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
        stock: 91,
        reserved: 26,
    },
    {
        id: 64,
        product_name: "Knife",
        price: 14.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Knife/thumbnail.png",
        description:
            "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
        stock: 160,
        reserved: 28,
    },
    {
        id: 65,
        product_name: "Lunch Box",
        price: 12.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Lunch%20Box/thumbnail.png",
        description:
            "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
        stock: 182,
        reserved: 10,
    },
    {
        id: 66,
        product_name: "Microwave Oven",
        price: 89.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Microwave%20Oven/thumbnail.png",
        description:
            "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
        stock: 69,
        reserved: 18,
    },
    {
        id: 67,
        product_name: "Mug Tree Stand",
        price: 15.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Mug%20Tree%20Stand/thumbnail.png",
        description:
            "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
        stock: 144,
        reserved: 36,
    },
    {
        id: 68,
        product_name: "Pan",
        price: 24.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Pan/thumbnail.png",
        description:
            "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
        stock: 25,
        reserved: 1,
    },
    {
        id: 69,
        product_name: "Plate",
        price: 3.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Plate/thumbnail.png",
        description:
            "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
        stock: 197,
        reserved: 48,
    },
    {
        id: 70,
        product_name: "Red Tongs",
        price: 6.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Red%20Tongs/thumbnail.png",
        description:
            "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
        stock: 82,
        reserved: 6,
    },
    {
        id: 71,
        product_name: "Silver Pot With Glass Cap",
        price: 39.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Silver%20Pot%20With%20Glass%20Cap/thumbnail.png",
        description:
            "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
        stock: 39,
        reserved: 43,
    },
    {
        id: 72,
        product_name: "Slotted Turner",
        price: 8.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Slotted%20Turner/thumbnail.png",
        description:
            "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
        stock: 15,
        reserved: 4,
    },
    {
        id: 73,
        product_name: "Spice Rack",
        price: 19.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spice%20Rack/thumbnail.png",
        description:
            "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
        stock: 26,
        reserved: 18,
    },
    {
        id: 74,
        product_name: "Spoon",
        price: 4.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Spoon/thumbnail.png",
        description:
            "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
        stock: 35,
        reserved: 29,
    },
    {
        id: 75,
        product_name: "Tray",
        price: 16.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Tray/thumbnail.png",
        description:
            "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
        stock: 176,
        reserved: 22,
    },
    {
        id: 76,
        product_name: "Wooden Rolling Pin",
        price: 11.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Wooden%20Rolling%20Pin/thumbnail.png",
        description:
            "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
        stock: 15,
        reserved: 30,
    },
    {
        id: 77,
        product_name: "Yellow Peeler",
        price: 5.99,
        category_id: 6,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/kitchen-accessories/Yellow%20Peeler/thumbnail.png",
        description:
            "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
        stock: 98,
        reserved: 32,
    },
    {
        id: 78,
        product_name: "Apple MacBook Pro 14 Inch Space Grey",
        price: 1999.99,
        category_id: 7,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
        description:
            "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
        stock: 31,
        reserved: 11,
    },
    {
        id: 79,
        product_name: "Asus Zenbook Pro Dual Screen Laptop",
        price: 1799.99,
        category_id: 7,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png",
        description:
            "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
        stock: 112,
        reserved: 15,
    },
    {
        id: 80,
        product_name: "Huawei Matebook X Pro",
        price: 1399.99,
        category_id: 7,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png",
        description:
            "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
        stock: 99,
        reserved: 4,
    },
    {
        id: 81,
        product_name: "Lenovo Yoga 920",
        price: 1099.99,
        category_id: 7,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png",
        description:
            "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
        stock: 71,
        reserved: 22,
    },
    {
        id: 82,
        product_name: "New DELL XPS 13 9300 Laptop",
        price: 1499.99,
        category_id: 7,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png",
        description:
            "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
        stock: 117,
        reserved: 11,
    },
    {
        id: 83,
        product_name: "Blue & Black Check Shirt",
        price: 29.99,
        category_id: 8,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20&%20Black%20Check%20Shirt/thumbnail.png",
        description:
            "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
        stock: 62,
        reserved: 12,
    },
    {
        id: 84,
        product_name: "Gigabyte Aorus Men Tshirt",
        price: 24.99,
        category_id: 8,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shirts/Gigabyte%20Aorus%20Men%20Tshirt/thumbnail.png",
        description:
            "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
        stock: 62,
        reserved: 8,
    },
    {
        id: 85,
        product_name: "Man Plaid Shirt",
        price: 34.99,
        category_id: 8,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Plaid%20Shirt/thumbnail.png",
        description:
            "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
        stock: 53,
        reserved: 14,
    },
    {
        id: 86,
        product_name: "Man Short Sleeve Shirt",
        price: 19.99,
        category_id: 8,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shirts/Man%20Short%20Sleeve%20Shirt/thumbnail.png",
        description:
            "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
        stock: 8,
        reserved: 9,
    },
    {
        id: 87,
        product_name: "Men Check Shirt",
        price: 27.99,
        category_id: 8,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shirts/Men%20Check%20Shirt/thumbnail.png",
        description:
            "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
        stock: 54,
        reserved: 18,
    },
    {
        id: 88,
        product_name: "Nike Air Jordan 1 Red And Black",
        price: 149.99,
        category_id: 9,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/thumbnail.png",
        description:
            "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
        stock: 21,
        reserved: 38,
    },
    {
        id: 89,
        product_name: "Nike Baseball Cleats",
        price: 79.99,
        category_id: 9,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Baseball%20Cleats/thumbnail.png",
        description:
            "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
        stock: 159,
        reserved: 14,
    },
    {
        id: 90,
        product_name: "Puma Future Rider Trainers",
        price: 89.99,
        category_id: 9,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png",
        description:
            "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
        stock: 14,
        reserved: 44,
    },
    {
        id: 91,
        product_name: "Sports Sneakers Off White & Red",
        price: 119.99,
        category_id: 9,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20&%20Red/thumbnail.png",
        description:
            "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
        stock: 114,
        reserved: 31,
    },
    {
        id: 92,
        product_name: "Sports Sneakers Off White Red",
        price: 109.99,
        category_id: 9,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-shoes/Sports%20Sneakers%20Off%20White%20Red/thumbnail.png",
        description:
            "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
        stock: 127,
        reserved: 16,
    },
    {
        id: 93,
        product_name: "Brown Leather Belt Watch",
        price: 89.99,
        category_id: 10,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/thumbnail.png",
        description:
            "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
        stock: 43,
        reserved: 45,
    },
    {
        id: 94,
        product_name: "Longines Master Collection",
        price: 1499.99,
        category_id: 10,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png",
        description:
            "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
        stock: 45,
        reserved: 5,
    },
    {
        id: 95,
        product_name: "Rolex Cellini Date Black Dial",
        price: 8999.99,
        category_id: 10,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Date%20Black%20Dial/thumbnail.png",
        description:
            "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
        stock: 153,
        reserved: 35,
    },
    {
        id: 96,
        product_name: "Rolex Cellini Moonphase",
        price: 12999.99,
        category_id: 10,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
        description:
            "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
        stock: 8,
        reserved: 24,
    },
    {
        id: 97,
        product_name: "Rolex Datejust",
        price: 10999.99,
        category_id: 10,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png",
        description:
            "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
        stock: 135,
        reserved: 40,
    },
    {
        id: 98,
        product_name: "Rolex Submariner Watch",
        price: 13999.99,
        category_id: 10,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
        description:
            "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
        stock: 153,
        reserved: 5,
    },
    {
        id: 99,
        product_name: "Amazon Echo Plus",
        price: 99.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png",
        description:
            "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
        stock: 4,
        reserved: 21,
    },
    {
        id: 100,
        product_name: "Apple Airpods",
        price: 129.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
        description:
            "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
        stock: 120,
        reserved: 5,
    },
    {
        id: 101,
        product_name: "Apple AirPods Max Silver",
        price: 549.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
        description:
            "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
        stock: 118,
        reserved: 11,
    },
    {
        id: 102,
        product_name: "Apple Airpower Wireless Charger",
        price: 79.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/thumbnail.png",
        description:
            "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
        stock: 190,
        reserved: 20,
    },
    {
        id: 103,
        product_name: "Apple HomePod Mini Cosmic Grey",
        price: 99.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/thumbnail.png",
        description:
            "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
        stock: 113,
        reserved: 43,
    },
    {
        id: 104,
        product_name: "Apple iPhone Charger",
        price: 19.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20iPhone%20Charger/thumbnail.png",
        description:
            "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
        stock: 78,
        reserved: 0,
    },
    {
        id: 105,
        product_name: "Apple MagSafe Battery Pack",
        price: 99.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20MagSafe%20Battery%20Pack/thumbnail.png",
        description:
            "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
        stock: 104,
        reserved: 39,
    },
    {
        id: 106,
        product_name: "Apple Watch Series 4 Gold",
        price: 349.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Watch%20Series%204%20Gold/thumbnail.png",
        description:
            "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
        stock: 90,
        reserved: 27,
    },
    {
        id: 107,
        product_name: "Beats Flex Wireless Earphones",
        price: 49.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png",
        description:
            "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
        stock: 181,
        reserved: 19,
    },
    {
        id: 108,
        product_name: "iPhone 12 Silicone Case with MagSafe Plum",
        price: 29.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png",
        description:
            "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
        stock: 15,
        reserved: 18,
    },
    {
        id: 109,
        product_name: "Monopod",
        price: 19.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Monopod/thumbnail.png",
        description:
            "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
        stock: 139,
        reserved: 7,
    },
    {
        id: 110,
        product_name: "Selfie Lamp with iPhone",
        price: 14.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Lamp%20with%20iPhone/thumbnail.png",
        description:
            "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
        stock: 103,
        reserved: 46,
    },
    {
        id: 111,
        product_name: "Selfie Stick Monopod",
        price: 12.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png",
        description:
            "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
        stock: 159,
        reserved: 36,
    },
    {
        id: 112,
        product_name: "TV Studio Camera Pedestal",
        price: 499.99,
        category_id: 11,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png",
        description:
            "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
        stock: 194,
        reserved: 27,
    },
    {
        id: 113,
        product_name: "Generic Motorcycle",
        price: 3999.99,
        category_id: 12,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png",
        description:
            "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
        stock: 37,
        reserved: 10,
    },
    {
        id: 114,
        product_name: "Kawasaki Z800",
        price: 8999.99,
        category_id: 12,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/motorcycle/Kawasaki%20Z800/thumbnail.png",
        description:
            "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
        stock: 109,
        reserved: 39,
    },
    {
        id: 115,
        product_name: "MotoGP CI.H1",
        price: 14999.99,
        category_id: 12,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/motorcycle/MotoGP%20CI.H1/thumbnail.png",
        description:
            "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
        stock: 109,
        reserved: 44,
    },
    {
        id: 116,
        product_name: "Scooter Motorcycle",
        price: 2999.99,
        category_id: 12,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/motorcycle/Scooter%20Motorcycle/thumbnail.png",
        description:
            "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
        stock: 128,
        reserved: 7,
    },
    {
        id: 117,
        product_name: "Sportbike Motorcycle",
        price: 7499.99,
        category_id: 12,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/motorcycle/Sportbike%20Motorcycle/thumbnail.png",
        description:
            "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
        stock: 187,
        reserved: 19,
    },
    {
        id: 118,
        product_name: "Attitude Super Leaves Hand Soap",
        price: 8.99,
        category_id: 13,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/skin-care/Attitude%20Super%20Leaves%20Hand%20Soap/thumbnail.png",
        description:
            "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
        stock: 142,
        reserved: 5,
    },
    {
        id: 119,
        product_name: "Olay Ultra Moisture Shea Butter Body Wash",
        price: 12.99,
        category_id: 13,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/skin-care/Olay%20Ultra%20Moisture%20Shea%20Butter%20Body%20Wash/thumbnail.png",
        description:
            "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
        stock: 13,
        reserved: 5,
    },
    {
        id: 120,
        product_name: "Vaseline Men Body and Face Lotion",
        price: 9.99,
        category_id: 13,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/skin-care/Vaseline%20Men%20Body%20and%20Face%20Lotion/thumbnail.png",
        description:
            "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
        stock: 18,
        reserved: 31,
    },
    {
        id: 121,
        product_name: "iPhone 5s",
        price: 199.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/thumbnail.png",
        description:
            "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        stock: 51,
        reserved: 4,
    },
    {
        id: 122,
        product_name: "iPhone 6",
        price: 299.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png",
        description:
            "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
        stock: 48,
        reserved: 30,
    },
    {
        id: 123,
        product_name: "iPhone 13 Pro",
        price: 1099.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
        description:
            "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
        stock: 78,
        reserved: 23,
    },
    {
        id: 124,
        product_name: "iPhone X",
        price: 899.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png",
        description:
            "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
        stock: 76,
        reserved: 17,
    },
    {
        id: 125,
        product_name: "Oppo A57",
        price: 249.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/thumbnail.png",
        description:
            "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
        stock: 10,
        reserved: 26,
    },
    {
        id: 126,
        product_name: "Oppo F19 Pro Plus",
        price: 399.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro%20Plus/thumbnail.png",
        description:
            "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
        stock: 135,
        reserved: 8,
    },
    {
        id: 127,
        product_name: "Oppo K1",
        price: 299.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/thumbnail.png",
        description:
            "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
        stock: 40,
        reserved: 46,
    },
    {
        id: 128,
        product_name: "Realme C35",
        price: 149.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/thumbnail.png",
        description:
            "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
        stock: 86,
        reserved: 46,
    },
    {
        id: 129,
        product_name: "Realme X",
        price: 299.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/thumbnail.png",
        description:
            "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
        stock: 37,
        reserved: 43,
    },
    {
        id: 130,
        product_name: "Realme XT",
        price: 349.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/thumbnail.png",
        description:
            "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
        stock: 62,
        reserved: 24,
    },
    {
        id: 131,
        product_name: "Samsung Galaxy S7",
        price: 299.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/thumbnail.png",
        description:
            "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
        stock: 17,
        reserved: 38,
    },
    {
        id: 132,
        product_name: "Samsung Galaxy S8",
        price: 499.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/thumbnail.png",
        description:
            "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
        stock: 61,
        reserved: 48,
    },
    {
        id: 133,
        product_name: "Samsung Galaxy S10",
        price: 699.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/thumbnail.png",
        description:
            "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
        stock: 95,
        reserved: 29,
    },
    {
        id: 134,
        product_name: "Vivo S1",
        price: 249.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/thumbnail.png",
        description:
            "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
        stock: 84,
        reserved: 45,
    },
    {
        id: 135,
        product_name: "Vivo V9",
        price: 299.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/thumbnail.png",
        description:
            "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
        stock: 30,
        reserved: 12,
    },
    {
        id: 136,
        product_name: "Vivo X21",
        price: 499.99,
        category_id: 14,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20X21/thumbnail.png",
        description:
            "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
        stock: 135,
        reserved: 43,
    },
    {
        id: 137,
        product_name: "American Football",
        price: 19.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/American%20Football/thumbnail.png",
        description:
            "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
        stock: 84,
        reserved: 41,
    },
    {
        id: 138,
        product_name: "Baseball Ball",
        price: 8.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/thumbnail.png",
        description:
            "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
        stock: 44,
        reserved: 27,
    },
    {
        id: 139,
        product_name: "Baseball Glove",
        price: 24.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Glove/thumbnail.png",
        description:
            "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
        stock: 60,
        reserved: 7,
    },
    {
        id: 140,
        product_name: "Basketball",
        price: 14.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball/thumbnail.png",
        description:
            "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
        stock: 101,
        reserved: 26,
    },
    {
        id: 141,
        product_name: "Basketball Rim",
        price: 39.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Basketball%20Rim/thumbnail.png",
        description:
            "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
        stock: 39,
        reserved: 32,
    },
    {
        id: 142,
        product_name: "Cricket Ball",
        price: 12.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Ball/thumbnail.png",
        description:
            "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
        stock: 165,
        reserved: 42,
    },
    {
        id: 143,
        product_name: "Cricket Bat",
        price: 29.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Bat/thumbnail.png",
        description:
            "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
        stock: 162,
        reserved: 28,
    },
    {
        id: 144,
        product_name: "Cricket Helmet",
        price: 44.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
        description:
            "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
        stock: 108,
        reserved: 46,
    },
    {
        id: 145,
        product_name: "Cricket Wicket",
        price: 29.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Wicket/thumbnail.png",
        description:
            "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
        stock: 126,
        reserved: 9,
    },
    {
        id: 146,
        product_name: "Feather Shuttlecock",
        price: 5.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Feather%20Shuttlecock/thumbnail.png",
        description:
            "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
        stock: 49,
        reserved: 1,
    },
    {
        id: 147,
        product_name: "Football",
        price: 17.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Football/thumbnail.png",
        description:
            "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
        stock: 86,
        reserved: 19,
    },
    {
        id: 148,
        product_name: "Golf Ball",
        price: 9.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Golf%20Ball/thumbnail.png",
        description:
            "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
        stock: 24,
        reserved: 12,
    },
    {
        id: 149,
        product_name: "Iron Golf",
        price: 49.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Iron%20Golf/thumbnail.png",
        description:
            "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
        stock: 148,
        reserved: 39,
    },
    {
        id: 150,
        product_name: "Metal Baseball Bat",
        price: 29.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Metal%20Baseball%20Bat/thumbnail.png",
        description:
            "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
        stock: 166,
        reserved: 4,
    },
    {
        id: 151,
        product_name: "Tennis Ball",
        price: 6.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/thumbnail.png",
        description:
            "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
        stock: 50,
        reserved: 6,
    },
    {
        id: 152,
        product_name: "Tennis Racket",
        price: 49.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/thumbnail.png",
        description:
            "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
        stock: 113,
        reserved: 14,
    },
    {
        id: 153,
        product_name: "Volleyball",
        price: 11.99,
        category_id: 15,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sports-accessories/Volleyball/thumbnail.png",
        description:
            "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
        stock: 16,
        reserved: 44,
    },
    {
        id: 154,
        product_name: "Black Sun Glasses",
        price: 29.99,
        category_id: 16,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sunglasses/Black%20Sun%20Glasses/thumbnail.png",
        description:
            "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
        stock: 26,
        reserved: 12,
    },
    {
        id: 155,
        product_name: "Classic Sun Glasses",
        price: 24.99,
        category_id: 16,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sunglasses/Classic%20Sun%20Glasses/thumbnail.png",
        description:
            "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
        stock: 6,
        reserved: 43,
    },
    {
        id: 156,
        product_name: "Green and Black Glasses",
        price: 34.99,
        category_id: 16,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sunglasses/Green%20and%20Black%20Glasses/thumbnail.png",
        description:
            "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
        stock: 15,
        reserved: 37,
    },
    {
        id: 157,
        product_name: "Party Glasses",
        price: 19.99,
        category_id: 16,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/thumbnail.png",
        description:
            "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
        stock: 26,
        reserved: 14,
    },
    {
        id: 158,
        product_name: "Sunglasses",
        price: 22.99,
        category_id: 16,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/sunglasses/Sunglasses/thumbnail.png",
        description:
            "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
        stock: 48,
        reserved: 40,
    },
    {
        id: 159,
        product_name: "iPad Mini 2021 Starlight",
        price: 499.99,
        category_id: 17,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png",
        description:
            "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
        stock: 50,
        reserved: 10,
    },
    {
        id: 160,
        product_name: "Samsung Galaxy Tab S8 Plus Grey",
        price: 599.99,
        category_id: 17,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20S8%20Plus%20Grey/thumbnail.png",
        description:
            "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
        stock: 2,
        reserved: 10,
    },
    {
        id: 161,
        product_name: "Samsung Galaxy Tab White",
        price: 349.99,
        category_id: 17,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tablets/Samsung%20Galaxy%20Tab%20White/thumbnail.png",
        description:
            "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
        stock: 99,
        reserved: 25,
    },
    {
        id: 162,
        product_name: "Blue Frock",
        price: 29.99,
        category_id: 18,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tops/Blue%20Frock/thumbnail.png",
        description:
            "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
        stock: 119,
        reserved: 32,
    },
    {
        id: 163,
        product_name: "Girl Summer Dress",
        price: 19.99,
        category_id: 18,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tops/Girl%20Summer%20Dress/thumbnail.png",
        description:
            "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
        stock: 68,
        reserved: 30,
    },
    {
        id: 164,
        product_name: "Gray Dress",
        price: 34.99,
        category_id: 18,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tops/Gray%20Dress/thumbnail.png",
        description:
            "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
        stock: 136,
        reserved: 45,
    },
    {
        id: 165,
        product_name: "Short Frock",
        price: 24.99,
        category_id: 18,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tops/Short%20Frock/thumbnail.png",
        description:
            "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
        stock: 12,
        reserved: 6,
    },
    {
        id: 166,
        product_name: "Tartan Dress",
        price: 39.99,
        category_id: 18,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/thumbnail.png",
        description:
            "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
        stock: 12,
        reserved: 12,
    },
    {
        id: 167,
        product_name: "300 Touring",
        price: 28999.99,
        category_id: 19,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/thumbnail.png",
        description:
            "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
        stock: 92,
        reserved: 26,
    },
    {
        id: 168,
        product_name: "Charger SXT RWD",
        price: 32999.99,
        category_id: 19,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png",
        description:
            "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
        stock: 162,
        reserved: 40,
    },
    {
        id: 169,
        product_name: "Dodge Hornet GT Plus",
        price: 24999.99,
        category_id: 19,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/thumbnail.png",
        description:
            "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
        stock: 48,
        reserved: 31,
    },
    {
        id: 170,
        product_name: "Durango SXT RWD",
        price: 36999.99,
        category_id: 19,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/thumbnail.png",
        description:
            "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
        stock: 82,
        reserved: 25,
    },
    {
        id: 171,
        product_name: "Pacifica Touring",
        price: 31999.99,
        category_id: 19,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/thumbnail.png",
        description:
            "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
        stock: 103,
        reserved: 12,
    },
    {
        id: 172,
        product_name: "Blue Women's Handbag",
        price: 49.99,
        category_id: 20,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-bags/Blue%20Women's%20Handbag/thumbnail.png",
        description:
            "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
        stock: 122,
        reserved: 46,
    },
    {
        id: 173,
        product_name: "Heshe Women's Leather Bag",
        price: 129.99,
        category_id: 20,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-bags/Heshe%20Women's%20Leather%20Bag/thumbnail.png",
        description:
            "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
        stock: 69,
        reserved: 0,
    },
    {
        id: 174,
        product_name: "Prada Women Bag",
        price: 599.99,
        category_id: 20,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-bags/Prada%20Women%20Bag/thumbnail.png",
        description:
            "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
        stock: 86,
        reserved: 48,
    },
    {
        id: 175,
        product_name: "White Faux Leather Backpack",
        price: 39.99,
        category_id: 20,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-bags/White%20Faux%20Leather%20Backpack/thumbnail.png",
        description:
            "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
        stock: 63,
        reserved: 22,
    },
    {
        id: 176,
        product_name: "Women Handbag Black",
        price: 59.99,
        category_id: 20,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-bags/Women%20Handbag%20Black/thumbnail.png",
        description:
            "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
        stock: 104,
        reserved: 11,
    },
    {
        id: 177,
        product_name: "Black Women's Gown",
        price: 129.99,
        category_id: 21,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-dresses/Black%20Women's%20Gown/thumbnail.png",
        description:
            "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
        stock: 87,
        reserved: 15,
    },
    {
        id: 178,
        product_name: "Corset Leather With Skirt",
        price: 89.99,
        category_id: 21,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20Leather%20With%20Skirt/thumbnail.png",
        description:
            "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
        stock: 185,
        reserved: 8,
    },
    {
        id: 179,
        product_name: "Corset With Black Skirt",
        price: 79.99,
        category_id: 21,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-dresses/Corset%20With%20Black%20Skirt/thumbnail.png",
        description:
            "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
        stock: 12,
        reserved: 24,
    },
    {
        id: 180,
        product_name: "Dress Pea",
        price: 49.99,
        category_id: 21,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-dresses/Dress%20Pea/thumbnail.png",
        description:
            "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
        stock: 117,
        reserved: 18,
    },
    {
        id: 181,
        product_name: "Marni Red & Black Suit",
        price: 179.99,
        category_id: 21,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-dresses/Marni%20Red%20&%20Black%20Suit/thumbnail.png",
        description:
            "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
        stock: 176,
        reserved: 2,
    },
    {
        id: 182,
        product_name: "Green Crystal Earring",
        price: 29.99,
        category_id: 22,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Crystal%20Earring/thumbnail.png",
        description:
            "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
        stock: 56,
        reserved: 31,
    },
    {
        id: 183,
        product_name: "Green Oval Earring",
        price: 24.99,
        category_id: 22,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png",
        description:
            "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
        stock: 9,
        reserved: 20,
    },
    {
        id: 184,
        product_name: "Tropical Earring",
        price: 19.99,
        category_id: 22,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-jewellery/Tropical%20Earring/thumbnail.png",
        description:
            "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
        stock: 72,
        reserved: 40,
    },
    {
        id: 185,
        product_name: "Black & Brown Slipper",
        price: 19.99,
        category_id: 23,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-shoes/Black%20&%20Brown%20Slipper/thumbnail.png",
        description:
            "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
        stock: 49,
        reserved: 32,
    },
    {
        id: 186,
        product_name: "Calvin Klein Heel Shoes",
        price: 79.99,
        category_id: 23,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-shoes/Calvin%20Klein%20Heel%20Shoes/thumbnail.png",
        description:
            "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
        stock: 129,
        reserved: 13,
    },
    {
        id: 187,
        product_name: "Golden Shoes Woman",
        price: 49.99,
        category_id: 23,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-shoes/Golden%20Shoes%20Woman/thumbnail.png",
        description:
            "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
        stock: 192,
        reserved: 46,
    },
    {
        id: 188,
        product_name: "Pampi Shoes",
        price: 29.99,
        category_id: 23,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-shoes/Pampi%20Shoes/thumbnail.png",
        description:
            "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
        stock: 46,
        reserved: 31,
    },
    {
        id: 189,
        product_name: "Red Shoes",
        price: 34.99,
        category_id: 23,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/thumbnail.png",
        description:
            "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
        stock: 39,
        reserved: 28,
    },
    {
        id: 190,
        product_name: "IWC Ingenieur Automatic Steel",
        price: 4999.99,
        category_id: 24,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png",
        description:
            "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
        stock: 148,
        reserved: 24,
    },
    {
        id: 191,
        product_name: "Rolex Cellini Moonphase",
        price: 15999.99,
        category_id: 24,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png",
        description:
            "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
        stock: 166,
        reserved: 0,
    },
    {
        id: 192,
        product_name: "Rolex Datejust Women",
        price: 10999.99,
        category_id: 24,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-watches/Rolex%20Datejust%20Women/thumbnail.png",
        description:
            "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
        stock: 119,
        reserved: 43,
    },
    {
        id: 193,
        product_name: "Watch Gold for Women",
        price: 799.99,
        category_id: 24,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/thumbnail.png",
        description:
            "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
        stock: 173,
        reserved: 5,
    },
    {
        id: 194,
        product_name: "Women's Wrist Watch",
        price: 129.99,
        category_id: 24,
        thumbnail:
            "https://cdn.dummyjson.com/products/images/womens-watches/Women's%20Wrist%20Watch/thumbnail.png",
        description:
            "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
        stock: 132,
        reserved: 23,
    },
];

async function seedProducts() {
    await Product.bulkCreate(data);
}

export default seedProducts;
