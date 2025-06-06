
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MenuFilters from "@/components/menu/MenuFilters";
import MenuGrid from "@/components/menu/MenuGrid";
import MenuSpecialOffers from "@/components/menu/MenuSpecialOffers";
import MenuBestSellers from "@/components/menu/MenuBestSellers";
import { menuItems } from "@/data/menuItems";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([25]);
  const [sortBy, setSortBy] = useState("popular");

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesPrice = item.price <= priceRange[0];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return Number(b.isNew) - Number(a.isNew);
      default:
        return b.orders - a.orders;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      
      {/* Page Header - Remove extra margin/padding */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-6 sm:py-8 mt-14 md:mt-16 lg:mt-[72px]">
        <div className="container mx-auto text-center px-4 py-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-arial-black mb-4">
            Our Complete <span className="text-brand-yellow">Menu</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
            Discover our full range of mouth-watering fast food favorites
          </p>
          <Badge className="bg-brand-yellow text-brand-black font-bold text-xs sm:text-sm md:text-lg px-3 sm:px-4 md:px-6 py-1 sm:py-2">
            🔥 72+ Delicious Items Available
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Menu Items Section */}
        <div className="mb-12">
          <MenuFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            itemCount={sortedItems.length}
          />

          <MenuGrid items={sortedItems} />
        </div>

        {/* Special Offers Section */}
        <MenuSpecialOffers />

        {/* Best Sellers Section */}
        <MenuBestSellers />

        {/* Order Now CTA - Mobile Responsive */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 bg-gradient-to-r from-brand-red to-brand-orange text-white py-6 sm:py-8 md:py-12 px-4 md:px-6 rounded-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-montserrat-bold mb-4">
            Ready to Order? 🍔
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">
            Get your delicious food delivered in just 30 minutes!
          </p>
          <Button 
            size="lg" 
            className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold text-sm sm:text-lg md:text-xl px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 rounded-full" 
            onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })}
          >
            🛒 Proceed to Checkout
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
