
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const MenuSpecialOffers = () => {
  const specialOffers = [
    {
      id: 1,
      title: "Buy 2 Get 1 FREE",
      subtitle: "Any Burger",
      validUntil: "Tomorrow",
      discount: "33% OFF",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Family Pizza Deal",
      subtitle: "Large Pizza + 4 Drinks",
      validUntil: "This Week",
      discount: "40% OFF",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      title: "Sweet Treats Special",
      subtitle: "Any 2 Desserts",
      validUntil: "Today Only",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="mb-12 lg:mb-16" id="offers">
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-arial-black text-brand-black mb-4 lg:mb-6">
          🔥 Special <span className="text-brand-red">Offers</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">Limited time deals you can't miss!</p>
      </div>
      
      {/* Performance optimized grid for special offers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 lg:mb-12">
        {specialOffers.map(offer => 
          <Card key={offer.id} className="bg-gradient-to-br from-brand-red to-brand-orange text-white overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl will-change-transform">
            <CardContent className="p-0">
              <div className="relative">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-28 md:h-36 lg:h-40 object-cover opacity-30" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop&crop=center";
                  }}
                />
                <div className="absolute inset-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                  <Badge className="bg-brand-yellow text-brand-black font-bold w-fit mb-2 lg:mb-3 text-xs sm:text-sm px-2 py-1">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {offer.validUntil}
                  </Badge>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-montserrat-bold mb-1 lg:mb-2">{offer.title}</h3>
                  <p className="text-xs md:text-sm lg:text-base mb-2 lg:mb-3">{offer.subtitle}</p>
                  <div className="text-xl md:text-2xl lg:text-3xl font-arial-black text-brand-yellow">{offer.discount}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Optimized CTA button with better touch targets */}
      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-brand-yellow text-brand-black hover:bg-brand-orange hover:scale-105 transition-all duration-300 font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-full min-h-[44px] lg:min-h-[56px] will-change-transform" 
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}
          aria-label="Order these special offers now"
        >
          🛒 Order These Specials Now!
        </Button>
      </div>
      
      {/* Performance optimization notice for developers */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-bold text-green-800 mb-2">Performance Status:</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>✅ Lazy loading implemented for all images</li>
            <li>✅ Error handling for failed image loads</li>
            <li>✅ Will-change CSS for smooth animations</li>
            <li>✅ Optimized touch targets (44px minimum)</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuSpecialOffers;
