import ButtonLink from "../ButtonLink";

const Hero = () => {
  return (
    <section id="hero" className="h-full w-full  relative bg-black">
      <div className="hero-content 2xl:mx-auto 2xl:container opacity-0  max-sm:pb-10 flex justify-between items-center  text-white px-4 md:pl-20 md:pr-6   md:pt-10 md:py-10">
        <div className="flex z-10 flex-col gap-4 mt-40 lg:mt-0  w-full ">
          <div className="flex items-center gap-4 justify-start">
            <div className="rounded-text flex items-center gap-4  px-4 rounded-full bg-[#302e2e]">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <p>Available for work</p>
            </div>
          </div>
          <h1 className="title text-4xl lg:text-6xl leading-tight font-bold">
            Real Estate <br className="" /> Furniture Imports
            <br className="" /> Reliable Construction
          </h1>
          <p className="description text-lg max-w-xl  lg:pr-20 xl:pr-0 text-left">
            We specialize in furniture imports, real estate development, and
            reliable construction — delivering quality, value, and trust across
            every project. Your vision, built with excellence.
          </p>
          <ButtonLink
            bgColor="bg-[#302e2e]"
            text="Work with us"
            arrowBg="bg-white"
            arrowColor="black"
            fillColor="white"
            fillTextColor="black"
            textColor="white"
            link="#contact"
          />
        </div>

        <div className="flex flex-col px-2 pt-8 lg:px-0 lg:pt-0  w-full absolute left-0 right-0 lg:relative z-0  md:justify-end md:items-end h-full gap-4">
          <div className=" inset-0 absolute bg-black/60 lg:bg-black/35  h-full w-full"></div>
          <img
            src={"/hero.jpg"}
            alt="logo"
            className="object-cover   rounded-xl border border-[#141313]  md:rounded-xl   w-full h-full  lg:h-[700px]  md:max-h-[700px] lg:w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
