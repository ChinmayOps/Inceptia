
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Theme = () => {
  return (
    <section id="theme" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-accent/10 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-primary/30">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Hackathon Theme" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Tech for <span className="text-primary">Tomorrow</span></h3>
                <p className="text-white/80">Building sustainable solutions for a better future</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Hackathon <span className="text-primary">Theme</span></h2>
            </div>
            <p className="text-lg text-white/80">
              This year's theme channels the innovative spirit of Tony Stark, focusing on leveraging technology to create sustainable solutions that address pressing global challenges. Like the Avengers, participants are encouraged to develop innovative projects that contribute to a better, more sustainable future.
            </p>
            <p className="text-white/70">
              From renewable energy and resource management to accessible education and healthcare, we invite you to explore how technology can positively impact the world around us. After all, with great power comes great responsibility.
            </p>
            <Button onClick={() => {}} className="px-6 py-2 bg-primary text-white hover:bg-primary/80">
              Theme Details
              <Zap className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
