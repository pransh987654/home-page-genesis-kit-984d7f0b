
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
      {/* Enhanced animated background graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-100 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating animated shapes */}
        <div className="absolute top-20 right-1/3 w-16 h-16 bg-teal-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-yellow-300/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-purple-300/40 rounded-full animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-16 relative animate-fade-in">
          WHO CAN TALK TO US
          {/* Decorative animated underline */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-full animate-pulse"></div>
          
          {/* Floating sparkles */}
          <div className="absolute -top-4 -left-4 w-3 h-3 bg-teal-400 rounded-full animate-ping"></div>
          <div className="absolute -top-2 -right-6 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-r ${situations[currentSlide].color} rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-500 animate-fade-in`}>
            {/* Enhanced background decoration with animations */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-white rounded-full animate-bounce"></div>
            </div>
            
            <div className="flex items-center justify-between relative z-10">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-fade-in"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6 animate-pulse" />
              </Button>
              
              <div className="flex-1 px-4 flex items-center justify-center space-x-6 animate-fade-in">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <situations[currentSlide].icon className="w-12 h-12 text-white flex-shrink-0 animate-pulse" />
                </div>
                <p className="text-xl md:text-2xl text-white font-medium animate-fade-in">
                  {situations[currentSlide].text}
                </p>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 animate-fade-in"
                onClick={nextSlide}
              >
                <ChevronRight className="w-6 h-6 animate-pulse" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mb-12">
            {situations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide ? 'bg-teal-500 scale-125 shadow-lg animate-pulse' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* Enhanced animated visual elements */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 opacity-60">
            {situations.map((situation, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${situation.color} p-4 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-fade-in hover:shadow-lg`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <situation.icon className="w-8 h-8 text-white animate-pulse" style={{ animationDelay: `${index * 0.3}s` }} />
              </div>
            ))}
          </div>
          
          {/* New animated connection lines */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-yellow-400 rounded animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 rounded animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanTalkSection;
