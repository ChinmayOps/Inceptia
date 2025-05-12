
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlackWidowSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Black Widow inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-primary/40 z-0"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1514539079130-25950c84af65')] bg-cover opacity-5"></div>
        
        {/* Black Widow symbol elements */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border border-primary/30 opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-40 h-40 flex items-center justify-center">
          <div className="w-20 h-20 bg-primary/10 transform rotate-45"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30">
              <img 
                src="https://images.unsplash.com/photo-1598519502953-a760094fd6f8"
                alt="Precision and Tactics" 
                className="w-full h-auto brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Execute with <span className="text-primary">Precision</span></h3>
                <p className="text-white/80">Tactical solutions for complex problems</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Strategic <span className="text-primary">Elegance</span></h2>
            </div>
            <p className="text-lg text-white/80">
              Channel Black Widow's precision, adaptability, and strategic thinking. This section of the hackathon challenges you to develop elegant solutions that appear simple on the surface but hide complex, sophisticated functionality beneath.
            </p>
            <p className="text-white/70">
              Like Natasha Romanoff's calculated approach, your projects should demonstrate a perfect balance of efficiency, effectiveness, and elegance. Create solutions that get the job done with finesse and style.
            </p>
            <Button className="px-6 py-2 bg-primary text-white hover:bg-primary/80">
              Employ Tactical Brilliance
              <Shield className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackWidowSection;
