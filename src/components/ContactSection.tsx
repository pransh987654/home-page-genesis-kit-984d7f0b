
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, Heart, Send, Clock, Shield } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background graphics */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-teal-100 to-yellow-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-yellow-100 to-teal-100 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Mail className="w-8 h-8 text-teal-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-teal-600">
                CONTACT US
              </h2>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-teal-100 p-3 rounded-full group-hover:bg-teal-200 transition-colors duration-300">
                  <Heart className="w-8 h-8 text-teal-500 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-xl text-gray-800 font-medium">
                    We are here. Really here.
                  </p>
                  <p className="text-gray-600 mt-1">
                    Available when you need us most
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-yellow-100 p-3 rounded-full group-hover:bg-yellow-200 transition-colors duration-300">
                  <MessageCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    Whether you want to talk, ask, share or join — write to us.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-purple-600 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-lg text-gray-700">
                    We read every word with care and complete confidentiality.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Get in Touch
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-lg hover:scale-105 transition-all duration-300 group"
              >
                <Clock className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book a Session
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-xl">
            {/* Enhanced decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-8 right-8 w-24 h-24 border-2 border-teal-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-2 border-yellow-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gray-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-4 left-4 w-4 h-4 bg-teal-300 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-yellow-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
            </div>
            
            <div className="relative z-10 h-64 bg-white/50 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-inner">
              <div className="flex space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-600 text-center text-lg mb-2">
                A safe space for sharing
              </p>
              <p className="text-gray-500 text-center text-sm">
                Private • Confidential • Supportive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
