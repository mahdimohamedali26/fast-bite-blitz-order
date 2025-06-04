import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, ShoppingCart, Star, Search, Plus, Minus, Clock, TrendingUp } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([25]);
  const [sortBy, setSortBy] = useState("popular");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [customizations, setCustomizations] = useState({
    size: "medium",
    addOns: [] as any[],
    spiceLevel: "medium",
    instructions: ""
  });

  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const categories = [
    { id: "all", name: "🍽️ All Items", count: 45 },
    { id: "burgers", name: "🍔 Burgers", count: 12 },
    { id: "pizza", name: "🍕 Pizza", count: 8 },
    { id: "chicken", name: "🍗 Chicken", count: 10 },
    { id: "sides", name: "🍟 Sides", count: 8 },
    { id: "drinks", name: "🥤 Drinks", count: 7 }
  ];

  const menuItems = [
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
      nutrition: { calories: 650, protein: 35, carbs: 45, fat: 38 },
      sizes: [
        { name: "Regular", price: 12.99 },
        { name: "Large", price: 15.99 }
      ],
      addOns: [
        { name: "Extra Cheese", price: 1.50 },
        { name: "Bacon", price: 2.50 },
        { name: "Avocado", price: 2.00 },
        { name: "Extra Patty", price: 4.00 }
      ]
    },
    {
      id: 2,
      name: "Pepperoni Supreme Pizza",
      category: "pizza",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      orders: 2156,
      isBestSeller: true,
      isNew: false,
      description: "Hand-tossed pizza with premium pepperoni, mozzarella cheese, and our signature tomato sauce.",
      ingredients: ["Hand-tossed dough", "Tomato sauce", "Mozzarella", "Premium pepperoni"],
      allergens: ["Gluten", "Dairy"],
      nutrition: { calories: 320, protein: 16, carbs: 35, fat: 14 },
      sizes: [
        { name: "Small (10\")", price: 13.99 },
        { name: "Medium (12\")", price: 16.99 },
        { name: "Large (14\")", price: 19.99 }
      ],
      addOns: [
        { name: "Extra Cheese", price: 2.00 },
        { name: "Mushrooms", price: 1.50 },
        { name: "Bell Peppers", price: 1.50 },
        { name: "Olives", price: 1.50 }
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
      nutrition: { calories: 480, protein: 42, carbs: 24, fat: 26 },
      sizes: [
        { name: "2 Pieces", price: 13.99 },
        { name: "4 Pieces", price: 22.99 },
        { name: "6 Pieces", price: 31.99 }
      ],
      addOns: [
        { name: "Extra Crispy", price: 1.00 },
        { name: "Honey Mustard", price: 0.50 },
        { name: "BBQ Sauce", price: 0.50 }
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
      nutrition: { calories: 420, protein: 12, carbs: 52, fat: 18 },
      sizes: [
        { name: "Regular", price: 7.99 },
        { name: "Large", price: 10.99 }
      ],
      addOns: [
        { name: "Extra Cheese", price: 1.50 },
        { name: "Jalapeños", price: 1.00 },
        { name: "Sour Cream", price: 1.00 }
      ]
    },
    {
      id: 5,
      name: "Strawberry Milkshake",
      category: "drinks",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1541544181051-e46607aa95c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      orders: 1847,
      isBestSeller: false,
      isNew: false,
      description: "Creamy vanilla ice cream blended with fresh strawberries and topped with whipped cream.",
      ingredients: ["Vanilla ice cream", "Fresh strawberries", "Milk", "Whipped cream"],
      allergens: ["Dairy"],
      nutrition: { calories: 380, protein: 8, carbs: 58, fat: 14 },
      sizes: [
        { name: "Regular", price: 4.99 },
        { name: "Large", price: 6.99 }
      ],
      addOns: [
        { name: "Extra Whipped Cream", price: 0.50 },
        { name: "Cherry on Top", price: 0.50 }
      ]
    }
  ];

  const specialOffers = [
    {
      id: 1,
      title: "Buy 2 Get 1 FREE",
      subtitle: "Any Burger",
      validUntil: "Tomorrow",
      discount: "33% OFF",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Family Pizza Deal",
      subtitle: "Large Pizza + 4 Drinks",
      validUntil: "This Week",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Student Special",
      subtitle: "Burger + Fries + Drink",
      validUntil: "Today Only",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const bestSellers = [
    {
      id: 1,
      name: "FastBite Supreme Burger",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      orders: 2847
    },
    {
      id: 2,
      name: "Loaded Cheese Fries",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      orders: 3241
    },
    {
      id: 3,
      name: "Pepperoni Supreme Pizza",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      orders: 2156
    }
  ];

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

  const handleAddToCart = (item: any, customizations?: any, quantity?: number) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: quantity || 1,
      customizations: customizations || {
        size: "medium",
        addOns: [],
        spiceLevel: "medium",
        instructions: ""
      },
      image: item.image
    };
    addToCart(cartItem);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-arial-black mb-4">
            Our Complete <span className="text-brand-yellow">Menu</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            Discover our full range of mouth-watering fast food favorites
          </p>
          <Badge className="bg-brand-yellow text-brand-black font-bold text-sm md:text-lg px-4 md:px-6 py-2">
            🔥 45+ Delicious Items Available
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
                <Input
                  placeholder="Search delicious food..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-2 border-brand-yellow focus:border-brand-red"
                />
              </div>

              {/* Price Range - Single handle */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Max Price: ${priceRange[0]}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
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
                  Showing <span className="font-bold text-brand-red">{menuItems.length}</span> delicious items
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 sticky top-24">
                <h3 className="text-lg md:text-xl font-montserrat-bold text-brand-black mb-4 md:mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      className={`w-full justify-between font-medium text-sm md:text-base ${
                        activeCategory === category.id
                          ? "bg-brand-red text-white"
                          : "text-brand-black border-gray-200 hover:border-brand-red hover:text-brand-red"
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <span>{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {menuItems.map((item) => (
                  <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-40 md:h-48 object-cover"
                      />
                      <div className="absolute top-3 left-3 space-y-2">
                        {item.isBestSeller && (
                          <Badge className="bg-brand-red text-white font-bold text-xs">
                            🔥 Best Seller
                          </Badge>
                        )}
                        {item.isNew && (
                          <Badge className="bg-brand-yellow text-brand-black font-bold text-xs">
                            ✨ New!
                          </Badge>
                        )}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className={`absolute top-3 right-3 p-2 ${
                          isFavorite(item.id) 
                            ? "bg-brand-red text-white border-brand-red" 
                            : "bg-white/90 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
                        }`}
                        onClick={() => toggleFavorite(item)}
                      >
                        <Heart className={`w-3 h-3 md:w-4 md:h-4 ${isFavorite(item.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base md:text-lg font-montserrat-bold text-brand-black">{item.name}</h3>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 md:w-4 md:h-4 text-brand-yellow fill-current" />
                          <span className="text-xs md:text-sm font-bold ml-1">{item.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{item.description}</p>
                      
                      <div className="text-xs text-gray-500 mb-3 md:mb-4">
                        {item.orders.toLocaleString()} orders this month
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg md:text-2xl font-arial-black text-brand-red">${item.price}</span>
                        <div className="space-x-2">
                          <Button 
                            className="bg-brand-yellow text-brand-black hover:bg-brand-orange text-xs md:text-sm px-2 md:px-4"
                            onClick={() => handleAddToCart(item)}
                          >
                            <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-arial-black text-brand-black mb-4">
              🔥 Special <span className="text-brand-red">Offers</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Limited time deals you can't miss!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {specialOffers.map((offer) => (
              <Card key={offer.id} className="bg-gradient-to-br from-brand-red to-brand-orange text-white overflow-hidden transform hover:scale-105 transition-all duration-300">
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
              </Card>
            ))}
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-arial-black text-brand-black mb-4">
              ⭐ Best <span className="text-brand-red">Sellers</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Our customers' absolute favorites!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {bestSellers.map((item, index) => (
              <Card key={item.id} className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
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
                      <Button 
                        className="bg-brand-yellow text-brand-black hover:bg-brand-orange text-xs md:text-sm px-3 md:px-4"
                        onClick={() => handleAddToCart(bestSellers.find(bs => bs.id === item.id))}
                      >
                        Quick Order
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Order Now CTA */}
        <div className="text-center mt-12 md:mt-16 bg-gradient-to-r from-brand-red to-brand-orange text-white py-8 md:py-12 px-4 md:px-6 rounded-xl">
          <h3 className="text-2xl md:text-3xl font-montserrat-bold mb-4">
            Ready to Order? 🍔
          </h3>
          <p className="text-lg md:text-xl mb-4 md:mb-6">
            Get your delicious food delivered in just 30 minutes!
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full">
            🛒 Proceed to Checkout
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
