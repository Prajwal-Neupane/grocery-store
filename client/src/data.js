const products = [
  {
    id: 1,
    name: "Apple",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Fresh and juicy apples, picked at their peak for a perfect balance of sweetness and tartness. Great for snacking, baking, or adding to salads.",
  },
  {
    id: 2,
    name: "Banana",
    image:
      "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Ripe bananas, rich in potassium and perfect for a quick energy boost. Enjoy them on their own, in smoothies, or as a natural sweetener in your recipes.",
  },
  {
    id: 3,
    name: "Orange",
    image:
      "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlfGVufDB8fDB8fHww",
    description:
      "Sweet and tangy oranges, packed with vitamin C. Perfect for juicing, snacking, or adding a citrusy twist to your favorite dishes.",
  },
  {
    id: 4,
    name: "Strawberry",
    image:
      "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyeXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Delicious strawberries, bursting with flavor and antioxidants. Enjoy them fresh, in desserts, or as a colorful addition to your breakfast.",
  },
  {
    id: 5,
    name: "Grapes",
    image:
      "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGVzfGVufDB8fDB8fHww",
    description:
      "Sweet and seedless grapes, perfect for snacking or adding to cheese platters. A refreshing treat that is both healthy and satisfying.",
  },
  {
    id: 6,
    name: "Milk",
    image:
      "https://images.unsplash.com/photo-1600788907416-456578634209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWlsa3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Fresh, high-quality milk, a staple for any household. Perfect for drinking, cooking, baking, or adding to your morning coffee and cereals.",
  },
  {
    id: 7,
    name: "Eggs",
    image:
      "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Farm-fresh eggs, rich in protein and essential nutrients. Ideal for breakfast, baking, or adding to your favorite recipes.",
  },
  {
    id: 8,
    name: "Butter",
    image:
      "https://images.unsplash.com/photo-1589985269102-ff38adf6f00d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnV0dGVyfGVufDB8fDB8fHww",
    description:
      "Creamy and rich butter, perfect for spreading, baking, and cooking. Adds a delicious flavor to any dish.",
  },
  {
    id: 9,
    name: "Cheese",
    image:
      "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlfGVufDB8fDB8fHww",
    description:
      "A variety of cheeses, from sharp cheddar to creamy brie. Perfect for snacking, cooking, or creating a gourmet cheese board.",
  },
  {
    id: 10,
    name: "Yogurt",
    image:
      "https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9ndXJ0fGVufDB8fDB8fHww",
    description:
      "Creamy yogurt, available in a variety of flavors. Perfect for breakfast, snacks, or as a base for smoothies and sauces.",
  },
  {
    id: 11,
    name: "Chicken Breast",
    image:
      "https://images.unsplash.com/photo-1627858034922-72a657d6b3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Lean and tender chicken breasts, perfect for grilling, baking, or adding to your favorite dishes. A healthy source of protein.",
  },
  {
    id: 12,
    name: "Salmon Fillet",
    image:
      "https://images.unsplash.com/photo-1559058789-672da06263d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsbW9uJTIwZmlsbGV0fGVufDB8fDB8fHww",
    description:
      "Fresh salmon fillets, rich in omega-3 fatty acids. Perfect for grilling, baking, or adding to salads and pasta dishes.",
  },
  {
    id: 13,
    name: "Ground Beef",
    image:
      "https://images.unsplash.com/photo-1448907503123-67254d59ca4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdW5kJTIwYmVlZnxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Lean ground beef, ideal for making burgers, meatballs, or adding to your favorite recipes. A versatile and flavorful protein source.",
  },
  {
    id: 14,
    name: "Pork Chops",
    image:
      "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yayUyMGNob3BzfGVufDB8fDB8fHww",
    description:
      "Juicy pork chops, perfect for grilling or baking. A delicious and satisfying main dish for any meal.",
  },
  {
    id: 15,
    name: "Bacon",
    image:
      "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFjb258ZW58MHx8MHx8fDA%3D",
    description:
      "Crispy bacon, perfect for breakfast or adding a savory crunch to your favorite dishes. Made from high-quality pork.",
  },
  {
    id: 16,
    name: "Broccoli",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D",
    description:
      "Fresh broccoli, full of vitamins and minerals. Great for steaming, roasting, or adding to stir-fries and casseroles.",
  },
  {
    id: 17,
    name: "Carrots",
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Crunchy and sweet carrots, perfect for snacking, cooking, or adding to salads and soups. Packed with beta-carotene.",
  },
  {
    id: 18,
    name: "Spinach",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Fresh spinach, rich in iron and vitamins. Ideal for salads, smoothies, or sautéing as a healthy side dish.",
  },
  {
    id: 19,
    name: "Tomatoes",
    image:
      "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "Juicy tomatoes, perfect for salads, sandwiches, or making sauces. A versatile ingredient for a variety of dishes.",
  },
  {
    id: 20,
    name: "Cucumbers",
    image:
      "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D",
    description:
      "Crisp cucumbers, great for snacking, salads, or adding to water for a refreshing drink. Low in calories and hydrating.",
  },
  {
    id: 21,
    name: "Potatoes",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90YXRvZXN8ZW58MHx8MHx8fDA%3D",
    description:
      "Versatile potatoes, perfect for baking, mashing, or frying. A staple ingredient for countless recipes.",
  },
  {
    id: 22,
    name: "Onions",
    image:
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25pb25zfGVufDB8fDB8fHww",
    description:
      "Flavorful onions, essential for cooking and adding depth to your dishes. Great for sautéing, roasting, or using in soups and stews.",
  },
  {
    id: 23,
    name: "Garlic",
    image:
      "https://images.unsplash.com/photo-1625229466998-42ee9c597290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FybGljfGVufDB8fDB8fHww",
    description:
      "Aromatic garlic, perfect for adding a robust flavor to your recipes. Use fresh or roasted to enhance the taste of your dishes.",
  },
  {
    id: 24,
    name: "Bell Peppers",
    image:
      "https://images.unsplash.com/photo-1567539549213-cc1697632146?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsbCUyMHBlcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Colorful bell peppers, great for salads, stir-fries, or roasting. Packed with vitamins and antioxidants.",
  },
];

export default products;
