
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I felt seen for the first time in years.",
      author: "R.M.",
      rating: 5
    },
    {
      quote: "My listener held space for things I had never spoken out loud.",
      author: "Nita",
      rating: 5
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
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in relative group"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-teal-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              
              <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Star rating */}
              <div className="flex justify-center space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-lg text-gray-600 font-medium">
                — {testimonial.author}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-teal-200 rounded-full opacity-20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border border-yellow-200 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
