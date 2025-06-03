
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart, Search, Phone, User, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-red text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <Badge className="bg-brand-yellow text-brand-black font-bold animate-pulse-scale">
              🚚 Fast Delivery - 30 Min Guaranteed!
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center hover:text-brand-yellow transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              Call: (123) 456-7890
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-brand-red text-white p-3 rounded-full">
              <span className="text-2xl font-arial-black">FB</span>
            </div>
            <div>
              <h1 className="text-2xl font-montserrat-bold text-brand-black">FastBite</h1>
              <p className="text-xs text-gray-600">Delicious & Fast</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search delicious food..." 
                className="pl-10 pr-4 py-2 border-2 border-brand-yellow focus:border-brand-red"
              />
            </div>
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
              <Heart className="w-4 h-4 mr-1" />
              Favorites
            </Button>
            
            <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange relative">
              <ShoppingCart className="w-4 h-4 mr-1" />
              Cart
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-brand-red text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Button variant="outline" className="text-brand-black border-brand-black hover:bg-brand-black hover:text-white">
              <User className="w-4 h-4 mr-1" />
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:block mt-4">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-roboto-bold text-lg transition-colors hover:text-brand-red ${
                  location.pathname === item.path ? 'text-brand-red border-b-2 border-brand-red' : 'text-brand-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search delicious food..." 
                  className="pl-10 pr-4 py-2 border-2 border-brand-yellow focus:border-brand-red"
                />
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="mb-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-roboto-bold text-lg py-2 transition-colors hover:text-brand-red ${
                      location.pathname === item.path ? 'text-brand-red' : 'text-brand-black'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                <Heart className="w-4 h-4 mr-1" />
                Favorites
              </Button>
              
              <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange relative">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Cart ({cartCount})
              </Button>

              <Button variant="outline" className="text-brand-black border-brand-black hover:bg-brand-black hover:text-white">
                <User className="w-4 h-4 mr-1" />
                Login / Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
