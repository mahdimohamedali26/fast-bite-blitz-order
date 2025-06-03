
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Full Menu", path: "/menu" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Order Online", path: "/menu" },
    { name: "Delivery Areas", path: "/contact" }
  ];

  const operatingHours = [
    { day: "Monday - Thursday", hours: "10:00 AM - 11:00 PM" },
    { day: "Friday - Saturday", hours: "10:00 AM - 12:00 AM" },
    { day: "Sunday", hours: "11:00 AM - 10:00 PM" },
    { day: "Delivery", hours: "24/7 Available!" }
  ];

  const branches = [
    {
      name: "Main Branch",
      address: "123 Main Street, Food District",
      phone: "(123) 456-7890"
    },
    {
      name: "Downtown Branch", 
      address: "456 Downtown Ave, City Center",
      phone: "(123) 456-7891"
    }
  ];

  return (
    <footer className="bg-brand-black text-white">
      {/* Newsletter Section */}
      <div className="bg-brand-red py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-montserrat-bold mb-4">
            🍔 Stay Hungry for Deals!
          </h3>
          <p className="text-xl mb-6">
            Subscribe to get exclusive offers, new menu updates, and special discounts!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email for delicious deals..."
              className="bg-white text-brand-black border-0"
            />
            <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange font-bold px-8">
              Get Deals! 🎯
            </Button>
          </div>
          <p className="text-sm mt-4 opacity-90">
            Join 25,000+ subscribers and never miss a tasty deal!
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-brand-red text-white p-3 rounded-full">
                    <span className="text-2xl font-arial-black">FB</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat-bold">FastBite</h3>
                    <p className="text-brand-yellow text-sm">Delicious & Fast</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  The most delicious fast food in town! We've been serving amazing 
                  taste with lightning-fast delivery for over 15 years.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-montserrat-bold text-lg mb-4">Follow Our Delicious Journey</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="text-brand-yellow border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">
                    📘 Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="text-brand-yellow border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">
                    📷 Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="text-brand-yellow border-brand-yellow hover:bg-brand-yellow hover:text-brand-black">
                    🐦 Twitter
                  </Button>
                </div>
              </div>

              {/* App Download */}
              <div>
                <h4 className="font-montserrat-bold text-lg mb-4">Download Our App</h4>
                <div className="space-y-2">
                  <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange w-full">
                    📱 Download for iOS
                  </Button>
                  <Button className="bg-brand-yellow text-brand-black hover:bg-brand-orange w-full">
                    🤖 Download for Android
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-montserrat-bold text-lg mb-6 text-brand-yellow">Quick Navigation</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index}
                    to={link.path}
                    className="block text-gray-300 hover:text-brand-yellow transition-colors duration-300 font-medium"
                  >
                    → {link.name}
                  </Link>
                ))}
              </div>

              {/* Customer Service */}
              <div className="mt-8">
                <h5 className="font-montserrat-bold text-brand-yellow mb-4">Need Help?</h5>
                <div className="space-y-2 text-gray-300">
                  <p>📞 Customer Service: 24/7</p>
                  <p>📧 Email Support: Fast Response</p>
                  <p>💬 Live Chat: Available</p>
                </div>
              </div>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="font-montserrat-bold text-lg mb-6 text-brand-yellow">Operating Hours</h4>
              <div className="space-y-3">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className={`font-bold ${schedule.day === "Delivery" ? "text-brand-yellow" : "text-white"}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 bg-brand-red/20 p-4 rounded-lg">
                <h5 className="font-montserrat-bold text-brand-yellow mb-2">Order Hotline</h5>
                <a href="tel:+1234567890" className="text-2xl font-arial-black text-brand-yellow hover:text-white transition-colors">
                  (123) 456-7890
                </a>
                <p className="text-xs text-gray-300 mt-1">Call now for instant ordering!</p>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-montserrat-bold text-lg mb-6 text-brand-yellow">Our Locations</h4>
              
              {branches.map((branch, index) => (
                <div key={index} className="mb-6 p-4 bg-gray-900 rounded-lg">
                  <h5 className="font-montserrat-bold text-white mb-2">{branch.name}</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{branch.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-brand-yellow" />
                      <a href={`tel:${branch.phone}`} className="text-brand-yellow hover:text-white transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Rating Display */}
              <div className="bg-brand-yellow/10 p-4 rounded-lg">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-brand-yellow fill-current" />
                  <span className="text-xl font-arial-black text-brand-yellow">4.9/5</span>
                </div>
                <p className="text-xs text-gray-300 text-center">
                  Based on 50,000+ customer reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 FastBite Restaurant. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Serving delicious fast food since 2009 🍔
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-brand-yellow text-brand-black text-xs">
                SSL Secured
              </Badge>
              <Badge className="bg-brand-orange text-white text-xs">
                Health A+ Rated
              </Badge>
              <Badge className="bg-brand-red text-white text-xs">
                ISO Certified
              </Badge>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-yellow transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
