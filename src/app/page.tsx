import Footer from "./foot/footer";
import Hero from "./hero/hero";
import Tokenomics from "./tokenomics/tokenomics";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[1990px]">
      <Hero />
      <div id="tokenomics" className="bg-gra-1">
        <Tokenomics />
      </div>
      <div id="footer" className="bg-gra-1">
        <Footer />
      </div>
    </div>
  );
}
