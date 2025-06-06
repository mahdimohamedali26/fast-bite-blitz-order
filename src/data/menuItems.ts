
export const menuItems = [
  {
    id: 1,
    name: "FastBite Supreme Burger",
    category: "burgers",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    orders: 2847,
    isBestSeller: true,
    isNew: false,
    description: "Our signature double beef patty with special FastBite sauce, fresh lettuce, tomatoes, onions, and melted cheese on a toasted brioche bun.",
    ingredients: ["Double beef patty", "Special sauce", "Fresh lettuce", "Tomatoes", "Onions", "Cheese", "Brioche bun"],
    allergens: ["Gluten", "Dairy"],
    nutrition: {
      calories: 650,
      protein: 35,
      carbs: 45,
      fat: 38
    },
    sizes: [
      {
        name: "Regular",
        price: 12.99
      },
      {
        name: "Large",
        price: 15.99
      }
    ],
    addOns: [
      {
        name: "Extra Cheese",
        price: 1.50
      },
      {
        name: "Bacon",
        price: 2.50
      },
      {
        name: "Avocado",
        price: 2.00
      },
      {
        name: "Extra Patty",
        price: 4.00
      }
    ]
  },
  {
    id: 51,
    name: "Classic Cheeseburger",
    category: "burgers",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    orders: 2156,
    isBestSeller: false,
    isNew: false,
    description: "Classic beef patty with American cheese, lettuce, tomato, onion, pickles, ketchup, and mustard.",
    ingredients: ["Beef patty", "American cheese", "Lettuce", "Tomato", "Onion", "Pickles"],
    allergens: ["Gluten", "Dairy"],
    nutrition: {
      calories: 520,
      protein: 28,
      carbs: 35,
      fat: 28
    },
    sizes: [
      {
        name: "Regular",
        price: 8.99
      },
      {
        name: "Large",
        price: 11.99
      }
    ],
    addOns: [
      {
        name: "Extra Cheese",
        price: 1.50
      },
      {
        name: "Bacon",
        price: 2.50
      }
    ]
  },
  {
    id: 52,
    name: "BBQ Bacon Burger",
    category: "burgers",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    orders: 1923,
    isBestSeller: true,
    isNew: false,
    description: "Juicy beef patty with smoky BBQ sauce, crispy bacon, onion rings, and cheddar cheese.",
    ingredients: ["Beef patty", "BBQ sauce", "Bacon", "Onion rings", "Cheddar cheese"],
    allergens: ["Gluten", "Dairy"],
    nutrition: {
      calories: 720,
      protein: 38,
      carbs: 42,
      fat: 45
    },
    sizes: [
      {
        name: "Regular",
        price: 14.99
      },
      {
        name: "Large",
        price: 17.99
      }
    ],
    addOns: [
      {
        name: "Extra Bacon",
        price: 2.50
      },
      {
        name: "Onion Rings",
        price: 2.00
      }
    ]
  },
  {
    id: 2,
    name: "Pepperoni Supreme Pizza",
    category: "pizza",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    orders: 2156,
    isBestSeller: true,
    isNew: false,
    description: "Hand-tossed pizza with premium pepperoni, mozzarella cheese, and our signature tomato sauce.",
    ingredients: ["Hand-tossed dough", "Tomato sauce", "Mozzarella", "Premium pepperoni"],
    allergens: ["Gluten", "Dairy"],
    nutrition: {
      calories: 320,
      protein: 16,
      carbs: 35,
      fat: 14
    },
    sizes: [
      {
        name: "Small (10\")",
        price: 13.99
      },
      {
        name: "Medium (12\")",
        price: 16.99
      },
      {
        name: "Large (14\")",
        price: 19.99
      }
    ],
    addOns: [
      {
        name: "Extra Cheese",
        price: 2.00
      },
      {
        name: "Mushrooms",
        price: 1.50
      },
      {
        name: "Bell Peppers",
        price: 1.50
      },
      {
        name: "Olives",
        price: 1.50
      }
    ]
  },
  {
    id: 53,
    name: "Margherita Classic",
    category: "pizza",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    orders: 1745,
    isBestSeller: false,
    isNew: false,
    description: "Traditional Italian pizza with fresh mozzarella, basil, and tomato sauce.",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    allergens: ["Gluten", "Dairy"],
    nutrition: {
      calories: 280,
      protein: 14,
      carbs: 32,
      fat: 12
    },
    sizes: [
      {
        name: "Small (10\")",
        price: 11.99
      },
      {
        name: "Medium (12\")",
        price: 13.99
      },
      {
        name: "Large (14\")",
        price: 16.99
      }
    ],
    addOns: [
      {
        name: "Extra Basil",
        price: 1.00
      },
      {
        name: "Cherry Tomatoes",
        price: 1.50
      }
    ]
  },
  {
    id: 3,
    name: "Crispy Chicken Deluxe",
    category: "chicken",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    orders: 1923,
    isBestSeller: false,
    isNew: true,
    description: "Perfectly seasoned crispy chicken breast with our secret blend of 11 herbs and spices.",
    ingredients: ["Chicken breast", "Secret seasoning", "Crispy coating"],
    allergens: ["Gluten"],
    nutrition: {
      calories: 480,
      protein: 42,
      carbs: 24,
      fat: 26
    },
    sizes: [
      {
        name: "2 Pieces",
        price: 13.99
      },
      {
        name: "4 Pieces",
        price: 22.99
      },
      {
        name: "6 Pieces",
        price: 31.99
      }
    ],
    addOns: [
      {
        name: "Extra Crispy",
        price: 1.00
      },
      {
        name: "Honey Mustard",
        price: 0.50
      },
      {
        name: "BBQ Sauce",
        price: 0.50
      }
    ]
  },
  {
    id: 4,
    name: "Loaded Cheese Fries",
    category: "sides",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    orders: 3241,
    isBestSeller: true,
    isNew: false,
    description: "Golden crispy fries topped with melted cheese, bacon bits, and green onions.",
    ingredients: ["Crispy fries", "Cheese sauce", "Bacon bits", "Green onions"],
    allergens: ["Dairy"],
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 52,
      fat: 18
    },
    sizes: [
      {
        name: "Regular",
        price: 7.99
      },
      {
        name: "Large",
        price: 10.99
      }
    ],
    addOns: [
      {
        name: "Extra Cheese",
        price: 1.50
      },
      {
        name: "Jalapeños",
        price: 1.00
      },
      {
        name: "Sour Cream",
        price: 1.00
      }
    ]
  },
  {
    id: 5,
    name: "Strawberry Milkshake",
    category: "drinks",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    orders: 1847,
    isBestSeller: false,
    isNew: false,
    description: "Creamy vanilla ice cream blended with fresh strawberries and topped with whipped cream.",
    ingredients: ["Vanilla ice cream", "Fresh strawberries", "Milk", "Whipped cream"],
    allergens: ["Dairy"],
    nutrition: {
      calories: 380,
      protein: 8,
      carbs: 58,
      fat: 14
    },
    sizes: [
      {
        name: "Regular",
        price: 4.99
      },
      {
        name: "Large",
        price: 6.99
      }
    ],
    addOns: [
      {
        name: "Extra Whipped Cream",
        price: 0.50
      },
      {
        name: "Cherry on Top",
        price: 0.50
      }
    ]
  },
  {
    id: 57,
    name: "Glazed Donuts",
    category: "desserts",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    orders: 1234,
    isBestSeller: true,
    isNew: false,
    description: "Fresh glazed donuts with sweet glaze coating (pack of 6).",
    ingredients: ["Donuts", "Sweet glaze"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    nutrition: {
      calories: 280,
      protein: 4,
      carbs: 45,
      fat: 12
    },
    sizes: [
      {
        name: "6 Pack",
        price: 5.99
      },
      {
        name: "12 Pack",
        price: 10.99
      }
    ],
    addOns: [
      {
        name: "Chocolate Drizzle",
        price: 1.00
      },
      {
        name: "Sprinkles",
        price: 0.50
      }
    ]
  },
  {
    id: 58,
    name: "Chocolate Cake Slice",
    category: "desserts",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    orders: 987,
    isBestSeller: true,
    isNew: false,
    description: "Rich chocolate cake with chocolate frosting and chocolate shavings.",
    ingredients: ["Chocolate cake", "Chocolate frosting", "Chocolate shavings"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    nutrition: {
      calories: 450,
      protein: 6,
      carbs: 65,
      fat: 20
    },
    sizes: [
      {
        name: "Single Slice",
        price: 6.99
      },
      {
        name: "Double Slice",
        price: 12.99
      }
    ],
    addOns: [
      {
        name: "Ice Cream Scoop",
        price: 2.00
      },
      {
        name: "Whipped Cream",
        price: 1.00
      }
    ]
  },
  {
    id: 59,
    name: "Boston Cream Donuts",
    category: "desserts",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    orders: 876,
    isBestSeller: false,
    isNew: true,
    description: "Cream-filled donuts with chocolate glaze (pack of 4).",
    ingredients: ["Donuts", "Cream filling", "Chocolate glaze"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    nutrition: {
      calories: 320,
      protein: 5,
      carbs: 48,
      fat: 15
    },
    sizes: [
      {
        name: "4 Pack",
        price: 6.99
      },
      {
        name: "8 Pack",
        price: 12.99
      }
    ],
    addOns: [
      {
        name: "Extra Cream",
        price: 1.50
      },
      {
        name: "Extra Chocolate",
        price: 1.00
      }
    ]
  },
  {
    id: 60,
    name: "Strawberry Cheesecake",
    category: "desserts",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    orders: 765,
    isBestSeller: true,
    isNew: false,
    description: "Creamy cheesecake topped with fresh strawberries and graham cracker crust.",
    ingredients: ["Cheesecake", "Fresh strawberries", "Graham cracker crust"],
    allergens: ["Gluten", "Dairy", "Eggs"],
    nutrition: {
      calories: 380,
      protein: 7,
      carbs: 42,
      fat: 22
    },
    sizes: [
      {
        name: "Single Slice",
        price: 7.99
      },
      {
        name: "Half Cake",
        price: 24.99
      }
    ],
    addOns: [
      {
        name: "Extra Strawberries",
        price: 1.50
      },
      {
        name: "Whipped Cream",
        price: 1.00
      }
    ]
  }
];
