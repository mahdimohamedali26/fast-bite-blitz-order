
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
      {/* Improved responsive grid with better spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {items.map(item => 
          <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
            <div className="relative">
              {/* Optimized image with lazy loading */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-40 md:h-48 lg:h-52 object-cover group-hover:scale-110 transition-transform duration-300" 
                loading="lazy"
              />
              <div className="absolute top-3 left-3 space-y-2">
                {item.isBestSeller && 
                  <Badge className="bg-brand-red text-white font-bold text-xs sm:text-sm px-2 py-1">
                    🔥 Best Seller
                  </Badge>
                }
                {item.isNew && 
                  <Badge className="bg-brand-yellow text-brand-black font-bold text-xs sm:text-sm px-2 py-1">
                    ✨ New!
                  </Badge>
                }
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className={`absolute top-3 right-3 p-2 sm:p-3 min-h-[40px] min-w-[40px] lg:min-h-[44px] lg:min-w-[44px] hover:scale-110 transition-all duration-300 ${
                  isFavorite(item.id) 
                    ? "bg-brand-red text-white border-brand-red" 
                    : "bg-white/90 text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
                }`} 
                onClick={() => toggleFavorite(item)}
                aria-label={`${isFavorite(item.id) ? 'Remove from' : 'Add to'} favorites`}
              >
                <Heart className={`w-4 h-4 lg:w-5 lg:h-5 ${isFavorite(item.id) ? 'fill-current' : ''}`} />
              </Button>
            </div>
            
            <CardContent className="p-4 sm:p-5 lg:p-6">
              <div className="flex items-start justify-between mb-2 lg:mb-3">
                <h3 className="text-base md:text-lg lg:text-xl font-montserrat-bold text-brand-black leading-tight">{item.name}</h3>
                <div className="flex items-center ml-2">
                  <Star className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-brand-yellow fill-current" />
                  <span className="text-xs md:text-sm lg:text-base font-bold ml-1">{item.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-3 md:mb-4 line-clamp-2 leading-relaxed">{item.description}</p>
              
              <div className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                {item.orders.toLocaleString()} orders this month
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-xl lg:text-2xl font-arial-black text-brand-red">${item.price}</span>
                <Button 
                  className="bg-brand-yellow text-brand-black hover:bg-brand-orange hover:scale-105 transition-all duration-300 text-sm md:text-base px-3 md:px-4 lg:px-6 py-2 lg:py-3 min-h-[44px] font-bold" 
                  onClick={() => handleAddToCart(item)}
                  aria-label={`Add ${item.name} to cart for $${item.price}`}
                >
                  <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MenuGrid;
