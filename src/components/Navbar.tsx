
import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-accent/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="w-6 h-6 text-primary mr-2" />
          <div className="text-2xl font-bold text-white">
            <span className="text-primary">INCEPTIA</span> HACKATHON 2025
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#src\components\Countdown.tsx" className="text-white/80 hover:text-white transition-colors">Timeline</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#domains" className="text-white/80 hover:text-white transition-colors">Domains</a>
          <a href="#prizes" className="text-white/80 hover:text-white transition-colors">Prizes</a>
          <a href="#sponsors" className="text-white/80 hover:text-white transition-colors">Sponsors</a>
          <Button 
            className="bg-primary text-white hover:bg-primary/80"
            onClick={() => window.open("https://unstop.com", "_blank")}
          >
            Assemble Now
            <Zap className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
