
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteractiveMenuSection from "@/components/InteractiveMenuSection";
import SpecialOffersSection from "@/components/SpecialOffersSection";
import CustomerReviewsSection from "@/components/CustomerReviewsSection";
import AboutSummarySection from "@/components/AboutSummarySection";
import RestaurantFeaturesSection from "@/components/RestaurantFeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <InteractiveMenuSection />
      <SpecialOffersSection />
      <CustomerReviewsSection />
      <AboutSummarySection />
      <RestaurantFeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
