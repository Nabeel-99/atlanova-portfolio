import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (isOpen) {
      gsap.from(".nav-menu", {
        x: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.from(".nav-menu li", {
        stagger: 0.08,
        opacity: 0,
        y: 10,
        delay: 0.2,
        ease: "power4.inOut",
      });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <nav className="nav opacity-0 2xl:container 2xl:mx-auto flex absolute z-20 top-0 left-0 right-0 items-center justify-between px-6 py-6 md:px-20 md:py-10">
      <div className="z-50">
        <img
          src={"/logo.jpg"}
          alt="logo"
          className="w-10 h-10  md:w-12 md:h-12 border border-[#d4a017] rounded-full"
        />
      </div>
      <ul className="hidden md:flex z-10 text-lg items-center text-white gap-10">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#our-work">Our work</a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="md:hidden z-50">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}

          <span className="sr-only">Menu</span>
        </button>
      </div>
      {isOpen && (
        <div className="nav-menu  md:hidden absolute inset-0 bg-black/50 h-screen backdrop-blur-md">
          <ul className="flex flex-col gap-4 text-white px-6 mt-24 text-lg">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" onClick={() => setIsOpen(false)}>
                Our work
              </a>
            </li>
            <li>
              <a href="#faqs" onClick={() => setIsOpen(false)}>
                FAQs
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
