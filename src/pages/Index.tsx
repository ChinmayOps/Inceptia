
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PrizePool from "@/components/PrizePool";
import Theme from "@/components/Theme";
import Domains from "@/components/Domains";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 overflow-hidden">
        {/* Marvel-inspired background elements */}
        <div className="absolute top-0 left-0 w-full h-screen bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover opacity-5"></div>
      </div>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <PrizePool />
      <Theme />
      <Domains />
      <Footer />
    </div>
  );
};

export default Index;
