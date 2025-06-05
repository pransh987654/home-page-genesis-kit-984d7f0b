
const WhyTalkToUsSection = () => {
  const reasons = [
    "You do not want to burden friends or family",
    "You are overwhelmed, confused or lost", 
    "You are holding something inside for too long",
    "You just want to speak freely and be heard"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-black/40"></div>
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
              className="bg-teal-500 text-white p-8 rounded-2xl text-center hover:bg-teal-600 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-lg font-medium leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTalkToUsSection;
