
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhoCanTalkSection = () => {
  const situations = [
    "If you're married but feel unseen in your relationship...",
    "If you're struggling with family expectations...",
    "If you're questioning your life choices...",
    "If you're dealing with work stress and burnout...",
    "If you're facing a major life transition..."
  ];

  return (
    <section id="who-can-talk" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-16">
          WHO CAN TALK TO US
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-teal-400 rounded-2xl p-8 mb-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-700/10">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <p className="text-xl md:text-2xl text-gray-800 font-medium px-4 flex-1">
                If you're married but feel unseen in your relationship...
              </p>
              
              <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-700/10">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mb-12">
            {Array.from({ length: 5 }).map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-teal-500' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanTalkSection;
