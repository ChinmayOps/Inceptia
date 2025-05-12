
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Hackathon 2025</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#prizes" className="text-white/80 hover:text-white transition-colors">Prizes</a>
          <a href="#theme" className="text-white/80 hover:text-white transition-colors">Theme</a>
          <a href="#domains" className="text-white/80 hover:text-white transition-colors">Domains</a>
          <a href="#sponsors" className="text-white/80 hover:text-white transition-colors">Sponsors</a>
          <Button 
            className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
            onClick={() => window.open("https://unstop.com", "_blank")}
          >
            Register Now
            <LogIn className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
