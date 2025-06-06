
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { categories } from "@/data/categories";

interface MenuFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  itemCount: number;
}

const MenuFilters = ({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  itemCount
}: MenuFiltersProps) => {
  return (
    <>
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search delicious food..." 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              className="pl-10 border-2 border-brand-yellow focus:border-brand-red" 
            />
          </div>

          {/* Price Range - Single handle */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Max Price: ${priceRange[0]}
            </label>
            <Slider 
              value={priceRange} 
              onValueChange={setPriceRange} 
              max={50} 
              min={5} 
              step={1} 
              className="w-full" 
            />
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Sort By</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest Items</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <div className="text-sm text-gray-600">
              Showing <span className="font-bold text-brand-red">{itemCount}</span> delicious items
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Categories Sidebar - Responsive */}
        <div className="lg:col-span-1">
          {/* Mobile: Horizontal scroll, Desktop: Vertical */}
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 lg:sticky lg:top-24">
            <h3 className="text-lg md:text-xl font-montserrat-bold text-brand-black mb-4 md:mb-6">Categories</h3>
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {categories.map(category => 
                <Button 
                  key={category.id} 
                  variant={activeCategory === category.id ? "default" : "outline"} 
                  className={`whitespace-nowrap flex-shrink-0 lg:w-full justify-between font-medium text-sm md:text-base ${
                    activeCategory === category.id 
                      ? "bg-brand-red text-white" 
                      : "text-brand-black border-gray-200 hover:border-brand-red hover:text-brand-red"
                  }`} 
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="text-xs ml-2">
                    {category.count}
                  </Badge>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuFilters;
