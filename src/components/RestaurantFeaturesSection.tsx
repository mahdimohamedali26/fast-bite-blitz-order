
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Star, CreditCard, MapPin, Award } from "lucide-react";

const RestaurantFeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "30-Minute Delivery Guarantee",
      description: "Your food arrives hot and fresh within 30 minutes or it's FREE!",
      highlight: "Money-Back Promise",
      color: "bg-brand-red"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every ingredient is carefully selected and every meal is quality-checked",
      highlight: "100% Fresh Ingredients",
      color: "bg-brand-orange"
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "98% customer satisfaction rate with over 50,000 happy customers",
      highlight: "4.9/5 Rating",
      color: "bg-brand-yellow"
    }
  ];

  const paymentMethods = [
    { name: "Cash on Delivery", primary: true, icon: "💵" },
    { name: "Credit Cards", primary: false, icon: "💳" },
    { name: "Digital Wallets", primary: false, icon: "📱" },
    { name: "Bank Transfer", primary: false, icon: "🏦" }
  ];

  const serviceAreas = [
    "Downtown District",
    "Westside Area", 
    "East End Zone",
    "Suburban Region",
    "Business District",
    "University Campus"
  ];

  const certifications = [
    { name: "Health Department A+ Rating", icon: "🏥" },
    { name: "ISO 22000 Food Safety", icon: "🛡️" },
    { name: "Halal Certified", icon: "🕌" },
    { name: "Organic Ingredients", icon: "🌱" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
            Why Choose <span className="text-brand-red">FastBite</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to delivering excellence in every aspect of our service
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className={`${feature.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-montserrat-bold text-brand-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Badge className="bg-brand-yellow text-brand-black font-bold">
                  {feature.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="mb-16">
          <h3 className="text-3xl font-montserrat-bold text-brand-black text-center mb-8">
            Convenient <span className="text-brand-red">Payment</span> Options
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 text-center shadow-md border-2 transition-all duration-300 hover:shadow-lg ${
                method.primary ? 'border-brand-red bg-gradient-to-br from-brand-red/5 to-brand-orange/5' : 'border-gray-200 hover:border-brand-yellow'
              }`}>
                <div className="text-4xl mb-3">{method.icon}</div>
                <h4 className="font-montserrat-bold text-brand-black">{method.name}</h4>
                {method.primary && (
                  <Badge className="bg-brand-red text-white mt-2 text-xs">
                    Most Popular
                  </Badge>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-lg text-gray-600">
              <span className="text-brand-red font-bold">Cash on Delivery</span> is our most popular payment method - 
              pay when your delicious food arrives!
            </p>
          </div>
        </div>

        {/* Service Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Coverage Areas */}
          <div>
            <h3 className="text-3xl font-montserrat-bold text-brand-black mb-6">
              We <span className="text-brand-red">Deliver</span> Everywhere
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-brand-red flex-shrink-0" />
                  <span className="font-medium text-brand-black">{area}</span>
                </div>
              ))}
            </div>
            <div className="bg-brand-yellow/10 p-6 rounded-xl">
              <h4 className="font-montserrat-bold text-brand-black mb-2">Delivery Information</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Delivery Time:</strong> 20-30 minutes</li>
                <li>• <strong>Delivery Fee:</strong> $2.99 (FREE over $25)</li>
                <li>• <strong>Service Hours:</strong> 24/7 Available</li>
                <li>• <strong>Coverage Radius:</strong> 15 miles from restaurant</li>
              </ul>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-montserrat-bold text-brand-black mb-4 text-center">Our Service Area</h4>
            <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-brand-red mx-auto mb-4" />
                <p className="text-lg font-montserrat-bold text-brand-black">FastBite Restaurant</p>
                <p className="text-gray-600">123 Main Street, Food District</p>
                <Badge className="bg-brand-red text-white mt-2">
                  📍 We're Here!
                </Badge>
              </div>
              {/* Service radius circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-brand-red/30 rounded-full animate-pulse"></div>
                <div className="absolute w-48 h-48 border-4 border-brand-orange/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Trust */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-3xl font-montserrat-bold text-brand-black text-center mb-8">
            <span className="text-brand-red">Certified</span> & Trusted
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <p className="font-medium text-brand-black text-sm">{cert.name}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-brand-red/10 to-brand-orange/10 p-6 rounded-xl">
              <Award className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h4 className="text-xl font-montserrat-bold text-brand-black mb-2">
                Winner: Best Fast Food Restaurant 2023
              </h4>
              <p className="text-gray-600">
                Awarded by the National Food & Restaurant Association
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Experience the difference quality and service make!
          </p>
          <Button 
            size="lg" 
            className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-scale"
          >
            🚀 Order Now & Taste Excellence!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantFeaturesSection;
