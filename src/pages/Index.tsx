
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
