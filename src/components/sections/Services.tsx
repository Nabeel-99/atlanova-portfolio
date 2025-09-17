import React from "react";
import ServiceCard from "../cards/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full h-full  px-6 p-6 lg:p-10 lg:px-20 bg-[#f4f3f3] mt-10 lg:mt-20"
    >
      <div className="flex flex-col gap-10 items-center 2xl:container 2xl:mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>Services</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">What we do</h2>
          <p className="text-center">
            Delivering excellence across construction, trade, real estate, and
            investment.
          </p>
        </div>
        <div className="flex flex-col gap-20">
          <ServiceCard
            title="Construction & Engineering"
            description="We handle civil and structural engineering, road and building projects, and project management with precision and care."
            image="/construction.jpg"
            alt="construction"
          />
          <ServiceCard
            title="Real Estate & Land Development"
            description="We invest in land development and real estate, providing clients with valuable opportunities in the growing property sector."
            image="/estate.jpg"
            alt="real estate"
            order="reverse"
          />
          <ServiceCard
            title="Global Sourcing & Trade"
            description="We help businesses source quality products, furniture, and equipment from international markets and bring them home at competitive value."
            image="/furniture.jpg"
            alt="business"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
