import WorkCard from "../cards/WorkCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { workData } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

const Work = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const title = new SplitText(".work-text", { type: "chars, words" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-work",
        start: "top 80%",
      },
    });
    tl.from(".work-text-div", {
      y: 50,
      duration: 1,
      ease: "power2.inOut",
      opacity: 0,
    });
    tl.from(
      title.chars,
      {
        stagger: 0.02,
        y: 10,
        duration: 0.5,
        ease: "power2.inOut",
        opacity: 0,
      },
      "<"
    );
    const cards = gsap.utils.toArray(".work-card") as HTMLElement[];

    cards.forEach((card, index) => {
      if (index === cards.length - 1) return;
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          scrub: true,
          start: "top 80%",
        },
        duration: 1,
        ease: "power2.inOut",
        scale: isMobile ? 1 : 0.9,
      });
    });
  }, []);
  return (
    <section
      id="our-work"
      className="w-full h-full px-6 p-6 lg:p-10 lg:px-20 mt-10 lg:mt-20"
    >
      <div className="flex flex-col gap-10 items-center 2xl:container 2xl:mx-auto">
        <div className="flex flex-col gap-4 work-text-div justify-center items-center ">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>Our work</p>
          </div>
          <h2 className="work-text text-4xl text-center lg:text-5xl font-bold">
            Projects That Speak for Us.
          </h2>
          <p className="text-center lg:max-w-xl">
            From construction sites to furnished homes and real estate
            developments, our projects show how we turn ideas into impact
          </p>
        </div>
        <div className="flex flex-col mt-10 h-full  w-full lg:gap-20 gap-6">
          {workData.map((work, index) => (
            <div key={index} className="lg:sticky top-10 work-card">
              <WorkCard
                image={work.image}
                alt={work.alt}
                title={work.title}
                description={work.description}
                category={work.category}
                year={work.year}
                quote={work.quote}
                author={work.author}
                className={work.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
