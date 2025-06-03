
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for contacting FastBite! We'll respond within 2 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const operatingHours = [
    { day: "Monday - Thursday", hours: "10:00 AM - 11:00 PM", status: "Open" },
    { day: "Friday - Saturday", hours: "10:00 AM - 12:00 AM", status: "Open" },
    { day: "Sunday", hours: "11:00 AM - 10:00 PM", status: "Open" },
    { day: "Delivery Service", hours: "24/7", status: "Always Available" }
  ];

  const branches = [
    {
      name: "Main Branch",
      address: "123 Main Street, Food District, City 12345",
      phone: "(123) 456-7890",
      email: "main@fastbite.com",
      manager: "Sarah Johnson",
      features: ["Dine-in", "Takeout", "Delivery", "Drive-thru"]
    },
    {
      name: "Downtown Branch",
      address: "456 Downtown Avenue, City Center, City 67890",
      phone: "(123) 456-7891", 
      email: "downtown@fastbite.com",
      manager: "Mike Rodriguez",
      features: ["Dine-in", "Takeout", "Delivery"]
    }
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", handle: "@FastBiteOfficial", followers: "25K" },
    { name: "Instagram", icon: "📷", handle: "@FastBiteFood", followers: "18K" },
    { name: "Twitter", icon: "🐦", handle: "@FastBiteEats", followers: "12K" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-red to-brand-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-arial-black mb-4">
            Get in <span className="text-brand-yellow">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            We're here to help! Contact us anytime for orders, questions, or feedback
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-brand-yellow text-brand-black font-bold text-lg px-6 py-2">
              📞 24/7 Customer Support
            </Badge>
            <Badge className="bg-white text-brand-red font-bold text-lg px-6 py-2">
              ⚡ 2-Hour Response Guarantee
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-brand-yellow/10 to-brand-orange/10">
                <CardTitle className="text-3xl font-montserrat-bold text-brand-black flex items-center">
                  <MessageCircle className="w-8 h-8 text-brand-red mr-3" />
                  Send Us a Message
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 2 hours!
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-2 border-brand-yellow focus:border-brand-red"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-2 border-brand-yellow focus:border-brand-red"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-2 border-brand-yellow focus:border-brand-red"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                        <SelectTrigger className="border-2 border-brand-yellow focus:border-brand-red">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">Order Inquiry</SelectItem>
                          <SelectItem value="delivery">Delivery Issue</SelectItem>
                          <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                          <SelectItem value="catering">Catering Services</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="border-2 border-brand-yellow focus:border-brand-red min-h-32"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-lg py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            
            {/* Quick Contact */}
            <Card className="bg-gradient-to-br from-brand-red to-brand-orange text-white shadow-xl border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-montserrat-bold mb-6">Quick Order Hotline</h3>
                <div className="space-y-4">
                  <a href="tel:+1234567890" className="block">
                    <div className="text-4xl font-arial-black text-brand-yellow mb-2">
                      (123) 456-7890
                    </div>
                    <p className="text-lg">Call now for instant ordering!</p>
                  </a>
                  
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-lg font-bold mb-2">🚚 Delivery Available 24/7</p>
                    <p className="text-sm">Average delivery time: 25 minutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat-bold text-brand-black flex items-center">
                  <Clock className="w-6 h-6 text-brand-red mr-2" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {operatingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <div>
                      <div className="font-medium text-brand-black">{schedule.day}</div>
                      <div className="text-sm text-gray-600">{schedule.hours}</div>
                    </div>
                    <Badge className={`${
                      schedule.status === "Always Available" 
                        ? "bg-brand-yellow text-brand-black" 
                        : "bg-brand-red text-white"
                    } text-xs`}>
                      {schedule.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl font-montserrat-bold text-brand-black">
                  Follow Our Delicious Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-brand-yellow/10 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{social.icon}</span>
                      <div>
                        <div className="font-medium text-brand-black">{social.handle}</div>
                        <div className="text-sm text-gray-600">{social.followers} followers</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                      Follow
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location & Map Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-montserrat-bold text-brand-black text-center mb-12">
            Visit Our <span className="text-brand-red">Locations</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Branch Information */}
            <div className="space-y-8">
              {branches.map((branch, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-brand-yellow/10 to-brand-orange/10">
                    <CardTitle className="text-2xl font-montserrat-bold text-brand-black">
                      {branch.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-medium text-brand-black">Address</p>
                          <p className="text-gray-600">{branch.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-brand-red" />
                        <div>
                          <p className="font-medium text-brand-black">Phone</p>
                          <a href={`tel:${branch.phone}`} className="text-brand-red hover:text-brand-red/80">
                            {branch.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-brand-red" />
                        <div>
                          <p className="font-medium text-brand-black">Email</p>
                          <a href={`mailto:${branch.email}`} className="text-brand-red hover:text-brand-red/80">
                            {branch.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="font-medium text-brand-black mb-2">Manager: {branch.manager}</p>
                        <div className="flex flex-wrap gap-2">
                          {branch.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 h-96 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-brand-red mx-auto mb-4" />
                  <h3 className="text-2xl font-montserrat-bold text-brand-black mb-2">
                    Interactive Map
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Find our locations and plan your visit
                  </p>
                  <Button className="bg-brand-red text-white hover:bg-brand-red/90">
                    Open in Google Maps
                  </Button>
                </div>
                
                {/* Animated location pins */}
                <div className="absolute top-20 left-20 w-4 h-4 bg-brand-red rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-20 right-20 w-4 h-4 bg-brand-red rounded-full animate-pulse shadow-lg" style={{ animationDelay: '1s' }}></div>
              </div>
              
              <div className="p-6">
                <h4 className="font-montserrat-bold text-brand-black mb-4">Service Coverage Areas</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">✓ Downtown District</p>
                    <p className="font-medium">✓ Westside Area</p>
                    <p className="font-medium">✓ East End Zone</p>
                  </div>
                  <div>
                    <p className="font-medium">✓ Suburban Region</p>
                    <p className="font-medium">✓ Business District</p>
                    <p className="font-medium">✓ University Campus</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-brand-yellow/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Free Delivery:</strong> Orders over $25 within 15-mile radius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-16 bg-gradient-to-r from-brand-red to-brand-orange text-white rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-montserrat-bold mb-4">
              What Our Customers Say About Our Service
            </h3>
            <div className="flex justify-center items-center space-x-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-brand-yellow fill-current" />
                ))}
              </div>
              <span className="text-2xl font-arial-black">4.9/5</span>
              <span className="text-lg">Based on 50,000+ reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-xl font-bold mb-2">📞 Customer Service</h4>
              <p>"Fast, friendly, and always helpful. They solve problems quickly!"</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">🚚 Delivery Experience</h4>
              <p>"Always on time, food arrives hot, and drivers are courteous."</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">💬 Communication</h4>
              <p>"Great updates about orders, easy to reach, very responsive."</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-montserrat-bold text-brand-black mb-6">
            Ready to Order? <span className="text-brand-red">We're Here to Help!</span>
          </h3>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Button 
              size="lg" 
              className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🍔 Order Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white font-montserrat-bold text-xl px-12 py-6 rounded-full"
            >
              📞 Call Us
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
