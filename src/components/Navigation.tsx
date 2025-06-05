
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-teal-500 text-white px-3 py-1 rounded-md font-semibold text-lg">
            YouCanSay
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-teal-600 transition-colors">
            How it Works
          </a>
          <a href="#who-can-talk" className="text-gray-600 hover:text-teal-600 transition-colors">
            Who Can Talk
          </a>
          <a href="#become-listener" className="text-gray-600 hover:text-teal-600 transition-colors">
            Become a Listener
          </a>
          <a href="#contact" className="text-gray-600 hover:text-teal-600 transition-colors">
            Contact
          </a>
        </div>

        <Button className="bg-teal-500 hover:bg-teal-600 text-white">
          Speak to Us Now
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
