import { TbBuildingSkyscraper } from "react-icons/tb";
import { LuHandshake } from "react-icons/lu";
import IconCard from "../cards/IconCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import MobileSwiper from "../MobileSwiper";
import MarqueeEffect from "../MarqueeEffect";
import { MdOutlineWavingHand } from "react-icons/md";

const About = () => {
  const images = [
    "/pic7.jpg",
    "/pic2.jpg",
    "/solar.jpg",
    "/pic8.jpg",
    "/pic6.jpg",
    "/pic10.jpg",
    "/pic4.jpg",
    "/pic9.jpg",
    "/pic5.jpg",
    "/pic3.jpg",
  ];
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 60%",
      },
    });

    tl.from(".about-text", {
      y: 10,
      duration: 1,
      ease: "power2.inOut",
      opacity: 0,
    }).from(
      ".about-div",
      {
        y: 10,
        duration: 1,
        ease: "power2.inOut",
        opacity: 0,
      },
      "<"
    );

    const highlights = gsap.timeline({
      scrollTrigger: {
        trigger: ".highlights",
        start: "top 60%",
      },
    });
    highlights.from(".highlights .icon-card", {
      stagger: 0.2,
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <section id="about" className="w-full h-full mt-10 pt-10 lg:mt-20">
      <div className="2xl:container 2xl:mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between w-full md:px-20">
        <div className="about-div flex flex-col gap-4 justify-start items-start lg:w-1/2">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>About us</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built for <br /> Business
          </h2>
        </div>
        <p className="about-text text-lg lg:text-xl leading-relaxed lg:leading-[2] lg:w-3/4">
          We are a company that works in construction, engineering,
          infrastructure, renewable energy, furnitures, and general trading. Our
          mission is to provide reliable and efficient services while building
          trust with our clients. Whether developing real estate, delivering
          high-quality construction, or installing modern solar solutions, we
          aim to create lasting value for communities and partners.
        </p>
      </div>
      {/* large screen */}
      <MarqueeEffect>
        <div className="flex marquee-effect-left w-max">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`about${index + 1}`}
              className="object-cover rounded-sm w-96 h-[450px] mr-6"
            />
          ))}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`about${index + 1}`}
              className="object-cover rounded-sm w-96 h-[450px] mr-6"
            />
          ))}
        </div>
      </MarqueeEffect>

      {/* mobile swiper */}
      <MobileSwiper>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`about${index + 1}`}
              className="object-cover rounded-sm h-[450px] w-full"
            />
          </SwiperSlide>
        ))}
      </MobileSwiper>

      {/* higlights */}
      <div className="grid   highlights lg:grid-cols-3  gap-10 px-20 mt-10 2xl:container 2xl:mx-auto">
        <IconCard
          icon={<MdOutlineWavingHand className="text-8xl text-black/70" />}
          title="Client‑First Approach"
          description="Clear communication, tailored solutions, and support at every step."
        />
        <IconCard
          icon={<TbBuildingSkyscraper className="text-8xl text-black/70" />}
          title="Quality Projects "
          description="From housing to infrastructure and land development, every project shows our commitment to quality."
        />
        <IconCard
          icon={<LuHandshake className="text-8xl text-black/70" />}
          title="Strong partners"
          description="Skilled professionals dedicated to building, real estate, and trading with care."
        />
      </div>
    </section>
  );
};

export default About;
