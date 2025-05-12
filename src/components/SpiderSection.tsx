
import { Bug, Web } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpiderSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Spider-Man themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-0"></div>
      
      {/* Web pattern overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1612538498456-e861df91d4d0')] bg-cover opacity-5"></div>
        
        {/* Web corners */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/20 rounded-tl-xl"></div>
        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/20 rounded-tr-xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white/20 rounded-bl-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/20 rounded-br-xl"></div>
        
        {/* Additional web elements */}
        <Web className="absolute top-10 right-10 w-12 h-12 text-white/20" />
        <Web className="absolute bottom-10 left-10 w-12 h-12 text-white/20" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-secondary/30">
              <img 
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820"
                alt="Spider-Man Web" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Spin Your <span className="text-primary">Web</span> of Ideas</h3>
                <p className="text-white/80">Create innovative solutions that stick</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-2">
              <Bug className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-white"><span className="text-primary">Weave</span> Your Innovation</h2>
            </div>
            <p className="text-lg text-white/80">
              Like Spider-Man's incredible agility and quick thinking, this hackathon requires participants to adapt to challenges rapidly and develop solutions with the precision of a well-crafted web. Your "spider-sense" for innovation will be put to the test!
            </p>
            <p className="text-white/70">
              With great power comes great responsibility. Create solutions that not only demonstrate technical excellence but also address real-world problems responsibly and ethically.
            </p>
            <Button className="px-6 py-2 bg-primary text-white hover:bg-primary/80">
              Unleash Your Spider-Sense
              <Bug className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiderSection;
