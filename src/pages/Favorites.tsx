
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();

  const addToCartFromFavorites = (item: any) => {
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-arial-black mb-4">
            Your <span className="text-brand-yellow">Favorites</span> ❤️
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8">
            All your saved delicious favorites in one place
          </p>
          <Badge className="bg-brand-yellow text-brand-black font-bold text-sm md:text-lg px-4 md:px-6 py-2">
            {favorites.length} Favorite Items
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-montserrat-bold text-gray-600 mb-4">
              No favorites yet!
            </h2>
            <p className="text-xl text-gray-500 mb-8 max-w-md mx-auto">
              Start adding items to your favorites by clicking the heart icon on menu items
            </p>
            <Link to="/menu">
              <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg px-8 py-4">
                🍔 Browse Our Menu
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <Card key={item.id} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="absolute top-3 right-3 bg-white/90 text-brand-red border-brand-red hover:bg-brand-red hover:text-white p-2"
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-brand-red text-white font-bold">
                      <Heart className="w-3 h-3 mr-1 fill-current" />
                      Favorite
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-lg font-montserrat-bold text-brand-black mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  <Badge variant="outline" className="text-xs mb-3">
                    {item.category}
                  </Badge>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-arial-black text-brand-red">${item.price}</span>
                    <Button 
                      className="bg-brand-yellow text-brand-black hover:bg-brand-orange text-sm"
                      onClick={() => addToCartFromFavorites(item)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {favorites.length > 0 && (
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button 
                size="lg" 
                className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                🍽️ Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;
