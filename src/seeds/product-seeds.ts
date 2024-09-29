import Product from "../models/Product";

const data = [
    {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category_id": 1,
        "price": 9.99
    },
    {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "category_id": 1,
        "price": 19.99
    },
    {
        "id": 3,
        "title": "Powder Canister",
        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        "category_id": 1,
        "price": 14.99
    },
    {
        "id": 4,
        "title": "Red Lipstick",
        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        "category_id": 1,
        "price": 12.99
    },
    {
        "id": 5,
        "title": "Red Nail Polish",
        "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        "category_id": 1,
        "price": 8.99
    },
    {
        "id": 6,
        "title": "Calvin Klein CK One",
        "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        "category_id": 1,
        "price": 49.99
    },
    {
        "id": 7,
        "title": "Chanel Coco Noir Eau De",
        "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        "category_id": 1,
        "price": 129.99
    },
    {
        "id": 8,
        "title": "Dior J'adore",
        "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        "category_id": 1,
        "price": 89.99
    },
    {
        "id": 9,
        "title": "Dolce Shine Eau de",
        "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        "category_id": 1,
        "price": 69.99
    },
    {
        "id": 10,
        "title": "Gucci Bloom Eau de",
        "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        "category_id": 1,
        "price": 79.99
    },
    {
        "id": 11,
        "title": "Annibale Colombo Bed",
        "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        "category_id": 3,
        "price": 1899.99
    },
    {
        "id": 12,
        "title": "Annibale Colombo Sofa",
        "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        "category_id": 3,
        "price": 2499.99
    },
    {
        "id": 13,
        "title": "Bedside Table African Cherry",
        "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        "category_id": 3,
        "price": 299.99
    },
    {
        "id": 14,
        "title": "Knoll Saarinen Executive Conference Chair",
        "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        "category_id": 3,
        "price": 499.99
    },
    {
        "id": 15,
        "title": "Wooden Bathroom Sink With Mirror",
        "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
        "category_id": 3,
        "price": 799.99
    },
    {
        "id": 16,
        "title": "Apple",
        "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
        "category_id": 4,
        "price": 1.99
    },
    {
        "id": 17,
        "title": "Beef Steak",
        "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
        "category_id": 4,
        "price": 12.99
    },
    {
        "id": 18,
        "title": "Cat Food",
        "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
        "category_id": 4,
        "price": 8.99
    },
    {
        "id": 19,
        "title": "Chicken Meat",
        "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
        "category_id": 4,
        "price": 9.99
    },
    {
        "id": 20,
        "title": "Cooking Oil",
        "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
        "category_id": 4,
        "price": 4.99
    },
    {
        "id": 21,
        "title": "Cucumber",
        "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
        "category_id": 4,
        "price": 1.49
    },
    {
        "id": 22,
        "title": "Dog Food",
        "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
        "category_id": 4,
        "price": 10.99
    },
    {
        "id": 23,
        "title": "Eggs",
        "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
        "category_id": 4,
        "price": 2.99
    },
    {
        "id": 24,
        "title": "Fish Steak",
        "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
        "category_id": 4,
        "price": 14.99
    },
    {
        "id": 25,
        "title": "Green Bell Pepper",
        "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
        "category_id": 4,
        "price": 1.29
    },
    {
        "id": 26,
        "title": "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        "category_id": 4,
        "price": 0.99
    },
    {
        "id": 27,
        "title": "Honey Jar",
        "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        "category_id": 4,
        "price": 6.99
    },
    {
        "id": 28,
        "title": "Ice Cream",
        "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        "category_id": 4,
        "price": 5.49
    },
    {
        "id": 29,
        "title": "Juice",
        "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        "category_id": 4,
        "price": 3.99
    },
    {
        "id": 30,
        "title": "Kiwi",
        "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
        "category_id": 4,
        "price": 2.49
    },
    {
        "id": 31,
        "title": "Lemon",
        "description": "Zesty and tangy lemons, versatile for cooking, baking, or making refreshing beverages.",
        "category_id": 4,
        "price": 0.79
    },
    {
        "id": 32,
        "title": "Milk",
        "description": "Fresh and nutritious milk, a staple for various recipes and daily consumption.",
        "category_id": 4,
        "price": 3.49
    },
    {
        "id": 33,
        "title": "Mulberry",
        "description": "Sweet and juicy mulberries, perfect for snacking or adding to desserts and cereals.",
        "category_id": 4,
        "price": 4.99
    },
    {
        "id": 34,
        "title": "Nescafe Coffee",
        "description": "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup.",
        "category_id": 4,
        "price": 7.99
    },
    {
        "id": 35,
        "title": "Potatoes",
        "description": "Versatile and starchy potatoes, great for roasting, mashing, or as a side dish.",
        "category_id": 4,
        "price": 2.29
    },
    {
        "id": 36,
        "title": "Protein Powder",
        "description": "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins.",
        "category_id": 4,
        "price": 19.99
    },
    {
        "id": 37,
        "title": "Red Onions",
        "description": "Flavorful and aromatic red onions, perfect for adding depth to your savory dishes.",
        "category_id": 4,
        "price": 1.99
    },
    {
        "id": 38,
        "title": "Rice",
        "description": "High-quality rice, a staple for various cuisines and a versatile base for many dishes.",
        "category_id": 4,
        "price": 5.99
    },
    {
        "id": 39,
        "title": "Soft Drinks",
        "description": "Assorted soft drinks in various flavors, perfect for refreshing beverages.",
        "category_id": 4,
        "price": 1.99
    },
    {
        "id": 40,
        "title": "Strawberry",
        "description": "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies.",
        "category_id": 4,
        "price": 3.99
    },
    {
        "id": 41,
        "title": "Tissue Paper Box",
        "description": "Convenient tissue paper box for everyday use, providing soft and absorbent tissues.",
        "category_id": 4,
        "price": 2.49
    },
    {
        "id": 42,
        "title": "Water",
        "description": "Pure and refreshing bottled water, essential for staying hydrated throughout the day.",
        "category_id": 4,
        "price": 0.99
    },
    {
        "id": 43,
        "title": "Decoration Swing",
        "description": "The Decoration Swing is a charming addition to your home decor. Crafted with intricate details, it adds a touch of elegance and whimsy to any room.",
        "category_id": 5,
        "price": 59.99
    },
    {
        "id": 44,
        "title": "Family Tree Photo Frame",
        "description": "The Family Tree Photo Frame is a sentimental and stylish way to display your cherished family memories. With multiple photo slots, it tells the story of your loved ones.",
        "category_id": 5,
        "price": 29.99
    },
    {
        "id": 45,
        "title": "House Showpiece Plant",
        "description": "The House Showpiece Plant is an artificial plant that brings a touch of nature to your home without the need for maintenance. It adds greenery and style to any space.",
        "category_id": 5,
        "price": 39.99
    },
    {
        "id": 46,
        "title": "Plant Pot",
        "description": "The Plant Pot is a stylish container for your favorite plants. With a sleek design, it complements your indoor or outdoor garden, adding a modern touch to your plant display.",
        "category_id": 5,
        "price": 14.99
    },
    {
        "id": 47,
        "title": "Table Lamp",
        "description": "The Table Lamp is a functional and decorative lighting solution for your living space. With a modern design, it provides both ambient and task lighting, enhancing the atmosphere.",
        "category_id": 5,
        "price": 49.99
    },
    {
        "id": 48,
        "title": "Bamboo Spatula",
        "description": "The Bamboo Spatula is a versatile kitchen tool made from eco-friendly bamboo. Ideal for flipping, stirring, and serving various dishes.",
        "category_id": 6,
        "price": 7.99
    },
    {
        "id": 49,
        "title": "Black Aluminium Cup",
        "description": "The Black Aluminium Cup is a stylish and durable cup suitable for both hot and cold beverages. Its sleek black design adds a modern touch to your drinkware collection.",
        "category_id": 6,
        "price": 5.99
    },
    {
        "id": 50,
        "title": "Black Whisk",
        "description": "The Black Whisk is a kitchen essential for whisking and beating ingredients. Its ergonomic handle and sleek design make it a practical and stylish tool.",
        "category_id": 6,
        "price": 9.99
    },
    {
        "id": 51,
        "title": "Boxed Blender",
        "description": "The Boxed Blender is a powerful and compact blender perfect for smoothies, shakes, and more. Its convenient design and multiple functions make it a versatile kitchen appliance.",
        "category_id": 6,
        "price": 39.99
    },
    {
        "id": 52,
        "title": "Carbon Steel Wok",
        "description": "The Carbon Steel Wok is a versatile cooking pan suitable for stir-frying, sautéing, and deep frying. Its sturdy construction ensures even heat distribution for delicious meals.",
        "category_id": 6,
        "price": 29.99
    },
    {
        "id": 53,
        "title": "Chopping Board",
        "description": "The Chopping Board is an essential kitchen accessory for food preparation. Made from durable material, it provides a safe and hygienic surface for cutting and chopping.",
        "category_id": 6,
        "price": 12.99
    },
    {
        "id": 54,
        "title": "Citrus Squeezer Yellow",
        "description": "The Citrus Squeezer in Yellow is a handy tool for extracting juice from citrus fruits. Its vibrant color adds a cheerful touch to your kitchen gadgets.",
        "category_id": 6,
        "price": 8.99
    },
    {
        "id": 55,
        "title": "Egg Slicer",
        "description": "The Egg Slicer is a convenient tool for slicing boiled eggs evenly. It's perfect for salads, sandwiches, and other dishes where sliced eggs are desired.",
        "category_id": 6,
        "price": 6.99
    },
    {
        "id": 56,
        "title": "Electric Stove",
        "description": "The Electric Stove provides a portable and efficient cooking solution. Ideal for small kitchens or as an additional cooking surface for various culinary needs.",
        "category_id": 6,
        "price": 49.99
    },
    {
        "id": 57,
        "title": "Fine Mesh Strainer",
        "description": "The Fine Mesh Strainer is a versatile tool for straining liquids and sifting dry ingredients. Its fine mesh ensures efficient filtering for smooth cooking and baking.",
        "category_id": 6,
        "price": 9.99
    },
    {
        "id": 58,
        "title": "Fork",
        "description": "The Fork is a classic utensil for various dining and serving purposes. Its durable and ergonomic design makes it a reliable choice for everyday use.",
        "category_id": 6,
        "price": 3.99
    },
    {
        "id": 59,
        "title": "Glass",
        "description": "The Glass is a versatile and elegant drinking vessel suitable for a variety of beverages. Its clear design allows you to enjoy the colors and textures of your drinks.",
        "category_id": 6,
        "price": 4.99
    },
    {
        "id": 60,
        "title": "Grater Black",
        "description": "The Grater in Black is a handy kitchen tool for grating cheese, vegetables, and more. Its sleek design and sharp blades make food preparation efficient and easy.",
        "category_id": 6,
        "price": 10.99
    },
    {
        "id": 61,
        "title": "Hand Blender",
        "description": "The Hand Blender is a versatile kitchen appliance for blending, pureeing, and mixing. Its compact design and powerful motor make it a convenient tool for various recipes.",
        "category_id": 6,
        "price": 34.99
    },
    {
        "id": 62,
        "title": "Ice Cube Tray",
        "description": "The Ice Cube Tray is a practical accessory for making ice cubes in various shapes. Perfect for keeping your drinks cool and adding a fun element to your beverages.",
        "category_id": 6,
        "price": 5.99
    },
    {
        "id": 63,
        "title": "Kitchen Sieve",
        "description": "The Kitchen Sieve is a versatile tool for sifting and straining dry and wet ingredients. Its fine mesh design ensures smooth results in your cooking and baking.",
        "category_id": 6,
        "price": 7.99
    },
    {
        "id": 64,
        "title": "Knife",
        "description": "The Knife is an essential kitchen tool for chopping, slicing, and dicing. Its sharp blade and ergonomic handle make it a reliable choice for food preparation.",
        "category_id": 6,
        "price": 14.99
    },
    {
        "id": 65,
        "title": "Lunch Box",
        "description": "The Lunch Box is a convenient and portable container for packing and carrying your meals. With compartments for different foods, it's perfect for on-the-go dining.",
        "category_id": 6,
        "price": 12.99
    },
    {
        "id": 66,
        "title": "Microwave Oven",
        "description": "The Microwave Oven is a versatile kitchen appliance for quick and efficient cooking, reheating, and defrosting. Its compact size makes it suitable for various kitchen setups.",
        "category_id": 6,
        "price": 89.99
    },
    {
        "id": 67,
        "title": "Mug Tree Stand",
        "description": "The Mug Tree Stand is a stylish and space-saving solution for organizing your mugs. Keep your favorite mugs easily accessible and neatly displayed in your kitchen.",
        "category_id": 6,
        "price": 15.99
    },
    {
        "id": 68,
        "title": "Pan",
        "description": "The Pan is a versatile and essential cookware item for frying, sautéing, and cooking various dishes. Its non-stick coating ensures easy food release and cleanup.",
        "category_id": 6,
        "price": 24.99
    },
    {
        "id": 69,
        "title": "Plate",
        "description": "The Plate is a classic and essential dishware item for serving meals. Its durable and stylish design makes it suitable for everyday use or special occasions.",
        "category_id": 6,
        "price": 3.99
    },
    {
        "id": 70,
        "title": "Red Tongs",
        "description": "The Red Tongs are versatile kitchen tongs suitable for various cooking and serving tasks. Their vibrant color adds a pop of excitement to your kitchen utensils.",
        "category_id": 6,
        "price": 6.99
    },
    {
        "id": 71,
        "title": "Silver Pot With Glass Cap",
        "description": "The Silver Pot with Glass Cap is a stylish and functional cookware item for boiling, simmering, and preparing delicious meals. Its glass cap allows you to monitor cooking progress.",
        "category_id": 6,
        "price": 39.99
    },
    {
        "id": 72,
        "title": "Slotted Turner",
        "description": "The Slotted Turner is a kitchen utensil designed for flipping and turning food items. Its slotted design allows excess liquid to drain, making it ideal for frying and sautéing.",
        "category_id": 6,
        "price": 8.99
    },
    {
        "id": 73,
        "title": "Spice Rack",
        "description": "The Spice Rack is a convenient organizer for your spices and seasonings. Keep your kitchen essentials within reach and neatly arranged with this stylish spice rack.",
        "category_id": 6,
        "price": 19.99
    },
    {
        "id": 74,
        "title": "Spoon",
        "description": "The Spoon is a versatile kitchen utensil for stirring, serving, and tasting. Its ergonomic design and durable construction make it an essential tool for every kitchen.",
        "category_id": 6,
        "price": 4.99
    },
    {
        "id": 75,
        "title": "Tray",
        "description": "The Tray is a functional and decorative item for serving snacks, appetizers, or drinks. Its stylish design makes it a versatile accessory for entertaining guests.",
        "category_id": 6,
        "price": 16.99
    },
    {
        "id": 76,
        "title": "Wooden Rolling Pin",
        "description": "The Wooden Rolling Pin is a classic kitchen tool for rolling out dough for baking. Its smooth surface and sturdy handles make it easy to achieve uniform thickness.",
        "category_id": 6,
        "price": 11.99
    },
    {
        "id": 77,
        "title": "Yellow Peeler",
        "description": "The Yellow Peeler is a handy tool for peeling fruits and vegetables with ease. Its bright yellow color adds a cheerful touch to your kitchen gadgets.",
        "category_id": 6,
        "price": 5.99
    },
    {
        "id": 78,
        "title": "Apple MacBook Pro 14 Inch Space Grey",
        "description": "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
        "category_id": 7,
        "price": 1999.99
    },
    {
        "id": 79,
        "title": "Asus Zenbook Pro Dual Screen Laptop",
        "description": "The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.",
        "category_id": 7,
        "price": 1799.99
    },
    {
        "id": 80,
        "title": "Huawei Matebook X Pro",
        "description": "The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.",
        "category_id": 7,
        "price": 1399.99
    },
    {
        "id": 81,
        "title": "Lenovo Yoga 920",
        "description": "The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.",
        "category_id": 7,
        "price": 1099.99
    },
    {
        "id": 82,
        "title": "New DELL XPS 13 9300 Laptop",
        "description": "The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.",
        "category_id": 7,
        "price": 1499.99
    },
    {
        "id": 83,
        "title": "Blue & Black Check Shirt",
        "description": "The Blue & Black Check Shirt is a stylish and comfortable men's shirt featuring a classic check pattern. Made from high-quality fabric, it's suitable for both casual and semi-formal occasions.",
        "category_id": 8,
        "price": 29.99
    },
    {
        "id": 84,
        "title": "Gigabyte Aorus Men Tshirt",
        "description": "The Gigabyte Aorus Men Tshirt is a cool and casual shirt for gaming enthusiasts. With the Aorus logo and sleek design, it's perfect for expressing your gaming style.",
        "category_id": 8,
        "price": 24.99
    },
    {
        "id": 85,
        "title": "Man Plaid Shirt",
        "description": "The Man Plaid Shirt is a timeless and versatile men's shirt with a classic plaid pattern. Its comfortable fit and casual style make it a wardrobe essential for various occasions.",
        "category_id": 8,
        "price": 34.99
    },
    {
        "id": 86,
        "title": "Man Short Sleeve Shirt",
        "description": "The Man Short Sleeve Shirt is a breezy and stylish option for warm days. With a comfortable fit and short sleeves, it's perfect for a laid-back yet polished look.",
        "category_id": 8,
        "price": 19.99
    },
    {
        "id": 87,
        "title": "Men Check Shirt",
        "description": "The Men Check Shirt is a classic and versatile shirt featuring a stylish check pattern. Suitable for various occasions, it adds a smart and polished touch to your wardrobe.",
        "category_id": 8,
        "price": 27.99
    },
    {
        "id": 88,
        "title": "Nike Air Jordan 1 Red And Black",
        "description": "The Nike Air Jordan 1 in Red and Black is an iconic basketball sneaker known for its stylish design and high-performance features, making it a favorite among sneaker enthusiasts and athletes.",
        "category_id": 9,
        "price": 149.99
    },
    {
        "id": 89,
        "title": "Nike Baseball Cleats",
        "description": "Nike Baseball Cleats are designed for maximum traction and performance on the baseball field. They provide stability and support for players during games and practices.",
        "category_id": 9,
        "price": 79.99
    },
    {
        "id": 90,
        "title": "Puma Future Rider Trainers",
        "description": "The Puma Future Rider Trainers offer a blend of retro style and modern comfort. Perfect for casual wear, these trainers provide a fashionable and comfortable option for everyday use.",
        "category_id": 9,
        "price": 89.99
    },
    {
        "id": 91,
        "title": "Sports Sneakers Off White & Red",
        "description": "The Sports Sneakers in Off White and Red combine style and functionality, making them a fashionable choice for sports enthusiasts. The red and off-white color combination adds a bold and energetic touch.",
        "category_id": 9,
        "price": 119.99
    },
    {
        "id": 92,
        "title": "Sports Sneakers Off White Red",
        "description": "Another variant of the Sports Sneakers in Off White Red, featuring a unique design. These sneakers offer style and comfort for casual occasions.",
        "category_id": 9,
        "price": 109.99
    },
    {
        "id": 93,
        "title": "Brown Leather Belt Watch",
        "description": "The Brown Leather Belt Watch is a stylish timepiece with a classic design. Featuring a genuine leather strap and a sleek dial, it adds a touch of sophistication to your look.",
        "category_id": 10,
        "price": 89.99
    },
    {
        "id": 94,
        "title": "Longines Master Collection",
        "description": "The Longines Master Collection is an elegant and refined watch known for its precision and craftsmanship. With a timeless design, it's a symbol of luxury and sophistication.",
        "category_id": 10,
        "price": 1499.99
    },
    {
        "id": 95,
        "title": "Rolex Cellini Date Black Dial",
        "description": "The Rolex Cellini Date with Black Dial is a classic and prestigious watch. With a black dial and date complication, it exudes sophistication and is a symbol of Rolex's heritage.",
        "category_id": 10,
        "price": 8999.99
    },
    {
        "id": 96,
        "title": "Rolex Cellini Moonphase",
        "description": "The Rolex Cellini Moonphase is a masterpiece of horology, featuring a moon phase complication and exquisite design. It reflects Rolex's commitment to precision and elegance.",
        "category_id": 10,
        "price": 12999.99
    },
    {
        "id": 97,
        "title": "Rolex Datejust",
        "description": "The Rolex Datejust is an iconic and versatile timepiece with a date window. Known for its timeless design and reliability, it's a symbol of Rolex's watchmaking excellence.",
        "category_id": 10,
        "price": 10999.99
    },
    {
        "id": 98,
        "title": "Rolex Submariner Watch",
        "description": "The Rolex Submariner is a legendary dive watch with a rich history. Known for its durability and water resistance, it's a symbol of adventure and exploration.",
        "category_id": 10,
        "price": 13999.99
    },
    {
        "id": 99,
        "title": "Amazon Echo Plus",
        "description": "The Amazon Echo Plus is a smart speaker with built-in Alexa voice control. It features premium sound quality and serves as a hub for controlling smart home devices.",
        "category_id": 11,
        "price": 99.99
    },
    {
        "id": 100,
        "title": "Apple Airpods",
        "description": "The Apple Airpods offer a seamless wireless audio experience. With easy pairing, high-quality sound, and Siri integration, they are perfect for on-the-go listening.",
        "category_id": 11,
        "price": 129.99
    },
    {
        "id": 101,
        "title": "Apple AirPods Max Silver",
        "description": "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
        "category_id": 11,
        "price": 549.99
    },
    {
        "id": 102,
        "title": "Apple Airpower Wireless Charger",
        "description": "The Apple AirPower Wireless Charger provides a convenient way to charge your compatible Apple devices wirelessly. Simply place your devices on the charging mat for effortless charging.",
        "category_id": 11,
        "price": 79.99
    },
    {
        "id": 103,
        "title": "Apple HomePod Mini Cosmic Grey",
        "description": "The Apple HomePod Mini in Cosmic Grey is a compact smart speaker that delivers impressive audio and integrates seamlessly with the Apple ecosystem for a smart home experience.",
        "category_id": 11,
        "price": 99.99
    },
    {
        "id": 104,
        "title": "Apple iPhone Charger",
        "description": "The Apple iPhone Charger is a high-quality charger designed for fast and efficient charging of your iPhone. Ensure your device stays powered up and ready to go.",
        "category_id": 11,
        "price": 19.99
    },
    {
        "id": 105,
        "title": "Apple MagSafe Battery Pack",
        "description": "The Apple MagSafe Battery Pack is a portable and convenient way to add extra battery life to your MagSafe-compatible iPhone. Attach it magnetically for a secure connection.",
        "category_id": 11,
        "price": 99.99
    },
    {
        "id": 106,
        "title": "Apple Watch Series 4 Gold",
        "description": "The Apple Watch Series 4 in Gold is a stylish and advanced smartwatch with features like heart rate monitoring, fitness tracking, and a beautiful Retina display.",
        "category_id": 11,
        "price": 349.99
    },
    {
        "id": 107,
        "title": "Beats Flex Wireless Earphones",
        "description": "The Beats Flex Wireless Earphones offer a comfortable and versatile audio experience. With magnetic earbuds and up to 12 hours of battery life, they are ideal for everyday use.",
        "category_id": 11,
        "price": 49.99
    },
    {
        "id": 108,
        "title": "iPhone 12 Silicone Case with MagSafe Plum",
        "description": "The iPhone 12 Silicone Case with MagSafe in Plum is a stylish and protective case designed for the iPhone 12. It features MagSafe technology for easy attachment of accessories.",
        "category_id": 11,
        "price": 29.99
    },
    {
        "id": 109,
        "title": "Monopod",
        "description": "The Monopod is a versatile camera accessory for stable and adjustable shooting. Perfect for capturing selfies, group photos, and videos with ease.",
        "category_id": 11,
        "price": 19.99
    },
    {
        "id": 110,
        "title": "Selfie Lamp with iPhone",
        "description": "The Selfie Lamp with iPhone is a portable and adjustable LED light designed to enhance your selfies and video calls. Attach it to your iPhone for well-lit photos.",
        "category_id": 11,
        "price": 14.99
    },
    {
        "id": 111,
        "title": "Selfie Stick Monopod",
        "description": "The Selfie Stick Monopod is a extendable and foldable device for capturing the perfect selfie or group photo. Compatible with smartphones and cameras.",
        "category_id": 11,
        "price": 12.99
    },
    {
        "id": 112,
        "title": "TV Studio Camera Pedestal",
        "description": "The TV Studio Camera Pedestal is a professional-grade camera support system for smooth and precise camera movements in a studio setting. Ideal for broadcast and production.",
        "category_id": 11,
        "price": 499.99
    },
    {
        "id": 113,
        "title": "Generic Motorcycle",
        "description": "The Generic Motorcycle is a versatile and reliable bike suitable for various riding preferences. With a balanced design, it provides a comfortable and efficient riding experience.",
        "category_id": 12,
        "price": 3999.99
    },
    {
        "id": 114,
        "title": "Kawasaki Z800",
        "description": "The Kawasaki Z800 is a powerful and agile sportbike known for its striking design and performance. It's equipped with advanced features, making it a favorite among motorcycle enthusiasts.",
        "category_id": 12,
        "price": 8999.99
    },
    {
        "id": 115,
        "title": "MotoGP CI.H1",
        "description": "The MotoGP CI.H1 is a high-performance motorcycle inspired by MotoGP racing technology. It offers cutting-edge features and precision engineering for an exhilarating riding experience.",
        "category_id": 12,
        "price": 14999.99
    },
    {
        "id": 116,
        "title": "Scooter Motorcycle",
        "description": "The Scooter Motorcycle is a practical and fuel-efficient bike ideal for urban commuting. It features a step-through design and user-friendly controls for easy maneuverability.",
        "category_id": 12,
        "price": 2999.99
    },
    {
        "id": 117,
        "title": "Sportbike Motorcycle",
        "description": "The Sportbike Motorcycle is designed for speed and agility, with a sleek and aerodynamic profile. It's suitable for riders looking for a dynamic and thrilling riding experience.",
        "category_id": 12,
        "price": 7499.99
    },
    {
        "id": 118,
        "title": "Attitude Super Leaves Hand Soap",
        "description": "Attitude Super Leaves Hand Soap is a natural and nourishing hand soap enriched with the goodness of super leaves. It cleanses and moisturizes your hands, leaving them feeling fresh and soft.",
        "category_id": 13,
        "price": 8.99
    },
    {
        "id": 119,
        "title": "Olay Ultra Moisture Shea Butter Body Wash",
        "description": "Olay Ultra Moisture Shea Butter Body Wash is a luxurious body wash that hydrates and nourishes your skin with the moisturizing power of shea butter. Enjoy a rich lather and silky-smooth skin.",
        "category_id": 13,
        "price": 12.99
    },
    {
        "id": 120,
        "title": "Vaseline Men Body and Face Lotion",
        "description": "Vaseline Men Body and Face Lotion is a specially formulated lotion designed to provide long-lasting moisture to men's skin. It absorbs quickly and helps keep the skin hydrated and healthy.",
        "category_id": 13,
        "price": 9.99
    },
    {
        "id": 121,
        "title": "iPhone 5s",
        "description": "The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release. While it's an older model, it still provides a reliable user experience.",
        "category_id": 14,
        "price": 199.99
    },
    {
        "id": 122,
        "title": "iPhone 6",
        "description": "The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance. It introduced new features and design elements, making it a popular choice in its time.",
        "category_id": 14,
        "price": 299.99
    },
    {
        "id": 123,
        "title": "iPhone 13 Pro",
        "description": "The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system, high-performance chip, and stunning display. It offers advanced features for users who demand top-notch technology.",
        "category_id": 14,
        "price": 1099.99
    },
    {
        "id": 124,
        "title": "iPhone X",
        "description": "The iPhone X is a flagship smartphone featuring a bezel-less OLED display, facial recognition technology (Face ID), and impressive performance. It represents a milestone in iPhone design and innovation.",
        "category_id": 14,
        "price": 899.99
    },
    {
        "id": 125,
        "title": "Oppo A57",
        "description": "The Oppo A57 is a mid-range smartphone known for its sleek design and capable features. It offers a balance of performance and affordability, making it a popular choice.",
        "category_id": 14,
        "price": 249.99
    },
    {
        "id": 126,
        "title": "Oppo F19 Pro Plus",
        "description": "The Oppo F19 Pro Plus is a feature-rich smartphone with a focus on camera capabilities. It boasts advanced photography features and a powerful performance for a premium user experience.",
        "category_id": 14,
        "price": 399.99
    },
    {
        "id": 127,
        "title": "Oppo K1",
        "description": "The Oppo K1 series offers a range of smartphones with various features and specifications. Known for their stylish design and reliable performance, the Oppo K1 series caters to diverse user preferences.",
        "category_id": 14,
        "price": 299.99
    },
    {
        "id": 128,
        "title": "Realme C35",
        "description": "The Realme C35 is a budget-friendly smartphone with a focus on providing essential features for everyday use. It offers a reliable performance and user-friendly experience.",
        "category_id": 14,
        "price": 149.99
    },
    {
        "id": 129,
        "title": "Realme X",
        "description": "The Realme X is a mid-range smartphone known for its sleek design and impressive display. It offers a good balance of performance and camera capabilities for users seeking a quality device.",
        "category_id": 14,
        "price": 299.99
    },
    {
        "id": 130,
        "title": "Realme XT",
        "description": "The Realme XT is a feature-rich smartphone with a focus on camera technology. It comes equipped with advanced camera sensors, delivering high-quality photos and videos for photography enthusiasts.",
        "category_id": 14,
        "price": 349.99
    },
    {
        "id": 131,
        "title": "Samsung Galaxy S7",
        "description": "The Samsung Galaxy S7 is a flagship smartphone known for its sleek design and advanced features. It features a high-resolution display, powerful camera, and robust performance.",
        "category_id": 14,
        "price": 299.99
    },
    {
        "id": 132,
        "title": "Samsung Galaxy S8",
        "description": "The Samsung Galaxy S8 is a premium smartphone with an Infinity Display, offering a stunning visual experience. It boasts advanced camera capabilities and cutting-edge technology.",
        "category_id": 14,
        "price": 499.99
    },
    {
        "id": 133,
        "title": "Samsung Galaxy S10",
        "description": "The Samsung Galaxy S10 is a flagship device featuring a dynamic AMOLED display, versatile camera system, and powerful performance. It represents innovation and excellence in smartphone technology.",
        "category_id": 14,
        "price": 699.99
    },
    {
        "id": 134,
        "title": "Vivo S1",
        "description": "The Vivo S1 is a stylish and mid-range smartphone offering a blend of design and performance. It features a vibrant display, capable camera system, and reliable functionality.",
        "category_id": 14,
        "price": 249.99
    },
    {
        "id": 135,
        "title": "Vivo V9",
        "description": "The Vivo V9 is a smartphone known for its sleek design and emphasis on capturing high-quality selfies. It features a notch display, dual-camera setup, and a modern design.",
        "category_id": 14,
        "price": 299.99
    },
    {
        "id": 136,
        "title": "Vivo X21",
        "description": "The Vivo X21 is a premium smartphone with a focus on cutting-edge technology. It features an in-display fingerprint sensor, a high-resolution display, and advanced camera capabilities.",
        "category_id": 14,
        "price": 499.99
    },
    {
        "id": 137,
        "title": "American Football",
        "description": "The American Football is a classic ball used in American football games. It is designed for throwing and catching, making it an essential piece of equipment for the sport.",
        "category_id": 15,
        "price": 19.99
    },
    {
        "id": 138,
        "title": "Baseball Ball",
        "description": "The Baseball Ball is a standard baseball used in baseball games. It features a durable leather cover and is designed for pitching, hitting, and fielding in the game of baseball.",
        "category_id": 15,
        "price": 8.99
    },
    {
        "id": 139,
        "title": "Baseball Glove",
        "description": "The Baseball Glove is a protective glove worn by baseball players. It is designed to catch and field the baseball, providing players with comfort and control during the game.",
        "category_id": 15,
        "price": 24.99
    },
    {
        "id": 140,
        "title": "Basketball",
        "description": "The Basketball is a standard ball used in basketball games. It is designed for dribbling, shooting, and passing in the game of basketball, suitable for both indoor and outdoor play.",
        "category_id": 15,
        "price": 14.99
    },
    {
        "id": 141,
        "title": "Basketball Rim",
        "description": "The Basketball Rim is a sturdy hoop and net assembly mounted on a basketball backboard. It provides a target for shooting and scoring in the game of basketball.",
        "category_id": 15,
        "price": 39.99
    },
    {
        "id": 142,
        "title": "Cricket Ball",
        "description": "The Cricket Ball is a hard leather ball used in the sport of cricket. It is bowled and batted in the game, and its hardness and seam contribute to the dynamics of cricket play.",
        "category_id": 15,
        "price": 12.99
    },
    {
        "id": 143,
        "title": "Cricket Bat",
        "description": "The Cricket Bat is an essential piece of cricket equipment used by batsmen to hit the cricket ball. It is made of wood and comes in various sizes and designs.",
        "category_id": 15,
        "price": 29.99
    },
    {
        "id": 144,
        "title": "Cricket Helmet",
        "description": "The Cricket Helmet is a protective headgear worn by cricket players, especially batsmen and wicketkeepers. It provides protection against fast bowling and bouncers.",
        "category_id": 15,
        "price": 44.99
    },
    {
        "id": 145,
        "title": "Cricket Wicket",
        "description": "The Cricket Wicket is a set of three stumps and two bails, forming a wicket used in the sport of cricket. Batsmen aim to protect the wicket while scoring runs.",
        "category_id": 15,
        "price": 29.99
    },
    {
        "id": 146,
        "title": "Feather Shuttlecock",
        "description": "The Feather Shuttlecock is used in the sport of badminton. It features natural feathers and is designed for high-speed play, providing stability and accuracy during matches.",
        "category_id": 15,
        "price": 5.99
    },
    {
        "id": 147,
        "title": "Football",
        "description": "The Football, also known as a soccer ball, is the standard ball used in the sport of football (soccer). It is designed for kicking and passing in the game.",
        "category_id": 15,
        "price": 17.99
    },
    {
        "id": 148,
        "title": "Golf Ball",
        "description": "The Golf Ball is a small ball used in the sport of golf. It features dimples on its surface, providing aerodynamic lift and distance when struck by a golf club.",
        "category_id": 15,
        "price": 9.99
    },
    {
        "id": 149,
        "title": "Iron Golf",
        "description": "The Iron Golf is a type of golf club designed for various golf shots. It features a solid metal head and is used for approach shots, chipping, and other golfing techniques.",
        "category_id": 15,
        "price": 49.99
    },
    {
        "id": 150,
        "title": "Metal Baseball Bat",
        "description": "The Metal Baseball Bat is a durable and lightweight baseball bat made from metal alloys. It is commonly used in baseball games for hitting and batting practice.",
        "category_id": 15,
        "price": 29.99
    },
    {
        "id": 151,
        "title": "Tennis Ball",
        "description": "The Tennis Ball is a standard ball used in the sport of tennis. It is designed for bouncing and hitting with tennis rackets during matches or practice sessions.",
        "category_id": 15,
        "price": 6.99
    },
    {
        "id": 152,
        "title": "Tennis Racket",
        "description": "The Tennis Racket is an essential piece of equipment used in the sport of tennis. It features a frame with strings and a grip, allowing players to hit the tennis ball.",
        "category_id": 15,
        "price": 49.99
    },
    {
        "id": 153,
        "title": "Volleyball",
        "description": "The Volleyball is a standard ball used in the sport of volleyball. It is designed for passing, setting, and spiking over the net during volleyball matches.",
        "category_id": 15,
        "price": 11.99
    },
    {
        "id": 154,
        "title": "Black Sun Glasses",
        "description": "The Black Sun Glasses are a classic and stylish choice, featuring a sleek black frame and tinted lenses. They provide both UV protection and a fashionable look.",
        "category_id": 16,
        "price": 29.99
    },
    {
        "id": 155,
        "title": "Classic Sun Glasses",
        "description": "The Classic Sun Glasses offer a timeless design with a neutral frame and UV-protected lenses. These sunglasses are versatile and suitable for various occasions.",
        "category_id": 16,
        "price": 24.99
    },
    {
        "id": 156,
        "title": "Green and Black Glasses",
        "description": "The Green and Black Glasses feature a bold combination of green and black colors, adding a touch of vibrancy to your eyewear collection. They are both stylish and eye-catching.",
        "category_id": 16,
        "price": 34.99
    },
    {
        "id": 157,
        "title": "Party Glasses",
        "description": "The Party Glasses are designed to add flair to your party outfit. With unique shapes or colorful frames, they're perfect for adding a playful touch to your look during celebrations.",
        "category_id": 16,
        "price": 19.99
    },
    {
        "id": 158,
        "title": 16,
        "description": "The Sunglasses offer a classic and simple design with a focus on functionality. These sunglasses provide essential UV protection while maintaining a timeless look.",
        "category_id": 16,
        "price": 22.99
    },
    {
        "id": 159,
        "title": "iPad Mini 2021 Starlight",
        "description": "The iPad Mini 2021 in Starlight is a compact and powerful tablet from Apple. Featuring a stunning Retina display, powerful A-series chip, and a sleek design, it offers a premium tablet experience.",
        "category_id": 17,
        "price": 499.99
    },
    {
        "id": 160,
        "title": "Samsung Galaxy Tab S8 Plus Grey",
        "description": "The Samsung Galaxy Tab S8 Plus in Grey is a high-performance Android tablet by Samsung. With a large AMOLED display, powerful processor, and S Pen support, it's ideal for productivity and entertainment.",
        "category_id": 17,
        "price": 599.99
    },
    {
        "id": 161,
        "title": "Samsung Galaxy Tab White",
        "description": "The Samsung Galaxy Tab in White is a sleek and versatile Android tablet. With a vibrant display, long-lasting battery, and a range of features, it offers a great user experience for various tasks.",
        "category_id": 17,
        "price": 349.99
    },
    {
        "id": 162,
        "title": "Blue Frock",
        "description": "The Blue Frock is a charming and stylish dress for various occasions. With a vibrant blue color and a comfortable design, it adds a touch of elegance to your wardrobe.",
        "category_id": 18,
        "price": 29.99
    },
    {
        "id": 163,
        "title": "Girl Summer Dress",
        "description": "The Girl Summer Dress is a cute and breezy dress designed for warm weather. With playful patterns and lightweight fabric, it's perfect for keeping cool and stylish during the summer.",
        "category_id": 18,
        "price": 19.99
    },
    {
        "id": 164,
        "title": "Gray Dress",
        "description": "The Gray Dress is a versatile and chic option for various occasions. With a neutral gray color, it can be dressed up or down, making it a wardrobe staple for any fashion-forward individual.",
        "category_id": 18,
        "price": 34.99
    },
    {
        "id": 165,
        "title": "Short Frock",
        "description": "The Short Frock is a playful and trendy dress with a shorter length. Ideal for casual outings or special occasions, it combines style and comfort for a fashionable look.",
        "category_id": 18,
        "price": 24.99
    },
    {
        "id": 166,
        "title": "Tartan Dress",
        "description": "The Tartan Dress features a classic tartan pattern, bringing a timeless and sophisticated touch to your wardrobe. Perfect for fall and winter, it adds a hint of traditional charm.",
        "category_id": 18,
        "price": 39.99
    },
    {
        "id": 167,
        "title": "300 Touring",
        "description": "The 300 Touring is a stylish and comfortable sedan, known for its luxurious features and smooth performance.",
        "category_id": 19,
        "price": 28999.99
    },
    {
        "id": 168,
        "title": "Charger SXT RWD",
        "description": "The Charger SXT RWD is a powerful and sporty rear-wheel-drive sedan, offering a blend of performance and practicality.",
        "category_id": 19,
        "price": 32999.99
    },
    {
        "id": 169,
        "title": "Dodge Hornet GT Plus",
        "description": "The Dodge Hornet GT Plus is a compact and agile hatchback, perfect for urban driving with a touch of sportiness.",
        "category_id": 19,
        "price": 24999.99
    },
    {
        "id": 170,
        "title": "Durango SXT RWD",
        "description": "The Durango SXT RWD is a spacious and versatile SUV, known for its strong performance and family-friendly features.",
        "category_id": 19,
        "price": 36999.99
    },
    {
        "id": 171,
        "title": "Pacifica Touring",
        "description": "The Pacifica Touring is a stylish and well-equipped minivan, offering comfort and convenience for family journeys.",
        "category_id": 19,
        "price": 31999.99
    },
    {
        "id": 172,
        "title": "Blue Women's Handbag",
        "description": "The Blue Women's Handbag is a stylish and spacious accessory for everyday use. With a vibrant blue color and multiple compartments, it combines fashion and functionality.",
        "category_id": 20,
        "price": 49.99
    },
    {
        "id": 173,
        "title": "Heshe Women's Leather Bag",
        "description": "The Heshe Women's Leather Bag is a luxurious and high-quality leather bag for the sophisticated woman. With a timeless design and durable craftsmanship, it's a versatile accessory.",
        "category_id": 20,
        "price": 129.99
    },
    {
        "id": 174,
        "title": "Prada Women Bag",
        "description": "The Prada Women Bag is an iconic designer bag that exudes elegance and luxury. Crafted with precision and featuring the Prada logo, it's a statement piece for fashion enthusiasts.",
        "category_id": 20,
        "price": 599.99
    },
    {
        "id": 175,
        "title": "White Faux Leather Backpack",
        "description": "The White Faux Leather Backpack is a trendy and practical backpack for the modern woman. With a sleek white design and ample storage space, it's perfect for both casual and on-the-go styles.",
        "category_id": 20,
        "price": 39.99
    },
    {
        "id": 176,
        "title": "Women Handbag Black",
        "description": "The Women Handbag in Black is a classic and versatile accessory that complements various outfits. With a timeless black color and functional design, it's a must-have in every woman's wardrobe.",
        "category_id": 20,
        "price": 59.99
    },
    {
        "id": 177,
        "title": "Black Women's Gown",
        "description": "The Black Women's Gown is an elegant and timeless evening gown. With a sleek black design, it's perfect for formal events and special occasions, exuding sophistication and style.",
        "category_id": 21,
        "price": 129.99
    },
    {
        "id": 178,
        "title": "Corset Leather With Skirt",
        "description": "The Corset Leather With Skirt is a bold and edgy ensemble that combines a stylish corset with a matching skirt. Ideal for fashion-forward individuals, it makes a statement at any event.",
        "category_id": 21,
        "price": 89.99
    },
    {
        "id": 179,
        "title": "Corset With Black Skirt",
        "description": "The Corset With Black Skirt is a chic and versatile outfit that pairs a fashionable corset with a classic black skirt. It offers a trendy and coordinated look for various occasions.",
        "category_id": 21,
        "price": 79.99
    },
    {
        "id": 180,
        "title": "Dress Pea",
        "description": "The Dress Pea is a stylish and comfortable dress with a pea pattern. Perfect for casual outings, it adds a playful and fun element to your wardrobe, making it a great choice for day-to-day wear.",
        "category_id": 21,
        "price": 49.99
    },
    {
        "id": 181,
        "title": "Marni Red & Black Suit",
        "description": "The Marni Red & Black Suit is a sophisticated and fashion-forward suit ensemble. With a combination of red and black tones, it showcases a modern design for a bold and confident look.",
        "category_id": 21,
        "price": 179.99
    },
    {
        "id": 182,
        "title": "Green Crystal Earring",
        "description": "The Green Crystal Earring is a dazzling accessory that features a vibrant green crystal. With a classic design, it adds a touch of elegance to your ensemble, perfect for formal or special occasions.",
        "category_id": 22,
        "price": 29.99
    },
    {
        "id": 183,
        "title": "Green Oval Earring",
        "description": "The Green Oval Earring is a stylish and versatile accessory with a unique oval shape. Whether for casual or dressy occasions, its green hue and contemporary design make it a standout piece.",
        "category_id": 22,
        "price": 24.99
    },
    {
        "id": 184,
        "title": "Tropical Earring",
        "description": "The Tropical Earring is a fun and playful accessory inspired by tropical elements. Featuring vibrant colors and a lively design, it's perfect for adding a touch of summer to your look.",
        "category_id": 22,
        "price": 19.99
    },
    {
        "id": 185,
        "title": "Black & Brown Slipper",
        "description": "The Black & Brown Slipper is a comfortable and stylish choice for casual wear. Featuring a blend of black and brown colors, it adds a touch of sophistication to your relaxation.",
        "category_id": 23,
        "price": 19.99
    },
    {
        "id": 186,
        "title": "Calvin Klein Heel Shoes",
        "description": "Calvin Klein Heel Shoes are elegant and sophisticated, designed for formal occasions. With a classic design and high-quality materials, they complement your stylish ensemble.",
        "category_id": 23,
        "price": 79.99
    },
    {
        "id": 187,
        "title": "Golden Shoes Woman",
        "description": "The Golden Shoes for Women are a glamorous choice for special occasions. Featuring a golden hue and stylish design, they add a touch of luxury to your outfit.",
        "category_id": 23,
        "price": 49.99
    },
    {
        "id": 188,
        "title": "Pampi Shoes",
        "description": "Pampi Shoes offer a blend of comfort and style for everyday use. With a versatile design, they are suitable for various casual occasions, providing a trendy and relaxed look.",
        "category_id": 23,
        "price": 29.99
    },
    {
        "id": 189,
        "title": "Red Shoes",
        "description": "The Red Shoes make a bold statement with their vibrant red color. Whether for a party or a casual outing, these shoes add a pop of color and style to your wardrobe.",
        "category_id": 23,
        "price": 34.99
    },
    {
        "id": 190,
        "title": "IWC Ingenieur Automatic Steel",
        "description": "The IWC Ingenieur Automatic Steel watch is a durable and sophisticated timepiece. With a stainless steel case and automatic movement, it combines precision and style for watch enthusiasts.",
        "category_id": 24,
        "price": 4999.99
    },
    {
        "id": 191,
        "title": "Rolex Cellini Moonphase",
        "description": "The Rolex Cellini Moonphase watch is a masterpiece of horology. Featuring a moon phase complication, it showcases the craftsmanship and elegance that Rolex is renowned for.",
        "category_id": 24,
        "price": 15999.99
    },
    {
        "id": 192,
        "title": "Rolex Datejust Women",
        "description": "The Rolex Datejust Women's watch is an iconic timepiece designed for women. With a timeless design and a date complication, it offers both elegance and functionality.",
        "category_id": 24,
        "price": 10999.99
    },
    {
        "id": 193,
        "title": "Watch Gold for Women",
        "description": "The Gold Women's Watch is a stunning accessory that combines luxury and style. Featuring a gold-plated case and a chic design, it adds a touch of glamour to any outfit.",
        "category_id": 24,
        "price": 799.99
    },
    {
        "id": 194,
        "title": "Women's Wrist Watch",
        "description": "The Women's Wrist Watch is a versatile and fashionable timepiece for everyday wear. With a comfortable strap and a simple yet elegant design, it complements various styles.",
        "category_id": 24,
        "price": 129.99
    }
];

async function seedProducts() {
    await Product.bulkCreate(data);
}

export default seedProducts;