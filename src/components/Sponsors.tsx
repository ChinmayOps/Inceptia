import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Thanks to our amazing sponsors who make this hackathon possible. Interested in becoming a sponsor? Contact us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* Sponsor Card: Unstop */}
          <Card key="unstop" className="bg-white/5 backdrop-blur-sm border-white/10 p-10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors w-full max-w-sm">
            <p className="text-white/80 text-center mb-4 text-lg font-medium">Powered By</p>
            <div className="aspect-[3/2] w-full rounded-lg flex items-center justify-center">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img 
                  src="./Unstop-Logo-Blue.svg" 
                  alt="Unstop Logo" 
                  className="object-contain w-full h-full" 
                />
              </AspectRatio>
            </div>
          </Card>

          {/* Sponsor Card: Wetnjoy */}
          <Card key="wetnjoy" className="bg-white/5 backdrop-blur-sm border-white/10 p-10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors w-full max-w-sm">
            <p className="text-white/80 text-center mb-4 text-lg font-medium">Entertainment Partner</p>
            <div className="aspect-[3/2] w-full rounded-lg flex items-center justify-center">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img 
                  src="./wetnjoy.png" 
                  alt="Wetnjoy Logo" 
                  className="object-contain w-full h-full" 
                />
              </AspectRatio>
            </div>
          </Card>

          {/* Sponsor Card: Trelish */}
          <Card key="trelish" className="bg-white/5 backdrop-blur-sm border-white/10 p-10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors w-full max-w-sm">
            <p className="text-white/80 text-center mb-4 text-lg font-medium">Beverage Partner</p>
            <div className="aspect-[3/2] w-full rounded-lg flex items-center justify-center">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img 
                  src="./trelish.jpeg" 
                  alt="Trelish Logo" 
                  className="object-contain w-full h-full" 
                />
              </AspectRatio>
            </div>
          </Card>

          {/* Sponsor Card: TFW */}
          <Card key="tfw" className="bg-white/5 backdrop-blur-sm border-white/10 p-10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors w-full max-w-sm">
            <p className="text-white/80 text-center mb-4 text-lg font-medium">Merchandise Partner</p>
            <div className="aspect-[3/2] w-full rounded-lg flex items-center justify-center">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img 
                  src="./tfw.png" 
                  alt="TFW Logo" 
                  className="object-contain w-full h-full" 
                />
              </AspectRatio>
            </div>
          </Card>

          {/* Sponsor Card: Sunrich Aqua */}
          <Card key="sunrichaqua" className="bg-white/5 backdrop-blur-sm border-white/10 p-10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors w-full max-w-sm">
            <p className="text-white/80 text-center mb-4 text-lg font-medium">Hydration Partner</p>
            <div className="aspect-[3/2] w-full rounded-lg flex items-center justify-center">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img 
                  src="./sunrichaqua.png" 
                  alt="Sunrich Aqua Logo" 
                  className="object-contain w-full h-full" 
                />
              </AspectRatio>
            </div>
          </Card>

          {/* Sponsor Card: Riseup Edu */}
          <Card key="riseup" className="bg-white/5 backdrop-blur-sm border-white/10 p-10 flex flex-col items-center justify-center hover:bg-white/10 transition-colors w-full max-w-sm">
            <p className="text-white/80 text-center mb-4 text-lg font-medium">Partner</p>
            <div className="aspect-[3/2] w-full rounded-lg flex items-center justify-center">
              <AspectRatio ratio={3 / 2} className="w-full">
                <img 
                  src="./riseup.png" 
                  alt="Riseup Logo" 
                  className="object-contain w-full h-full" 
                />
              </AspectRatio>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
