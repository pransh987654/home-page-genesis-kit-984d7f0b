
import { Clock, MessageCircle, Heart } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Choose a time",
      subtitle: "Pick a slot that suits you.",
      description: "We are here when you need us.",
      bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-500",
      icon: Clock,
      iconColor: "text-yellow-800"
    },
    {
      title: "Speak your heart",
      subtitle: "On call or chat.",
      description: "Say it all or say nothing.",
      bgColor: "bg-gradient-to-br from-teal-400 to-teal-500",
      icon: MessageCircle,
      iconColor: "text-teal-800"
    },
    {
      title: "Walk away lighter",
      subtitle: "No records. No advice.",
      description: "Just release.",
      bgColor: "bg-gradient-to-br from-yellow-300 to-yellow-400",
      icon: Heart,
      iconColor: "text-yellow-800"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-600 mb-16">
          HOW IT WORKS
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-in group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`${step.bgColor} rounded-3xl p-8 mb-6 mx-auto max-w-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-16 h-16 border-2 border-current rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-current rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <step.icon className={`w-16 h-16 mx-auto mb-4 ${step.iconColor}`} />
                  <div className="text-2xl font-bold text-gray-800">{index + 1}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-1">{step.subtitle}</p>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Connection lines between steps */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="flex items-center space-x-4 max-w-4xl">
            <div className="flex-1 h-1 bg-gradient-to-r from-yellow-400 to-teal-400 rounded"></div>
            <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
            <div className="flex-1 h-1 bg-gradient-to-r from-teal-400 to-yellow-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
