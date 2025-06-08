
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  orders: number;
  isBestSeller: boolean;
  isNew: boolean;
  description: string;
  ingredients: string[];
  allergens: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  sizes: Array<{
    name: string;
    price: number;
  }>;
  addOns: Array<{
    name: string;
    price: number;
  }>;
}

interface MenuGridProps {
  items: MenuItem[];
}

const MenuGrid = ({ items }: MenuGridProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  const handleAddToCart = (item: MenuItem) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map(item => 
        <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="relative">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover" 
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center";
              }}
            />
            <div className="absolute top-3 left-3 space-y-2">
              {item.isBestSeller && 
                <Badge className="bg-brand-red text-white font-bold text-xs px-2 py-1">
                  🔥 Best Seller
                </Badge>
              }
              {item.isNew && 
                <Badge className="bg-brand-yellow text-brand-black font-bold text-xs px-2 py-1">
                  ✨ New!
                </Badge>
              }
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className={`absolute top-3 right-3 p-2 min-h-[44px] min-w-[44px] hover:scale-110 transition-all duration-300 ${
                isFavorite(item.id) 
                  ? "bg-brand-red text-white border-brand-red" 
                  : "bg-white/90 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
              }`} 
              onClick={() => toggleFavorite(item)}
              aria-label={`${isFavorite(item.id) ? 'Remove from' : 'Add to'} favorites`}
            >
              <Heart className={`w-4 h-4 ${isFavorite(item.id) ? 'fill-current' : ''}`} />
            </Button>
          </div>
          
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-brand-black leading-tight">{item.name}</h3>
              <div className="flex items-center ml-2">
                <Star className="w-4 h-4 text-brand-yellow fill-current" />
                <span className="text-sm font-bold ml-1">{item.rating}</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
            
            {/* Customization Icons */}
            <div className="flex items-center space-x-2 mb-3">
              <span className="text-xs text-gray-500">Customize:</span>
              <div className="flex space-x-1">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center" title="Add Cheese">
                  🧀
                </div>
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center" title="Add Ketchup">
                  🍅
                </div>
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center" title="Add Onion">
                  🧅
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 mb-3">
              {item.orders.toLocaleString()} orders this month
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-brand-red">${item.price}</span>
              <Button 
                className="bg-brand-yellow text-brand-black hover:bg-brand-orange hover:scale-105 transition-all duration-300 text-sm px-4 py-2 min-h-[44px] font-bold" 
                onClick={() => handleAddToCart(item)}
                aria-label={`Add ${item.name} to cart for $${item.price}`}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MenuGrid;
