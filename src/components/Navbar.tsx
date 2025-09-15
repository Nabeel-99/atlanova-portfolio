import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="2xl:container 2xl:mx-auto flex absolute z-20 top-0 left-0 right-0 items-center justify-between px-6 py-6 md:px-20 md:py-10">
      <div>
        <img
          src={"/logo.jpg"}
          alt="logo"
          className="w-10 h-10 md:w-12 md:h-12 border border-white/50 rounded-full"
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
      <div className="md:hidden">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}

          <span className="sr-only">Menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
