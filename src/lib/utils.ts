import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const workData = [
  {
    image: "/modernfurniture.jpg",
    alt: "Furniture Imports & Trade",
    title: "Furniture Imports & Trade",
    description:
      "We supported a client in sourcing premium furniture and equipment from international markets. From procurement to shipping and delivery, we ensured competitive pricing, quality assurance, and timely logistics.",
    category: "Trade",
    year: "2023",
    quote:
      "The process was seamless — from sourcing to delivery. The cost savings and quality were unmatched.",
    author: "Corporate Client",
    className: "bg-[#ECF2E9]",
  },
  {
    image: "/workestate.jpg",
    alt: "Real Estate Development",
    title: "Real Estate Development",
    description:
      "We transformed bare land into a thriving residential estate with modern infrastructure. Roads, drainage, and utilities were integrated to create a community-ready environment. Beyond construction, we handled planning approvals, land preparation, and marketing support for property sales.",
    category: "Real Estate",
    year: "2024",
    quote:
      "Investing here was seamless. The estate offers comfort, accessibility, and long-term value. Everything was delivered as promised.",
    author: "Property Investor",
    className: "bg-[#E9ECF2]",
  },
  {
    image: "/construction.jpg",
    alt: "Construction & Engineering",
    title: "Construction & Engineering",
    description:
      "From highways to modern residential buildings, we deliver engineering projects with precision. Our team manages civil works, project planning, and execution while ensuring safety and durability across all builds.",
    category: "Construction",
    year: "2023",
    quote:
      "The project was delivered ahead of schedule and exceeded safety and quality standards.",
    author: "Government Client",
    className: "bg-[#F2E9EC]",
  },
];

export const testimonials = [
  {
    comment:
      "We sourced premium furniture through their import services, and the entire process was smooth and transparent. Great quality products at competitive prices.",
    author: "Ahmed Musa",
  },
  {
    comment:
      "Their construction team exceeded our expectations. The project was delivered on time with outstanding quality and attention to detail.",
    author: "Laura Schneider",
  },
  {
    comment:
      "Investing in their estate project was one of my best decisions. The process was seamless, and the long-term value is undeniable.",
    author: "Carlos Ramirez",
  },
  {
    comment:
      "Reliable sourcing partner — they helped us import office equipment without stress. Logistics and delivery were handled professionally.",
    author: "Grace Adebayo",
  },
  {
    comment:
      "They combine professionalism with a personal touch. Every stage of our property development was handled with care and transparency.",
    author: "Hiroshi Tanaka",
  },
];

export const questions = [
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
