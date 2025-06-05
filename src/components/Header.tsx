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
  const {
    cartItemsCount
  } = useCart();
  const {
    favorites
  } = useFavorites();
  const {
    user,
    isLoggedIn,
    logout
  } = useAuth();
  return <>
      <header className="bg-white shadow-lg">
        {/* Top Row: Logo, Search, Actions - STICKY */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
          <div className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py- mx-2 sm:mx-4 lg:mx-6 my-2 sm:my-3 lg:my-4 rounded-xl">
            <div className="mx-2 sm:mx-4 lg:mx-6 my-2 sm:my-3 lg:my-4\npx-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-">
              {/* Logo */}
              <Link to="/" className="mx-2 sm:mx-4 lg:mx-6 my-2 sm:my-3 lg:my-4 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
                <div className="text-xl md:text-2xl font-arial-black text-brand-red">FastBite</div>
                <div className="text-lg">🍔</div>
              </Link>

              {/* Search Bar - Center */}
              <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Search delicious food..." className="pl-10 border-2 border-brand-yellow focus:border-brand-red w-full" />
                </div>
              </div>

              {/* Right Section - Actions */}
              <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
                {/* Delivery Badge - Hidden on mobile */}
                <Badge className="hidden lg:flex bg-brand-yellow text-brand-black font-bold px-2 py-1 text-xs">
                  🚚 30 Min Delivery
                </Badge>

                {/* Phone - Hidden on mobile */}
                <a href="tel:+1234567890" className="hidden md:flex items-center text-brand-black hover:text-brand-red font-roboto-bold">
                  <Phone className="w-4 h-4 mr-1" />
                  <span className="text-sm">(123) 456-7890</span>
                </a>

                {/* Order Tracking */}
                <OrderTracking />

                {/* Favorites */}
                <Link to="/favorites">
                  <Button variant="outline" size="sm" className="relative p-2">
                    <Heart className="w-4 h-4" />
                    {favorites.length > 0 && <Badge className="absolute -top-1 -right-1 bg-brand-red text-white text-xs w-4 h-4 rounded-full p-0 flex items-center justify-center">
                        {favorites.length}
                      </Badge>}
                  </Button>
                </Link>

                {/* Cart */}
                <Button variant="outline" size="sm" className="relative p-2" onClick={() => setIsOrderOpen(true)}>
                  <ShoppingCart className="w-4 h-4" />
                  {cartItemsCount > 0 && <Badge className="absolute -top-1 -right-1 bg-brand-red text-white text-xs w-4 h-4 rounded-full p-0 flex items-center justify-center">
                      {cartItemsCount}
                    </Badge>}
                </Button>

                {/* Auth */}
                {isLoggedIn ? <div className="flex items-center space-x-2">
                    <span className="hidden md:block text-sm font-medium text-brand-black">
                      Hi, {user?.firstName}!
                    </span>
                    <Button variant="outline" size="sm" className="p-2" onClick={logout}>
                      <User className="w-4 h-4" />
                      <span className="hidden md:inline ml-1 text-sm">Logout</span>
                    </Button>
                  </div> : <Button variant="outline" size="sm" className="p-2" onClick={() => setIsAuthOpen(true)}>
                    <User className="w-4 h-4" />
                    <span className="hidden md:inline ml-1 text-sm">Login</span>
                  </Button>}

                {/* Mobile Menu Toggle */}
                <Button variant="outline" size="sm" className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search food..." className="pl-10 border-2 border-brand-yellow focus:border-brand-red w-full" />
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && <nav className="lg:hidden pb-3 space-y-1 border-t border-gray-100 pt-3">
                <Link to="/" className="block text-brand-black hover:text-brand-red font-roboto-bold py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/menu" className="block text-brand-black hover:text-brand-red font-roboto-bold py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Menu
                </Link>
                <Link to="/about" className="block text-brand-black hover:text-brand-red font-roboto-bold py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link to="/contact" className="block text-brand-black hover:text-brand-red font-roboto-bold py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <a href="tel:+1234567890" className="flex items-center text-brand-black hover:text-brand-red font-roboto-bold py-2 text-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: (123) 456-7890
                </a>
              </nav>}
          </div>
        </div>

        {/* Navigation Menu - NOT STICKY, below the fixed header */}
        <div className="mt-14 md:mt-16">
          <div className="hidden lg:flex items-center justify-center py-3 border-t border-gray-100 bg-white">
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-base">
                Home
              </Link>
              <Link to="/menu" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-base">
                Menu
              </Link>
              <Link to="/about" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-base">
                About
              </Link>
              <Link to="/contact" className="text-brand-black hover:text-brand-red font-roboto-bold transition-colors text-base">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <OrderSystem isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>;
};
export default Header;