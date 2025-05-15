/*
import { Button } from "@/components/ui/button";
import { Shield, Zap } from "lucide-react";
import {useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
*/

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
            onClick={() => window.open("https://unstop.com/o/KxwXi86?lb=J9lrLzO&utm_medium=Share&utm_source=shortUrl", "_blank")}
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
              window.open("https://unstop.com", "_blank");
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


