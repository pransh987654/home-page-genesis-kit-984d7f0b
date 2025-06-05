
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I felt seen for the first time in years.",
      author: "R.M."
    },
    {
      quote: "My listener held space for things I had never spoken out loud.",
      author: "Nita"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
          TESTIMONIALS
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <p className="text-xl md:text-2xl text-gray-700 italic mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-lg text-gray-600 font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
