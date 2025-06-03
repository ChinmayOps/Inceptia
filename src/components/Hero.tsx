import { Button } from "@/components/ui/button";
import { Shield, Target } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background px-4 pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0 overflow-hidden max-w-full">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-primary/40 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-secondary/30 blur-3xl animate-pulse delay-1000" />

        {/* Captain America's Shield Design */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full border-4 border-primary/30 flex items-center justify-center">
            <div className="w-36 h-36 sm:w-56 sm:h-56 rounded-full border-4 border-accent/30 flex items-center justify-center">
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full border-4 border-secondary/30" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-screen-xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
        {/* Left - Text Section */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left px-2 sm:px-0">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-primary animate-pulse" />
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-primary">INCEPTIA</span> HACKATHON 2025
            </h1>
          </div>

          <p className="text-base sm:text-lg text-white/80 max-w-md sm:max-w-xl mx-auto md:mx-0">
            Join Earth's Mightiest Developers! Collaborate, innovate, and compete in a coding challenge worthy of heroes.
            <span className="text-primary font-bold"> Whatever it takes.</span>
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg bg-primary text-white hover:bg-primary/90"
              onClick={() => window.open("https://unstop.com/o/KxwXi86?lb=J9lrLzO&utm_medium=Share&utm_source=shortUrl", "_blank")}
            >
              Assemble Your Team
              <Target className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
                24<span className="text-primary">hrs</span>
              </div>
              <div className="text-white/60">Hackathon</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
                ₹50<span className="text-primary">k</span>
              </div>
              <div className="text-white/60">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white whitespace-nowrap">
                400<span className="text-primary">+</span>
              </div>
              <div className="text-white/60">Participants</div>
            </div>
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="relative w-full max-w-full sm:max-w-md md:max-w-full mx-auto px-2 sm:px-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/50">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Inceptia Hackathon"
              className="w-full h-full object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center">
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-32 h-32 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;