
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          No judgment. No advice. No fixing.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Just a space to breathe, speak, and be heard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
          >
            Speak to Us Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all"
          >
            Become a Listener
          </Button>
        </div>

        <p className="text-white/70 mt-8 text-lg italic">
          "Because sometimes, all a heart needs is to be heard."
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
