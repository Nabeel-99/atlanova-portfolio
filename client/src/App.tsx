import "@fontsource/manrope/300.css";
// import "@fontsource/manrope/500.css";
// import "@fontsource/manrope/700.css";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./components/sections/Services";
import Faqs from "./components/sections/Faqs";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import ReactLenis, { type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import { Toaster } from "sonner";
// import LogoAnimation from "./components/LogoAnimation";

gsap.registerPlugin(ScrollTrigger);
function App() {
  const lenisRef = useRef<LenisRef | null>(null);
  useEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  return (
    <>
      <ReactLenis
        root
        options={{
          autoRaf: false,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          syncTouch: false,
        }}
        ref={lenisRef}
      >
        <main className="w-full  h-full flex flex-col">
          <Toaster />
          {/* <LogoAnimation /> */}
          <Navbar />
          <Hero />
          <About />
          <Services />
          {/* <Work /> */}
          {/* <Testimonials /> */}
          <Faqs />
          <Contact />
          <Footer />
        </main>
      </ReactLenis>
    </>
  );
}

export default App;
