
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Star, TrendingUp } from "lucide-react";

const SpecialOffersSection = () => {
  const signatureDishes = [
    {
      id: 1,
      name: "FastBite Mega Combo",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Double burger + Large fries + Drink + Dessert",
      originalPrice: 24.99,
      specialPrice: 18.99,
      badge: "Signature"
    },
    {
      id: 2,
      name: "Crispy Chicken Deluxe",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Our secret recipe chicken with special seasoning",
      originalPrice: 16.99,
      specialPrice: 13.99,
      badge: "Chef's Special"
    }
  ];

  const mostOrdered = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      orders: "2,847 orders this month",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      price: 8.99
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      orders: "2,156 orders this month",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      price: 16.99
    },
    {
      id: 3,
      name: "Crispy Chicken Wings",
      orders: "1,923 orders this month",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      price: 12.99
    }
  ];

  const limitedOffers = [
    {
      id: 1,
      title: "Buy 2 Get 1 FREE",
      subtitle: "Pizza Special",
      validUntil: "Tomorrow",
      bgColor: "bg-brand-red"
    },
    {
      id: 2,
      title: "50% OFF",
      subtitle: "First Order",
      validUntil: "Today Only",
      bgColor: "bg-brand-orange"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Signature Dishes */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
              Our <span className="text-brand-red">Signature</span> Dishes
            </h2>
            <p className="text-xl text-gray-600">Exclusive recipes that made us famous</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {signatureDishes.map((dish) => (
              <div key={dish.id} className="relative bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10 rounded-xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <Badge className="bg-brand-red text-white w-fit mb-4">
                      {dish.badge}
                    </Badge>
                    <h3 className="text-2xl font-montserrat-bold text-brand-black mb-4">{dish.name}</h3>
                    <p className="text-gray-600 mb-6">{dish.description}</p>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-lg text-gray-500 line-through">${dish.originalPrice}</span>
                      <span className="text-3xl font-arial-black text-brand-red">${dish.specialPrice}</span>
                      <Badge className="bg-brand-yellow text-brand-black">Save ${(dish.originalPrice - dish.specialPrice).toFixed(2)}</Badge>
                    </div>
                    <Button className="bg-brand-red hover:bg-brand-red/90 text-white font-bold">
                      Order This Special Now!
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Ordered Items */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
              <span className="text-brand-red">Most Ordered</span> Favorites
            </h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mostOrdered.map((item, index) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-brand-red transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-brand-yellow text-brand-black font-bold">
                    #{index + 1} Popular
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat-bold text-brand-black mb-2">{item.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <TrendingUp className="w-4 h-4 mr-1 text-brand-red" />
                    {item.orders}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-arial-black text-brand-red">${item.price}</span>
                    <Button size="sm" className="bg-brand-yellow text-brand-black hover:bg-brand-orange">
                      Quick Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Limited Time Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {limitedOffers.map((offer) => (
            <div key={offer.id} className={`${offer.bgColor} text-white rounded-xl p-8 relative overflow-hidden`}>
              <div className="relative z-10">
                <Badge className="bg-white text-brand-black font-bold mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  Limited Time
                </Badge>
                <h3 className="text-4xl font-arial-black mb-2">{offer.title}</h3>
                <p className="text-xl font-roboto-bold mb-4">{offer.subtitle}</p>
                <p className="text-lg mb-6">Valid until: {offer.validUntil}</p>
                <Button className="bg-white text-brand-black hover:bg-gray-100 font-bold">
                  Claim This Offer Now!
                </Button>
              </div>
              <div className="absolute top-0 right-0 text-9xl opacity-20">🔥</div>
            </div>
          ))}
        </div>

        {/* Order Now CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-scale"
          >
            🛒 Order These Specials Now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;
