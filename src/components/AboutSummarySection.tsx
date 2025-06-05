import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
const AboutSummarySection = () => {
  const stats = [{
    icon: Users,
    number: "50,000+",
    label: "Happy Customers Served",
    color: "text-brand-red"
  }, {
    icon: Clock,
    number: "15+",
    label: "Years in Business",
    color: "text-brand-orange"
  }, {
    icon: Award,
    number: "4.9★",
    label: "Customer Satisfaction",
    color: "text-brand-yellow"
  }, {
    icon: Heart,
    number: "99%",
    label: "Would Recommend",
    color: "text-brand-red"
  }];
  const features = [{
    title: "Farm-Fresh Ingredients",
    description: "We source only the finest, freshest ingredients from local farms",
    icon: "🌱"
  }, {
    title: "Secret Family Recipes",
    description: "Passed down through generations, our recipes are truly unique",
    icon: "👨‍🍳"
  }, {
    title: "Lightning Fast Service",
    description: "30-minute delivery guarantee or your money back",
    icon: "⚡"
  }, {
    title: "Quality You Can Taste",
    description: "Every meal is prepared with love and attention to detail",
    icon: "❤️"
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <Badge className="bg-brand-yellow text-brand-black font-bold mb-6 text-lg px-4 py-2">
              🏆 Award-Winning Fast Food Restaurant
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-6">
              Why <span className="text-brand-red">FastBite</span> is Different
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For over 15 years, we've been serving the most delicious fast food in town. 
              Our commitment to quality, speed, and customer satisfaction has made us the 
              #1 choice for families, students, and professionals alike.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-montserrat-bold text-brand-black mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>)}
            </div>

            {/* Quality Commitment */}
            <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-orange/10 p-6 rounded-xl mb-8">
              <h3 className="font-montserrat-bold text-brand-black text-xl mb-3">Our Quality Promise</h3>
              <p className="text-gray-700">
                "We guarantee that every single meal meets our highest standards. If you're not 
                100% satisfied, we'll make it right. That's the FastBite promise!"
              </p>
              <p className="text-brand-red font-bold mt-2">- Chef Maria Rodriguez, Head Chef</p>
            </div>

            {/* CTA Button */}
            <Link to="/about">
              <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                📖 Learn More About Our Story
              </Button>
            </Link>
          </div>

          {/* Right Side - Statistics and Image */}
          <div className="space-y-8">
            {/* Restaurant Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="FastBite Restaurant Interior" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent"></div>
              <Badge className="absolute bottom-4 left-4 bg-brand-red text-white font-bold">
                Our Modern Kitchen
              </Badge>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:border-brand-red transition-all duration-300 hover:shadow-lg">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-3xl font-arial-black ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>)}
            </div>

            {/* Certifications */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-montserrat-bold text-brand-black text-lg mb-4 text-center">
                Certified & Trusted
              </h3>
              <div className="flex justify-center space-x-4">
                <Badge className="bg-brand-yellow text-brand-black">Health A+ Rating</Badge>
                <Badge className="bg-brand-orange text-white">ISO Certified</Badge>
                <Badge className="bg-brand-red text-white">Food Safety ✓</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Ready to experience the FastBite difference?
          </p>
          <Button size="lg" className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse-scale py-[12px] px-[32px]">🍔 Experience Our Taste -</Button>
        </div>
      </div>
    </section>;
};
export default AboutSummarySection;