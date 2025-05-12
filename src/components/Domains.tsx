
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const domains = [
  {
    name: "Artificial Intelligence & Machine Learning",
    description: "Develop solutions using AI/ML technologies to solve real-world problems.",
    requirements: "Models must be explainable and demonstrate clear practical applications.",
    tools: "TensorFlow, PyTorch, Scikit-learn, Keras",
  },
  {
    name: "Web & Mobile Development",
    description: "Create innovative web or mobile applications with excellent user experience.",
    requirements: "Applications should be responsive, accessible, and demonstrate good UX principles.",
    tools: "React, Flutter, Next.js, React Native, Vue",
  },
  {
    name: "Blockchain & FinTech",
    description: "Build financial solutions or decentralized applications using blockchain technology.",
    requirements: "Security-focused implementations with clear use case and value proposition.",
    tools: "Ethereum, Solidity, Web3.js, Truffle",
  },
  {
    name: "AR/VR & Gaming",
    description: "Develop immersive experiences that educate, entertain, or solve problems.",
    requirements: "Solutions should be creative, engaging, and technically impressive.",
    tools: "Unity, Unreal Engine, ARKit, ARCore",
  },
  {
    name: "IoT & Hardware",
    description: "Create innovative hardware solutions or IoT devices that solve real problems.",
    requirements: "Functional prototype with clear practical applications.",
    tools: "Raspberry Pi, Arduino, ESP32, Sensors",
  },
  {
    name: "Open Innovation",
    description: "Any other innovative idea that doesn't fit into the above categories.",
    requirements: "Clear problem statement, technical implementation, and solution validation.",
    tools: "Any technology stack or combination of technologies",
  },
];

const Domains = () => {
  return (
    <section id="domains" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Domains</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose from these technology domains to showcase your skills and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-white">{domain.name}</CardTitle>
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
            className="px-8 py-6 text-lg bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
            onClick={() => window.open("https://unstop.com", "_blank")}
          >
            Register Now on Unstop
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Domains;
