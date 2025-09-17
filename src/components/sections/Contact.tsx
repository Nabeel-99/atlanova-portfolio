import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-full px-4 mt-10 lg:mt-20">
      <div className="bg-black p-6 lg:p-10 lg:px-20 rounded-xl text-white ">
        <div className="flex flex-col 2xl:container 2xl:mx-auto lg:flex-row lg:justify-between gap-10 lg:gap-20 w-full">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <div className="flex items-center gap-4 justify-start">
              <div className="flex items-center gap-4  px-4 rounded-full bg-[#302e2e]">
                <p>Contact</p>
              </div>
            </div>
            <h3 className="text-2xl lg:text-4xl font-bold">Get in touch</h3>
            <p className="text-white/80">
              For any inquiries about construction, real estate, land
              development, or trading, our team is ready to assist you. Whether
              you need a quote, professional advice, or details about our
              services, we’re here to guide you every step of the way
            </p>
            <div className="flex flex-col gap-3 border-b border-white/20 pb-5">
              <div className="flex  flex-col gap-1 lg:flex-row lg:justify-between">
                <p className="text-white/80">Address</p>
                <p>Abuja, Nigeria</p>
              </div>
              <div className="flex  flex-col gap-1 lg:flex-row lg:justify-between">
                <p className="text-white/80">Email</p>
                <p>altanova@gmail.com</p>
              </div>
              <div className="flex  flex-col gap-1 lg:flex-row lg:justify-between">
                <p className="text-white/80">Phone</p>
                <p>+234 812 345 6789</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p>Follow us</p>
              <div className="flex items-center gap-3">
                <FaInstagram className="text-xl" />
                <FaXTwitter className="text-xl" />
              </div>
            </div>
          </div>
          <form className="flex flex-col gap-4 lg:w-1/2 bg-white text-black rounded-xl p-4 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border rounded-md px-4 py-1 bg-black/2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="border rounded-md px-4 py-1 bg-black/2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="border rounded-md px-4 py-1 bg-black/2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="border rounded-md px-4 py-1 min-h-44 bg-black/2"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl p-2"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
