
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const CustomerReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      review: "Absolutely incredible! The FastBite Supreme Burger is hands down the best burger I've ever had. The meat is perfectly seasoned, the bun is fresh, and that special sauce is just magical. Delivery was exactly 25 minutes as promised!",
      location: "Downtown",
      orderFrequency: "Regular Customer - 23 orders"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      review: "I've tried every pizza place in town, but FastBite's pepperoni pizza is on another level. The crust is perfectly crispy, the cheese is generous, and the pepperoni has that perfect spice. Fast delivery and always hot!",
      location: "Westside",
      orderFrequency: "VIP Customer - 45+ orders"
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      review: "As a busy mom, FastBite is a lifesaver! The food quality is amazing, kids absolutely love the chicken nuggets, and the 30-minute delivery guarantee has never failed us. Customer service is outstanding too!",
      location: "Suburbs",
      orderFrequency: "Family Plan - 31 orders"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      review: "Working late nights, I rely on FastBite for dinner. The BBQ Bacon Burger is phenomenal - the bacon is crispy, BBQ sauce is tangy, and those onion rings on top are genius! Never disappoints, even at 11 PM.",
      location: "Business District",
      orderFrequency: "Night Owl - 38 orders"
    },
    {
      id: 5,
      name: "Lisa Martinez",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      review: "The variety and quality at FastBite is unmatched. From their crispy chicken to fresh salads, everything is delicious. The mobile app makes ordering so easy, and the loyalty points are a great bonus!",
      location: "East End",
      orderFrequency: "Loyalty Member - 52 orders"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const review = reviews[currentReview];

  return (
    <section className="py-16 bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-arial-black text-brand-black mb-4">
            What Our <span className="text-brand-red">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Over 50,000 satisfied customers can't be wrong!
          </p>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-arial-black text-brand-red mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
              ))}
            </div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-arial-black text-brand-red mb-2">50K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-arial-black text-brand-red mb-2">98%</div>
            <div className="text-sm text-gray-600">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-arial-black text-brand-red mb-2">24/7</div>
            <div className="text-sm text-gray-600">Customer Support</div>
          </div>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Customer Photo */}
                <div className="flex-shrink-0 text-center">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-brand-yellow shadow-lg"
                  />
                  <Badge className="bg-brand-red text-white mt-4 text-xs">
                    Verified Customer
                  </Badge>
                </div>

                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-brand-yellow fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{review.review}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="space-y-2">
                    <div className="text-xl font-montserrat-bold text-brand-black">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.location} • {review.orderFrequency}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button 
              variant="outline" 
              size="sm"
              onClick={prevReview}
              className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview ? 'bg-brand-red scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={nextReview}
              className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Join our community of satisfied customers!</p>
          <div className="flex justify-center space-x-4 mb-8">
            <Badge className="bg-brand-yellow text-brand-black font-bold px-4 py-2">
              Google Reviews: 4.9★
            </Badge>
            <Badge className="bg-brand-orange text-white font-bold px-4 py-2">
              Facebook: 4.8★
            </Badge>
            <Badge className="bg-brand-red text-white font-bold px-4 py-2">
              Yelp: 4.9★
            </Badge>
          </div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-brand-red hover:bg-brand-red/90 text-white font-montserrat-bold text-xl px-12 py-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🌟 Join Our Happy Customers - Order Now!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
