import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faqs = () => {
  const questions = [
    {
      question: "What services do you offer?",
      answer:
        "We provide construction, civil engineering, real estate development, project management, and import/export of goods including furniture, electronics, and building materials.",
    },
    {
      question: "Do you handle both small and large projects?",
      answer:
        "Yes. From private home improvements to large-scale infrastructure projects, our team has the experience to deliver with quality and efficiency.",
    },
    {
      question: "Can you help with real estate and land development?",
      answer:
        "Absolutely. We assist with land sourcing, site development, and real estate projects — ensuring value and transparency.",
    },
    {
      question: "How do your import/export services work?",
      answer:
        "We source high-quality products from trusted partners worldwide, including furniture and equipment, and handle logistics to deliver on time.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "Simply reach out via our contact form or email. Once we understand your needs, we’ll provide a tailored proposal.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we partner with clients locally and globally to deliver construction and trading solutions.",
    },
  ];
  return (
    <section className="w-full h-full px-6 lg:px-20 mt-10 lg:mt-30">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-40 2xl:container 2xl:mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <div className="bg-black text-white px-4 py-1 rounded-full">
            <p>FAQs</p>
          </div>
          <h2 className="text-4xl text-center lg:text-left lg:text-5xl font-bold">
            Answering your questions
          </h2>
          <p className="text-center">Got any questions? Reach out to us.</p>
          <div className="flex items-start justify-start">
            <button className="backdrop-blur-lg cursor-pointer back px-4 rounded-4xl p-2 bg-[#f4f3f3] flex items-center gap-3">
              <span>Get in touch</span>
              <span className="bg-black rounded-full p-2">
                <FaArrowRight className="-rotate-45 text-white text-sm" />
              </span>
            </button>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
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
