import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  order?: string;
};
const ServiceCard = ({
  title,
  description,
  image,
  alt,
  order,
}: ServiceCardProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-20 items-center w-full">
        <div
          className={`flex flex-col gap-4 lg:w-1/2  ${
            order === "reverse" ? "lg:order-2" : ""
          }`}
        >
          <h3 className="text-3xl lg:text-5xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={alt}
            className="object-cover rounded-xl lg:h-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
