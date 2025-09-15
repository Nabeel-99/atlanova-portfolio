import React from "react";

const Work = () => {
  return (
    <section className="w-full h-full px-6 p-6 lg:p-10 lg:px-20 ">
      <div className="flex flex-col gap-10 items-center">
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
        <div className="flex flex-col gap-20"></div>
      </div>
    </section>
  );
};

export default Work;
