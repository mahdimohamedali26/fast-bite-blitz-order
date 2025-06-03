
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
import { Heart, ShoppingCart, Star, Search, Filter, Plus, Minus, Clock, TrendingUp } from "lucide-react";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortBy, setSortBy] = useState("popular");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [customizations, setCustomizations] = useState({
    size: "medium",
    addOns: [] as any[],
    spiceLevel: "medium",
    instructions: ""
  });

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
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
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

  const openItemModal = (item: any) => {
    setSelectedItem(item);
    setItemQuantity(1);
    setCustomizations({
      size: item.sizes[0].name,
      addOns: [],
      spiceLevel: "medium",
      instructions: ""
    });
  };

  const calculateTotal = () => {
    if (!selectedItem) return 0;
    const selectedSize = selectedItem.sizes.find((s: any) => s.name === customizations.size);
    const basePrice = selectedSize ? selectedSize.price : selectedItem.price;
    const addOnsTotal = customizations.addOns.reduce((sum: number, addon: any) => sum + addon.price, 0);
    return (basePrice + addOnsTotal) * itemQuantity;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-arial-black mb-4">
            Our Complete <span className="text-brand-yellow">Menu</span>
          </h1>
          <p className="text-xl mb-8">
            Discover our full range of mouth-watering fast food favorites
          </p>
          <Badge className="bg-brand-yellow text-brand-black font-bold text-lg px-6 py-2">
            🔥 45+ Delicious Items Available
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Special Offers Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-arial-black text-brand-black mb-4">
              🔥 Special <span className="text-brand-red">Offers</span>
            </h2>
            <p className="text-xl text-gray-600">Limited time deals you can't miss!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {specialOffers.map((offer) => (
              <Card key={offer.id} className="bg-gradient-to-br from-brand-red to-brand-orange text-white overflow-hidden transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={offer.image} alt={offer.title} className="w-full h-32 object-cover opacity-30" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-center">
                      <Badge className="bg-brand-yellow text-brand-black font-bold w-fit mb-2">
                        <Clock className="w-4 h-4 mr-1" />
                        {offer.validUntil}
                      </Badge>
                      <h3 className="text-xl font-montserrat-bold mb-1">{offer.title}</h3>
                      <p className="text-sm mb-2">{offer.subtitle}</p>
                      <div className="text-2xl font-arial-black text-brand-yellow">{offer.discount}</div>
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
            <h2 className="text-4xl font-arial-black text-brand-black mb-4">
              ⭐ Best <span className="text-brand-red">Sellers</span>
            </h2>
            <p className="text-xl text-gray-600">Our customers' absolute favorites!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {bestSellers.map((item, index) => (
              <Card key={item.id} className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                    <Badge className="absolute top-3 left-3 bg-brand-yellow text-brand-black font-bold">
                      #{index + 1} Best Seller
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-montserrat-bold text-brand-black mb-2">{item.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <TrendingUp className="w-4 h-4 mr-1 text-brand-red" />
                      {item.orders.toLocaleString()} orders
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-arial-black text-brand-red">${item.price}</span>
                      <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange">
                        Quick Order
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Price Range */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={50}
                min={0}
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
                Showing <span className="font-bold text-brand-red">{sortedItems.length}</span> delicious items
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-montserrat-bold text-brand-black mb-6">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`w-full justify-between font-medium ${
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

              {/* Recommended Section */}
              <div className="mt-8 p-4 bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10 rounded-lg">
                <h4 className="font-montserrat-bold text-brand-black mb-2">🌟 Recommended for You</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Based on popular choices and ratings
                </p>
                <Button size="sm" className="bg-brand-red text-white hover:bg-brand-red/90 w-full">
                  View Recommendations
                </Button>
              </div>
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedItems.map((item) => (
                <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3 space-y-2">
                      {item.isBestSeller && (
                        <Badge className="bg-brand-red text-white font-bold">
                          🔥 Best Seller
                        </Badge>
                      )}
                      {item.isNew && (
                        <Badge className="bg-brand-yellow text-brand-black font-bold">
                          ✨ New!
                        </Badge>
                      )}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="absolute top-3 right-3 bg-white/90 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-montserrat-bold text-brand-black">{item.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-brand-yellow fill-current" />
                        <span className="text-sm font-bold ml-1">{item.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                    
                    <div className="text-xs text-gray-500 mb-4">
                      {item.orders.toLocaleString()} orders this month
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-arial-black text-brand-red">${item.price}</span>
                      <div className="space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="sm"
                              variant="outline"
                              className="text-brand-black border-brand-black hover:bg-brand-black hover:text-white"
                              onClick={() => openItemModal(item)}
                            >
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-montserrat-bold text-brand-black">
                                {selectedItem?.name}
                              </DialogTitle>
                            </DialogHeader>
                            {selectedItem && (
                              <div className="space-y-6">
                                {/* Item Image */}
                                <img 
                                  src={selectedItem.image} 
                                  alt={selectedItem.name}
                                  className="w-full h-64 object-cover rounded-lg"
                                />
                                
                                {/* Description & Details */}
                                <div>
                                  <p className="text-gray-600 mb-4">{selectedItem.description}</p>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h4 className="font-bold text-brand-black mb-2">Ingredients:</h4>
                                      <ul className="text-sm text-gray-600 space-y-1">
                                        {selectedItem.ingredients.map((ingredient: string, index: number) => (
                                          <li key={index}>• {ingredient}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-bold text-brand-black mb-2">Nutrition (per serving):</h4>
                                      <div className="text-sm text-gray-600 space-y-1">
                                        <p>Calories: {selectedItem.nutrition.calories}</p>
                                        <p>Protein: {selectedItem.nutrition.protein}g</p>
                                        <p>Carbs: {selectedItem.nutrition.carbs}g</p>
                                        <p>Fat: {selectedItem.nutrition.fat}g</p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {selectedItem.allergens.length > 0 && (
                                    <div className="mt-4">
                                      <h4 className="font-bold text-brand-black mb-2">Contains:</h4>
                                      <div className="flex space-x-2">
                                        {selectedItem.allergens.map((allergen: string, index: number) => (
                                          <Badge key={index} variant="outline" className="text-xs">
                                            {allergen}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                {/* Customization Options */}
                                <div className="border-t pt-6">
                                  <h4 className="font-bold text-brand-black mb-4">Customize Your Order</h4>
                                  
                                  {/* Size Selection */}
                                  <div className="mb-4">
                                    <label className="block font-medium text-gray-700 mb-2">Size:</label>
                                    <div className="grid grid-cols-2 gap-2">
                                      {selectedItem.sizes.map((size: any, index: number) => (
                                        <Button
                                          key={index}
                                          variant={customizations.size === size.name ? "default" : "outline"}
                                          className={`${
                                            customizations.size === size.name 
                                              ? "bg-brand-red text-white" 
                                              : "text-brand-black border-gray-300"
                                          }`}
                                          onClick={() => setCustomizations({...customizations, size: size.name})}
                                        >
                                          {size.name} (${size.price.toFixed(2)})
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* Add-ons */}
                                  <div className="mb-4">
                                    <label className="block font-medium text-gray-700 mb-2">Add-ons:</label>
                                    <div className="space-y-2">
                                      {selectedItem.addOns.map((addon: any, index: number) => (
                                        <label key={index} className="flex items-center space-x-2">
                                          <input 
                                            type="checkbox" 
                                            className="rounded border-gray-300"
                                            onChange={(e) => {
                                              if (e.target.checked) {
                                                setCustomizations({
                                                  ...customizations,
                                                  addOns: [...customizations.addOns, addon]
                                                });
                                              } else {
                                                setCustomizations({
                                                  ...customizations,
                                                  addOns: customizations.addOns.filter(a => a.name !== addon.name)
                                                });
                                              }
                                            }}
                                          />
                                          <span className="text-sm">
                                            {addon.name} (+${addon.price.toFixed(2)})
                                          </span>
                                        </label>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  {/* Special Instructions */}
                                  <div className="mb-6">
                                    <label className="block font-medium text-gray-700 mb-2">Special Instructions:</label>
                                    <textarea 
                                      className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                                      rows={3}
                                      placeholder="Any special requests or dietary requirements..."
                                      value={customizations.instructions}
                                      onChange={(e) => setCustomizations({...customizations, instructions: e.target.value})}
                                    />
                                  </div>
                                  
                                  {/* Quantity and Add to Cart */}
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => setItemQuantity(Math.max(1, itemQuantity - 1))}
                                      >
                                        <Minus className="w-4 h-4" />
                                      </Button>
                                      <span className="font-bold text-xl">{itemQuantity}</span>
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        onClick={() => setItemQuantity(itemQuantity + 1)}
                                      >
                                        <Plus className="w-4 h-4" />
                                      </Button>
                                    </div>
                                    
                                    <div className="text-right">
                                      <div className="text-sm text-gray-600">Total:</div>
                                      <div className="text-2xl font-arial-black text-brand-red">
                                        ${calculateTotal().toFixed(2)}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <Button className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg py-3 mt-4">
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to Cart
                                  </Button>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                        
                        <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange">
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {sortedItems.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-montserrat-bold text-brand-black mb-2">
                  No items found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filters to find more delicious options
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("all");
                    setPriceRange([0, 50]);
                  }}
                  className="bg-brand-red text-white hover:bg-brand-red/90"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Order Now CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-brand-red to-brand-orange text-white py-12 px-6 rounded-xl">
          <h3 className="text-3xl font-montserrat-bold mb-4">
            Ready to Order? 🍔
          </h3>
          <p className="text-xl mb-6">
            Get your delicious food delivered in just 30 minutes!
          </p>
          <Button size="lg" className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold text-xl px-12 py-6 rounded-full">
            🛒 Proceed to Checkout
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
