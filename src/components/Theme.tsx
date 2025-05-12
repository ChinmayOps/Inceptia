
import { Button } from "@/components/ui/button";

const Theme = () => {
  return (
    <section id="theme" className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/10 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Hackathon Theme" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Tech for Tomorrow</h3>
                <p className="text-white/80">Building sustainable solutions for a better future</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Hackathon Theme</h2>
            <p className="text-lg text-white/80">
              This year's theme focuses on leveraging technology to create sustainable solutions that address pressing global challenges. Participants are encouraged to develop innovative projects that contribute to a better, more sustainable future.
            </p>
            <p className="text-white/70">
              From renewable energy and resource management to accessible education and healthcare, we invite you to explore how technology can positively impact the world around us.
            </p>
            <Button onClick={() => {}} className="px-6 py-2 bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
              Theme Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
