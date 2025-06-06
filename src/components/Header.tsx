
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
      <header className="bg-white shadow-lg">
        {/* Top Row: Logo, Search, Actions - STICKY with improved spacing */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
          <div className="mx-2 sm:mx-4 lg:mx-6 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 max-w-7xl xl:mx-auto">
            <div className="flex items-center justify-between h-12 md:h-14 lg:h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
                <div className="text-xl md:text-2xl lg:text-3xl font-arial-black text-brand-red">FastBite</div>
                <div className="text-lg md:text-xl">🍔</div>
              </Link>

              {/* Search Bar - Center with better responsive sizing */}
              <div className="hidden md:flex items-center flex-1 max-w-md mx-4 lg:mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 lg:w-5 lg:h-5" />
                  <Input 
                    placeholder="Search delicious food..." 
                    className="pl-10 lg:pl-12 border-2 border-brand-yellow focus:border-brand-red w-full h-10 lg:h-12 text-sm lg:text-base"
                  />
                </div>
              </div>

              {/* Right Section - Actions with improved spacing */}
              <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
                {/* Delivery Badge - Hidden on mobile and small tablets */}
                <Badge className="hidden lg:flex bg-brand-yellow text-brand-black font-bold px-3 py-2 text-sm">
                  🚚 30 Min Delivery
                </Badge>

                {/* Phone - Hidden on mobile, shown on tablets and up */}
                <a 
                  href="tel:+1234567890" 
                  className="hidden md:flex items-center text-brand-black hover:text-brand-red font-roboto-bold transition-colors"
                >
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2" />
                  <span className="text-sm lg:text-base">(123) 456-7890</span>
                </a>

                {/* Order Tracking */}
                <OrderTracking />

                {/* Favorites with improved touch targets */}
                <Link to="/favorites">
                  <Button variant="outline" size="sm" className="relative p-3 lg:p-4 min-h-[44px] min-w-[44px]">
                    <Heart className="w-4 h-4 lg:w-5 lg:h-5" />
                    {favorites.length > 0 && (
                      <Badge className="absolute -top-1 -right-1 bg-brand-red text-white text-xs w-5 h-5 lg:w-6 lg:h-6 rounded-full p-0 flex items-center justify-center">
                        {favorites.length}
                      </Badge>
                    )}
                  </Button>
                </Link>

                {/* Cart with improved touch targets */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="relative p-3 lg:p-4 min-h-[44px] min-w-[44px] hover:scale-105 transition-transform"
                  onClick={() => setIsOrderOpen(true)}
                >
                  <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 bg-brand-red text-white text-xs w-5 h-5 lg:w-6 lg:h-6 rounded-full p-0 flex items-center justify-center">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>

                {/* Auth with improved touch targets */}
                {isLoggedIn ? (
                  <div className="flex items-center space-x-2">
                    <span className="hidden lg:block text-sm font-medium text-brand-black">
                      Hi, {user?.firstName}!
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="p-3 lg:p-4 min-h-[44px] min-w-[44px] hover:scale-105 transition-transform"
                      onClick={logout}
                    >
                      <User className="w-4 h-4 lg:w-5 lg:h-5" />
                      <span className="hidden md:inline ml-2 text-sm">Logout</span>
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="p-3 lg:p-4 min-h-[44px] min-w-[44px] hover:scale-105 transition-transform"
                    onClick={() => setIsAuthOpen(true)}
                  >
                    <User className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="hidden md:inline ml-2 text-sm">Login</span>
                  </Button>
                )}

                {/* Mobile Menu Toggle with improved touch target */}
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden p-3 min-h-[44px] min-w-[44px]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Mobile Search with improved spacing */}
            <div className="md:hidden pb-3 mt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search food..." 
                  className="pl-10 border-2 border-brand-yellow focus:border-brand-red w-full h-10"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="lg:hidden pb-4 space-y-2 border-t border-gray-100 pt-4 mt-2">
                <Link 
                  to="/" 
                  className="block text-brand-black hover:text-brand-red font-roboto-bold py-3 text-base border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/menu" 
                  className="block text-brand-black hover:text-brand-red font-roboto-bold py-3 text-base border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link 
                  to="/about" 
                  className="block text-brand-black hover:text-brand-red font-roboto-bold py-3 text-base border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block text-brand-black hover:text-brand-red font-roboto-bold py-3 text-base border-b border-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center text-brand-black hover:text-brand-red font-roboto-bold py-3 text-base"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  Call: (123) 456-7890
                </a>
              </nav>
            )}
          </div>
        </div>

        {/* Navigation Menu - NOT STICKY, below the fixed header with improved spacing */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="hidden lg:flex items-center justify-center py-4 border-t border-gray-100 bg-white">
            <div className="mx-auto px-6 xl:px-8 max-w-7xl w-full">
              <nav className="flex items-center justify-center space-x-12">
                <Link to="/" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg hover:scale-105 transition-transform">
                  Home
                </Link>
                <Link to="/menu" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg hover:scale-105 transition-transform">
                  Menu
                </Link>
                <Link to="/about" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg hover:scale-105 transition-transform">
                  About
                </Link>
                <Link to="/contact" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-lg hover:scale-105 transition-transform">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <OrderSystem isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;
