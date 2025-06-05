
import { Button } from "@/components/ui/button";

const BecomeListenerSection = () => {
  return (
    <section id="become-listener" className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          BECOME A LISTENER
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6 mb-12">
          <p className="text-xl md:text-2xl text-white/90">
            If you know the power of holding space, come hold it with us.
          </p>
          <p className="text-lg md:text-xl text-white/80">
            You do not need to be a therapist.
          </p>
          <p className="text-lg md:text-xl text-white/80">
            Just someone who can sit with someone else's storm without trying to stop the rain.
          </p>
        </div>

        <Button 
          size="lg" 
          className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
        >
          Join as a Listener
        </Button>
      </div>
    </section>
  );
};

export default BecomeListenerSection;
