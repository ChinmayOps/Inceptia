import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Gift, Banknote, Medal } from "lucide-react";

const PrizeItems = () => {
  const prizes = [
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Goodies",
      description: "Get exciting goodies to fuel your tech passion."
    },
    {
      icon: <Banknote className="w-8 h-8 text-white" />,
      title: "Cash Prizes",
      description: "Attractive cash prizes worth up to ₹50,000."
    },
    {
      icon: <Medal className="w-8 h-8 text-white" />,
      title: "Winner Medals",
      description: "Your Chance to Score Cool Gadgets!"
    }
  ];

  return (
    <section id="prize-items" className="py-20 px-6 bg-gradient-to-b from-background to-primary/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prize Pool Up to ₹50,000</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            The prize pool includes exciting cash prizes, gadgets, goodies, and more! Don't miss your chance to
            win big and get recognized.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-primary/10 transition-colors">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {prize.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{prize.title}</h3>
                <p className="text-white/70">
                  {prize.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizeItems;