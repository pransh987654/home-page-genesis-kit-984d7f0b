
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
    <section id="who-can-talk" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-16">
          WHO CAN TALK TO US
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-r ${situations[currentSlide].color} rounded-2xl p-8 mb-8 relative overflow-hidden shadow-xl`}>
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between relative z-10">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 transition-colors"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex-1 px-4 flex items-center justify-center space-x-4">
                <situations[currentSlide].icon className="w-12 h-12 text-white flex-shrink-0" />
                <p className="text-xl md:text-2xl text-white font-medium">
                  {situations[currentSlide].text}
                </p>
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white hover:bg-white/20 transition-colors"
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
                  index === currentSlide ? 'bg-teal-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanTalkSection;
