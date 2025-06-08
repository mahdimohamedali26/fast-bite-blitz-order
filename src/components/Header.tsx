
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import OrderSystem from "./OrderSystem";
import OrderTracking from "./OrderTracking";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isOrderSystemOpen, setIsOrderSystemOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoggedIn, user, logout } = useAuth();
  const { cartItemsCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50 mx-2 sm:mx-4 lg:mx-6 my-2 sm:my-3 lg:my-4 rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-brand-red text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                F
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-arial-black text-brand-black">
                  Fast<span className="text-brand-red">Bite</span>
                </h1>
                <p className="text-xs text-gray-600 font-medium">Quick. Fresh. Delicious.</p>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for delicious food..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border-2 border-brand-yellow focus:border-brand-red"
                />
              </form>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-brand-red font-medium transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-gray-700 hover:text-brand-red font-medium transition-colors">
                Menu
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-brand-red font-medium transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand-red font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Order Tracking */}
              <OrderTracking />

              {/* Favorites */}
              <Link to="/favorites">
                <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span className="hidden md:inline">Favorites</span>
                </Button>
              </Link>

              {/* Cart */}
              <Button 
                variant="outline" 
                size="sm" 
                className="relative"
                onClick={() => setIsOrderSystemOpen(true)}
              >
                <ShoppingCart className="w-4 h-4" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-brand-red text-white text-xs w-5 h-5 rounded-full p-0 flex items-center justify-center">
                    {cartItemsCount}
                  </Badge>
                )}
                <span className="hidden sm:inline ml-2">Cart</span>
              </Button>

              {/* User Account */}
              {isLoggedIn ? (
                <div className="hidden sm:flex items-center space-x-2">
                  <span className="text-sm text-gray-700">Hi, {user?.email || 'User'}</span>
                  <Button variant="outline" size="sm" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsAuthModalOpen(true)}
                  className="hidden sm:flex items-center space-x-1"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
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

          {/* Mobile Search Bar */}
          <div className="lg:hidden mt-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for delicious food..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-2 border-brand-yellow focus:border-brand-red"
              />
            </form>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/menu" 
                  className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/favorites" 
                  className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Favorites
                </Link>
                {!isLoggedIn && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-fit"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      
      <OrderSystem 
        isOpen={isOrderSystemOpen} 
        onClose={() => setIsOrderSystemOpen(false)} 
      />
    </>
  );
};

export default Header;
