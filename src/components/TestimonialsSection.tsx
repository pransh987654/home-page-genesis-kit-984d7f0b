
import { Quote, Star, Heart, User } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I felt seen for the first time in years.",
      author: "R.M.",
      rating: 5,
      color: "from-teal-400 to-teal-500"
    },
    {
      quote: "My listener held space for things I had never spoken out loud.",
      author: "Nita",
      rating: 5,
      color: "from-purple-400 to-purple-500"
    },
    {
      quote: "No judgment, just pure understanding. Exactly what I needed.",
      author: "Alex",
      rating: 5,
      color: "from-blue-400 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-teal-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-yellow-200/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-200/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Heart className="w-8 h-8 text-teal-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            TESTIMONIALS
          </h2>
          <Heart className="w-8 h-8 text-yellow-500" />
        </div>
        
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Real voices, real healing, real connection
        </p>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in relative group transform hover:scale-105"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Enhanced quote design */}
              <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center shadow-lg`}>
                <Quote className="w-6 h-6 text-white" />
              </div>
              
              <div className="pt-6">
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Enhanced star rating with animation */}
                <div className="flex justify-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-5 h-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-200" 
                      style={{ animationDelay: `${starIndex * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-600 font-medium">
                    — {testimonial.author}
                  </p>
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-teal-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border border-yellow-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute top-1/2 right-8 w-2 h-2 bg-teal-300 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex justify-center items-center space-x-8 text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
            <span>1000+ Lives Touched</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span>5-Star Experiences</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span>Safe & Confidential</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
