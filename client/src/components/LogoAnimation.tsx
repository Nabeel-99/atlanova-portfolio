import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useState, useEffect } from "react";

const LogoAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isOffset, setIsOffset] = useState(false);
  useGSAP(() => {
    if (!isAnimating) return;

    const welcome = new SplitText(".welcome", { type: "chars" });

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    const tl = gsap.timeline();

    tl.from(".logo", {
      y: 300,
      opacity: 0.8,
      duration: 1.5,
      ease: "ease.inOut",
      rotation: 270,
      filter: "blur(20px)",
      //   repeat: Infinity,
    })
      .from(
        welcome.chars,
        {
          stagger: 0.1,
          x: 10,
          duration: 1,
          opacity: 0,
          ease: "expo.out",
        },
        "<"
      )
      .fromTo(
        ".glare",
        { opacity: 0, scale: 0.8, x: -20 },
        {
          opacity: 1,
          scale: 1.2,
          x: 0,
          duration: 2,
          //   repeat: 1,
          //   yoyo: true,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.to(".glare", { opacity: 0, duration: 2 });
          },
        },
        "<"
      )
      .from(
        ".logo-text",
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "expo.out",
        }
        // "<"
      )
      .from(".btn-continue", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power2.inOut",
        pointerEvents: "none",
      });
  }, [isAnimating]);

  useEffect(() => {
    if (isOffset) {
      const tl = gsap.timeline();
      const title = new SplitText(".title", { type: "chars, words" });
      tl.to(".logo-page", {
        y: -2000,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
          document.body.style.overflow = "";
          document.body.style.position = "";
          document.body.style.width = "";
          document.body.style.height = "";
        },
      })
        .to(
          ".nav",
          {
            y: 10,
            opacity: 1,
          },
          "<"
        )
        .to(".hero-content", {
          y: 10,
          opacity: 1,
        });
      tl.from(
        title.chars,
        {
          stagger: 0.05,
          y: 10,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        },
        "<"
      )
        .from(
          ".rounded-text",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
            delay: 0.5,
            ease: "power2.inOut",
          },
          "<"
        )
        .from(
          ".description",
          {
            opacity: 0,
            y: 10,
            duration: 1,
            ease: "power4.inOut",
          },
          "<0.5"
        )
        .from(
          ".btn-work",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<0.5"
        );
    }
  }, [isOffset]);

  return (
    <>
      {isAnimating && (
        <div className="logo-page fixed z-50 bg-[#070606] h-screen w-full inset-0">
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="  flex flex-col lg:gap-10 items-center justify-center">
              <h2 className="font-pacifico text-5xl lg:text-8xl  text-white welcome">
                Welcome to
              </h2>
              <div className="flex flex-col  relative  items-center justify-center gap-2">
                <img
                  src="/A_only.png"
                  alt="logo"
                  fetchPriority="high"
                  loading="eager"
                  className="logo w-full h-1/2 lg:w-1/2 z-20  lg:h-full  object-cover"
                />
                <div className="relative inline-block">
                  <h1 className="text-white logo-text  z-50 relative font-sans text-5xl font-bold tracking-wider">
                    ALTANOVA
                  </h1>
                </div>
                <div className="glare bg-gradient-to-tr   from-[#122a3f] via-[#351b40] rounded-full blur-[70px] h-full to-[#e91e63] absolute bottom-0 inset-0 z-0"></div>
              </div>
              <div className="hover:bg-[#121212] btn-continue  cursor-pointer mt-10 rounded-4xl">
                <button
                  onClick={() => setIsOffset(true)}
                  className="shiny-text border    h-full w-full border-[#181818] rounded-4xl cursor-pointer hover:text-white text-3xl font-extrabold  p-6 "
                >
                  Continue
                </button>
              </div>

              {/* <div className="absolute z-0 bg-white top-1/2 ">hey</div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoAnimation;
