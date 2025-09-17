import React from "react";
import WorkCard from "../cards/WorkCard";

const Work = () => {
  return (
    <section
      id="our-work"
      className="w-full h-full px-6 p-6 lg:p-10 lg:px-20 mt-10 lg:mt-20"
    >
      <div className="flex flex-col gap-10 items-center 2xl:container 2xl:mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>Our work</p>
          </div>
          <h2 className="text-4xl text-center lg:text-5xl font-bold">
            Projects That Speak for Us.
          </h2>
          <p className="text-center lg:max-w-xl">
            From construction sites to furnished homes and real estate
            developments, our projects show how we turn ideas into impact
          </p>
        </div>
        <div className="flex flex-col gap-20">
          <WorkCard
            image="/workestate.jpg"
            alt="Real Estate Development"
            title="Real Estate Development"
            description="We transformed bare land into a thriving residential estate with modern infrastructure. Roads, drainage, and utilities were integrated to create a community-ready environment. Beyond construction, we handled planning approvals, land preparation, and marketing support for property sales."
            category="Real Estate"
            year="2024"
            quote="Investing here was seamless. The estate offers comfort, accessibility, and long-term value. Everything was delivered as promised."
            author="Property Investor"
            className="bg-[#E9ECF2] "
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
