
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
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.ingredients.some(ingredient => 
                           ingredient.toLowerCase().includes(searchTerm.toLowerCase())
                         );
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
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white mt-16">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-arial-black mb-4">
            Our Complete <span className="text-brand-yellow">Menu</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
            Discover our full range of mouth-watering fast food favorites
          </p>
          <Badge className="bg-brand-yellow text-brand-black font-bold text-xs sm:text-sm md:text-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3">
            🔥 72+ Delicious Items Available
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12">
        {/* Menu Items Section */}
        <div className="mb-12 lg:mb-16">
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

        {/* Order Now CTA */}
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 bg-gradient-to-r from-brand-red to-brand-orange text-white py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 rounded-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-montserrat-bold mb-4 lg:mb-6">
            Ready to Order? 🍔
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8">
            Get your delicious food delivered in just 30 minutes!
          </p>
          <Button 
            size="lg" 
            className="bg-brand-yellow text-brand-black hover:bg-brand-orange hover:scale-105 transition-all duration-300 font-bold text-lg sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 rounded-full min-h-[44px] lg:min-h-[56px]" 
            onClick={() => window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })}
            aria-label="Proceed to checkout and place your order"
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
