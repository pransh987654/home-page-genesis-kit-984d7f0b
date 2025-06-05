
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-8">
              CONTACT US
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-800 font-medium">
                We are here. Really here.
              </p>
              <p className="text-lg text-gray-700">
                Whether you want to talk, ask, share or join — write to us.
              </p>
              <p className="text-lg text-gray-700">
                We read every word with care.
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
            <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-center">
                Contact image placeholder<br/>
                (Two people in conversation)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
