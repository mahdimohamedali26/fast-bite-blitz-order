
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
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {items.map(item => 
          <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-40 md:h-48 object-cover" />
              <div className="absolute top-3 left-3 space-y-2">
                {item.isBestSeller && 
                  <Badge className="bg-brand-red text-white font-bold text-xs">
                    🔥 Best Seller
                  </Badge>
                }
                {item.isNew && 
                  <Badge className="bg-brand-yellow text-brand-black font-bold text-xs">
                    ✨ New!
                  </Badge>
                }
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
        )}
      </div>
    </div>
  );
};

export default MenuGrid;
