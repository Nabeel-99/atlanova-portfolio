import "@fontsource/manrope/300.css";
// import "@fontsource/manrope/500.css";
// import "@fontsource/manrope/700.css";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./components/sections/Services";
import Work from "./components/sections/Work";
import Testimonials from "./components/sections/Testimonials";
import Faqs from "./components/sections/Faqs";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import LogoAnimation from "./components/LogoAnimation";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <>
      <main className="w-full  h-full flex flex-col">
        <LogoAnimation />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Faqs />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
