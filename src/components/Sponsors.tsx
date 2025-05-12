
import { Card } from "@/components/ui/card";

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
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white/80 mb-8 text-center">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-white/5 backdrop-blur-sm border-white/10 p-10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <div className="aspect-[3/2] w-full bg-white/20 rounded-lg flex items-center justify-center">
                  <p className="text-white/50 text-lg">Sponsor Logo</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-white/80 mb-8 text-center">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-white/5 backdrop-blur-sm border-white/10 p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                <div className="aspect-[3/2] w-full bg-white/20 rounded-lg flex items-center justify-center">
                  <p className="text-white/50 text-sm">Sponsor Logo</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
