import ContactForm from "../ContactForm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 90%",
      },
    });
    tl.from(".contact-header", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.inOut",
    })
      .from(
        ".contact-text",
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.8"
      )
      .from(
        ".contact-form",
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.8"
      )
      .from(
        ".contact-desc",
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.8"
      )
      .from(
        ".contact-info",
        {
          stagger: 0.05,
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.8"
      )
      .from(
        ".contact-follow",
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
    <section id="contact" className="w-full h-full px-4 pt-10 mt-10 lg:mt-20">
      <div className="bg-black p-6 lg:p-10 lg:px-20 rounded-xl text-white ">
        <div className="flex flex-col 2xl:container 2xl:mx-auto lg:flex-row lg:justify-between gap-10 lg:gap-20 w-full">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <div className="flex items-center gap-4 contact-header justify-start">
              <div className="flex items-center gap-4  px-4 rounded-full bg-[#302e2e]">
                <p>Contact</p>
              </div>
            </div>
            <h3 className="text-2xl lg:text-4xl contact-text font-bold">
              Get in touch
            </h3>
            <p className="text-white/80 contact-desc">
              For any inquiries about construction, real estate, land
              development, or trading, our team is ready to assist you. Whether
              you need a quote, professional advice, or details about our
              services, we’re here to guide you every step of the way
            </p>
            <div className="flex flex-col gap-3 border-b border-white/20 pb-5 contact-info">
              <div className="flex contact-info  flex-col gap-1 lg:flex-row lg:justify-between">
                <p className="text-white/80">Address</p>
                <p>Abuja, Nigeria</p>
              </div>
              <div className="flex contact-info  flex-col gap-1 lg:flex-row lg:justify-between">
                <p className="text-white/80">Email</p>
                <a href="mailto:altanovagloballtd@gmail.com">
                  altanovagloballtd@gmail.com
                </a>
              </div>
              {/* <div className="flex contact-info  flex-col gap-1 lg:flex-row lg:justify-between">
                <p className="text-white/80">Phone</p>
                <p>+234 812 345 6789</p>
              </div> */}
            </div>
            {/* <div className="flex contact-follow flex-col gap-2">
              <p>Follow us</p>
              <div className="flex items-center gap-3">
                <FaInstagram className="text-xl" />
                <FaXTwitter className="text-xl" />
              </div>
            </div> */}
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
