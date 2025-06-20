import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 text-white px-4 py-4 border-b border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Shield className="w-6 h-6 text-primary mr-2" />
          <span className="text-xl font-bold">
            <span className="text-primary">INCEPTIA</span> HACKATHON 2025
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#domains" className="text-white/80 hover:text-white transition-colors">Domains</a>
          <a href="#prizes" className="text-white/80 hover:text-white transition-colors">Prizes</a>
          <a href="#sponsors" className="text-white/80 hover:text-white transition-colors">Sponsors</a>
          <Button
            className="bg-primary text-white hover:bg-primary/80"
            onClick={() => window.open("https://forms.gle/fRvHBPCx5o3bpRxq6", "_blank")}
          >
            Assemble Now <Zap className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <a href="#about" className="block text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#domains" className="block text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Domains</a>
          <a href="#prizes" className="block text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Prizes</a>
          <a href="#sponsors" className="block text-white/80 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Sponsors</a>
          <Button
            className="w-full bg-primary text-white hover:bg-primary/80"
            onClick={() => {
              setIsOpen(false);
              window.open("https://forms.gle/fRvHBPCx5o3bpRxq6", "_blank");
            }}
          >
            Assemble Now <Zap className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


