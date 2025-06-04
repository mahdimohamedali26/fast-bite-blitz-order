import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";

const InteractiveMenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("burgers");
  const [priceRange, setPriceRange] = useState([25]);
  const [sortBy, setSortBy] = useState("popular");
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const categories = [
    { id: "burgers", name: "🍔 Burgers", count: 15 },
    { id: "pizza", name: "🍕 Pizza", count: 10 },
    { id: "chicken", name: "🍗 Chicken", count: 12 },
    { id: "sides", name: "🍟 Sides", count: 10 },
    { id: "drinks", name: "🥤 Drinks", count: 8 },
    { id: "desserts", name: "🍰 Desserts", count: 12 }
  ];

  const menuItems = {
    burgers: [
      {
        id: 1,
        name: "FastBite Supreme Burger",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        isBestSeller: true,
        description: "Double beef patty, special sauce, lettuce, cheese",
        category: "burgers"
      },
      {
        id: 2,
        name: "Classic Cheeseburger",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        isBestSeller: false,
        description: "Beef patty, cheese, lettuce, tomato, onion",
        category: "burgers"
      },
      {
        id: 3,
        name: "BBQ Bacon Burger",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        isBestSeller: true,
        description: "BBQ sauce, bacon, onion rings, cheddar cheese",
        category: "burgers"
      },
      {
        id: 31,
        name: "Spicy Jalapeño Burger",
        price: 13.49,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6,
        isBestSeller: false,
        description: "Spicy beef patty, jalapeños, pepper jack cheese, chipotle mayo",
        category: "burgers"
      },
      {
        id: 32,
        name: "Mushroom Swiss Burger",
        price: 12.49,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.5,
        isBestSeller: false,
        description: "Grilled mushrooms, Swiss cheese, garlic aioli",
        category: "burgers"
      }
    ],
    pizza: [
      {
        id: 4,
        name: "Pepperoni Supreme",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        isBestSeller: true,
        description: "Pepperoni, mozzarella, tomato sauce",
        category: "pizza"
      },
      {
        id: 5,
        name: "Margherita Classic",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6,
        isBestSeller: false,
        description: "Fresh mozzarella, basil, tomato sauce",
        category: "pizza"
      },
      {
        id: 33,
        name: "BBQ Chicken Pizza",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        isBestSeller: true,
        description: "BBQ chicken, red onions, cilantro, BBQ sauce",
        category: "pizza"
      },
      {
        id: 34,
        name: "Veggie Deluxe Pizza",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.4,
        isBestSeller: false,
        description: "Bell peppers, mushrooms, olives, onions, tomatoes",
        category: "pizza"
      }
    ],
    chicken: [
      {
        id: 35,
        name: "Crispy Chicken Tenders",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        isBestSeller: true,
        description: "Hand-breaded chicken tenders with honey mustard",
        category: "chicken"
      },
      {
        id: 36,
        name: "Buffalo Wings",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        isBestSeller: true,
        description: "Spicy buffalo wings with blue cheese dip",
        category: "chicken"
      },
      {
        id: 37,
        name: "Grilled Chicken Sandwich",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1606755962773-d324e9a13086?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.5,
        isBestSeller: false,
        description: "Grilled chicken breast, lettuce, tomato, mayo",
        category: "chicken"
      }
    ],
    sides: [
      {
        id: 38,
        name: "Loaded Cheese Fries",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6,
        isBestSeller: true,
        description: "Crispy fries with cheese sauce, bacon bits, green onions",
        category: "sides"
      },
      {
        id: 39,
        name: "Onion Rings",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.4,
        isBestSeller: false,
        description: "Golden crispy onion rings with ranch dip",
        category: "sides"
      },
      {
        id: 40,
        name: "Mozzarella Sticks",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.5,
        isBestSeller: false,
        description: "Crispy mozzarella sticks with marinara sauce",
        category: "sides"
      }
    ],
    drinks: [
      {
        id: 41,
        name: "Strawberry Milkshake",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1541544181051-e46607aa95c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        isBestSeller: true,
        description: "Creamy vanilla ice cream blended with fresh strawberries",
        category: "drinks"
      },
      {
        id: 42,
        name: "Chocolate Milkshake",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        isBestSeller: true,
        description: "Rich chocolate ice cream shake with whipped cream",
        category: "drinks"
      },
      {
        id: 43,
        name: "Fresh Lemonade",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.3,
        isBestSeller: false,
        description: "Freshly squeezed lemon juice with mint",
        category: "drinks"
      }
    ],
    desserts: [
      {
        id: 44,
        name: "Glazed Donuts",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6,
        isBestSeller: true,
        description: "Fresh glazed donuts with sweet glaze coating",
        category: "desserts"
      },
      {
        id: 45,
        name: "Chocolate Cake Slice",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8,
        isBestSeller: true,
        description: "Rich chocolate cake with chocolate frosting",
        category: "desserts"
      },
      {
        id: 46,
        name: "Strawberry Cheesecake",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9,
        isBestSeller: true,
        description: "Creamy cheesecake topped with fresh strawberries",
        category: "desserts"
      },
      {
        id: 47,
        name: "Apple Pie Slice",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.5,
        isBestSeller: false,
        description: "Classic apple pie with cinnamon and flaky crust",
        category: "desserts"
      },
      {
        id: 48,
        name: "Chocolate Chip Cookies",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.4,
        isBestSeller: false,
        description: "Fresh baked chocolate chip cookies (6 pack)",
        category: "desserts"
      },
      {
        id: 49,
        name: "Boston Cream Donuts",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7,
        isBestSeller: false,
        description: "Cream-filled donuts with chocolate glaze",
        category: "desserts"
      }
    ]
  };

  const currentItems = menuItems[activeCategory] || [];

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

  return (
    <section className="py-16 bg-gray-50 overflow-x-hidden" id="menu">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
            Our <span className="text-brand-red">Irresistible</span> Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our mouth-watering selection of freshly prepared fast food favorites
          </p>
        </div>

        {/* Category Tabs - Mobile Horizontal Layout */}
        <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-4 mb-8 pb-2 sm:pb-0">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`font-roboto-bold text-sm sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeCategory === category.id 
                  ? "bg-brand-red text-white shadow-lg scale-105" 
                  : "text-brand-black border-brand-red hover:bg-brand-red hover:text-white"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex-1 w-full md:w-auto">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Max Price: ${priceRange[0]}
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
          <div className="w-full md:w-48">
            <label className="block text-sm font-bold text-gray-700 mb-2">Sort By</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                {item.isBestSeller && (
                  <Badge className="absolute top-4 left-4 bg-brand-red text-white font-bold">
                    🔥 Best Seller
                  </Badge>
                )}
                <Button 
                  variant="outline" 
                  size="sm"
                  className={`absolute top-4 right-4 ${
                    isFavorite(item.id) 
                      ? "bg-brand-red text-white border-brand-red" 
                      : "bg-white/90 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
                  }`}
                  onClick={() => toggleFavorite(item)}
                >
                  <Heart className={`w-4 h-4 ${isFavorite(item.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-montserrat-bold text-brand-black">{item.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-brand-yellow fill-current" />
                    <span className="text-sm font-bold ml-1">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-arial-black text-brand-red">${item.price}</span>
                  <Button 
                    className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA - Mobile Responsive */}
        <div className="text-center">
          <Link to="/menu">
            <Button 
              size="lg" 
              className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-lg sm:text-xl px-6 sm:px-12 py-4 sm:py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🍽️ View Full Menu & Order Now!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMenuSection;
