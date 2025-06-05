
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyTalkToUsSection from "@/components/WhyTalkToUsSection";
import WhoCanTalkSection from "@/components/WhoCanTalkSection";
import BecomeListenerSection from "@/components/BecomeListenerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <WhyTalkToUsSection />
      <WhoCanTalkSection />
      <BecomeListenerSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
