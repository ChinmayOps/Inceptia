import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Presentation, Wrench, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-white" />,
      title: "Register",
      description: "Choose a Track and submit your idea"
    },
    {
      icon: <Presentation className="w-8 h-8 text-white" />,
      title: "Presentation",
      description: "Present your idea to judges to qualify for next round"
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "Build",
      description: "24 hours of intensive hacking and building"
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Present",
      description: "Demo your project to judges and win awesome prizes and goodies"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Follow these steps to participate in our hackathon
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors text-center">
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/70">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;