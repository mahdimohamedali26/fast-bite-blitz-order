
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InteractiveMenuSection from "@/components/InteractiveMenuSection";
import AboutSummarySection from "@/components/AboutSummarySection";
import RestaurantFeaturesSection from "@/components/RestaurantFeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-14 md:pt-16 lg:pt-19">
        <HeroSection />
        <InteractiveMenuSection />
        <AboutSummarySection />
        <RestaurantFeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
