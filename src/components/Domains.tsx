
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

const domains = [
  {
    name: "Artificial Intelligence & Machine Learning",
    description: "Develop solutions using AI/ML technologies to solve real-world problems.",
    requirements: "Models must be explainable and demonstrate clear practical applications.",
    tools: "TensorFlow, PyTorch, Scikit-learn, Keras",
    icon: "🧠",
  },
  {
    name: "Web & Mobile Development",
    description: "Create innovative web or mobile applications with excellent user experience.",
    requirements: "Applications should be responsive, accessible, and demonstrate good UX principles.",
    tools: "React, Flutter, Next.js, React Native, Vue",
    icon: "📱",
  },
  {
    name: "Blockchain & FinTech",
    description: "Build financial solutions or decentralized applications using blockchain technology.",
    requirements: "Security-focused implementations with clear use case and value proposition.",
    tools: "Ethereum, Solidity, Web3.js, Truffle",
    icon: "⛓️",
  },
  {
    name: "AR/VR & Gaming",
    description: "Develop immersive experiences that educate, entertain, or solve problems.",
    requirements: "Solutions should be creative, engaging, and technically impressive.",
    tools: "Unity, Unreal Engine, ARKit, ARCore",
    icon: "🎮",
  },
  {
    name: "IoT & Hardware",
    description: "Create innovative hardware solutions or IoT devices that solve real problems.",
    requirements: "Functional prototype with clear practical applications.",
    tools: "Raspberry Pi, Arduino, ESP32, Sensors",
    icon: "🔌",
  },
  {
    name: "Open Innovation",
    description: "Any other innovative idea that doesn't fit into the above categories.",
    requirements: "Clear problem statement, technical implementation, and solution validation.",
    tools: "Any technology stack or combination of technologies",
    icon: "💡",
  },
];

const Domains = () => {
  return (
    <section id="domains" className="py-20 px-6 bg-background relative">
      {/* Background effect */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-secondary/10 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mission <span className="text-primary">Domains</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose your battleground and showcase your superhero coding skills in these technology domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{domain.icon}</div>
                  <CardTitle className="text-white">{domain.name}</CardTitle>
                </div>
                <CardDescription className="text-white/70">{domain.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Requirements:</h4>
                    <p className="text-white/60 text-sm">{domain.requirements}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-1">Recommended Tools:</h4>
                    <p className="text-white/60 text-sm">{domain.tools}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="px-8 py-6 text-lg bg-primary text-white hover:bg-primary/80"
            onClick={() => window.open("https://unstop.com", "_blank")}
          >
            Assemble Your Team on Unstop
            <Target className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Domains;
