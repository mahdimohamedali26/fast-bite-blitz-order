import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/90 to-brand-orange/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-[65px]">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <Badge className="bg-brand-yellow text-brand-black font-montserrat-bold text-lg px-6 py-2 mb-6 animate-pulse-scale">
            🔥 #1 Fast Food Restaurant in Town!
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-arial-black mb-6 leading-tight">
            The Most <span className="text-brand-yellow">Delicious</span> Fast Food in Town!
          </h1>

          {/* Value Proposition */}
          <div className="text-xl md:text-2xl font-roboto-bold mb-8 space-y-2">
            <p className="flex items-center justify-center space-x-2">
              <span className="text-brand-yellow">✨</span>
              <span>Irresistible Taste</span>
              <span className="text-brand-yellow">+</span>
              <span>Fast Delivery</span>
              <span className="text-brand-yellow">+</span>
              <span>Competitive Prices</span>
            </p>
          </div>

          {/* Featured Dish */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Signature Burger" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-brand-yellow shadow-2xl animate-pulse-scale" />
              <Badge className="absolute -top-4 -right-4 bg-brand-red text-white font-bold text-lg px-4 py-2 rotate-12">
                Most Popular!
              </Badge>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-scale">
              🍔 Order Now & Enjoy! 🚚
            </Button>
            
            <p className="text-lg">
              <span className="text-brand-yellow font-bold">FREE DELIVERY</span> on orders over $25 • 
              <span className="text-brand-yellow font-bold"> 30-MIN GUARANTEE</span>
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-arial-black text-brand-yellow">50K+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-arial-black text-brand-yellow">5★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-arial-black text-brand-yellow">15+</div>
              <div className="text-sm">Years Serving</div>
            </div>
            <div>
              <div className="text-3xl font-arial-black text-brand-yellow">24/7</div>
              <div className="text-sm">Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce">🍟</div>
      <div className="absolute top-40 right-20 text-6xl animate-bounce" style={{
      animationDelay: '0.5s'
    }}>🍕</div>
      <div className="absolute bottom-20 left-20 text-6xl animate-bounce" style={{
      animationDelay: '1s'
    }}>🥤</div>
    </section>;
};
export default HeroSection;