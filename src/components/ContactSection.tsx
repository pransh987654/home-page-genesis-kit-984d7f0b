
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, Heart } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-8">
              CONTACT US
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl text-gray-800 font-medium">
                    We are here. Really here.
                  </p>
                  <p className="text-gray-600 mt-1">
                    Available when you need us most
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MessageCircle className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-700">
                    Whether you want to talk, ask, share or join — write to us.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-8 h-8 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-700">
                    We read every word with care.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-8 right-8 w-24 h-24 border-2 border-teal-200 rounded-full opacity-30"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-yellow-200 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gray-300 rounded-full opacity-20"></div>
            </div>
            
            <div className="relative z-10 h-64 bg-white/50 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-inner">
              <div className="flex space-x-4 mb-4">
                <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-teal-600" />
                </div>
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <p className="text-gray-600 text-center text-lg">
                Two people in conversation<br/>
                <span className="text-sm text-gray-500">A safe space for sharing</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
