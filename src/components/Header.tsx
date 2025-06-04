
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";
import { useAuth } from "@/contexts/AuthContext";
import OrderSystem from "@/components/OrderSystem";
import AuthModal from "@/components/AuthModal";
import OrderTracking from "@/components/OrderTracking";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { cartItemsCount } = useCart();
  const { favorites } = useFavorites();
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50 w-full overflow-x-hidden">
        <div className="container mx-auto px-4">
          {/* Top Row: Logo, Search, Actions */}
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="text-2xl md:text-3xl font-arial-black text-brand-red">FastBite</div>
              <div className="text-xl">🍔</div>
            </Link>

            {/* Search Bar - Center */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search delicious food..." 
                  className="pl-10 border-2 border-brand-yellow focus:border-brand-red w-full"
                />
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center space-x-2 md:space-x-4 flex-shrink-0">
              {/* Delivery Badge - Hidden on mobile */}
              <Badge className="hidden lg:flex bg-brand-yellow text-brand-black font-bold px-3 py-1">
                🚚 30 Min Delivery
              </Badge>

              {/* Phone - Hidden on mobile */}
              <a 
                href="tel:+1234567890" 
                className="hidden md:flex items-center text-brand-black hover:text-brand-red font-roboto-bold"
              >
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm">(123) 456-7890</span>
              </a>

              {/* Order Tracking */}
              <OrderTracking />

              {/* Favorites */}
              <Link to="/favorites">
                <Button variant="outline" size="sm" className="relative">
                  <Heart className="w-4 h-4" />
                  {favorites.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-brand-red text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
                      {favorites.length}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Cart */}
              <Button 
                variant="outline" 
                size="sm" 
                className="relative"
                onClick={() => setIsOrderOpen(true)}
              >
                <ShoppingCart className="w-4 h-4" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-brand-red text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>

              {/* Auth */}
              {isLoggedIn ? (
                <div className="flex items-center space-x-2">
                  <span className="hidden md:block text-sm font-medium text-brand-black">
                    Hi, {user?.firstName}!
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={logout}
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden md:inline ml-1">Logout</span>
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsAuthOpen(true)}
                >
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline ml-1">Login</span>
                </Button>
              )}

              {/* Mobile Menu Toggle */}
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search food..." 
                className="pl-10 border-2 border-brand-yellow focus:border-brand-red w-full"
              />
            </div>
          </div>

          {/* Navigation Menu - Centered */}
          <div className="hidden lg:flex items-center justify-center py-4 border-t border-gray-100">
            <nav className="flex items-center space-x-12">
              <Link to="/" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg">
                Home
              </Link>
              <Link to="/menu" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg">
                Menu
              </Link>
              <Link to="/about" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg">
                About
              </Link>
              <Link to="/contact" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg">
                Contact
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2 border-t border-gray-100 pt-4">
              <Link 
                to="/" 
                className="block text-brand-black hover:text-brand-red font-roboto-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="block text-brand-black hover:text-brand-red font-roboto-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="block text-brand-black hover:text-brand-red font-roboto-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block text-brand-black hover:text-brand-red font-roboto-bold py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:+1234567890" 
                className="flex items-center text-brand-black hover:text-brand-red font-roboto-bold py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: (123) 456-7890
              </a>
            </nav>
          )}
        </div>
      </header>

      <OrderSystem isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;
