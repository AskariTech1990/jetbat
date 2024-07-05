import Header from "./components/Header";
import Banner from "./components/Banner";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import Reward from "./components/Reward";
import FAQ from "./components/FAQ";
import Information from "./components/Information";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Information />
    <Roadmap />
    <Tokenomics />
    <Reward/>
    <FAQ/>
    <Footer />
    </>
  );
}
