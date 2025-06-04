
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, Shield, Award, Users, MapPin } from "lucide-react";

const RestaurantFeaturesSection = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-brand-yellow" />,
      title: "Lightning Fast Delivery",
      description: "Get your food delivered in 30 minutes or less, guaranteed!",
      highlight: "Free delivery on orders over $25"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-yellow" />,
      title: "24/7 Available",
      description: "We're always here when hunger strikes, day or night.",
      highlight: "Never closed, always serving"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-yellow" />,
      title: "Quality Guarantee",
      description: "100% fresh ingredients and highest food safety standards.",
      highlight: "Money-back guarantee"
    },
    {
      icon: <Award className="w-8 h-8 text-brand-yellow" />,
      title: "Award Winning Taste",
      description: "Recognized as the best fast food restaurant in the city.",
      highlight: "5-star customer rating"
    },
    {
      icon: <Users className="w-8 h-8 text-brand-yellow" />,
      title: "50,000+ Happy Customers",
      description: "Join thousands of satisfied customers who love our food.",
      highlight: "Growing community daily"
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-yellow" />,
      title: "Wide Service Area",
      description: "We deliver to most areas within the city limits.",
      highlight: "Expanding coverage weekly"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "15", label: "Years Experience" },
    { number: "30 min", label: "Delivery Time" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
            Why Choose <span className="text-brand-red">FastBite</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect combination of speed, quality, and taste that has made us the city's favorite fast food destination
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-arial-black text-brand-red mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-roboto-bold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-brand-red transition-all duration-300 transform hover:scale-105 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-brand-red rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-montserrat-bold text-brand-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Badge className="bg-brand-yellow text-brand-black font-bold">
                  {feature.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-brand-red to-brand-orange text-white py-12 px-8 rounded-xl">
          <h3 className="text-3xl font-montserrat-bold mb-4">
            Ready to Experience the FastBite Difference?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and taste why we're the city's #1 fast food choice!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              🍔 Order Now & Save!
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold text-xl px-12 py-6 rounded-full">
              📱 Download Our App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantFeaturesSection;
