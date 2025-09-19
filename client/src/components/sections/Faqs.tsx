import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { questions } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ButtonLink from "../ButtonLink";

const Faqs = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#faqs",
        start: "top 80%",
      },
    });
    tl.from(".faq-div", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.inOut",
    }).from(
      ".accordion",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.8"
    );
  }, []);
  return (
    <section
      id="faqs"
      className="w-full h-full px-6 pt-10  lg:px-20 mt-10 lg:mt-30"
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 2xl:container 2xl:mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-4 faq-div">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>FAQs</p>
          </div>
          <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-bold">
            Answering your questions
          </h2>
          <p className="text-center">Got any questions? Reach out to us.</p>
          <ButtonLink
            bgColor="bg-[#f4f3f3]"
            text="Get in touch"
            textColor="black"
            arrowBg="bg-black"
            arrowColor="white"
            fillColor="black"
            fillTextColor="white"
            link="#contact"
          />
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full accordion"
          defaultValue="item-1"
        >
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              defaultValue={`item-${index + 1}`}
            >
              <AccordionTrigger>{question.question}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{question.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
