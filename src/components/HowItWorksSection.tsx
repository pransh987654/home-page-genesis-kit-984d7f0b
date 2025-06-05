
const HowItWorksSection = () => {
  const steps = [
    {
      title: "Choose a time",
      subtitle: "Pick a slot that suits you.",
      description: "We are here when you need us.",
      bgColor: "bg-yellow-400",
      image: "🕐"
    },
    {
      title: "Speak your heart",
      subtitle: "On call or chat.",
      description: "Say it all or say nothing.",
      bgColor: "bg-teal-400",
      image: "💬"
    },
    {
      title: "Walk away lighter",
      subtitle: "No records. No advice.",
      description: "Just release.",
      bgColor: "bg-yellow-300",
      image: "🕊️"
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
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`${step.bgColor} rounded-3xl p-8 mb-6 mx-auto max-w-sm hover:scale-105 transition-transform duration-300`}>
                <div className="text-6xl mb-4">{step.image}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-1">{step.subtitle}</p>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
