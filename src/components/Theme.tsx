
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Theme = () => {
  return (
    <section id="theme" className="py-20 px-6 relative overflow-hidden">
      {/* Hulk-inspired green background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1D3B1C] to-background z-0"></div>
      
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#2D5C29]/30 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-[#3E7F39]/20 filter blur-3xl"></div>
        {/* Hulk fist reference - subtle shape */}
        <div className="hidden md:block absolute bottom-[10%] right-[30%] w-32 h-32 bg-[#3E7F39]/30 rounded-full opacity-40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#3E7F39]/30">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                alt="Hackathon Theme" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D3B1C]/90 via-[#1D3B1C]/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Tech for <span className="text-[#90E088]">Tomorrow</span></h3>
                <p className="text-white/80">Building sustainable solutions for a better future</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-7 h-7 text-[#90E088]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Hackathon <span className="text-[#90E088]">Theme</span></h2>
            </div>
            <p className="text-lg text-white/80">
              This year's theme channels the <span className="text-[#90E088] font-semibold">incredible power of innovation</span>, focusing on leveraging technology to create sustainable solutions that address pressing global challenges. Like the Avengers, participants are encouraged to develop projects that contribute to a better, more sustainable future.
            </p>
            <p className="text-white/70">
              From renewable energy and resource management to accessible education and healthcare, we invite you to explore how technology can positively impact the world around us. After all, the world needs heroes with both brains and brawn.
            </p>
            <Button onClick={() => {}} className="px-6 py-2 bg-[#90E088] text-[#1D3B1C] hover:bg-[#90E088]/80">
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
