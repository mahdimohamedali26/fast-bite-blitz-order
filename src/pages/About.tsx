
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Heart, ChefHat, Truck, Shield, Star } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2009", event: "FastBite founded with a dream of perfect fast food" },
    { year: "2012", event: "Reached 10,000 satisfied customers" },
    { year: "2015", event: "Introduced 30-minute delivery guarantee" },
    { year: "2018", event: "Won 'Best Fast Food Restaurant' award" },
    { year: "2020", event: "Launched online ordering platform" },
    { year: "2022", event: "Opened second location downtown" },
    { year: "2023", event: "Served over 1 million meals" },
    { year: "2024", event: "Achieved 4.9★ customer satisfaction rating" }
  ];

  const teamMembers = [
    {
      name: "Chef Maria Rodriguez",
      role: "Head Chef & Co-Founder",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "15+ years of culinary excellence, creator of our signature recipes"
    },
    {
      name: "David Thompson",
      role: "CEO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Passionate about delivering exceptional customer experiences"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      bio: "Ensures every order meets our highest quality standards"
    }
  ];

  const uniqueFeatures = [
    {
      icon: ChefHat,
      title: "Secret Family Recipes",
      description: "Our recipes have been passed down through generations and refined to perfection. Each dish tells a story of tradition and innovation.",
      color: "bg-brand-red"
    },
    {
      icon: Truck,
      title: "Lightning-Fast Delivery",
      description: "Our revolutionary delivery system ensures your food arrives hot and fresh within 30 minutes, or it's completely free.",
      color: "bg-brand-orange"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We source only the finest ingredients from trusted local suppliers and maintain the highest food safety standards.",
      color: "bg-brand-yellow"
    }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Customers" },
    { icon: Clock, number: "15+", label: "Years of Excellence" },
    { icon: Award, number: "25+", label: "Awards Won" },
    { icon: Star, number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-red to-brand-orange text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="bg-brand-yellow text-brand-black font-bold text-lg px-6 py-2 mb-6">
            🏆 Award-Winning Since 2009
          </Badge>
          <h1 className="text-5xl md:text-6xl font-arial-black mb-6">
            Our <span className="text-brand-yellow">Delicious</span> Story
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            From a small family dream to the most beloved fast food restaurant in town - 
            discover the passion, quality, and dedication behind every meal we serve.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-montserrat-bold text-brand-black mb-6">
                The <span className="text-brand-red">FastBite</span> Journey
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  It all started in 2009 when Maria Rodriguez, a passionate chef with generations of family recipes, 
                  met David Thompson, a customer service enthusiast who believed that great food should be accessible 
                  to everyone, everywhere.
                </p>
                <p>
                  Together, they founded FastBite with a simple mission: to serve the most delicious fast food 
                  while never compromising on quality, speed, or customer satisfaction. What began as a small 
                  local restaurant has grown into the community's favorite dining destination.
                </p>
                <p>
                  Today, we're proud to have served over 1 million meals to more than 50,000 satisfied customers, 
                  maintaining our commitment to fresh ingredients, secret family recipes, and lightning-fast delivery 
                  that has earned us a 4.9-star rating.
                </p>
              </div>
              
              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-lg px-8 py-4 rounded-full"
                >
                  🍽️ Experience Our Taste Today!
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="FastBite Restaurant Interior"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Our Kitchen"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
              What Makes Us <span className="text-brand-red">Special</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every aspect of FastBite is designed around one goal: delivering an exceptional experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {uniqueFeatures.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`${feature.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-montserrat-bold text-brand-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quality Commitment */}
          <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-orange/10 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-montserrat-bold text-brand-black mb-4">
                Our Quality <span className="text-brand-red">Commitment</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-montserrat-bold text-brand-black text-lg mb-4">🌱 Fresh Ingredients</h4>
                <p className="text-gray-700 mb-6">
                  We partner with local farms and trusted suppliers to source only the freshest, highest-quality 
                  ingredients. Every vegetable is crisp, every meat is premium, and every sauce is made fresh daily.
                </p>
                
                <h4 className="font-montserrat-bold text-brand-black text-lg mb-4">👨‍🍳 Artisan Cooking Methods</h4>
                <p className="text-gray-700">
                  Our chefs use time-honored cooking techniques combined with modern equipment to ensure 
                  consistent perfection in every dish. Each meal is prepared to order with attention to detail.
                </p>
              </div>
              
              <div>
                <h4 className="font-montserrat-bold text-brand-black text-lg mb-4">🛡️ Food Safety Excellence</h4>
                <p className="text-gray-700 mb-6">
                  We maintain the highest food safety standards with regular health inspections, proper storage, 
                  and rigorous hygiene protocols. Your safety is our top priority.
                </p>
                
                <h4 className="font-montserrat-bold text-brand-black text-lg mb-4">⚡ Speed Without Compromise</h4>
                <p className="text-gray-700">
                  Our streamlined kitchen operations and delivery system ensure fast service without ever 
                  compromising on quality. Fresh, delicious food delivered in 30 minutes or less.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
              Our <span className="text-brand-red">Journey</span> Through Time
            </h2>
            <p className="text-xl text-gray-600">Major milestones that shaped FastBite into what it is today</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand-red"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-brand-red">
                      <div className="text-2xl font-arial-black text-brand-red mb-2">{milestone.year}</div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-brand-red rounded-full relative z-10 border-4 border-white"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
              Meet Our <span className="text-brand-red">Amazing</span> Team
            </h2>
            <p className="text-xl text-gray-600">The passionate people behind your delicious meals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-xl font-montserrat-bold text-white">{member.name}</h3>
                    <p className="text-brand-yellow font-medium">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-arial-black mb-4">
              Our <span className="text-brand-yellow">Success</span> in Numbers
            </h2>
            <p className="text-xl text-gray-300">These numbers represent our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-brand-yellow mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-arial-black text-brand-yellow mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-red to-brand-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-arial-black mb-6">
            Ready to <span className="text-brand-yellow">Experience</span> Our Taste?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our family of satisfied customers and discover why FastBite is the most beloved 
            fast food restaurant in town. Your perfect meal is just 30 minutes away!
          </p>
          
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-montserrat-bold text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🍔 Order Now & Taste Excellence!
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-red font-montserrat-bold text-xl px-12 py-6 rounded-full"
            >
              📍 Visit Our Restaurant
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-lg mb-2">🚚 Fast Delivery</h4>
              <p>30-minute guarantee or it's free</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">⭐ Top Rated</h4>
              <p>4.9/5 stars from 50,000+ customers</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">💰 Great Value</h4>
              <p>Competitive prices, exceptional quality</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
