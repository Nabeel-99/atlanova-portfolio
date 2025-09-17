import React from "react";
import TestimonialCard from "../cards/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full h-full mt-10 lg:mt-20">
      <div className="flex flex-col gap-10 px-2 items-center">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>Testimonials</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            What Our Clients Say
          </h2>
          <p className="text-center">
            Here’s what our partners and clients say about working with us in
            construction, real estate, and trade.
          </p>
        </div>
      </div>
      {/* large screen */}
      <div className="hidden md:flex items-center overflow-x-hidden gap-6 mt-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <TestimonialCard
            key={index}
            comment="We sourced premium furniture through their import services, and the entire process was smooth and transparent. Great quality products at competitive prices."
            author="Ahmed Musa"
            className="bg-[#f4f3f3]"
          />
        ))}
      </div>
      {/* mobile carousel */}
      <div className="flex md:hidden items-center overflow-x-hidden px-6 gap-6 mt-10">
        <TestimonialCard
          comment="We sourced premium furniture through their import services, and the entire process was smooth and transparent. Great quality products at competitive prices."
          author="Ahmed Musa"
          className="bg-[#f4f3f3]"
        />
      </div>
    </section>
  );
};

export default Testimonials;
