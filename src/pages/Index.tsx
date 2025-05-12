
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
        {/* Captain America shield reference - subtle circular pattern */}
        <div className="hidden md:block absolute top-[15%] left-[5%] w-64 h-64 rounded-full border-8 border-primary/20 opacity-30"></div>
        {/* Thor's hammer pattern */}
        <div className="hidden md:block absolute bottom-[20%] right-[10%] w-32 h-80 bg-accent/10 rotate-45 opacity-20"></div>
        {/* Spiderman web pattern */}
        <div className="hidden md:block absolute top-[40%] right-[5%] w-44 h-44 border-t-2 border-r-2 border-primary/20 rounded-tr-full opacity-30"></div>
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
