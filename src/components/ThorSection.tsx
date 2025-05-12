
import { Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThorSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Thor-inspired lightning background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-background z-0"></div>
      
      {/* Background thunder effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e')] bg-cover opacity-5"></div>
        
        {/* Lightning elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-40 bg-accent/40 transform rotate-12 lightning-flash"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-60 bg-accent/40 transform -rotate-15 lightning-flash"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-28 bg-accent/40 transform rotate-30 lightning-flash"></div>
        
        {/* Thor's hammer silhouette */}
        <div className="absolute bottom-10 right-10 w-20 h-60 bg-accent/20 rounded-t-lg"></div>
        <div className="absolute bottom-[240px] right-[10px] w-60 h-20 bg-accent/20 rounded-md"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-7 h-7 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Harness the <span className="text-accent">Thunder</span></h2>
            </div>
            <p className="text-lg text-white/80">
              Like Thor's mighty Mjölnir, only the worthy will rise to this challenge. Bring your most powerful ideas and prove your worthiness through innovation and determination.
            </p>
            <p className="text-white/70">
              Channel the power of lightning into your projects. Let your creativity strike with the force and brilliance of Thor's command over thunder, creating solutions that are truly godlike in their ingenuity.
            </p>
            <Button className="px-6 py-2 bg-accent text-background hover:bg-accent/80">
              Unleash Your Power
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-accent/30">
              <img 
                src="https://images.unsplash.com/photo-1516410529446-2c777cb7366d"
                alt="Thor's Lightning" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Be <span className="text-accent">Worthy</span></h3>
                <p className="text-white/80">Create solutions as mighty as Mjölnir</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThorSection;
