
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const IronManSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Iron Man inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 z-0"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf')] bg-cover opacity-5"></div>
        
        {/* Arc reactor elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-40 h-40 rounded-full border-4 border-accent/20 flex items-center justify-center pulse-border">
            <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-accent/30"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-7 h-7 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Innovative <span className="text-accent">Brilliance</span></h2>
            </div>
            <p className="text-lg text-white/80">
              Channel your inner Tony Stark. This hackathon demands technical brilliance, innovative thinking, and the confidence to push boundaries. Create solutions that would impress even the greatest tech genius in the Marvel universe.
            </p>
            <p className="text-white/70">
              Just as Iron Man's suit represents the pinnacle of engineering achievement, your projects should showcase cutting-edge technology and forward-thinking design. Build something that seems like it's from the future.
            </p>
            <Button className="px-6 py-2 bg-accent text-background hover:bg-accent/80">
              Power Your Innovation
              <Shield className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-accent/30">
              <img 
                src="https://images.unsplash.com/photo-1536566482680-fca31930a0bd"
                alt="Tech Innovation" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Build a <span className="text-accent">Legacy</span></h3>
                <p className="text-white/80">Create something that changes everything</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IronManSection;
