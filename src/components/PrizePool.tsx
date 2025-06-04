
import { Card, CardContent } from "@/components/ui/card";

const PrizePool = () => {
  return (
    <section id="prizes" className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prize Pool</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Compete for exciting prizes worth over ₹50,000!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#C0C0C0]/10 backdrop-blur-sm border-[#C0C0C0]/30 p-6 transform md:translate-y-4 hover:-translate-y-1 transition-transform">
            <CardContent className="pt-6 text-center">
              <div className="text-xl font-bold text-[#C0C0C0] mb-2">2nd Place</div>
              <div className="text-4xl font-extrabold text-white mb-4">₹15,000</div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#D4AF37]/10 backdrop-blur-sm border-[#D4AF37]/30 p-6 hover:-translate-y-1 transition-transform">
            <CardContent className="pt-6 text-center">
              <div className="text-xl font-bold text-[#D4AF37] mb-2">1st Place</div>
              <div className="text-4xl font-extrabold text-white mb-4">₹25,000</div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#CD7F32]/10 backdrop-blur-sm border-[#CD7F32]/30 p-6 transform md:translate-y-4 hover:-translate-y-1 transition-transform">
            <CardContent className="pt-6 text-center">
              <div className="text-xl font-bold text-[#CD7F32] mb-2">3rd Place</div>
              <div className="text-4xl font-extrabold text-white mb-4">₹10,000</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
