import React from "react";

import { MdOutlineConstruction } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { LuHandshake } from "react-icons/lu";
import IconCard from "../cards/IconCard";

const About = () => {
  return (
    <section id="about" className="w-full h-full mt-10 lg:mt-20">
      <div className="2xl:container 2xl:mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between w-full md:px-20">
        <div className="flex flex-col gap-4 justify-start items-start lg:w-1/2">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>About us</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built for <br /> Business
          </h2>
        </div>
        <p className="text-lg lg:text-xl leading-relaxed lg:leading-[2] lg:w-3/4">
          We are a company that works in construction, engineering,
          infrastructure, import/export, and general trading. Our goal is to
          provide reliable and efficient services while building trust with our
          clients. We aim to deliver quality projects and trading solutions with
          honesty, innovation, and care. By combining our skills in building and
          global trade, we work to create lasting value for our partners and
          communities.
        </p>
      </div>
      {/* large screen */}
      <div className="hidden md:flex items-center overflow-x-hidden gap-6 mt-10">
        <img
          src="/pic2.jpg"
          alt="about1"
          className="object-cover rounded-sm w-96 h-[450px]"
        />
        <img
          src="/pic3.jpg"
          alt="about2"
          className="object-cover rounded-sm w-96 h-[450px]"
        />
        <img
          src="/pic4.jpg"
          alt="about3"
          className="object-cover rounded-sm w-96 h-[450px]"
        />
        <img
          src="/pic5.jpg"
          alt="about4"
          className="object-cover rounded-sm w-96 h-[450px]"
        />
        <img
          src="/pic6.jpg"
          alt="about5"
          className="object-cover rounded-sm w-96 h-[450px]"
        />
      </div>
      {/* mobile carousel */}
      <div className="flex md:hidden items-center overflow-x-hidden px-6 gap-6 mt-10">
        <img
          src="/pic2.jpg"
          alt="about1"
          className="object-cover rounded-sm  h-[450px]"
        />
      </div>

      {/* higlights */}
      <div className="grid  lg:grid-cols-3 gap-10 px-20 mt-10 2xl:container 2xl:mx-auto">
        <IconCard
          icon={<MdOutlineConstruction className="text-8xl text-black/70" />}
          title="Trusted Experience"
          description="Over 3 years delivering projects in construction, real estate, and trade."
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
