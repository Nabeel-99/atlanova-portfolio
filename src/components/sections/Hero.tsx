import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    const title = new SplitText(".title", { type: "chars, words" });
    tl.from(title.chars, {
      stagger: 0.05,
      y: 10,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    })
      .from(
        ".hero-img",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
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
  }, []);
  return (
    <section className="h-full w-full relative bg-black">
      <div className="2xl:mx-auto 2xl:container  max-sm:pb-10 flex justify-between items-center  text-white px-4 md:pl-20 md:pr-6   md:pt-10 md:py-10">
        <div className="flex z-10 flex-col gap-4 mt-40 lg:mt-0  w-full ">
          <div className="flex items-center gap-4 justify-start">
            <div className="rounded-text flex items-center gap-4  px-4 rounded-full bg-[#302e2e]">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <p>Available for work</p>
            </div>
          </div>
          <h1 className="title text-4xl lg:text-6xl leading-tight font-bold">
            Engineering Excellence <br className="hidden md:block" /> Trusted
            Trade & <br className="hidden md:block" /> Real Estate.
          </h1>
          <p className="description text-lg max-w-xl  lg:pr-20 xl:pr-0 text-left">
            We specialize in construction, real estate development, and global
            sourcing of goods such as furniture and building materials —
            delivering quality and reliability across every project.
          </p>
          <div className="flex items-start mt-10 justify-start">
            <button className="btn-work backdrop-blur-lg cursor-pointer back px-4 rounded-4xl p-2 bg-[#302e2e] flex items-center gap-3">
              <span>Work with us</span>
              <span className="bg-white rounded-full p-2">
                <FaArrowRight className="-rotate-45 text-black text-sm" />
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col px-2 pt-8 lg:px-0 lg:pt-0  w-full absolute left-0 right-0 lg:static z-0  md:justify-end md:items-end h-full gap-4">
          <div className="hero-img inset-0 absolute bg-black/60 lg:bg-black/20 rounded-xl h-full w-full"></div>
          <img
            src={"/pic4.jpg"}
            alt="logo"
            className="object-cover  rounded-xl border border-[#141313]  md:rounded-xl   w-full h-full  lg:h-[700px]  md:max-h-[700px] lg:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
