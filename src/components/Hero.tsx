import { Button } from "@/components/ui/button";
import { Shield, Zap, Target } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/40 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary/30 filter blur-3xl animate-pulse delay-1000"></div>
        {/* Captain America's shield */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-72 h-72 rounded-full border-4 border-primary/30 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full border-4 border-accent/30 flex items-center justify-center">
              <div className="w-36 h-36 rounded-full border-4 border-secondary/30"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-primary">INCEPTIA</span> HACKATHON 2025
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-xl">
            Join Earth's Mightiest Developers! Collaborate, innovate, and compete in a coding challenge worthy of heroes. 
            <span className="text-primary font-bold"> Whatever it takes.</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-8 py-6 text-lg bg-primary text-white hover:bg-primary/90"
              onClick={() => window.open("https://unstop.com", "_blank")}
            >
              Assemble Your Team
              <Target className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">36<span className="text-primary">hrs</span></div>
              <div className="text-white/60">Hackathon</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">₹50<span className="text-primary">k</span></div>
              <div className="text-white/60">Prize Pool</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">400<span className="text-primary">+</span></div>
              <div className="text-white/60">Participants</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/50">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Inceptia Hackathon"
              className="w-full h-auto brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <p className="text-white font-bold text-lg">ITSA INITIATIVE</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
