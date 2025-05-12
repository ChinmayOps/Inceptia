
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hackathon <span className="text-[#F2FF44]">2025</span>
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Join the most exciting hackathon of the year! Collaborate, innovate, and compete for amazing prizes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90"
              onClick={() => window.open("https://unstop.com", "_blank")}
            >
              Register on Unstop
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">48hrs</div>
              <div className="text-white/60">Hackathon</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$10k+</div>
              <div className="text-white/60">Prize Pool</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-white/60">Participants</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Hackathon Event"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
