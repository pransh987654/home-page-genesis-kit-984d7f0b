
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 bg-teal-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Icon cluster above title */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="bg-teal-500/20 p-4 rounded-full backdrop-blur-sm">
            <Heart className="w-8 h-8 text-teal-300" />
          </div>
          <div className="bg-yellow-400/20 p-4 rounded-full backdrop-blur-sm">
            <MessageCircle className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="bg-teal-400/20 p-4 rounded-full backdrop-blur-sm">
            <Users className="w-8 h-8 text-teal-200" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          No judgment. No advice. No fixing.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Just a space to breathe, speak, and be heard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            Speak to Us Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all shadow-lg"
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
