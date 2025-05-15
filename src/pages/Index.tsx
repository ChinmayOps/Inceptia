
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import PrizePool from "@/components/PrizePool";
import Domains from "@/components/Domains";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import PrizeItems from "@/components/PrizeItems";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-[80px]">
      <div className="absolute inset-0 overflow-hidden">
        {/* Captain America vs Iron Man Civil War background reference */}
        <div className="absolute top-0 left-0 w-full h-screen bg-[url('https://images.unsplash.com/photo-1624461080848-e8734740702b')] bg-cover opacity-5"></div>
        {/* Captain America shield reference - subtle circular pattern */}
        <div className="hidden md:block absolute top-[15%] left-[5%] w-64 h-64 rounded-full border-8 border-primary/20 opacity-30 shield-pulse"></div>
        {/* Iron Man arc reactor pattern */}
        <div className="hidden md:block absolute bottom-[10%] left-[10%] w-32 h-32 rounded-full bg-primary/10 border-4 border-accent/20 opacity-30"></div>
        {/* Spiderman web pattern */}
        <div className="hidden md:block absolute top-[40%] right-[5%] w-44 h-44 border-t-2 border-r-2 border-primary/20 rounded-tr-full opacity-30 web-expand"></div>
      </div>
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <HowItWorks />
      <Domains />
      <PrizePool />
      <PrizeItems />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
