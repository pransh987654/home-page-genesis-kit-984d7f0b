
import { ChevronLeft, ChevronRight, User, Users, Briefcase, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const WhoCanTalkSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const situations = [
    {
      text: "If you're married but feel unseen in your relationship...",
      icon: Home,
      color: "from-pink-400 to-pink-500"
    },
    {
      text: "If you're struggling with family expectations...",
      icon: Users,
      color: "from-blue-400 to-blue-500"
    },
    {
      text: "If you're questioning your life choices...",
      icon: User,
      color: "from-purple-400 to-purple-500"
    },
    {
      text: "If you're dealing with work stress and burnout...",
      icon: Briefcase,
      color: "from-orange-400 to-orange-500"
    },
    {
      text: "If you're facing a major life transition...",
      icon: ArrowRight,
      color: "from-green-400 to-green-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % situations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + situations.length) % situations.length);
  };

  return (
    <section id="who-can-talk" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Enhanced background graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-100 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-16 relative">
          WHO CAN TALK TO US
          {/* Decorative underline */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-r ${situations[currentSlide].color} rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300`}>
            {/* Enhanced background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between relative z-10">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex-1 px-4 flex items-center justify-center space-x-6">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <situations[currentSlide].icon className="w-12 h-12 text-white flex-shrink-0" />
                </div>
                <p className="text-xl md:text-2xl text-white font-medium">
                  {situations[currentSlide].text}
                </p>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mb-12">
            {situations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-teal-500 scale-125 shadow-lg' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Additional visual elements */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 opacity-60">
            {situations.map((situation, index) => (
              <div key={index} className={`bg-gradient-to-br ${situation.color} p-4 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                <situation.icon className="w-8 h-8 text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanTalkSection;
