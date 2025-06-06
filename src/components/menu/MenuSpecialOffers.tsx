
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
    <div className="mb-12" id="offers">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-arial-black text-brand-black mb-4">
          🔥 Special <span className="text-brand-red">Offers</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600">Limited time deals you can't miss!</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {specialOffers.map(offer => 
          <Card key={offer.id} className="bg-gradient-to-br from-brand-red to-brand-orange text-white overflow-hidden transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img src={offer.image} alt={offer.title} className="w-full h-24 md:h-32 object-cover opacity-30" />
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-center">
                  <Badge className="bg-brand-yellow text-brand-black font-bold w-fit mb-2 text-xs">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {offer.validUntil}
                  </Badge>
                  <h3 className="text-lg md:text-xl font-montserrat-bold mb-1">{offer.title}</h3>
                  <p className="text-xs md:text-sm mb-2">{offer.subtitle}</p>
                  <div className="text-xl md:text-2xl font-arial-black text-brand-yellow">{offer.discount}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Mobile Responsive CTA */}
      <div className="text-center">
        <Button 
          size="lg" 
          className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-full" 
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}
        >
          🛒 Order These Specials Now!
        </Button>
      </div>
    </div>
  );
};

export default MenuSpecialOffers;
