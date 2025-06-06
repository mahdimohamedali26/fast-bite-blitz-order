
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const MenuBestSellers = () => {
  const { addToCart } = useCart();

  const bestSellers = [
    {
      id: 1,
      name: "FastBite Supreme Burger",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      orders: 2847
    },
    {
      id: 4,
      name: "Loaded Cheese Fries",
      price: 7.99,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      orders: 3241
    },
    {
      id: 57,
      name: "Glazed Donuts",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      orders: 1234
    }
  ];

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
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-arial-black text-brand-black mb-4">
          ⭐ Best <span className="text-brand-red">Sellers</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">Our customers' absolute favorites!</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {bestSellers.map((item, index) => 
          <Card key={item.id} className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 will-change-transform">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-32 md:h-40 object-cover" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center";
                  }}
                />
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
                    className="bg-brand-yellow text-brand-black hover:bg-brand-orange text-xs md:text-sm px-3 md:px-4 min-h-[44px] hover:scale-105 transition-all duration-300 will-change-transform" 
                    onClick={() => handleAddToCart(item)}
                    aria-label={`Quick order ${item.name} for $${item.price}`}
                  >
                    Quick Order
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      {/* Performance status for best sellers */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-6 p-3 bg-purple-50 border border-purple-200 rounded-lg">
          <p className="text-sm text-purple-700">
            ✅ Best Sellers optimized with lazy loading and error handling
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuBestSellers;
