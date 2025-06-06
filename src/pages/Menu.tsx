import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Search, Clock, TrendingUp } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([25]);
  const [sortBy, setSortBy] = useState("popular");
  const {
    toggleFavorite,
    isFavorite
  } = useFavorites();
  const {
    addToCart
  } = useCart();

  const categories = [{
    id: "all",
    name: "🍽️ All Items",
    count: 72
  }, {
    id: "burgers",
    name: "🍔 Burgers",
    count: 15
  }, {
    id: "pizza",
    name: "🍕 Pizza",
    count: 10
  }, {
    id: "chicken",
    name: "🍗 Chicken",
    count: 12
  }, {
    id: "sides",
    name: "🍟 Sides",
    count: 10
  }, {
    id: "drinks",
    name: "🥤 Drinks",
    count: 8
  }, {
    id: "desserts",
    name: "🍰 Desserts",
    count: 12
  }];

  const menuItems = [{
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
    sizes: [{
      name: "Regular",
      price: 12.99
    }, {
      name: "Large",
      price: 15.99
    }],
    addOns: [{
      name: "Extra Cheese",
      price: 1.50
    }, {
      name: "Bacon",
      price: 2.50
    }, {
      name: "Avocado",
      price: 2.00
    }, {
      name: "Extra Patty",
      price: 4.00
    }]
  }, {
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
    sizes: [{
      name: "Regular",
      price: 8.99
    }, {
      name: "Large",
      price: 11.99
    }],
    addOns: [{
      name: "Extra Cheese",
      price: 1.50
    }, {
      name: "Bacon",
      price: 2.50
    }]
  }, {
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
    sizes: [{
      name: "Regular",
      price: 14.99
    }, {
      name: "Large",
      price: 17.99
    }],
    addOns: [{
      name: "Extra Bacon",
      price: 2.50
    }, {
      name: "Onion Rings",
      price: 2.00
    }]
  }, {
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
    sizes: [{
      name: "Small (10\")",
      price: 13.99
    }, {
      name: "Medium (12\")",
      price: 16.99
    }, {
      name: "Large (14\")",
      price: 19.99
    }],
    addOns: [{
      name: "Extra Cheese",
      price: 2.00
    }, {
      name: "Mushrooms",
      price: 1.50
    }, {
      name: "Bell Peppers",
      price: 1.50
    }, {
      name: "Olives",
      price: 1.50
    }]
  }, {
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
    sizes: [{
      name: "Small (10\")",
      price: 11.99
    }, {
      name: "Medium (12\")",
      price: 13.99
    }, {
      name: "Large (14\")",
      price: 16.99
    }],
    addOns: [{
      name: "Extra Basil",
      price: 1.00
    }, {
      name: "Cherry Tomatoes",
      price: 1.50
    }]
  }, {
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
    sizes: [{
      name: "2 Pieces",
      price: 13.99
    }, {
      name: "4 Pieces",
      price: 22.99
    }, {
      name: "6 Pieces",
      price: 31.99
    }],
    addOns: [{
      name: "Extra Crispy",
      price: 1.00
    }, {
      name: "Honey Mustard",
      price: 0.50
    }, {
      name: "BBQ Sauce",
      price: 0.50
    }]
  }, {
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
    sizes: [{
      name: "Regular",
      price: 7.99
    }, {
      name: "Large",
      price: 10.99
    }],
    addOns: [{
      name: "Extra Cheese",
      price: 1.50
    }, {
      name: "Jalapeños",
      price: 1.00
    }, {
      name: "Sour Cream",
      price: 1.00
    }]
  }, {
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
    sizes: [{
      name: "Regular",
      price: 4.99
    }, {
      name: "Large",
      price: 6.99
    }],
    addOns: [{
      name: "Extra Whipped Cream",
      price: 0.50
    }, {
      name: "Cherry on Top",
      price: 0.50
    }]
  }, {
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
    sizes: [{
      name: "6 Pack",
      price: 5.99
    }, {
      name: "12 Pack",
      price: 10.99
    }],
    addOns: [{
      name: "Chocolate Drizzle",
      price: 1.00
    }, {
      name: "Sprinkles",
      price: 0.50
    }]
  }, {
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
    sizes: [{
      name: "Single Slice",
      price: 6.99
    }, {
      name: "Double Slice",
      price: 12.99
    }],
    addOns: [{
      name: "Ice Cream Scoop",
      price: 2.00
    }, {
      name: "Whipped Cream",
      price: 1.00
    }]
  }, {
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
    sizes: [{
      name: "4 Pack",
      price: 6.99
    }, {
      name: "8 Pack",
      price: 12.99
    }],
    addOns: [{
      name: "Extra Cream",
      price: 1.50
    }, {
      name: "Extra Chocolate",
      price: 1.00
    }]
  }, {
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
    sizes: [{
      name: "Single Slice",
      price: 7.99
    }, {
      name: "Half Cake",
      price: 24.99
    }],
    addOns: [{
      name: "Extra Strawberries",
      price: 1.50
    }, {
      name: "Whipped Cream",
      price: 1.00
    }]
  }];

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesPrice = item.price <= priceRange[0];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return Number(b.isNew) - Number(a.isNew);
      default:
        return b.orders - a.orders;
    }
  });

  const handleAddToCart = (item: any) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      customizations: {
        size: "medium",
        addOns: [],
        spiceLevel: "medium",
        instructions: ""
      },
      image: item.image
    };
    addToCart(cartItem);
  };

  const specialOffers = [{
    id: 1,
    title: "Buy 2 Get 1 FREE",
    subtitle: "Any Burger",
    validUntil: "Tomorrow",
    discount: "33% OFF",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }, {
    id: 2,
    title: "Family Pizza Deal",
    subtitle: "Large Pizza + 4 Drinks",
    validUntil: "This Week",
    discount: "40% OFF",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }, {
    id: 3,
    title: "Sweet Treats Special",
    subtitle: "Any 2 Desserts",
    validUntil: "Today Only",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }];

  const bestSellers = [{
    id: 1,
    name: "FastBite Supreme Burger",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    orders: 2847
  }, {
    id: 4,
    name: "Loaded Cheese Fries",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    orders: 3241
  }, {
    id: 57,
    name: "Glazed Donuts",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    orders: 1234
  }];

  return <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      
      {/* Page Header - Remove extra margin/padding */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-6 sm:py-8 mt-14 md:mt-16 lg:mt-[72px]">
        <div className="container mx-auto text-center px-4 py-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-arial-black mb-4">
            Our Complete <span className="text-brand-yellow">Menu</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
            Discover our full range of mouth-watering fast food favorites
          </p>
          <Badge className="bg-brand-yellow text-brand-black font-bold text-xs sm:text-sm md:text-lg px-3 sm:px-4 md:px-6 py-1 sm:py-2">
            🔥 72+ Delicious Items Available
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Menu Items Section */}
        <div className="mb-12">
          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search delicious food..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 border-2 border-brand-yellow focus:border-brand-red" />
              </div>

              {/* Price Range - Single handle */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Max Price: ${priceRange[0]}
                </label>
                <Slider value={priceRange} onValueChange={setPriceRange} max={50} min={5} step={1} className="w-full" />
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest Items</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <div className="text-sm text-gray-600">
                  Showing <span className="font-bold text-brand-red">{sortedItems.length}</span> delicious items
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Categories Sidebar - Responsive */}
            <div className="lg:col-span-1">
              {/* Mobile: Horizontal scroll, Desktop: Vertical */}
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:sticky lg:top-24">
                <h3 className="text-lg md:text-xl font-montserrat-bold text-brand-black mb-4 md:mb-6">Categories</h3>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                  {categories.map(category => <Button key={category.id} variant={activeCategory === category.id ? "default" : "outline"} className={`whitespace-nowrap flex-shrink-0 lg:w-full justify-between font-medium text-sm md:text-base ${activeCategory === category.id ? "bg-brand-red text-white" : "text-brand-black border-gray-200 hover:border-brand-red hover:text-brand-red"}`} onClick={() => setActiveCategory(category.id)}>
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs ml-2">
                        {category.count}
                      </Badge>
                    </Button>)}
                </div>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {sortedItems.map(item => <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative">
                      <img src={item.image} alt={item.name} className="w-full h-40 md:h-48 object-cover" />
                      <div className="absolute top-3 left-3 space-y-2">
                        {item.isBestSeller && <Badge className="bg-brand-red text-white font-bold text-xs">
                            🔥 Best Seller
                          </Badge>}
                        {item.isNew && <Badge className="bg-brand-yellow text-brand-black font-bold text-xs">
                            ✨ New!
                          </Badge>}
                      </div>
                      <Button variant="outline" size="sm" className={`absolute top-3 right-3 p-2 ${isFavorite(item.id) ? "bg-brand-red text-white border-brand-red" : "bg-white/90 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"}`} onClick={() => toggleFavorite(item)}>
                        <Heart className={`w-3 h-3 md:w-4 md:h-4 ${isFavorite(item.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base md:text-lg font-montserrat-bold text-brand-black">{item.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 md:w-4 md:h-4 text-brand-yellow fill-current" />
                          <span className="text-xs md:text-sm font-bold ml-1 py-[58px]">{item.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{item.description}</p>
                      
                      <div className="text-xs text-gray-500 mb-3 md:mb-4">
                        {item.orders.toLocaleString()} orders this month
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg md:text-2xl font-arial-black text-brand-red">${item.price}</span>
                        <div className="space-x-2">
                          <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange text-xs md:text-sm px-2 md:px-4" onClick={() => handleAddToCart(item)}>
                            <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers Section - Mobile Optimized Grid */}
        <div className="mb-12" id="offers">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-arial-black text-brand-black mb-4">
              🔥 Special <span className="text-brand-red">Offers</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Limited time deals you can't miss!</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {specialOffers.map(offer => <Card key={offer.id} className="bg-gradient-to-br from-brand-red to-brand-orange text-white overflow-hidden transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={offer.image} alt={offer.title} className="w-full h-24 md:h-32 object-cover opacity-30" />
                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center">
                      <Badge className="bg-brand-yellow text-brand-black font-bold w-fit mb-2 text-xs">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {offer.validUntil}
                      </Badge>
                      <h3 className="text-lg md:text-xl font-montserrat-bold mb-1">{offer.title}</h3>
                      <p className="text-xs md:text-sm mb-2">{offer.subtitle}</p>
                      <div className="text-xl md:text-2xl font-arial-black text-brand-yellow">{offer.discount}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Mobile Responsive CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-full" onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}>
              🛒 Order These Specials Now!
            </Button>
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-arial-black text-brand-black mb-4">
              ⭐ Best <span className="text-brand-red">Sellers</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Our customers' absolute favorites!</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {bestSellers.map((item, index) => <Card key={item.id} className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-32 md:h-40 object-cover" />
                    <Badge className="absolute top-3 left-3 bg-brand-yellow text-brand-black font-bold text-xs">
                      #{index + 1} Best Seller
                    </Badge>
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-montserrat-bold text-brand-black mb-2 text-sm md:text-base">{item.name}</h3>
                    <div className="flex items-center text-xs md:text-sm text-gray-600 mb-3">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1 text-brand-red" />
                      {item.orders.toLocaleString()} orders
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg md:text-xl font-arial-black text-brand-red">${item.price}</span>
                      <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange text-xs md:text-sm px-3 md:px-4" onClick={() => handleAddToCart(bestSellers.find(bs => bs.id === item.id))}>
                        Quick Order
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Order Now CTA - Mobile Responsive */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-brand-red to-brand-orange text-white py-6 sm:py-8 md:py-12 px-4 md:px-6 rounded-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat-bold mb-4">
            Ready to Order? 🍔
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">
            Get your delicious food delivered in just 30 minutes!
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold text-sm sm:text-lg md:text-xl px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}>
            🛒 Proceed to Checkout
          </Button>
        </div>
      </div>

      <Footer />
    </div>;
};

export default Menu;
