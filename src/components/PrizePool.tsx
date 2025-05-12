
import { Card, CardContent } from "@/components/ui/card";

const PrizePool = () => {
  return (
    <section id="prizes" className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prize Pool</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Compete for exciting prizes worth over $10,000!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#D4AF37]/10 backdrop-blur-sm border-[#D4AF37]/30 p-6 transform md:translate-y-4 hover:-translate-y-1 transition-transform">
            <CardContent className="pt-6 text-center">
              <div className="text-xl font-bold text-[#D4AF37] mb-2">1st Place</div>
              <div className="text-4xl font-extrabold text-white mb-4">$5,000</div>
              <ul className="text-white/70 space-y-2 text-left">
                <li>• Cash prize: $5,000</li>
                <li>• Incubation opportunity</li>
                <li>• Industry mentorship</li>
                <li>• Featured interview</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#C0C0C0]/10 backdrop-blur-sm border-[#C0C0C0]/30 p-6 hover:-translate-y-1 transition-transform">
            <CardContent className="pt-6 text-center">
              <div className="text-xl font-bold text-[#C0C0C0] mb-2">2nd Place</div>
              <div className="text-4xl font-extrabold text-white mb-4">$3,000</div>
              <ul className="text-white/70 space-y-2 text-left">
                <li>• Cash prize: $3,000</li>
                <li>• Job interview opportunities</li>
                <li>• Professional certification</li>
                <li>• Tech gadgets</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-[#CD7F32]/10 backdrop-blur-sm border-[#CD7F32]/30 p-6 transform md:translate-y-4 hover:-translate-y-1 transition-transform">
            <CardContent className="pt-6 text-center">
              <div className="text-xl font-bold text-[#CD7F32] mb-2">3rd Place</div>
              <div className="text-4xl font-extrabold text-white mb-4">$1,500</div>
              <ul className="text-white/70 space-y-2 text-left">
                <li>• Cash prize: $1,500</li>
                <li>• Premium subscriptions</li>
                <li>• Online courses vouchers</li>
                <li>• Networking opportunities</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-white mb-4">Domain-Specific Awards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Best AI/ML Solution</h4>
                  <p className="text-white/70">$500 + AI computing credits</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Best Blockchain Implementation</h4>
                  <p className="text-white/70">$500 + Blockchain network credits</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Best UI/UX Design</h4>
                  <p className="text-white/70">$500 + Design software subscription</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Most Innovative Solution</h4>
                  <p className="text-white/70">$500 + Innovation lab access</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrizePool;
