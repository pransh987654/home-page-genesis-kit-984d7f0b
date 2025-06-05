
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Users, Sparkles, Globe, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Enhanced floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 bg-teal-400/20 rounded-full animate-pulse">
          <div className="absolute inset-2 bg-teal-300/30 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-3 bg-yellow-300/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-300/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="absolute inset-2 bg-teal-200/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-yellow-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Enhanced icon cluster with more visual depth */}
        <div className="flex justify-center space-x-6 mb-8">
          <div className="bg-teal-500/20 p-4 rounded-full backdrop-blur-sm border border-teal-300/20 hover:scale-110 transition-transform duration-300">
            <Heart className="w-8 h-8 text-teal-300" />
          </div>
          <div className="bg-yellow-400/20 p-4 rounded-full backdrop-blur-sm border border-yellow-300/20 hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
            <MessageCircle className="w-8 h-8 text-yellow-300" />
          </div>
          <div className="bg-teal-400/20 p-4 rounded-full backdrop-blur-sm border border-teal-200/20 hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
            <Users className="w-8 h-8 text-teal-200" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          No judgment. No advice. No fixing.
          <div className="mt-4">
            <Sparkles className="inline w-12 h-12 text-yellow-400 animate-pulse mx-4" />
            <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              Just space
            </span>
            <Sparkles className="inline w-12 h-12 text-teal-400 animate-pulse mx-4" />
          </div>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Just a space to breathe, speak, and be heard.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button 
            size="lg" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 shadow-lg group"
          >
            <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Speak to Us Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all shadow-lg group"
          >
            <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Become a Listener
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-8 text-white/60">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>100% Private</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Available 24/7</span>
          </div>
        </div>

        <p className="text-white/70 mt-8 text-lg italic">
          "Because sometimes, all a heart needs is to be heard."
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
