
import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hackathon 2025</h3>
            <p className="text-white/60">
              Join us for an unforgettable coding experience where innovation meets opportunity.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#prizes" className="text-white/60 hover:text-white transition-colors">Prizes</a></li>
              <li><a href="#theme" className="text-white/60 hover:text-white transition-colors">Theme</a></li>
              <li><a href="#domains" className="text-white/60 hover:text-white transition-colors">Domains</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Rules</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Schedule</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li><a href="mailto:info@hackathon2025.com" className="text-white/60 hover:text-white transition-colors">info@hackathon2025.com</a></li>
              <li><a href="tel:+1234567890" className="text-white/60 hover:text-white transition-colors">+1 (234) 567-890</a></li>
              <li><span className="text-white/60">University Campus,<br />Innovation Street</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-white/60 mb-4 md:mb-0">
              © 2025 Hackathon. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
