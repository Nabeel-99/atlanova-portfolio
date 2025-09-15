import "@fontsource/manrope/300.css";
// import "@fontsource/manrope/500.css";
// import "@fontsource/manrope/700.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./components/Services";
import Work from "./components/Work";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      <main className="w-full  h-full flex flex-col gap-20  ">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Work />
      </main>
    </>
  );
}

export default App;
