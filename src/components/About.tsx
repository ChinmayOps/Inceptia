
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Spider-Man inspired background with web patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#931111]/10 to-background z-0"></div>
      
      {/* Web pattern overlays */}
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-[#931111]/20 rounded-tr-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-[#931111]/20 rounded-bl-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About the Hackathon</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A 24-hour coding competition where creativity meets technology to solve real-world challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:border-[#931111]/30 transition-colors">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-4">When & Where</h3>
              <p className="text-white/70">
                June 15-16, 2025<br />
                University Main Campus<br />
                Both Online & In-person
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:border-[#931111]/30 transition-colors">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Who Can Participate</h3>
              <p className="text-white/70">
                Open to university students, recent graduates, and tech enthusiasts with a passion for innovation.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:border-[#931111]/30 transition-colors">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-white mb-4">Team Size</h3>
              <p className="text-white/70">
                Form teams of 2-4 members.<br />
                Don't have a team? Join our team formation event!
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:border-[#931111]/30 transition-colors">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-white mb-4">What to Expect</h3>
              <p className="text-white/70 mb-6">
                Our 24-hour hackathon offers a unique opportunity to collaborate with like-minded individuals, learn from industry experts, and showcase your skills. Throughout the event, you'll have access to mentors, workshops, and networking opportunities to help you succeed.
              </p>
              <p className="text-white/70">
                With great power comes great responsibility. Whether you're a seasoned developer, a creative designer, or just starting your tech journey, this hackathon is designed to challenge and inspire you to create solutions that matter.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
