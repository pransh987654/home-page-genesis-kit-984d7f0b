
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="bg-teal-500 text-white px-4 py-2 rounded-md font-semibold text-xl">
            YouCanSay
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="bg-teal-500 p-3 rounded-full hover:bg-teal-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="bg-teal-500 p-3 rounded-full hover:bg-teal-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-teal-500 p-3 rounded-full hover:bg-teal-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="bg-teal-500 p-3 rounded-full hover:bg-teal-600 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 YouCanSay. All rights reserved.</p>
            <p className="mt-2 italic">"Because sometimes, all a heart needs is to be heard."</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
