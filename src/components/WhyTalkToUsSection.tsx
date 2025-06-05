
import { Shield, Heart, Ear, Lightbulb } from "lucide-react";

const WhyTalkToUsSection = () => {
  const reasons = [
    {
      text: "You do not want to burden friends or family",
      icon: Shield,
      gradient: "from-blue-400 to-blue-500"
    },
    {
      text: "You are overwhelmed, confused or lost", 
      icon: Lightbulb,
      gradient: "from-purple-400 to-purple-500"
    },
    {
      text: "You are holding something inside for too long",
      icon: Heart,
      gradient: "from-pink-400 to-pink-500"
    },
    {
      text: "You just want to speak freely and be heard",
      icon: Ear,
      gradient: "from-green-400 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/10 rounded-full"></div>
            <div className="absolute top-1/2 left-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10 text-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              WHY TALK TO US
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Because you are tired of pretending.
            </p>
            <p className="text-xl text-white/90 mb-6">
              Because even the strongest need somewhere to fall.
            </p>
            <p className="text-2xl text-white font-semibold">
              Because ...
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${reason.gradient} text-white p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 animate-fade-in shadow-lg hover:shadow-xl group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <reason.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-medium leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTalkToUsSection;
