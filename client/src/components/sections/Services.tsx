import ServiceCard from "../cards/ServiceCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top 60%",
      },
    });
    tl.from(".service-text", {
      y: 20,
      duration: 1,
      ease: "power2.inOut",
      opacity: 0,
    });
  }, []);
  return (
    <section
      id="services"
      className="w-full h-full overflow-hidden  px-6 p-6 lg:p-10 lg:px-20 bg-[#f4f3f3] mt-10 lg:mt-20"
    >
      <div className="flex flex-col gap-10 items-center 2xl:container 2xl:mx-auto">
        <div className="service-text flex flex-col gap-4 justify-center items-center ">
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
            title="Furniture Trade"
            description="We connect businesses with trusted global manufacturers, handling sourcing, negotiations, and logistics to deliver premium furniture and equipment at the best value."
            image="/furniture.jpg"
            alt="business"
          />
          <ServiceCard
            title="Real Estate & Land Development"
            description="We invest in land development and real estate, providing clients with valuable opportunities in the growing property sector."
            image="/estate.jpg"
            alt="real estate"
            order="reverse"
          />
          <ServiceCard
            title="Construction & Engineering"
            description="We handle civil and structural engineering, road and building projects, and project management with precision and care."
            image="/construction.jpg"
            alt="construction"
          />
          <ServiceCard
            title="Renewable Energy "
            description="We provide clean and reliable solar energy systems, including panels, inverters, and battery installations for homes, businesses, and estates—helping reduce costs while ensuring uninterrupted power."
            image="/solarinstaller.jpg"
            alt="solar"
            order="reverse"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
